function NavigationSidebar (highlight = 'Home') {
    const sidebarSections = [
        {label: 'Home', href: '../HomeScreen/index.html',
            icon: '<i class="fa-solid fa-house"></i>'},
        {label: 'Explore', href: '../explore-challenge/index.html',
            icon: '<i class="fa-solid fa-hashtag fw-bold"></i>',},
        {label: 'Notifications', href: '#',
            icon:'<i class="fa-solid fa-bell"></i>'},
        {label: 'Messages', href: '#',
            icon:'<i class="fa-solid fa-envelope"></i>'},
        {label: 'Bookmarks', href: '#',
            icon:'<i class="fa-solid fa-bookmark"></i>'},
        {label: 'Lists', href: '#',
            icon:'<i class="fa-solid fa-list"></i>'},
        {label: 'Profiles', href: '#',
            icon:'<i class="fa-solid fa-user"></i>'},
        {label: 'More', href: '#',
            icon:'<i class="fa-solid fa-ellipsis"></i>'},
    ]

    return(`
   <div class="list-group">
     <a class="list-group-item" href="#">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
                ${
        sidebarSections.map(sidebar =>
            `<a class="list-group-item ${sidebar.label === highlight ? 'active' : ''}"
                    href="${sidebar.href}">
                        <div class="row">
                            <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                                ${sidebar.icon} 
                            </div>
                            <div class="col-xxl-10 col-xl-10 d-none d-xl-block">
                                ${sidebar.label}
                            </div>
                        </div>
            </a>`
        ).join('')
    }
            </div>
          
            
 `);
}
export default NavigationSidebar;