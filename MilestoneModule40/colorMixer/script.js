function mixColors() {
    const color1 = document.getElementById('color1').value.toLowerCase();
    const color2 = document.getElementById('color2').value.toLowerCase();
    let result;

    switch (color1) {
        case 'red':
            switch (color2) {
                case 'blue':
                case 'indigo':
                    result = 'purple';
                    break;
                case 'yellow':
                    result = 'orange';
                    break;
                case 'green':
                    result = 'brown';
                    break;
                default:
                    result = 'Invalid color combination';
            }
            break;
        case 'blue':
            switch (color2) {
                case 'red':
                case 'indigo':
                    result = 'purple';
                    break;
                case 'yellow':
                    result = 'green';
                    break;
                case 'green':
                    result = 'teal';
                    break;
                default:
                    result = 'Invalid color combination';
            }
            break;
        case 'yellow':
            switch (color2) {
                case 'red':
                case 'orange':
                    result = 'orange';
                    break;
                case 'blue':
                case 'green':
                    result = 'green';
                    break;
                default:
                    result = 'Invalid color combination';
            }
            break;
        case 'green':
            switch (color2) {
                case 'blue':
                case 'teal':
                    result = 'teal';
                    break;
                case 'yellow':
                    result = 'green';
                    break;
                default:
                    result = 'Invalid color combination';
            }
            break;
        case 'indigo':
            switch (color2) {
                case 'red':
                case 'blue':
                    result = 'purple';
                    break;
                default:
                    result = 'Invalid color combination';
            }
            break;
        case 'teal':
            switch (color2) {
                case 'blue':
                case 'green':
                    result = 'teal';
                    break;
                default:
                    result = 'Invalid color combination';
            }
            break;
        case 'orange':
            switch (color2) {
                case 'red':
                case 'yellow':
                    result = 'orange';
                    break;
                default:
                    result = 'Invalid color combination';
            }
            break;
        default:
            result = 'Invalid color combination';
    }

    const mixedColor = document.getElementById('mixedColor');
    if (result !== 'Invalid color combination') {
        mixedColor.style.backgroundColor = result;
    } else {
        mixedColor.style.backgroundColor = '';
    }

    document.getElementById('result').innerText = result;
}
