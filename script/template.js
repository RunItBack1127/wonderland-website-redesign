function switchActiveTab(tab) {

    // Retrieve the active tab
    const activeTab = document.querySelector('a[tab-status="active"]');

    const homeTab = document.getElementById('home-tab');
    const menuTab = document.getElementById('menu-tab');
    const rTab = document.getElementById('reservation-tab');
    const orderTab = document.getElementById('order-tab');

    let currentTab;
    switch( tab ) {
        case 'Home':
            currentTab = homeTab;
            break;
        case 'Menu':
            currentTab = menuTab;
            break;
        case 'Reservation':
            currentTab = rTab;
            break;
        case 'Order':
            currentTab = orderTab;
            break;
        default :
            break;
    }

    // Remove active status from active tab,
    // and replace active status to current tab
    activeTab.setAttribute('tab-status', 'idle');
    currentTab.setAttribute('tab-status', 'active');
}