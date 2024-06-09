document.addEventListener('DOMContentLoaded', function() {
    const serviceDiv = document.querySelectorAll('.service-div');
    const serviceDetail = document.getElementById('service-detail');

    serviceDiv.forEach(service => {
        service.addEventListener('mouseover', function() {
            const detailText = service.getAttribute('data-detail');
            serviceDetail.innerText = detailText;
            const serviceRect = service.getBoundingClientRect();
            const containerRect = service.parentElement.getBoundingClientRect();

            serviceDetail.style.top = `${serviceRect.bottom - containerRect.top + 200}px`;
            serviceDetail.style.height = '100px';
            serviceDetail.style.opacity = '1';
        });

        service.addEventListener('mouseout', function() {
            serviceDetail.style.height = '0';
            serviceDetail.style.opacity = '0';
        });
    });
});