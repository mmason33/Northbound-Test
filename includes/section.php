<?php

$bgImage = (get_sub_field('bg_image') != '' ? ' style="background:url('.get_sub_field('bg_image').') no-repeat '.get_sub_field('bg_position').';background-size:cover;"' : '');
$bgPosition = get_sub_field('bg_position');
$bgColor = get_sub_field('bg_color');
$sectionContent = get_sub_field('content');
$textCenter = (get_sub_field('text_center') == 1 ? ' text-center' : '');


?>



<?php if ($bgImage): ?>
		<section class="section-acf"<?php echo $bgImage; ?>> 
<?php else: ?>
		<section class="section-acf" style="background:<?php echo $bgColor; ?> <?php echo $bgPosition; ?>;">
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