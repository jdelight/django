module('admin.actions', {
    beforeEach: function() {
        window._actions_icnt = '100';
        var $ = django.jQuery;
        $('#qunit-fixture').append($('#result-table').text());
        $(document).ready(function($) {
            $('tr input.action-select').actions();
        });
    }
});

test('check', function(assert) {
    var $ = django.jQuery;
    assert.notOk($('.action-select').is(':checked'));
    $('#action-toggle').click();
    assert.ok($('.action-select').is(':checked'));
});
