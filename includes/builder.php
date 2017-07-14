<?php //check if the flexible content field has rows
	if( have_rows('builder') ):
		//loop through the data
		while (have_rows('builder')) : the_row();



			/************ Section ***************/

			if( get_row_layout() == 'section'):
				require('section.php');
			endif;


		endwhile;
	else :
		//no layouts found
	endif;
?>
