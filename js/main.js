$(document).ready(function() {
    console.log(PSVTF);
    pasteValuesPSVTF(PSVTF.targets);
});

// stolen from Search and Populate Data from Other Project
function pasteValuesPSVTF(values) {
    for (let [key, value] of Object.entries(values)) {
        let $target_field = $(`input[name='${key}']`);
        if ($target_field.attr('class') == 'hiddenradio') {
            // collect all radio fields in all layouts
            let $inputs = $target_field.siblings('[class*="choice"]');
            // select radio assuming target coded value matches source coded value
            $inputs.find(`[value='${value}']`).click();
        } else {
            // FIXME: does not honor desired date formatting
            $target_field.val(`${value}`);
            $target_field.blur();
        }
    }
}
