const navigations = [{label: 'Home', href: '#', icon: 'fa fa-home'},
                    {label: 'Explore', href: '#', icon: 'fa fa-hashtag'},
                    {label: 'Notification', href: '#', icon: 'fa fa-bell'},
                    {label: 'Messages', href: '#', icon: 'fa fa-envelope'},
                    {label: 'Bookmarks', href: '../bookmarks/index.html', icon: 'fas fa-bookmark'},
                    {label: 'Lists', href: '#', icon: 'fa fa-bell'},
                    {label: 'Profile', href: '../profile.html', icon: 'fa fa-user'},
                    {label: 'More', href: '#', icon: 'fas fa-ellipsis-h'}];



const NavigationSidebar = (active_navigation='Explore') => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
            
       ${
        navigations.map(navigation => {
            return(`<a href=${navigation.href} class="list-group-item ${active_navigation===navigation.label ? 'active' : ''}">
                    <i class="wd-icon-width ${navigation.icon}"></i>
                    <span class="m-2 d-none d-xl-inline">${navigation.label}</a>                   
                    `);}).join('')
        }
        
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}

$(NavigationSidebar);

export default NavigationSidebar;