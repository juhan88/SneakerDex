function addBadgeToImage(imageContainer, badgeClass, imageUrl) {
    var badge = jQuery("<img class='badge " + badgeClass + "' src='" + imageUrl +"' />");
    jQuery(imageContainer).append(badge);
}
