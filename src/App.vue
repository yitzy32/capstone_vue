<template>
  <div id="app">
    <header id="header">
      <div class="inner">

        <!-- Logo -->
          <a href="/" class="logo">
            <span class="symbol"><img src="/images/cabinet.png" alt="" /></span><span class="title">Cabinet Keeper</span>
          </a>

        <!-- Nav -->
          <nav>
            <ul>
              <li><a href="#menu">Menu</a></li>
            </ul>
          </nav>

      </div>
    </header>

    <!-- Menu -->
    <nav id="menu">
      <h2>Menu</h2>
      <ul id="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/signup">Sign Up</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/pantry_items">My Pantry Items</a></li>
        <li><a href="/recipes">My Recipes</a></li>
        <li><a href="/logout">Logout</a></li>
        <!-- <li><a href="elements.html">Elements</a></li> -->
      </ul>
    </nav>
          
    <router-view/>
    
    <!-- Footer -->
		<footer id="footer">
			<div class="inner">
				<section>
					<h2>Let's Talk.</h2>
					<form method="post" action="#">
						<div class="fields">
							<div class="field half">
								<input type="text" name="name" id="name" placeholder="Name" />
							</div>
							<div class="field half">
								<input type="email" name="email" id="email" placeholder="Email" />
							</div>
							<div class="field">
								<textarea name="message" id="message" placeholder="Message"></textarea>
							</div>
						</div>
						<ul class="actions">
							<li><input type="submit" value="Send" class="primary" /></li>
						</ul>
					</form>
				</section>
				<section>
					<ul class="icons">
						<li><a href="#" class="icon brands style2 fa-github"><span class="label">GitHub</span></a></li>
						<li><a href="#" class="icon solid style2 fa-phone"><span class="label">Phone</span></a></li>
						<li><a href="#" class="icon solid style2 fa-envelope"><span class="label">Email</span></a></li>
					</ul>
				</section>
				<ul class="copyright">
					<li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
				</ul>
			</div>
		</footer>

  </div>
</template>

<style>
</style>
<script>
</script>