const propertiesData = [
    {
        id: "prop-1", type: "عقار", title: "شقة فاخرة", location: " مدينتي القاهره", price: "14,287,000 جنيه",
        bedrooms: 4, bathrooms: 3, area: 255,
        images: ["image/شقه1 فاخره  (10).jpg", "image/شقه1 فاخره  (8).jpg","image/شقه1 فاخره  (7).jpg ","image/شقه1 فاخره  (6).jpg ","image/شقه1 فاخره  (5).jpg ","image/شقه1 فاخره  (4).jpg","image/شقه1 فاخره  (3).jpg","image/شقه1 فاخره  (2).jpg" ],    
        image: "image/شقه1 فاخره  (10).jpg", //صورة الرئيسيه 
        description: "خدمات الكومباوند,نادي الاجتماعي و منطقه مخصصه للالعاب الاطفال ,كلوب هاوس ,حمامات سباحه متميزه ,مساحات خضراء شاسعه , مطاعم راقيه و منطقه تجاريه عالميه",
        highlight: false
    },
    {
        id: "prop-2", type: "عقار", title: "شقه ", location: "مدينتي القاهره", price: "12,000,000 جنيه",
        bedrooms: 4, bathrooms: 3, area: 200,
        images: ["image/شقه 2 .jpg", "image/شقه 2  (10).jpg", "image/شقه 2  (9).jpg","image/شقه 2  (8).jpg","image/شقه 2  (7).jpg","image/شقه 2  (6).jpg","image/شقه 2  (5).jpg","image/شقه 2  (4).jpg","image/شقه 2  (3).jpg","image/شقه 2  (2).jpg","image/شقه 2  (1).jpg"],     
        image: "image/شقه 2 .jpg",
        description: "مواصفات المبني ,حوائط من الجرانيت, شبابيك الواجهه بالكامل الوميتال,درج السلم من البدروم الي السطح من الجرانيت ,باب رئيسي للمبنى من الحديد الفرفورجيه بخلاف السور والبوابة الرئيسية,مرافق مستقلة للوحده ,كهرباء , تليفونات , دش",
        highlight: true
    },
    {
        id: "prop-3", type: "عقار", title: "شقة ", location: " كمبوندات مدينة المستقبل ", price: "14,000,000 جنيه",
        bedrooms: 4, bathrooms: 3, area: 320,
        images:["image/شقه 3 .jpg","image/شقه 3  (5).jpg","image/شقه 3  (7).jpg","image/شقه 3  (6).jpg","image/شقه 3  (8).jpg","image/شقه 3  (9).jpg","image/شقه 3  (10).jpg","image/شقه 3  (11).jpg","image/شقه 3 .jpg","image/شقه 3  (4).jpg   ","image/شقه 3  (3).jpg  ","image/شقه 3  (2).jpg ","image/شقه 3  (1).jpg"],
        image: "image/شقه 3 .jpg ",    
        description: "شقة دوبلكس فخمة مبنى سكنيً مكونًا من أربعة طوابق، بتصميم كلاسيكي أنيق. التي تعكس طابعه المعماري الفخم.",
        highlight: false
    },
    {   //  -لا   /
        id: "land-1", type: "أرض", title: "أرض سكنية", location: " العاشر من رمضان ", price: "950,000 جنيه", area: 450, street: "شارع 20 متر",
        images:["image/ارض سكنيه 1  (8).jpg","image/ارض سكنيه 1 .jpg","image/ارض سكنيه 1  (2).jpg","image/ارض سكنيه 1  (3).jpg","image/ارض سكنيه 1  (4).jpg","image/ارض سكنيه 1  (5).jpg","image/ارض سكنيه 1  (6).jpg","image/ارض سكنيه 1  (7).jpg","image/ارض سكنيه 1  (8).jpg","image/ارض سكنيه 1  (9).jpg"],
        image: "image/ارض سكنيه 1  (8).jpg",
        description: "أرض سكنية في موقع استراتيجي قريبة من الخدمات ومناسبة للبناء.",   
        highlight: false
    },
    {
        id: "land-2", type: "أرض", title: "أرض تجارية", location: " 6 اكتوبر", price: "145,000,000 جنيه", area: 2600, street: "شارع رئيسي",
        images:["image/ارض تجاريه 1 .jpg","image/ارض تجاريه 1  (2).jpg","image/ارض تجاريه 1  (1).jpg",],
        image: "image/ارض تجاريه 1 .jpg",
        description: "أرض تجارية على شارع رئيسي في العبور. فرصة استثمارية ممتازة لبناء مجمع تجاري أو مكاتب.",
        highlight: false
    },
    {
        id: "land-3", type: "أرض", title: "أرض زراعية", location: " طريق مصر الاسماعيلية الصحراوي", price: "1,750,000 جنيه", area: 5000, // 5000 متر = حوالي 1.19 فدان
        features: "تربة خصبة، قريبة من مصدر مياه",   
        images:["image/ارض زراعيه 1  (3).jpg","image/ارض زراعيه 1  (2).jpg","image/ارض زراعيه 1  (4).jpg","image/ارض زراعيه 1  (5).jpg","image/ارض زراعيه 1  (6).jpg","image/ارض زراعيه 1  (7).jpg","image/ارض زراعيه 1 .jpg"],
        image: "image/ارض زراعيه 1  (3).jpg",
        description: "أرض زراعية خصبة في منطقة واعدة ومناسبة لمختلف أنواع الزراعة أو الاستثمار الزراعي.",
        highlight: true
    },
    {
        id: "villa-1", type: "فيلا", title: "فيلا حديثة", location: "هيليوبوليس الجديده", price: "12,000,000 جنيه",
        bedrooms: 4, bathrooms: 4, area: 235,    
        images: ["image/فيلا 3  .jpg","image/فيلا 3   (1).jpg","image/فيلا 3   (2).jpg","image/فيلا 3   (3).jpg","image/فيلا 3   (4).jpg","image/فيلا 3   (5).jpg","image/فيلا 3   (6).jpg","image/فيلا 3   (7).jpg","image/فيلا 3   (8).jpg","image/فيلا 3   (9).jpg","image/فيلا 3   (10).jpg"],  
        image: "image/فيلا 3  .jpg",
        description: "فيلا بتصميم حديث وعصري في كمبوند كليوباترا بالاس بمدينة الشروق. تتميز بمساحات واسعة وتشطيبات فاخرة، مثالية للعائلات الباحثة عن التميز.",
        highlight: true
    },
    {
        id: "villa-2", type: "فيلا", title: "فيلا متميزه", location: " التجمع الثالث ", price: "30,000,000 جنيه",
        bedrooms: 4, bathrooms: 4, area: 450,    
        images:["image/فيلا 2 .jpg","image/فيلا 2  .jpg","image/فيلا 2  (9).jpg","image/فيلا 2   (16).jpg","image/فيلا 2   (15).jpg","image/فيلا 2   (14).jpg","image/فيلا 2   (13).jpg","image/فيلا 2   (12).jpg","image/فيلا 2   (11).jpg","image/فيلا 2   (10).jpg","image/فيلا 2   (9).jpg","image/فيلا 2   (8).jpg","image/فيلا 2   (7).jpg","image/فيلا 2   (6).jpg","image/فيلا 2   (5).jpg","image/فيلا 2   (4).jpg","image/فيلا 2   (3).jpg","image/فيلا 2   (2).jpg","image/فيلا 2   (1).jpg"],
        image: "image/فيلا 2 .jpg",
        description: "فيلا عائلية واسعة في حي مميز بالتجمع الثالث. تحتوي على حديقة خاصة ومساحة لإنشاء مسبح، وتوفر بيئة مثالية للعائلة.",
        highlight: false
    },
    {
        id: "villa-3", type: "فيلا", title: "فيلا", location: " كومباون ذا استيتس الشيخ زايد الجيزه", price: "70,000,000 جنيه",
        bedrooms: 5, bathrooms: 4, area: 340, 
        images:["image/فيلا 1  (3).jpg","image/فيلا 1  (1).jpg","image/فيلا 1  (2).jpg","image/فيلا 1  (4).jpg","image/فيلا 1  (5).jpg","image/فيلا 1  (6).jpg","image/فيلا 1  (7).jpg","image/فيلا 1 .jpg","image/فيلا 2   (1).jpg"],         
        image: "image/فيلا 1  (3).jpg",
        description: "فيلا رائعة بإطلالة على البحر في الساحل الشمالي. تصميم فريد ومرافق متكاملة توفر تجربة صيفية استثنائية.",
        highlight: false
    },
    {
        id: "palace-1", type: "قصر", title: "قصر ", location: " مصر الجديدة", price: "68,000,000 جنيه",
        bedrooms: 8, bathrooms: 7, area: 1800,   
        images:["image/قصر 3  .jpg","image/قصر 3   (13).jpg","image/قصر 3   (12).jpg","image/قصر 3   (11).jpg","image/قصر 3   (10).jpg","image/قصر 3   (9).jpg","image/قصر 3   (8).jpg","image/قصر 3   (7).jpg","image/قصر 3   (6).jpg ","image/قصر 3   (5).jpg","image/قصر 3   (4).jpg","image/قصر 3   (3).jpg","image/قصر 3   (2).jpg","image/قصر 3   (1).jpg"],
        image: "image/قصر 3  .jpg",
        description: "قصر فخم في أرقى مناطق مصر الجديدة. تصميم ملكي ومساحات شاسعة تليق بكبار الشخصيات.",
        highlight: false
    },
    {
        id: "palace-2", type: "قصر", title: "قصر فاخر  ", location: " القريه السياحيه الاولي", price: "70,000,000 جنيه",   
        bedrooms: 8, bathrooms: 8, area: 1200,   
        images:["image/قصر 2  .jpg","image/قصر 2   (23).jpg","image/قصر 2   (22).jpg","image/قصر 2   (21).jpg","image/قصر 2   (20).jpg","image/قصر 2   (19).jpg","image/قصر 2   (18).jpg","image/قصر 2   (17).jpg   ","image/قصر 2   (16).jpg","image/قصر 2   (15).jpg","image/قصر 2   (14).jpg","image/قصر 2   (13).jpg","image/قصر 2   (12).jpg","image/قصر 2   (11).jpg","image/قصر 2   (10).jpg","image/قصر 2   (9).jpg","image/قصر 2   (4).jpg","image/قصر 2   (3).jpg","image/قصر 2   (2).jpg","image/قصر 2   (1).jpg","image/قصر 2   (7).jpg","image/قصر 2   (6).jpg","image/قصر 2   (5).jpg"],
        image: "image/قصر 2  .jpg",
        description: "قصر بتصميم معماري حديث ومبتكر في التجمع الخامس. يجمع بين الفخامة والتكنولوجيا لتوفير أسلوب حياة لا مثيل له.",
        highlight: true
    },
    {
        id: "palace-3", type: "قصر", title: "قصر كلاسيكي", location: "قصر بستيلا عبد الرحمن اول صف على البحر سوبرلوكس ", price: "62,000,000 جنيه",
        bedrooms: 12, bathrooms: 10, area: 2800, 
        images:["image/قصر 1   (4).jpg","image/قصر 1   (1).jpg","image/قصر 1   (2).jpg","image/قصر 1   (3).jpg","image/قصر 1   (5).jpg","image/قصر 1   (6).jpg","image/قصر 1   (7).jpg","image/قصر 1   (8).jpg","image/قصر 1   (9).jpg","image/قصر 1   (10).jpg","image/قصر 1   (11).jpg","image/قصر 1   (12).jpg"],  
        image: "image/قصر 1   (4).jpg",
        description: "قصر بتصميم كلاسيكي أصيل في العاصمة الإدارية. تفاصيل معمارية دقيقة ومواد بناء فاخرة تعكس الرقي والفخامة.",
        highlight: false
    }
];

