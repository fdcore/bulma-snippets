var app = new Vue({
    el: '#app',
    data: {
        snippets: [
            'menu.html',
            'message.html'
        ],
        snippets_html: [],
        show_html_modal: false,
        modal_content: null,
        menu: {
            
        }
    },
    
    created: function() {
        let self = this;
        this.snippets.map(function(s) {
            
            reqwest('./snippets/' + s, function (resp) {
                self.snippets_html.push(resp);
            });
                
        });
        
    },
    
    methods: {
        
        show_html: function(h) {
            
            this.show_html_modal = true;
            this.modal_content = h;
            
        }
    }
})