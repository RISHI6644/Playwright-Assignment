class PageProvider {
    static page;

    static setPage(page) {
        this.page = page;
    }

    static getPage() {
        return this.page;
    }
}

export default PageProvider;
