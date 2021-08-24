$(document).ready(function() {
    pasteValuesPSVTF(PSVTF.targets);
});

// stolen from Search and Populate Data from Other Project
function pasteValuesPSVTF(values) {
    for (let [key, value] of Object.entries(values)) {
        let $target_field = $(`input[name='${key}']`);
        // Don't overwrite filled fields
        if ($target_field.val() != "") { return; }
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
