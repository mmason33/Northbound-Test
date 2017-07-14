<?php

// function evalColor($color,$opacity){

//   switch($color) {

//     case 'Black':
//       $color = 'rgba(0,0,0,.5)';
//       break;
//     case 'White':
//       $color = 'rgba(255,255,255,'.$opacity.')';
//       break;
//     case 'Dark Blue':
//       $color = 'rgba(0,32,66,'.$opacity.')';
//       break;
//     case 'Light Blue':
//       $color = 'rgba(39,119,177,'.$opacity.')';
//       break;
//     case 'Orange':
//       $color = 'rgba(239,111,0,'.$opacity.')';
//       break;

//   }

//   return $color;

// }

$bgImage = (get_sub_field('bg_image') != '' ? ' style="background:url('.get_sub_field('bg_image').') no-repeat '.get_sub_field('bg_position').';background-size:cover;"' : '');
$bgPosition = get_sub_field('bg_position');
$sectionContent = get_sub_field('content');
$textCenter = (get_sub_field('text_center') == 1 ? ' text-center' : '');
$overlayColor = get_sub_field('overlay_color');
// $rgba = evalColor($overlayColor, $overlayOpacity);
// $overlayOpacity = get_sub_field('overlay_opacity');
$overlay = (get_sub_field('overlay') == 1 ? '<div class="section-acf-overlay" style="background:' . $overlayColor . ';"></div>' : '');

// rgba(0,0,0,.5)
// rgba(255,255,255,.5)
// rgba(0,32,66,.5)
// rgba(39,119,177,.5)
// rgba(239,111,0,.5)

?>


<section class="section-acf"<?php echo $bgImage; ?>>
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
<!-- <?php echo $overlay; ?>  -->