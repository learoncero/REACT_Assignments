export default class TabSwitcher {
    formNode: HTMLFormElement;
    formDiv: HTMLDivElement;
    listDiv: HTMLDivElement;

    constructor(formNode: HTMLFormElement, formDiv: HTMLDivElement, listDiv: HTMLDivElement) {
        this.formNode = formNode;
        this.formDiv = formDiv;
        this.listDiv = listDiv;
    }

    switchToAddMessageTab() {
        if (this.formDiv && this.listDiv) {
            this.formDiv.style.display = 'block';
            this.listDiv.style.display = 'none';
            this.formNode.reset();
        }
    }

    switchToMessageListTab() {
        if (this.formDiv && this.listDiv) {
            this.formDiv.style.display = 'none';
            this.listDiv.style.display = 'block';
            this.formNode.reset();
        }
    }
}