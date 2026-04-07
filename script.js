

document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            const isOpen = hamburger.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', isOpen);
            if (isOpen) {
                mobileNav.style.display = 'block';
            } else {
                mobileNav.style.display = 'none';
            }
        });

        // Expose function globally to bind it in HTML inline handlers
        window.closeMobileNav = () => {
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            mobileNav.style.display = 'none';
        };
    }

    // Image Carousel Logic
    const mainImg = document.getElementById('heroMainImg');
    const thumbs = document.querySelectorAll('.thumb-item');
    const heroPrev = document.getElementById('heroPrev');
    const heroNext = document.getElementById('heroNext');
    let currentIndex = 0;

    /**
     * Updates the main carousel image to match the thumbnail at the given index
     * @param {number} index - The target image index
     */
    function goToImg(index) {
        if (!mainImg || thumbs.length === 0) return;
        index = (index + thumbs.length) % thumbs.length;
        currentIndex = index;

        mainImg.style.opacity = '0';
        setTimeout(() => {
            mainImg.src = thumbs[currentIndex].querySelector('img').src;
            mainImg.style.opacity = '1';
        }, 200);

        thumbs.forEach((t, i) => {
            t.classList.toggle('active', i === currentIndex);
            t.setAttribute('aria-selected', i === currentIndex);
        });
    }

    thumbs.forEach((t, i) => t.addEventListener('click', () => goToImg(i)));
    if (heroPrev) heroPrev.addEventListener('click', () => goToImg(currentIndex - 1));
    if (heroNext) heroNext.addEventListener('click', () => goToImg(currentIndex + 1));

    // Image Zoom Functionality Setup
    const imgWrap = document.getElementById('heroMainImgWrap');
    const zoomLens = document.getElementById('zoomLens');
    const zoomResult = document.getElementById('zoomResult');

    if (imgWrap && mainImg && zoomLens && zoomResult) {

        /**
         * Calculates and updates the zoom lens and zoomed preview position
         * @param {MouseEvent|TouchEvent} e - the mouse or touch event
         */
        function moveLens(e) {
            e.preventDefault();
            const rect = imgWrap.getBoundingClientRect();

            let clientX = e.clientX;
            let clientY = e.clientY;
            if (e.touches && e.touches.length > 0) {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            }

            let x = clientX - rect.left;
            let y = clientY - rect.top;

            const lensW = zoomLens.offsetWidth;
            const lensH = zoomLens.offsetHeight;
            const resultW = zoomResult.offsetWidth;
            const resultH = zoomResult.offsetHeight;

            const cx = resultW / lensW;
            const cy = resultH / lensH;

            zoomResult.style.backgroundSize = (imgWrap.offsetWidth * cx) + "px " + (imgWrap.offsetHeight * cy) + "px";

            if (x > imgWrap.offsetWidth - lensW / 2) { x = imgWrap.offsetWidth - lensW / 2; }
            if (x < lensW / 2) { x = lensW / 2; }
            if (y > imgWrap.offsetHeight - lensH / 2) { y = imgWrap.offsetHeight - lensH / 2; }
            if (y < lensH / 2) { y = lensH / 2; }

            zoomLens.style.left = (x - lensW / 2) + "px";
            zoomLens.style.top = (y - lensH / 2) + "px";

            zoomResult.style.backgroundPosition = "-" + ((x - lensW / 2) * cx) + "px -" + ((y - lensH / 2) * cy) + "px";
        }

        imgWrap.addEventListener("mouseenter", () => {
            zoomLens.classList.add("active");
            zoomResult.classList.add("active");
            zoomResult.style.backgroundImage = `url('${mainImg.src}')`;
        });

        imgWrap.addEventListener("mouseleave", () => {
            zoomLens.classList.remove("active");
            zoomResult.classList.remove("active");
        });

        imgWrap.addEventListener("mousemove", moveLens);
        imgWrap.addEventListener("touchmove", moveLens);

        let isTouchHovering = false;
        imgWrap.addEventListener("touchstart", (e) => {
            isTouchHovering = true;
            zoomLens.classList.add("active");
            zoomResult.classList.add("active");
            zoomResult.style.backgroundImage = `url('${mainImg.src}')`;
            moveLens(e);
        });

        imgWrap.addEventListener("touchend", () => {
            isTouchHovering = false;
            zoomLens.classList.remove("active");
            zoomResult.classList.remove("active");
        });
    }

    // Horizontal scrolling navigation for Applications Track
    const appTrack = document.querySelector('.app-track');
    const appNavBtns = document.querySelectorAll('.app-nav .nav-circle');

    if (appTrack && appNavBtns.length === 2) {
        appNavBtns[0].addEventListener('click', () => {
            appTrack.scrollBy({ left: -360, behavior: 'smooth' });
        });
        appNavBtns[1].addEventListener('click', () => {
            appTrack.scrollBy({ left: 360, behavior: 'smooth' });
        });
    }

    const procTabs = document.querySelectorAll('.tab-pill');
    const procTitle = document.querySelector('.proc-left h3');

    if (procTabs.length > 0 && procTitle) {
        const procData = [
            { title: "High-Grade Raw Material Selection" },
            { title: "Precision Extrusion Technology" },
            { title: "Controlled Cooling Process" },
            { title: "Accurate Vacuum Sizing" },
            { title: "Rigorous Quality Inspection" },
            { title: "Automated Laser Marking" },
            { title: "Precision Cutting System" },
            { title: "Secure Coiling & Packaging" }
        ];

        procTabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                procTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const leftBox = document.querySelector('.proc-left');
                leftBox.style.opacity = '0';
                setTimeout(() => {
                    procTitle.textContent = procData[index] ? procData[index].title : tab.textContent + " Step";
                    leftBox.style.opacity = '1';
                }, 200);
            });
        });
    }

    // FAQ Accordion Functionality
    const faqBtns = document.querySelectorAll('.faq-question');
    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';

            // Close all other accordions
            faqBtns.forEach(b => {
                b.setAttribute('aria-expanded', 'false');
                b.nextElementSibling.classList.remove('open');
            });

            // Toggle current accordion
            if (!isExpanded) {
                btn.setAttribute('aria-expanded', 'true');
                btn.nextElementSibling.classList.add('open');
            }
        });
    });

    window.submitCatalogue = function(e) {
        e.preventDefault();
        const btn = document.getElementById('catalogueSubmitBtn');
        btn.textContent = 'Sending...';
        btn.disabled = true;
        setTimeout(() => {
            showToast('Catalogue sent successfully!');
            btn.textContent = 'Request Catalogue';
            btn.disabled = false;
            e.target.reset();
        }, 1200);
    };

    window.submitQuote = function(e) {
        e.preventDefault();
        const form = e.target;
        if (!form.checkValidity()) {
            showToast('Please fill out all required fields.');
            return;
        }

        const btn = document.getElementById('quoteSubmitBtn');
        btn.textContent = 'Submitting...';
        btn.disabled = true;
        setTimeout(() => {
            showToast('Quote request sent successfully! We will contact you shortly.');
            btn.textContent = 'Request Custom Quote';
            btn.disabled = false;
            form.reset();
        }, 1200);
    };

    window.showToast = function(msg) {
        const t = document.getElementById('successToast');
        if (t) {
            t.style.display = 'block';
            t.textContent = msg;
            t.style.position = 'fixed';
            t.style.bottom = '24px';
            t.style.left = '50%';
            t.style.transform = 'translateX(-50%)';
            t.style.background = '#1a1a1a';
            t.style.color = '#fff';
            t.style.padding = '12px 24px';
            t.style.borderRadius = '8px';
            t.style.zIndex = '9999';
            t.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';

            setTimeout(() => {
                t.style.display = 'none';
            }, 3000);
        }
    };

    window.openModal = function(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeModal = function(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    window.closeModalOnBgClick = function(e, id) {
        if (e.target.id === id) {
            window.closeModal(id);
        }
    };

    window.handleModalSubmit = function(e, id) {
        e.preventDefault();
        const form = e.target;
        if (!form.checkValidity()) {
            showToast('Please fill out all required fields.');
            return;
        }

        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Processing...';
        btn.disabled = true;

        setTimeout(() => {
            window.closeModal(id);
            window.showToast('Request submitted successfully!');
            btn.textContent = originalText;
            btn.disabled = false;
            form.reset();
        }, 800);
    };

    // Sticky Header Scroll Logic Setup
    // Requirement: appears when scrolling beyond the first fold, disappears when scrolling back up
    const header = document.querySelector('.primary-nav');
    let lastScrollY = window.scrollY;
    
    // Capture the initial navigation bar height to use as padding offset
    const navHeight = header ? header.offsetHeight : 72;
    
    if (header) {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            const threshold = window.innerHeight * 0.8; // Approx end of first fold
            
            if (currentScrollY > threshold) {
                // Apply sticky and padding to prevent layout shift
                document.body.style.paddingTop = navHeight + 'px';
                
                if (currentScrollY < lastScrollY) {
                    // Scrolling up: Header should hide according to spec
                    header.classList.remove('is-sticky');
                    header.classList.add('is-hiding');
                } else {
                    // Scrolling down: Header should appear and be sticky
                    header.classList.remove('is-hiding');
                    header.classList.add('is-sticky');
                }
            } else {
                // Remove padding shift and sticky states when back above first fold
                document.body.style.paddingTop = '0';
                header.classList.remove('is-sticky');
                header.classList.remove('is-hiding');
            }
            lastScrollY = currentScrollY;
        });
    }

    const stickyProductBar = document.getElementById('stickyProductBar');
    const heroSection = document.getElementById('hero');
    if (stickyProductBar && heroSection) {
        window.addEventListener('scroll', () => {
            const heroBottom = heroSection.getBoundingClientRect().bottom;
            if (heroBottom < 0) {
                stickyProductBar.classList.add('visible');
            } else {
                stickyProductBar.classList.remove('visible');
            }
        });
    }
});
