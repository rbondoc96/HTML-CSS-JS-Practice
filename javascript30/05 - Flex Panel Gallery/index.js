class PhotoPanels {
    constructor() {
        this.container = document.querySelector(".panels");
        this.panels = document.querySelectorAll(".panel");
        this.activePanel = null;

        this.panels.forEach(panel => {
            panel.addEventListener("click", this.toggleOpen.bind(this));
            panel.addEventListener("transitionend", this.toggleOpenActive.bind(this));
        });
    }

    setActivePanel(panel) {
        return new Promise((resolve) => {
            this.activePanel = panel;
            resolve(true);
        });
    }

    async toggleOpen(event) {
        if(this.activePanel != null) {
            this.activePanel.classList.remove("open");
        }

        // Set new active panel
        let panel = event.currentTarget
        await this.setActivePanel(panel);
        panel.classList.toggle("open");
    }
    
    toggleOpenActive(event) {  
        let panel = event.currentTarget  
        /* 
            Check if propertyName.includes("flex") since in Safari,
            the propertyName is "flex" while it's "flex-grow" in other browsers
        */
        if(event.propertyName.includes("flex")) {
            panel.classList.toggle("open-active");
        }
    }
}

const photoPanels = new PhotoPanels();