function initAutoFill() {

	fillInputs();

	fillSelectBox();

}


function fillInputs() {

	if ($('input:not(:disabled):not([readonly]):not([type="submit"]), textarea:not(:disabled):not([readonly]), select:not(:disabled):not([readonly])').length > 0) {

		$('input:not(:disabled):not([readonly]):not([type="submit"]), textarea:not(:disabled):not([readonly]), select:not(:disabled):not([readonly])').each(function (index) {

			var type = $(this).attr('type'),
				required = $(this).prop('required')
				;

			if (type == 'text' || type == 'password' || type == 'textarea') {
				var value = fillTypeText();

				$(this).val(value);

			} else if (type == 'checkbox' || type == 'radio') {

				if (required) {
					$(this).prop('checked', true);
				} else {
					$(this).prop('checked', Math.random() < 0.5 ? true : false);
				}

			} else {
				var value = fillTypeText();

				$(this).val(value);
			}
		});
	}

}

function fillSelectBox() {

	if ($('select > option:not(:disabled):not([readonly])').length > 0) {
		$('select > option:not(:disabled):not([readonly])')[Math.floor(Math.random() * $('select > option').length)].selected = true;
	}

}

function fillTypeText() {

	var words = ['John', 'Hello', 'Word', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor LEste', 'Togo', 'Tonga', 'Trinidad Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
		randomIndex = Math.floor(Math.random() * words.length)
		;

	return words[randomIndex];

}

(function ($) {
    $.fn.extend({
        autoFiller: function (options) {
            var defaults = {
                buttonStyle : " display: inline-block;"
					+ "padding: 6px 12px;"
					+ "margin-bottom: 0;"
					+ "font-size: 14px;"
					+ "font-weight: 400;"
					+ "line-height: 1.42857143;"
					+ "text-align: center;"
					+ "white-space: nowrap;"
					+ "vertical-align: middle;"
					+ "-ms-touch-action: manipulation;"
					+ "touch-action: manipulation;"
					+ "cursor: pointer;"
					+ "-webkit-user-select: none;"
					+ "-moz-user-select: none;"
					+ "-ms-user-select: none;"
					+ "user-select: none;"
					+ "background-image: none;"
					+ "border: 1px solid transparent;"
					+ "border-radius: 4px;"
					+ "z-index:100;"
					+ "color: #333;"
					+ "background-color: #fff;"
					+ "border-color: #ccc;"
					
            };

            options = $.extend(defaults, options);

            console.log(options.buttonStyle);

			//adds fill form button to page
			$(this).prepend($("<div style='cursor:pointer; width:200px:height:80px;' id='draggable'><a style='" + options.buttonStyle + "' class='btn btn-default draggable' onclick ='initAutoFill()'>Auto fill inputs</a></div>"));

			//make fill form button draggable
			$('#draggable').draggable({
				stop: function (event, ui) {
					$(event.toElement).one('click', function (e) { e.stopImmediatePropagation(); });
				}
			});



        }
    });
})(jQuery);




