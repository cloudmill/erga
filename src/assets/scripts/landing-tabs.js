$(() => {
    const components = $('.landing__tabs-component');

    if (components.length !== 0) {
        components.each(function () {
            const component = $(this);

            const panelItems = component.find('.landing__tabs-panel-item');
            const contentItems = component.find('.landing__tabs-content-item');

            panelItems.on('click', function () {
                const clickedPanelItem = $(this);
                const clickedPanelItemIndex = clickedPanelItem.index();
                
                panelItems.removeClass('landing__tabs-panel-item--active');
                clickedPanelItem.addClass('landing__tabs-panel-item--active');

                contentItems.removeClass('landing__tabs-content-item--active');
                contentItems.eq(clickedPanelItemIndex).addClass('landing__tabs-content-item--active');
            });
        });
    }
});