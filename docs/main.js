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

function setup_input_event_listeners() 
{
    document.getElementById('accountName').addEventListener('input', input_text_reflect);
    document.getElementById('accountName').reflect = document.getElementById('imageAccountName');
    document.getElementById('accountName').predefinedValue = 'Account Name';

    document.getElementById('accountUsername').addEventListener('input', input_text_reflect);
    document.getElementById('accountUsername').reflect = document.getElementById('imageAccountUsername');
    document.getElementById('accountUsername').predefinedValue = '@username';

    document.getElementById('accountPicture').addEventListener('input', input_src_reflect);
    document.getElementById('accountPicture').reflect = document.getElementById('imageAccountPicture');
    document.getElementById('accountPicture').predefinedValue = 'https://cdn-icons-png.flaticon.com/512/5111/5111693.png';

    document.getElementById('tweetContent').addEventListener('input', input_text_reflect);
    document.getElementById('tweetContent').reflect = document.getElementById('imageTweetContent');
    document.getElementById('tweetContent').predefinedValue = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ex odio, viverra aliquet purus sit amet, pellentesque ultricies metus.';
}

function copy_values_to_image()
{
    document.getElementById('imageAccountName').innerText = document.getElementById('accountName').value;
    document.getElementById('imageAccountUsername').innerText = document.getElementById('accountUsername').value;
    document.getElementById('imageAccountPicture').src = document.getElementById('accountPicture').value;
    document.getElementById('imageTweetContent').innerText = document.getElementById('tweetContent').value;
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
    copy_values_to_image();

    html2canvas(document.getElementById('canvas'), 
        { 
            scale: 4, 
            backgroundColor: "rgba(0,0,0,0)", 
            useCORS: true 
        }).then(canvas => {
        save_as(canvas.toDataURL(), 'tweak-image.png');
    });
}
