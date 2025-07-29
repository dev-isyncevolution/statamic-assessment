window.blogOverview = function () {
    return {
        posts: [],
        filteredPosts: [],
        categories: [],
        selected: null,
        nextPageUrl: '/api/collections/blog/entries',

        async init() {
            await this.loadMore();
        },

        async loadMore() {
            if (!this.nextPageUrl) return;
            const res = await fetch(this.nextPageUrl);
            const data = await res.json();
            const newPosts = data.data.map(entry => ({
                id: entry.id,
                title: entry.title ?? 'Untitled',
                content: entry.content,
                category: entry.category || [],
                image: entry.image?.[0] ? `/assets/images/${entry.image[0]}` : null,
                url: entry.url,
                published_at: entry.published_at
                    ? new Date(entry.published_at * 1000).toLocaleDateString()
                    : 'Unpublished',
            }));

            this.posts.push(...newPosts);
            this.filteredPosts = this.selected
                ? this.posts.filter(p => p.category.includes(this.selected))
                : this.posts;

            this.categories = [...new Set(this.posts.flatMap(p => p.category))];
            this.nextPageUrl = data.links.next;
        },

        filter(cat) {
            this.selected = cat;
            this.filteredPosts = this.posts.filter(p => p.category.includes(cat));
        },
    };
}
