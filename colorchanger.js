// Loop through all the div elements that have 'nav-elt-label' as the class.  One of those is the AZ name

$("div.nav-elt-label").each(function() {

	// Look for a text match on the AZ name
	if ($(this).text() == "N. Virginia") {

		// Once we find the name, change the color by directly injecting css as an attribute.  Tricky!
		$(this).attr("style", "color: #97c8f0 !important\; font-weight: bold !important\; text-shadow: none !important")

		// Now that we found out which AZ we're in, change the background color to match the flag of this place
		$("#nav-regionMenu").attr("style", "background-color: #00297b !important")

	} else if ($(this).text() == "Ohio") {
		$(this).attr("style", "color: #d43547 !important\; font-weight: bold !important\; text-shadow: none !important")
		$("#nav-regionMenu").attr("style", "background-color: #00155a !important")
	} else if ($(this).text() == "N. California") {
		$(this).attr("style", "color: #be8b5e !important\; font-weight: bold !important\; text-shadow: none !important")
		$("#nav-regionMenu").attr("style", "background-color: #b80a31 !important")
	} else if ($(this).text() == "Oregon") {
		$(this).attr("style", "color: #ffeb07 !important\; font-weight: bold !important\; text-shadow: none !important")
		$("#nav-regionMenu").attr("style", "background-color: #002587 !important")
	} else if ($(this).text() == "Oregon") {
		$(this).attr("style", "color: #ffeb07 !important\; font-weight: bold !important\; text-shadow: none !important")
		$("#nav-regionMenu").attr("style", "background-color: #002587 !important")
	} else if ($(this).text() == "Hong Kong") {
		$(this).attr("style", "color: #d71811 !important\; font-weight: bold !important\; text-shadow: none !important")
		$("#nav-regionMenu").attr("style", "background-color: #ffffff !important")
	} else if ($(this).text() == "Mumbai") {
		$(this).attr("style", "color: #138808 !important\; font-weight: bold !important\; text-shadow: none !important")
		$("#nav-regionMenu").attr("style", "background-color: #ff9933 !important")
	} else if ($(this).text() == "Seoul") {
		$(this).attr("style", "color: #359a3e !important\; font-weight: bold !important\; text-shadow: none !important")
		$("#nav-regionMenu").attr("style", "background-color: #be1135 !important")
	} else if ($(this).text() == "Singapore") {
		$(this).attr("style", "color: #ffffff !important\; font-weight: bold !important\; text-shadow: none !important")
		$("#nav-regionMenu").attr("style", "background-color: #ed2939 !important")
	} else if ($(this).text() == "Sydney") {
		$(this).attr("style", "color: #262873 !important\; font-weight: bold !important\; text-shadow: none !important")
		$("#nav-regionMenu").attr("style", "background-color: #f0ba19 !important")
	} else if ($(this).text() == "Tokyo") {
		$(this).attr("style", "color: #ffffff !important\; font-weight: bold !important\; text-shadow: none !important")
		$("#nav-regionMenu").attr("style", "background-color: #4b0082 !important")
	} else if ($(this).text() == "Central") {
		$(this).attr("style", "color: #d52b1e !important\; font-weight: bold !important\; text-shadow: none !important")
		$("#nav-regionMenu").attr("style", "background-color: #ffffff !important")
	} else if ($(this).text() == "Frankfurt") {
		$(this).attr("style", "color: #fccf00  !important\; font-weight: bold !important\; text-shadow: none !important")
		$("#nav-regionMenu").attr("style", "background-color: #ff0000 !important")
	} else if ($(this).text() == "Ireland") {
		$(this).attr("style", "color: #ff883e  !important\; font-weight: bold !important\; text-shadow: none !important")
		$("#nav-regionMenu").attr("style", "background-color: #169b62 !important")
	} else if ($(this).text() == "London") {
		$(this).attr("style", "color: #cf142b  !important\; font-weight: bold !important\; text-shadow: none !important")
		$("#nav-regionMenu").attr("style", "background-color: #ffffff !important")
	} else if ($(this).text() == "Paris") {
		$(this).attr("style", "color: #ed2939  !important\; font-weight: bold !important\; text-shadow: none !important")
		$("#nav-regionMenu").attr("style", "background-color: #002395 !important")
	} else if ($(this).text() == "Stockholm") {
		$(this).attr("style", "color: #ffc90e  !important\; font-weight: bold !important\; text-shadow: none !important")
		$("#nav-regionMenu").attr("style", "background-color: #2452bd !important")
	} else if ($(this).text() == "S&atilde;o Paulo") {
		$(this).attr("style", "color: #294292  !important\; font-weight: bold !important\; text-shadow: none !important")
		$("#nav-regionMenu").attr("style", "background-color: #212125 !important")
	}


});