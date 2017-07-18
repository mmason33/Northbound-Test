<?php

$bgImage = (get_sub_field('bg_image') != '' ? ' style="background:url('.get_sub_field('bg_image').') no-repeat '.get_sub_field('bg_position').';background-size:cover; background-attachment:fixed;"' : '');
$bgPosition = get_sub_field('bg_position');
$sectionContent = get_sub_field('content');
$textCenter = (get_sub_field('text_center') == 1 ? ' text-center' : '');
$overlayColor = get_sub_field('overlay_color');
$overlay = (get_sub_field('overlay') == 1 ? '<div class="section-acf-overlay" style="background:' . $overlayColor . ';"></div>' : '');

?>



<?php if ($bgImage): ?>
		<section class="section-acf"<?php echo $bgImage; ?>> 
<?php else: ?>
		<section class="section-acf" style="background:white;">
<?php endif; ?>

	<div class="container">
		<div class="row">
			<div class="col-md-12<?php echo $textCenter; ?>">
				<div class="section-acf-content">
					<?php echo $sectionContent; ?>
				</div>
			</div>
		</div>
	</div>
</section> 