<?php
function narahosting_block_init() {
	register_block_type( __DIR__ . '/build/myheader' );
	register_block_type( __DIR__ . '/build/myfooter' );
	register_block_type( __DIR__ . '/build/narahostingCta' );
	register_block_type( __DIR__ . '/build/narahostingHeroBlock' );
	register_block_type( __DIR__ . '/build/narahostingLatestPosts' );
	register_block_type( __DIR__ . '/build/narahostingCodeBlock' );
}
add_action( 'init', 'narahosting_block_init' );

function theme_enqueue_styles() {
    wp_enqueue_style('narahosting-main-scss', get_template_directory_uri() . '/style.scss');
}
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');