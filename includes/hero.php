<?php

$bgImage = get_field('bg_image');
$bgPosition = get_field('bg_position');
$content = get_field('content');

?>

<section class="hero" style="background: url(<?php echo $bgImage; ?>)no-repeat <?php echo $bgPosition; ?>;background-size: cover;">

	<div class="hero-content container">
		<div class="head">
			<?php echo $content; ?>
		</div>
	</div>

</section>