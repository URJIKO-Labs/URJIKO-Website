import { escapeHTML } from "../app.js";

export function initContactForm() {
  const form = document.getElementById("urjiko-contact-form");
  if (!form || form.dataset.initialized) return;
  form.dataset.initialized = "true";

  // File upload
  const fileArea = document.getElementById("file-upload-area");
  const fileInput = document.getElementById("file-input");
  const fileList = document.getElementById("file-list");
  let uploadedFiles = [];

  if (fileArea && fileInput) {
    fileArea.addEventListener("click", () => fileInput.click());

    fileArea.addEventListener("dragover", (e) => {
      e.preventDefault();
      fileArea.style.borderColor = "var(--color-blue)";
      fileArea.style.background = "rgba(7, 87, 184, 0.05)";
    });

    fileArea.addEventListener("dragleave", () => {
      fileArea.style.borderColor = "var(--color-border)";
      fileArea.style.background = "transparent";
    });

    fileArea.addEventListener("drop", (e) => {
      e.preventDefault();
      fileArea.style.borderColor = "var(--color-border)";
      fileArea.style.background = "transparent";
      handleFiles(e.dataTransfer.files);
    });

    fileInput.addEventListener("change", (e) => {
      handleFiles(e.target.files);
    });

    function handleFiles(files) {
      Array.from(files).forEach((file) => {
        if (file.size > 5 * 1024 * 1024) {
          alert(file.name + " is too large (max 5MB)");
          return;
        }
        if (uploadedFiles.length >= 5) {
          alert("Maximum 5 files allowed");
          return;
        }
        uploadedFiles.push(file);
      });
      renderFileList();
    }

    function renderFileList() {
      fileList.innerHTML = uploadedFiles
        .map(
          (file, i) => `
        <div class="file-upload__item">
          <span>${escapeHTML(file.name)}</span>
          <button type="button" data-index="${i}">&times;</button>
        </div>
      `,
        )
        .join("");

      fileList.querySelectorAll("button").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          uploadedFiles.splice(parseInt(btn.dataset.index), 1);
          renderFileList();
        });
      });
    }
  }

  // Handle fake submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.innerHTML =
      '<svg class="w-5 h-5 animate-spin mx-auto" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>';
    btn.disabled = true;

    setTimeout(() => {
      form.reset();
      uploadedFiles = [];
      if (fileList) fileList.innerHTML = "";
      
      const customSelects = form.querySelectorAll(".custom-select__trigger span");
      customSelects.forEach((span) => {
        span.textContent = "Please select...";
        span.style.color = "var(--color-muted)";
      });

      btn.innerHTML = "Message Sent Successfully!";
      btn.style.background = "#16a34a"; // Will change this to CSS class later

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = "";
        btn.disabled = false;
      }, 3000);
    }, 1500);
  });
}

