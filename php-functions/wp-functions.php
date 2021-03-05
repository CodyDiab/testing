<?php
/* Custom script with no dependencies, enqueued in the header */
add_action('wp_enqueue_scripts', 'tutsplus_enqueue_custom_js');
function tutsplus_enqueue_custom_js() {
    wp_enqueue_script('custom', get_stylesheet_directory_uri().'/scripts/custom.js');
}

add_action('wp_head', 'tutsplus_add_script_wp_head');
function tutsplus_add_script_wp_head() {
    ?>
        <script>
            console.log("I'm an inline script tag added to the header.");
        </script>
    <?php
}

/* Inline script printed out in the footer */
add_action('wp_footer', 'tutsplus_add_script_wp_footer');
function tutsplus_add_script_wp_footer() {
    ?>
        <script>
            console.log("I'm an inline script tag added to the footer.");
        </script>
    <?php
}


<?php // combine all CSS files??
	header('Content-type: text/css');
	$path_to_css = '/css'; // edit path to css directory
	function get_files($dir = '.', $sort = 0) {
		$files = scandir($dir, $sort);
		$files = array_diff($files, array('.', '..'));
		return $files;
	}
	$files = get_files($path_to_css, 1);
	foreach($files as $file) {
		include_once($path_to_css . '/' . $file);
	} 
?>

// <link rel='stylesheet' href='http://example.com/css/css.php' type='text/css' media='all'>
