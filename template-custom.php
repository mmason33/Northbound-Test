<?php
/**
 * Template Name: Custom Template
 */
?>

<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/page', 'header'); ?>
  <section style="background: rgba(0,0,0,.3);position: relative;height: auto; width: 100%;padding-bottom: 3%;">
	<div class="container">
		<div class="row">
			<div class="col-md-12 head text-center">
				<h1 style="font-size: 3.5rem;color: #fff;text-shadow: 1px 1px 5px #000;">About Northbound</h1>
				<button class="home-button">888.888.8888</button>
			</div>
		</div>
	</div>
  </section>
  <section class="main-section">
  	<div class="container">
		<div class="row">
			<div class="col-md-8">
				<p>Located in the serene forest foothills of northern Georgia, Black Bear Lodge is a place of solace and healing for those suffering from addiction and mental health issues.</p>
				<p>Because Black Bear Lodge is part of Foundations Recovery Network, our system of care is recognized as the gold standard in the industry, and our ability to treat co-occurring disorders puts us in the top 5% of treatment organizations in the country.</p>
				<p>Black Bear Lodge is a residential treatment center offering a comprehensive program that addresses the needs of the whole person— mind, body and spirit. We provide sub-acute detox, a range of holistic therapies and proven treatment modalities. Patients can self-reflect and find strength for life change amid the beauty of the expansive sky and the natural preserve that characterizes our location.</p>


<h3>Our Story</h3>
<p>Before becoming part of the Foundations Recovery Network family, Black Bear Lodge was a resort property that served as a haven for those seeking a scenic natural landscape for vacations and weddings. The richly decorated lodges served as unique getaways from the fast pace of life, and we like to think that they retain their heritage of peace and serenity for those who attend our program. The high quality architecture of the Black Bear campus tucked away into a wooded hillside seemed to us the ideal setting for new beginnings.</p>

<p>Black Bear Lodge is situated on the gentle slope of Mt. Yonah, which has a deep history in Native American lore. It is encompassed by the Chattahoochee National Forest, and the name “Yonah” is the Cherokee word for “bear,” because rumor has it that the Cherokee people believed that the mountain looked like a sleeping bear. Mt. Yonah is also a bald mountain, meaning that it is easily distinguishable from the rest of natural landscape.</p>
<div class="row">
<div class="text-center embed-responsive embed-responsive-16by9 col-md-6">
<iframe class="embed-responsive-item" width="640" height="360" src="https://www.youtube.com/embed/I0cbrQUCHJ4" frameborder="0" allowfullscreen=""></iframe>
</div>
<div class="col-md-6">
<p>From the very start, we were enchanted by the mythical nature of Black Bear Lodge and its surrounding area. Our hope is that each person who comes to our program is equally awed by the prospect of a transformative recovery experience at this well-appointed place. We invite you to discover Black Bear Lodge and the new life that you can find here.</p>
</div>
</div>


			</div>
			<div class="col-md-4">
				<h2>About Us</h2>
				<ul class="sidebar-nav" style="margin-bottom: 2rem;">
					<li>About Us</li>
					<li>Our Mission</li>
					<li>Our Success</li>
					<li>Photos</li>
					<li>Staff</li>
					<li>Contact</li>	
				</ul>
				<a href="#" class="ins" style="background: url(/wp-content/uploads/2017/08/insurance-button-blue.jpg) no-repeat center center; background-size: contain;">
				</a>
				<a href="#" class="ins" style="background: url(/wp-content/uploads/2017/08/apply-admission-button-blue.jpg) no-repeat center center; background-size: contain;">
				</a>
				<a href="#" class="ins-success" style="background: url(/wp-content/uploads/2017/08/success-2.jpg) no-repeat center center; background-size: contain;">
				</a>
				<a href="#" class="ins-success" style="background: url(/wp-content/uploads/2017/08/tour.jpg) no-repeat center center; background-size: contain;">
				</a>
			</div>
		</div>
	</div>
  </section>
  <?php get_template_part('templates/content', 'page'); ?>
<?php endwhile; ?>
