window.addEventListener('load', function(){
    var loader = document.getElementById('loader');
    loader.style.display = 'none';
    document.body.style.overflow = 'hidden';

    if(loader.style.display == 'none'){
        this.document.body.style.overflow = 'auto';
    }
});

