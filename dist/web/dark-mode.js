class DarkModeSettings extends HTMLElement {
    connectedCallback() {
      
      this.getDarkModeStateFromLocalStorage();

      if(this.enabled) {
        this.enableDarkMode();
      }

      this.innerHTML = this.getHtmlSettingsStructure();
      this.listeningCheckToEnable();
    }

    listeningCheckToEnable() {
        const checkInput = document.querySelector('dark-mode-settings .enable-dark-mode');
        const scope = this;

        checkInput.addEventListener('change', function() {
            if (this.checked) {
                scope.enableDarkMode();
            } else {
                scope.disableDarkMode();
            }
          });
    }

    enableDarkMode() {
        document.body.classList.add('dark-mode');
        this.enabled = true;
        this.saveDarkModeStateOnLocalStorage();
    }
    
    disableDarkMode() {
        document.body.classList.remove('dark-mode');
        this.enabled = false;
        this.saveDarkModeStateOnLocalStorage();
    }

    saveDarkModeStateOnLocalStorage() {
        window.localStorage.setItem('dark-mode', this.enabled);
    }

    getDarkModeStateFromLocalStorage() {
      this.enabled = (window.localStorage.getItem('dark-mode') === 'true');
    }

    getHtmlSettingsStructure() {
        return `
            <style>
                .form-check label {
                    cursor: pointer;
                }
            </style>

            <h1>Dark Mode</h1>
            <div class="col-sm-12">
                <div class="form-check">
                    <input type="checkbox" id="enable-dark-mode" class="form-check-input enable-dark-mode" ${this.enabled ? 'checked': ''}>
                    <label class="form-check-label" for="enable-dark-mode">Enable Dark Mode</label>
                </div>
            </div>
        `;
    }

  }
  
  customElements.define('dark-mode-settings', DarkModeSettings);