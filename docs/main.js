window.onload = setup_input_event_listeners;

function input_text_reflect(e) 
{
    e.target.reflect.innerText = e.target.value;

    if (!e.target.value)
        e.target.reflect.innerText = e.target.predefinedValue;
}

function input_src_reflect(e) 
{
    e.target.reflect.src = e.target.value;

    if (!e.target.value)
        e.target.reflect.src = e.target.predefinedValue;
}

function change_social_media_icon(e)
{
    document.getElementById('twitter-icon').hidden = (e.target.value != 'twitter');    
    document.getElementById('instagram-icon').hidden = (e.target.value != 'instagram');    
}

function setup_input_event_listeners() 
{
    let accountName = document.getElementById('accountName');
    let accountUsername = document.getElementById('accountUsername');
    let accountPicture = document.getElementById('accountPicture');
    let iconType = document.getElementById('iconType');
    let content = document.getElementById('content');

    accountName.addEventListener('input', input_text_reflect);
    accountName.reflect = document.getElementById('imageAccountName');
    accountName.predefinedValue = 'Account Name';

    accountUsername.addEventListener('input', input_text_reflect);
    accountUsername.reflect = document.getElementById('imageAccountUsername');
    accountUsername.predefinedValue = '@username';

    accountPicture.addEventListener('input', input_src_reflect);
    accountPicture.reflect = document.getElementById('imageAccountPicture');
    accountPicture.predefinedValue = 'https://cdn-icons-png.flaticon.com/512/5111/5111693.png';

    iconType.addEventListener('change', change_social_media_icon);

    content.addEventListener('input', input_text_reflect);
    content.reflect = document.getElementById('imageTweetContent');
    content.predefinedValue = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ex odio, viverra aliquet purus sit amet, pellentesque ultricies metus.';
}

function save_as(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        document.body.appendChild(link);
        
        link.click();
        
        document.body.removeChild(link);
    } 

    else window.open(uri);
}

function download_image()
{
    html2canvas(document.getElementById('canvas'), 
        { 
            scale: 4, 
            backgroundColor: "rgba(0,0,0,0)", 
            useCORS: true 
        }).then(canvas => {
        save_as(canvas.toDataURL(), 'tweak-image.png');
    });
}
