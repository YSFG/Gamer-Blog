const footer = `
<footer id="footer">
        <div class="container">
            <div class="row footer-row mb-3">

                <!-- SECTION 1 --> 
                <div class="col-md-4 footer-mb-20">
                    <!-- About Us --> 
                    <h2 class="footer-title secondary-title">About Us</h2>
                    <div class="secondary-title text-secondary">
                        <p class="mt-2 ">
                        Founded by two dads, who always had the dream of making a game. 
                        A game that is story-driven and inspired by comics and classic JRPGs. 
                        We started at a disadvantage, with no pixel art or coding experience. 
                        So what did we do- we decided to learn on our own. 
                        </p>
                        
                        <div class="pixelate-email">
                            <a href="mailto:contact@pixelategames.com"><i class="fas fa-envelope text-primary"></i> 
                            contact@pixelategames.com </a>
                        </div>
                    </div>
                    <!-- About Us --> 
                </div>
                <!-- .SECTION 1 -->

                <!-- SECTION 2 --> 
                <div class="col-md-4 footer-mb-20">

                    <!-- Archive --> 
                    <h2 class="footer-title secondary-title">Archive</h2>
                    <div class="feature-post">

                        <!-- post-1 -->
                        <div class="flex-item">
                            <article class="article">
                                <div class="d-flex">
                                    <a href="../../articles/2022/040222.html">
                                        <img src="../../assets/images/04022022_new.png" class="object-fit-blog2 px-1" alt="">
                                        <div class="pt-1 px-3">
                                            <a href="../../articles/2022/040222.html" class="sub-title display-3 text-dark">
                                            Development Blog: Long Time Coming
                                            </a>
                                            <p class="secondary-title text-secondary display-3">
                                                <span><i class="far fa-clock text-primary"></i> April 02, 2022 </span>
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </article>
                        </div>
                        <!-- .post-1 -->
                        <!-- post-2 -->
                        <div class="flex-item">
                        <article class="article">
                            <div class="d-flex">
                                <a href="../../articles/2022/040822.html">
                                    <img src="../../assets/images/04082022_sewer_test.gif" class="object-fit-blog2 px-1" alt="">
                                    <div class="pt-1 px-3">
                                        <a href="../../articles/2022/040822.html" class="sub-title display-3 text-dark">
                                        Sewer Tileset
                                        </a>
                                        <p class="secondary-title text-secondary display-3">
                                            <span><i class="far fa-clock text-primary"></i> Apr 08, 2022 </span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </article>
                        </div>
                        <!-- .post-2 -->
                        <!-- post-3 -->
                        <div class="flex-item">
                            <article class="article">
                                <div class="d-flex">
                                    <a href="../../articles/2022/041522.html">
                                        <img src="../../assets/images/04152022_apartment_test.png" class="object-fit-blog2 px-1" alt="">
                                        <div class="pt-1 px-3">
                                            <a href="../../articles/2022/041522.html" class="sub-title display-3 text-dark">
                                            Apartment Concept
                                            </a>
                                            <p class="secondary-title text-secondary display-3">
                                                <span><i class="far fa-clock text-primary"></i> April 15, 2022 </span>
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </article>
                        </div>
                        <!-- .post-3 -->
                    </div>
                    <!-- .Archive -->                     
                </div>
                <!-- .SECTION 2 --> 

                <!-- SECTION 3 -->          
                <div class="col-md-4 footer-mb-20">

                    <!-- Newsletter -->
                    <h2 class="footer-title secondary-title ">Newsletter</h2>
                    <div class="newsletter">
                        <div class="px-1">
                            <div class="contact-us">
        
                                <form action="https://formsubmit.co/9d0867d2488b74c1e10ed04559c17abc" method="POST">
                                    <div class="d-flex justify-content-between flex-wrap">
                                        
                                        <input type="email" name="email" class="mr-0 form-control Fmt-2 mb-2" placeholder="Email" required>
                                        
                                    </div>
                                    
                                    <div class="text-center footer-mb-20">
                                        <button type="submit" class="submit-btn btn btn-primary display-2 text-light mb-2">Submit</button>
                                    </div>
                                    <input type="hidden" name="_next" value="https://pixelategames.com/pages/thankyou.html"> 
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- .Newsletter -->

                    <!-- Social -->
                    <h2 class="footer-title secondary-title mt-2">Social</h2>
                    <div class="tags social">
                        <div class="social-icons d-flex flex-wrap">
                            <a href="https://www.facebook.com/pixelategamestudio" target="_blank" class="nav-link btn bg-light"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/pixelate_game" target="_blank" class="nav-link btn bg-light"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/Pixelate.Games/" target="_blank" class="nav-link btn bg-light"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.reddit.com/user/Pixelate_Games/" target="_blank" class="nav-link btn bg-light"><i class="fab fa-brands fa-reddit"></i></a>
                        </div>
                    </div>
                    <!-- .Social -->
                </div>
                <!-- .SECTION 3 --> 
            </div>

            <!-- Copyrights  -->
            <div class="copyrights">
                <p class="text-center text-secondary display-2">
                    © 2022 <a href="#" class="text-primary">Pixelate Games</a> - Power by Yesenia Figueroa
                </p>
            </div>
            <!-- .Copyrights -->
        </div>
    </footer>
    `;
document.getElementById('footer').innerHTML = footer;