function handleImageError(imgElement, fallbackImage = 'placeholder.jpg') {
    if (!imgElement.src.endsWith(fallbackImage)) { // Prevent infinite loop if placeholder fails
        console.warn(`Image not found: ${imgElement.alt || imgElement.src}. Using fallback: ${fallbackImage}`);
        imgElement.src = fallbackImage;
    }
    imgElement.onerror = null; // Remove handler after first try
}


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    const propertyContainers = {
        properties: document.querySelector("#properties .property-container"),
        lands: document.querySelector("#lands .property-container"),
        villas: document.querySelector("#villas .property-container"),
        palaces: document.querySelector("#palaces .property-container"),
    };

    const searchInput = document.querySelector(".search-bar input");
    const searchButton = document.querySelector(".search-bar button");

    // --- وظيفة إنشاء كرت عقار ---
    function createPropertyCard(property) {
        const card = document.createElement("div");
        card.classList.add("property-card");
        if (property.highlight) {
            card.classList.add("highlight");
        }
        card.dataset.id = property.id;

        let detailsHtml = "";
        if (property.bedrooms) detailsHtml += `<span><i class="fas fa-bed"></i> ${property.bedrooms} غرف</span>`;
        if (property.bathrooms) detailsHtml += `<span><i class="fas fa-bath"></i> ${property.bathrooms} حمام</span>`;
        if (property.area) detailsHtml += `<span><i class="fas fa-vector-square"></i> ${property.area} م²</span>`;
        if (property.street) detailsHtml += `<span><i class="fas fa-road"></i> ${property.street}</span>`;
        if (property.features) detailsHtml += `<span><i class="fas fa-star"></i> ${property.features}</span>`;

        // Use card-specific image or fallback
        const imageSrc = property.image || 'placeholder.jpg';

        card.innerHTML = `
            <img src="${imageSrc}" alt="${property.title}" onerror="handleImageError(this)">
            <span class="property-type">${property.type}</span>
            <div class="property-info">
                <h3>${property.title}</h3>
                <p class="location"><i class="fas fa-map-marker-alt"></i> ${property.location}</p>
                <p class="price"><i class="fas fa-tag"></i> ${property.price}</p>
                <div class="details">
                    ${detailsHtml || '<span>تفاصيل إضافية متوفرة</span>'} <!-- Fallback if no details -->
                </div>
                 <button class="details-btn btn btn-secondary">عرض التفاصيل</button> <!-- Applied btn classes -->
            </div>
        `;

        const detailsBtn = card.querySelector(".details-btn");
        if (detailsBtn) {
            detailsBtn.addEventListener("click", () => {
                localStorage.setItem('selectedPropertyId', property.id);
                window.location.href = `details.html`;
            });
        }

        return card;
    }

    // --- وظيفة عرض العقارات في الحاويات المناسبة ---
    function displayProperties(propertiesToDisplay) {
        let propertiesFound = false;
        // Clear existing cards only if the container exists
        Object.values(propertyContainers).forEach(container => {
            if (container) container.innerHTML = '';
        });

        propertiesToDisplay.forEach(property => {
            const card = createPropertyCard(property);
            let containerKey = null;
            const typeLower = property.type ? property.type.toLowerCase().trim() : '';

            if (['عقار', 'شقة'].includes(typeLower)) containerKey = 'properties';
            else if (typeLower === 'أرض') containerKey = 'lands';
            else if (typeLower === 'فيلا') containerKey = 'villas';
            else if (typeLower === 'قصر') containerKey = 'palaces';
            else console.warn(`Unknown property type: ${property.type}`);

            if (containerKey && propertyContainers[containerKey]) {
                propertyContainers[containerKey].appendChild(card);
                propertiesFound = true;
            }
        });

        // Check if any container is empty after filtering and display message
        const searchTerm = searchInput ? searchInput.value.trim() : '';
        Object.entries(propertyContainers).forEach(([key, container]) => {
            if (container && container.children.length === 0) {
                 const message = searchTerm !== '' ?
                     'لا توجد نتائج مطابقة لبحثك.' :
                     `لا توجد ${key === 'properties' ? 'عقارات' : key === 'lands' ? 'أراضي' : key === 'villas' ? 'فيلات' : 'قصور'} متوفرة حالياً.`;
                 container.innerHTML = `<p>${message}</p>`;
            }
        });
    }


    // --- وظيفة البحث ---
    function filterProperties() {
        if (!searchInput) return; // Exit if search input doesn't exist
        const searchTerm = searchInput.value.toLowerCase().trim();

        if (searchTerm === "") {
            displayProperties(propertiesData); // Show all if search is cleared
            return;
        }

        const filteredProperties = propertiesData.filter(property => {
            const title = property.title ? property.title.toLowerCase() : '';
            const location = property.location ? property.location.toLowerCase() : '';
            const type = property.type ? property.type.toLowerCase() : '';
            const description = property.description ? property.description.toLowerCase() : '';

            return title.includes(searchTerm) ||
                   location.includes(searchTerm) ||
                   type.includes(searchTerm) ||
                   description.includes(searchTerm); // Include description in search
        });
        displayProperties(filteredProperties);
    }

    // --- تحميل وعرض العقارات والبحث (فقط في الصفحة الرئيسية) ---
     // Check if we are likely on the index page by looking for a specific container
    if (propertyContainers.properties || propertyContainers.lands || propertyContainers.villas || propertyContainers.palaces) {
        displayProperties(propertiesData); // Initial display

        if (searchInput) {
            searchInput.addEventListener("input", filterProperties); // Search as user types
        }
        if (searchButton) {
            searchButton.addEventListener("click", (event) => {
                event.preventDefault();
                filterProperties();
            });
             if(searchInput) { // Allow Enter key search
                 searchInput.addEventListener("keypress", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        filterProperties();
                    }
                });
             }
        }
    }


    // --- ============ الكود الخاص بصفحة تفاصيل العقار (details.html) ============ ---
    if (document.body.contains(document.getElementById('property-title'))) { // Check for element unique to details page
        const selectedId = localStorage.getItem('selectedPropertyId');
        const detailSection = document.querySelector('.property-detail-section'); // Get the main section

        if (!selectedId || !detailSection) {
            console.error("Details page: Property ID not found or detail section missing.");
             if(detailSection) { // Show error inside the section if possible
                detailSection.innerHTML = '<h1>خطأ</h1><p>لم يتم تحديد العقار المطلوب. يرجى العودة واختيار عقار.</p><a href="index.html" class="back-link">العودة للرئيسية</a>';
             } else { // Fallback if even section is missing
                 document.body.innerHTML = '<h1>خطأ في تحميل الصفحة</h1><a href="index.html">العودة للرئيسية</a>';
             }
        } else {
            const property = propertiesData.find(p => p.id === selectedId);

            if (property) {
                // --- Fill Header ---
                document.getElementById('property-title').textContent = property.title;
                document.getElementById('property-location').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${property.location}`;
                document.getElementById('property-price').innerHTML = `<i class="fas fa-tag"></i> ${property.price}`;
                document.title = `${property.title} - تفاصيل العقار - THE ELITE`; // Update page title

                // --- Image Gallery ---
                const mainImage = document.getElementById('main-property-image');
                const thumbnailContainer = document.getElementById('thumbnail-images');
                thumbnailContainer.innerHTML = ''; // Clear loading message

                const imageList = property.images && property.images.length > 0 ? property.images : (property.image ? [property.image] : []);

                if (imageList.length > 0 && imageList[0]) {
                    mainImage.src = imageList[0];
                    mainImage.alt = `${property.title} - صورة رئيسية`;
                    mainImage.onerror = () => handleImageError(mainImage);

                    imageList.forEach((imgSrc, index) => {
                        if (!imgSrc) return;
                        const thumb = document.createElement('img');
                        thumb.src = imgSrc;
                        thumb.alt = `${property.title} - صورة مصغرة ${index + 1}`;
                        thumb.classList.add('thumbnail-image');
                        thumb.dataset.index = index;
                        thumb.onerror = () => handleImageError(thumb, 'placeholder.jpg'); // Use main placeholder for thumb fallback

                        thumb.addEventListener('click', function() { // Use function to access 'this' easily
                            if (this.classList.contains('active')) return; // Don't reload if already active

                            mainImage.style.opacity = 0;
                            setTimeout(() => {
                                mainImage.src = this.src;
                                mainImage.alt = this.alt.replace('مصغرة', 'رئيسية');
                                mainImage.style.opacity = 1;
                            }, 150);

                            thumbnailContainer.querySelector('.thumbnail-image.active')?.classList.remove('active'); // Remove previous active safely
                            this.classList.add('active');
                        });

                        thumbnailContainer.appendChild(thumb);
                        if (index === 0) thumb.classList.add('active');
                    });
                } else {
                    mainImage.src = 'placeholder.jpg';
                    mainImage.alt = 'لا توجد صورة متوفرة';
                    mainImage.onerror = () => handleImageError(mainImage);
                    thumbnailContainer.innerHTML = '<p>لا توجد صور إضافية.</p>';
                }

                // --- Fill Description & Features ---
                document.getElementById('property-description-text').textContent = property.description || 'لا يوجد وصف متوفر لهذا العقار.';
                const featuresList = document.getElementById('property-features-list');
                featuresList.innerHTML = ''; // Clear loading message
                let featuresAdded = false;
                 if (property.bedrooms) { featuresList.innerHTML += `<li><i class="fas fa-bed"></i> ${property.bedrooms} غرف</li>`; featuresAdded = true; }
                 if (property.bathrooms) { featuresList.innerHTML += `<li><i class="fas fa-bath"></i> ${property.bathrooms} حمام</li>`; featuresAdded = true; }
                 if (property.area) { featuresList.innerHTML += `<li><i class="fas fa-vector-square"></i> ${property.area} م²</li>`; featuresAdded = true; }
                 if (property.street) { featuresList.innerHTML += `<li><i class="fas fa-road"></i> ${property.street}</li>`; featuresAdded = true; }
                 if (property.features) { featuresList.innerHTML += `<li><i class="fas fa-star"></i> ${property.features}</li>`; featuresAdded = true; }
                // Add more features if needed
                if (!featuresAdded) {
                    featuresList.innerHTML = '<li>لا توجد مميزات محددة مدرجة.</li>';
                }

                // --- Action Buttons ---
                const checkoutBtn = document.getElementById('checkout-btn');
                const contactAgentBtn = document.getElementById('contact-agent-btn');

                if (checkoutBtn) {
                    checkoutBtn.addEventListener('click', () => { window.location.href = 'checkout.html'; });
                }

                if (contactAgentBtn) {
                    contactAgentBtn.addEventListener('click', () => {
                        const subject = `استفسار بخصوص عقار: ${property.title} (ID: ${property.id})`;
                        const body = `أود الاستفسار عن العقار التالي:\n\nالعنوان: ${property.title}\nالموقع: ${property.location}\nالرابط: ${window.location.href}\n\nيرجى التواصل معي.\n\nشكراً.`;
                         // Replace with your actual email
                        window.location.href = `mailto:info@ELITE.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                        // Or: window.location.href = 'index.html#contact'; // Scroll to contact form
                        // Or: alert('للاستفسار، يرجى الاتصال على: +0123456789');
                    });
                }

            } else {
                // Handle case where ID exists but property not found
                console.error(`Details page: Property with ID "${selectedId}" not found in data.`);
                detailSection.innerHTML = '<h1>العقار غير موجود</h1><p>العقار الذي تبحث عنه غير متوفر أو تم حذفه.</p><a href="index.html" class="back-link">العودة للقائمة الرئيسية</a>';
            }
        }
    } // --- End of Details Page Logic ---


    // --- ============ الكود الخاص بصفحة إتمام الطلب (checkout.html) ============ ---
    if (document.body.contains(document.getElementById('checkout-form'))) { // Check for element unique to checkout page
        const selectedId = localStorage.getItem('selectedPropertyId');
        const checkoutSection = document.querySelector('.checkout-section');
        const checkoutForm = document.getElementById('checkout-form');
        const confirmationMessage = document.getElementById('confirmation-message');
        const navBackLink = document.getElementById('nav-back-to-details'); // Link in nav

        if (!selectedId || !checkoutSection || !checkoutForm || !confirmationMessage) {
            console.error("Checkout page: Missing required elements or property ID.");
             if (checkoutSection) {
                 checkoutSection.innerHTML = '<h1>خطأ</h1><p>لم يتم تحديد العقار المطلوب لإتمام الطلب. يرجى العودة واختيار عقار أولاً.</p><a href="index.html" class="back-link">العودة للرئيسية</a>';
             } else {
                 document.body.innerHTML = '<h1>خطأ في تحميل الصفحة</h1><a href="index.html">العودة للرئيسية</a>';
             }
             if(navBackLink) navBackLink.style.display = 'none'; // Hide back link if error
        } else {
            const property = propertiesData.find(p => p.id === selectedId);

            if (property) {
                 // Update nav back link visibility
                if(navBackLink) navBackLink.style.display = 'inline-flex'; // Show it

                // --- Fill Property Summary ---
                const checkoutImage = document.getElementById('checkout-property-image');
                 // Use card image or first gallery image or placeholder
                const imageSrc = property.image || (property.images && property.images[0]) || 'placeholder.jpg';
                checkoutImage.src = imageSrc;
                checkoutImage.alt = property.title;
                checkoutImage.onerror = () => handleImageError(checkoutImage);

                document.getElementById('checkout-property-title').textContent = property.title;
                document.getElementById('checkout-property-location').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${property.location}`;
                document.getElementById('checkout-property-price').innerHTML = `<i class="fas fa-tag"></i> ${property.price}`;
                document.getElementById('checkout-property-id').value = property.id;
                 document.title = `طلب شراء: ${property.title} - THE ELITE`; // Update page title

                // --- Handle Form Submission ---
                checkoutForm.addEventListener('submit', (event) => {
                    event.preventDefault();
                    const submitButton = checkoutForm.querySelector('button[type="submit"]');
                    submitButton.disabled = true; // Disable button immediately
                    submitButton.innerHTML = 'جارٍ الإرسال... <i class="fas fa-spinner fa-spin"></i>'; // Add spinner


                    const selectedPaymentMethodInput = document.querySelector('input[name="payment_method"]:checked');
                    const paymentMethodValue = selectedPaymentMethodInput ? selectedPaymentMethodInput.value : 'not_selected'; // Get value or a default

                const customerData = {
                    propertyId: document.getElementById('checkout-property-id').value,
                    propertyName: property.title,
                    customerName: document.getElementById('checkout-name').value.trim(),
                    customerEmail: document.getElementById('checkout-email').value.trim(),
                    customerPhone: document.getElementById('checkout-phone').value.trim(),
                    customerNotes: document.getElementById('checkout-notes').value.trim(),
                    paymentMethod: paymentMethodValue, // **** إضافة هذه الخاصية ****
                    agreedToTerms: document.getElementById('terms').checked,
                    timestamp: new Date().toISOString()
                };

                console.log("بيانات طلب الاهتمام (محاكاة الإرسال):", customerData); // ستظهر طريقة الدفع هنا الآن
                    

                    console.log("بيانات طلب الحجز او الشراء (محاكاة الإرسال):", customerData);

                    // ***** محاكاة تأخير الشبكة وإرسال الخادم *****
                    setTimeout(() => {
                        // ***** في تطبيق حقيقي، سترسل 'customerData' إلى الخادم هنا *****
                        // fetch('/api/submit-interest', { method: 'POST', body: JSON.stringify(customerData), headers: {'Content-Type': 'application/json'} })
                        //  .then(response => response.json())
                        //  .then(data => { console.log('Server Success:', data); /* Show success message */ })
                        //  .catch(error => { console.error('Server Error:', error); /* Show error message */ });

                        // --- إظهار رسالة التأكيد (بعد محاكاة النجاح) ---
                        checkoutForm.style.display = 'none';
                        confirmationMessage.style.display = 'block';
                         // Scroll to confirmation message smoothly
                         confirmationMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

                         // (اختياري) إزالة ID من localStorage بعد الإرسال الناجح
                         // localStorage.removeItem('selectedPropertyId');
                    }, 1000); // محاكاة تأخير لمدة ثانية واحدة
                });

            } else {
                // Handle case where ID exists but property not found
                console.error(`Checkout page: Property with ID "${selectedId}" not found.`);
                checkoutSection.innerHTML = '<h1>خطأ</h1><p>العقار المحدد غير موجود. ربما تم حذفه.</p><a href="index.html" class="back-link">العودة للرئيسية</a>';
                 if(navBackLink) navBackLink.style.display = 'none'; // Hide back link
            }
        }
    } 

}); 
