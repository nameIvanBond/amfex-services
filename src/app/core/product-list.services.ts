import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface IProduct {
  id: number;
  title: string;
  desc: string;
  price: string;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductListServices {
  loadingProduct$: BehaviorSubject<IProduct> = new BehaviorSubject({id: 0, title: '', desc: '', price: '', img: ''});

  ProductListEn = [
    {
      id: 1,
      title: 'QR Menu QR service fo restaurants and stores with WhatsApp order link',
      desc: '<p>Own your store and your QR, and send to your customers with the support of the requests feature through WhatsApp</p>  <p>A new, fast and efficient way to order your daily needs with perfect contactless experience to turn their ideas into reality and increase sales with its amazing features.</p>  <p>Your own code, and your own store, QR Code, you can publish on your pages and supports any products and any restaurant with the quick purchase feature and also supports purchasing through</p>',
      price: 'SAR 33.76',
      img: 'services_1'
    },
    {
      id: 2,
      title: 'Managing social media terms-of-use for others',
      desc: '<p>The most valuable thing you own is your trade name, the process of publishing your brand name is in itself an increase in the market value of your product and company . The advantage of having active terms-of-use for you is a very important addition to business and electronic publishing of your products and services. Your customer today needs to know how professional your services are. ,, But it is also a little mysterious due to the diversity and abundance of social networking sites. That is, using it in the wrong way is a waste of money and time. We in turn help you here to find out what is best for you based on your specialization, and how to set a correct budget for this feature, with the possibility of ensuring that it operates for you.</p>',
      price: 'SAR 2,963.29',
      img: 'services_2'
    },
    {
      id: 3,
      title: 'Advertising and promotional video design service of the highest quality',
      desc: '<p>Any company, institution, or specialty needs to have a distinctive presentation video that explains your work and communicates your goals and message in a smooth and clear manner. We at Doquimantal have equipped a specialized department for video design and production for others, where we can do the following:</p> <p>1- Searching for your service and understanding your needs</p> <p>2- Writing professional advertisement text</p> <p>3- Design your own character</p> <p>4- We can design characters and add them to the video and they look like a real character from your company</p> <p>5- Design the video in a professional way with an attractive presentation</p> <p>6- Professional audio recording combined with video</p> <p>7- Export the video in quality </p>',
      price: 'SAR 550.00',
      img: 'services_3'
    },
    {
      id: 4,
      title: 'CRM WhatsApp',
      desc: '<p>The function of the service is to connect your customers and communicate with them from the stage of relying on one person and one mobile to multiple screens and greater control over WhatsApp services and linking them with records of customer information, that is, you do not need to store the customer’s name and number on the mobile, and you do not need the mobile device to be with a person One.</p>  <p>What is the service:</p> <ol> <li>It is a CRM customer relationship management software.</li> <li>WhatsApp is a custom add-on for work details details with several custom screens.</li> <li>Sending and receiving from clients.</li> <li>Send group messages to all your databases, or according to the division and categories you want.</li> <li>Sending messages depending on the workflow, for example, if the customer sends a price word, the system will send a pre-specified message.</li> <li>All sent and received messages are saved and cannot be erased and are saved and archived.</li> <li>The possibility of adding more than one WhatsApp number on the same system (in case of annual subscription, up to 3 numbers)</li> <li>The system supports multiple employees, for example, 5 employees can see all chats, and it can also manage permissions so that each employee talks to his client only, or each employee can talk to a specific business specialty.</li> <li>The system supports detailed reports. It also supports the dashboard.</li> <li>The system supports the automated response bot so that the system automatically welcomes and directs the customer according to the department.</li> <li>In the event that your number has groups, the system also supports talking with groups and groups. <li>Supports sending pre-set pictures and messages (ready models)</li> </ol>',
      price: 'SAR 371.35',
      img: 'services_4'
    },
    {
      id: 5,
      title: 'WhatsApp bot service',
      desc: '<p>It is a service that allows you to build an intelligent automated response and a ready-made response tree, the purpose of which is to create interaction with your customers and direct it to the required department and provide it with ready-made information prepared in advance so that we can serve the customer in a correct manner.</p>  <p>The benefits of using the bot system on WhatsApp are:</p> <ol> <li>The number of WhatsApp users around the world is 2.5 billion users</li> <li>An approved way of working and being accepted by customers</li> <li>Adopting any kind of answers, pictures, videos, or my writing</li> <li>Increase sales of e-commerce sites</li> <li>You can fully support your business through WhatsApp</li> <li>Complete control over conversations, as you can monitor them from a mobile application</li> <li>The possibility of connecting the work team to respond to requests also in the event that the customer chooses to speak with the customer service employee</li> <li>Link it with Facebook, Instagram and WhatsApp officially</li> <li>If a store is available on Facebook, the catalog will appear in the WhatsApp settings </li> </ol>',
      price: 'SAR 367.60',
      img: 'services_5'
    },
    {
      id: 6,
      title: 'Documantal Booking platform for managing reservations in the medical sector',
      desc: '<p>Ease the trouble of booking traditional appointments with our professional system for reservations and appointments through a friendly interface for users and customers that enables you to add and customize the services provided by your organization and coordinate them with (employees / work managers / doctors / trainers) and integrate them with automatic alerts as soon as the appointment is created on WhatsApp and SMS under the base Your clients and data. In other words, Documental Booking is for various works that need secretarial, scheduling and organizing appointments.</p>  <p>How the system works:</p> <ul> <li>Determining the work site</li> <li>Defining services and departments</li> <li>Determine clinics and doctors</li> <li>Add hours and work times</li> <li>Determining the length of the patient’s stay in advance and the waiting period</li> <li>Sending a WhatsApp or email to the customer when booking</li> <li>Send a WhatsApp or email to the doctor when booking</li> <li>Sending a reminder to the customer before the appointment to the customer by e-mail or WhatsApp</li> <li>Sending an email or WhatsApp after 24 hours of the customer’s presence to confirm the quality of the service</li> <li>The ability to add self-reservation on your website or application</li> </ul>',
      price: 'SAR 843.98',
      img: 'services_6'
    },
    {
      id: 7,
      title: 'CRM',
      desc: '<p>The CRM system is dedicated to communication, and this version is for alerts and transfer orders and contains the following models:</p> <ul> <li>Module for managing contacts and customer information</li> <li>send whatsapp</li> <li>email module</li> <li>web forms module</li> <li>SMS Forms Module</li> <li>Email Forms Module</li> <li>Trash module (to recover deleted items)</li> <li>Linking with SMS</li> <li>A ticketing system, the purpose of which is to open a ticket for each request and automatically transfer it to the required department and follow-up to close it</li> <li>Detailed case reports</li> <li>Sales follow up</li> <li>Follow up on potential clients</li> <li>admin properties</li> <li>Prospective customer module</li> <li>Corporate module</li> <li>Technical Support Ticket Module</li> <li>Data Bank Module</li> <li>calendar module</li> <li>Internal email module</li> <li>Abstract page module</li> <li>Staff module</li> <li>Call log module</li> <li>Document module</li> <li>Reporting module </li> </ul>',
      price: 'SAR 281.33',
      img: 'services_7'
    },
    {
      id: 8,
      title: 'Chatdisk application and link WhatsApp and social media',
      desc: '<p>This service is intended to respond to your WhatsApp, as well as to social networking sites (such as Facebook, Instagram, live chats on websites) from one application and for the number of users according to the number of customer service employees you have.</p>  <p>A professional service and you can follow up requests from your mobile phone (as a project manager or admin) so that you can watch all conversations from WhatsApp, Facebook, or chat from the site or Instagram, and follow up on the performance of employees and the way they deal with customers.</p>  <p>You can use the application for the purposes of:</p>  <ul> <li>Sales: Improve sales of products or services and respond to all requests from one place</li> <li>Notifications: Receive notifications for all social media terms-of-use from one place</li> <li>Orders: Quickly manage orders</li> <li>Newsletters: send updates via WhatsApp</li> <li>Reminders: send a reminder fund-registration what to do</li> <li>Estimates: send quotations to potential clients</li> </ul>',
      price: 'SAR 337.59',
      img: 'services_8'
    },
    {
      id: 9,
      title: 'Launching targeted advertising campaigns on social media SMM',
      desc: '<p>We create and configure marketing campaign accounts, configure settings and manage ads and improvements across business accounts (Facebook » Instagram). You will be aware of marketing campaign reports on all communication channels, Marketing Campaigns Report.</p>  <p>We have full knowledge of how to be targeted and how to improve advertising and targeting settings to ensure the highest result for interested customers and at the lowest possible costs as funded ads.</p>  <p>Our advertising campaigns are calculated on the funding value. In the amount of 20% of the campaign value Example: The amount of the campaign is $1,000, distributed as follows: $800 of funding for the campaign is fully paid. And $200 for Documental.</p>  <p>The minimum campaign implementation is $500 per month inclusive of advertising costs, $400 for funded ads and $100 for Documental.</p>  <p>The project includes</p> <ol> <li> Design the advertisement in a professional manner</li> <li> Writing the content of the advertisement so that it touches the feeling of interested customers</li> <li> Targeting settings for advertising - we arrange them to reach the specific required segment and at the lowest financing costs to reduce financial waste as much as possible.</li> <li> Launching the advertisement, with full supervision from you on the campaign and the value of its financing through a direct and instant link.</li> </ol>',
      price: 'SAR 375.10',
      img: 'services_9'
    },
    {
      id: 10,
      title: 'Managing Facebook Pages and Campaigns',
      desc: '<p>Managing Facebook ads and our services in this sector and with our great experience and knowledge of the importance of a social marketing participation page, your brand is important, Facebook offers a great service that helps you spread your brand in a way that reaches many followers and those interested in your services.</p>  <p>This giant site, which has more than a billion followers, is a good source for receiving purchase orders for your services and products, your smart way of submitting topics and relying on Documental to formulate words and images, and making advertising targeting in a smart way that provides you with more requests and is specifically designed to serve your customers.</p>  <p>In Documental, we provide easy and clear packages with a professional team in 5 countries with the experience of thousands of customers.</p>',
      price: 'SAR 1,837.99',
      img: 'services_10'
    },
    {
      id: 11,
      title: 'Call Center - One Time Purchase',
      desc: '<p>Documental Call Center system is an innovative solution to manage multiple communication channels with the aim of improving performance, increasing loyalty and achieving profits</p>  <p>The Documental Call Center system is a wave of the future and can enhance your business in ways you may not have considered. Which brings out its benefits remarkably instead of the traditional methods of managing calls by unifying it with a smooth and practical unified user interface in addition to the ease of installation, customization and use.</p>  <p>We have 3 packages for the Documental Call Center copy for purchase. Basic version, advanced business version, and enterprise professional version.</p>  <p>The Documental Call Center service is a purchase that is valid for all businesses, whether outgoing or incoming calls or both. Where all the powers are available from recording and managing calls, staff performance and measuring customer satisfaction.</p>  <p>You can connect branches, install multiple phones or you can use DocSAS to answer the call from your desktop. You can connect it with the Cloud Call Center service for remote work as well.</p>',
      price: 'SAR 7,502.00',
      img: 'services_11'
    },
    {
      id: 12,
      title: 'Doc Food app for restaurants and delivery management app Doc Food',
      desc: '<p>Doc Food application includes</p> <ul> <li>List of main categories with a main image for each category and an icon image</li> <li>List of subcategories with a subclass image for each class and an icon image</li> <li>List of products with a picture of each product</li> <li>Side Order List</li> <li>Offers List</li> <li>The price of each product is exclusive of tax</li> <li>Description of each product</li> <li>Add calories to each product if you wish</li> <li>Selecting distinguished products to be displayed first</li> <li>Discount codes</li> <li>Discounts with the percentage of each of them on any product and the image of the discount</li> <li>Delivery areas with the price of each area</li> <li>The branches of the application with the address and contact number of the branch</li> <li>Blog Articles</li> <li>Supports Google Play, App Store</li> <li>Smart food design</li> </ul>',
      price: 'SAR 1,849.24',
      img: 'services_12'
    },
    {
      id: 13,
      title: 'Reply to WhatsApp Business Multi User - Monthly',
      desc: '<p>This service is dedicated to responding to your WhatsApp business, so that we have a work team whose job is to follow up on requests on WhatsApp and respond to them according to the needs of your project, we can link your WhatsApp to our terms-of-use and the employee on duty or more responds to your customers without the need to use your mobile device. Professional service, and you can follow up on orders from your mobile phone. The service includes all the additional solutions shown in the table above. If you are interested, it is preferable to alert us by clicking on the chat or WhatsApp icon and inquire with the customer service employee directly</p> <ul> <li>Sales: Improving the sales of products or services</li> <li>Notifications: Send notifications via WhatsApp</li> <li>Delivery: Sending and receiving shipping information</li> <li>Orders: Quickly manage orders with chat via WhatsApp</li> <li>Alerts: Send alerts through WhatsApp</li> <li>Clients Everywhere: Manage clients from all over the world thanks to the translation tool</li> <li>News releases: send updates via WhatsApp</li> <li>Reminders: send a reminder fund-registration what to do</li> <li>Estimates: send quotations to potential clients</li> <li>Authentication: sending and verifying the security code</li> <li>Helpdesk: Provide support to your customers on WhatsApp</li> <li>Account activation: send activation codes to users </li> </ul>',
      price: 'SAR 1,620.43',
      img: 'services_13'
    },
    {
      id: 14,
      title: 'Web & Web Design',
      desc: '<p>Why should you choose Documental Web to design your website and highlight your identity?</p>  <ul> <li>We have designed and developed many websites in various fields, whether they are small or medium companies or large companies in the Arab world</li> <li>We have many years of experience in developing websites, we offer it in your hands to implement your project that you aspire to and bring your website back to life</li> <li>We have a highly experienced team of developers who always strive to serve you and meet your needs in ways that benefit your field</li> </ul>  <p>Your website is the official spokesperson for your business<br> We work on the success of your brand through distinguished and professional services for companies, and designing a website for your company is the first important step in this matter. With us, your company\'s website is always distinctive, innovative, simple. All this is a wonderful, genius combination that we offer you through our experience over the past years</p>',
      price: 'SAR 3,375.90',
      img: 'services_14'
    },
    {
      id: 15,
      title: 'Documantal Live Vehicle and Delivery Management App and Platform',
      desc: '<p>Doc Live is an application that allows you to manage your business that contains delivery service and delivery service<br> You can use Dock Live in your business such as delivery and delivery, beauty services, repair services, home services, health services, welfare services and any type of company that needs daily monitoring and guidance for the tasks required to give it real time for the success of your business<br> Doc Live is a complete system that connects the administrator with the customer through simple and easy software<br> You can use the Dock Live by subscribing to the monthly or annual membership</p>  <ul> <li>Manage daily driver task</li> <li>Ease of setting a delivery or delivery request</li> <li>Alert notifications</li> <li>Giving the real time of the place to the driver</li> <li>Ease of choosing a driver from a group of drivers</li> <li>Send alerts to the driver through messages, program alerts, or email</li> <li>Activate sitemaps</li> <li>Readiness for transportation</li> <li>Customer receipt signature</li> <li>View the dates and dates of tasks</li> <li>Show driver available or unavailable</li> <li>Giving real time to available driver</li> <li>Giving real time to the driver\'s face</li> </ul>',
      price: 'SAR 746.45',
      img: 'services_15'
    },
    {
      id: 16,
      title: 'Cloud call center - monthly',
      desc: '<p>It is a service that allows you to acquire an advanced call center with full international specifications and multiple features and advantages while allowing the feature of having the employee remotely outside the company’s headquarters without purchasing the system, and committing on a monthly basis only, knowing that we can connect the system from your office directly or by hosting it with us and in the name of your company directly</p>  <p>With all communication capabilities available, you can communicate using several methods:</p> <ol> <li>Calling through mobile applications Dockphone</li> <li>Connect through the Docphone program on your Windows or Mac computer</li> <li>Connect through the web through a dedicated link and from anywhere</li> </ol>   <p>We will provide all means of monitoring to be assured of your business:</p> <ol> <li>Live monitoring of communications at the same moment</li> <li>Detailed reports showing all contact details for more than 50 reports</li> <li>Record all incoming and outgoing calls and you can hear them smoothly</li> </ol>',
      price: 'SAR 699.19',
      img: 'services_16'
    },
    {
      id: 17,
      title: 'Telemarketing',
      desc: '<p>$3 is calculated for each successful call that includes all the customer’s information and interest in buying or subscribing at a rate of more than 90% with recording the call and communicating with him, including booking a confirmed appointment, either by visiting or attending</p>  <p>Minimum number of subscriptions is 100 successful connections</p>  <p>Telemarketing is one of the most important departments of your company, even with the presence of e-marketing, telemarketing is still one of the oldest and fastest successful ways to develop business. To carry out this work, you need tools, an experienced team, experience, patience, and a clear plan for implementation.</p>  <p>We, Documantal, provide all these tools on your behalf, study your product and understand your project, and accordingly we build a third party telemarketing department to get customers interested in your product and promote your product.</p>  <p>Our method is successful because we have all the tools of cloud communications, CRM, and social media connectivity, in addition to our many years of experience in implementing projects of this kind.</p>  <p>To subscribe with us, you can use this offer here and depend on the number of potential customers (100% interested) to buy your product or subscribe to your services.</p>',
      price: 'SAR 11.25',
      img: 'services_17'
    },
    {
      id: 18,
      title: 'Operating a call center for others - including employees and a call center',
      desc: '<p>This service is for third party call centers, where we answer your company\'s calls daily 8 hours, 16 hours or 24 hours (choose from the list to see the price). The service includes all the additional solutions shown in the table below. If you are interested, it is preferable to alert us by clicking on the chat or WhatsApp icon and inquire with the customer service employee directly ></p>  <p>You can choose if you want additional services on the answering service from the list as well, please click to see prices and details below.</p>  <p>In short, we connect your phone lines with the Documental Cloud Call Center service, and connect them with our customer service terms-of-use, where the work team deals with your customers\' requests and adds them to the CRM or if you have a platform of your own.</p>  <p>High professionalism at work, very satisfactory, and your aspirations flow</p>  <ul> <li>A CRM account for each project</li> <li>Answer the phone on behalf of your company</li> <li>An instant alert to you when a call comes in</li> <li>Thanking the customer after communicating electronically via messages</li> <li>Reply to your social media</li> <li>Build your own question and answer file</li> <li>Record all calls</li> <li>Reply to a professional on the call with a distinctive media voice</li> <li>Reply to me in case of out of working hours</li> <li>Online reports for calls</li> <li>Supervisor for each project</li> <li>Find out more when you contact us</li> </ul>',
      price: 'SAR 2,700.72',
      img: 'services_18'
    },
    {
      id: 19,
      title: 'Doc Store app and store',
      desc: '<p>The Doc Store application and the e-commerce site are an integrated system that allows you to display and list your products, departments, delivery methods, and others through an online platform on your website.</p>  <p>We provide great and professional services fund-registration e-commerce, starting with planning and designing the site and ending with reviewing products and then opening a shopping cart and shopping within the site…</p>   <p>The most prominent features that are considered one of the basics of programming and operating an e-commerce site:</p> <ul> <li> Ready to work and deal with any kind of goods and services</li> <li> A very easy way to install through the Internet</li> <li> User-friendly control panel</li> <li> The presence of integrated ready-made templates</li> <li> The ability to upload a group of products and images at once as a group</li> <li> Ability to export and import files as CSV files</li> <li> There is no need for prior programming knowledge to be able to install and manage the system</li> </ul>   <p>To know the features, details and prices, please click on “For details and prices at the bottom of the screen” Characteristics of languages ​​and translation<br> Edit search engines<br> Design and appearance<br> Product Catalogs Features<br> Products details<br> Marketing and promotional tools<br> Trading and Inventory<br> Payment gates and methods<br> customers service<br> protection<br> Save customer information</p>',
      price: 'SAR 2,513.17',
      img: 'services_19'
    }

  ];


  ProductListAr = [
    {
      id: 1,
      title: 'QR Menu خدمة الكيو ار للمطاعم والمتاجر مع ربط مع الواتساب أوردر ',
      desc: '<p><strong>امتلك متجرك والكيو أر الخاص بك، وارسل لعملائك مع دعم خاصية الطلبات من خلال الواتساب</strong></p><p>طريقة جديدة وسريعة وفعالة لطلب احتياجاتك اليومية مع تجربة مثالية بدون تلامس لتحويل أفكارهم إلى واقع وزيادة المبيعات بميزاتها المذهلة.</p><p>كود خاص بك ، ومتجر خاص بك، كيو ار كود، يمكنك نشره في صفحاتك ويدعم اي منتجات واي مطعم مع خاصية الشراء السريع وايضاً يدعم الشراء من خلال الواتس اب الخاص بك مباشرة. احجز الكود الخاص بك الآن</p>',
      price: '9.00$',
      img: 'services_1'
    },
    {
      id: 2,
      title: 'إدارة منصات السوشيال ميديا للغير ',
      desc: '<p><strong>أغلى ما تملك هو اسمك التجاري ،، عملية نشر هذا المسمى التجاري الخاص بك ،، هو بحد ذاته رفع في القيمة السوقية لمنتجك وشركتك<span > ، </span>تعتبر ميزة وجود منصات نشطة لك إضافة مهمة جداً للأعمال والنشر الإلكتروني الخاص بمنتجاتك وخدماتك ، عميلك اليوم يحتاج لمعرفة مدى احتراف خدماتك ،، لكنها أيضاً غامضة قليلاً بسبب تنوع مواقع التواصل الإجتماعي وكثرتها. أي ان استخدامها بطريقة خاطئة تعتبر هدراً للمال والوقت ،، نحن بدورنا نساعدك هنا لمعرفة ما هو الأفضل لك بناءً على تخصصك ،، وكيف يتم وضع ميزانية صحيحة لهذه الميزة ،، مع امكانية التكفل بتشغيلها لك</strong></p><p ><span ><span >&nbsp;</span></span>نحن بدورنا في<span > #</span>دوكيومانتال لدينا خطط رائعة لنشر العلامة التجارية وتوصيل اسمك وشعارك و<span > Slgon </span>الخاص بك لكل الشرائح المستهدفة ،، عائداتها رائعة تساعدك على نشر فروعك وعلى فتح فرص الفرنشايز<span ><span >&nbsp; </span></span>والاسثمار ،، بالاضافة لجذب عملاء جدد<span >. </span>هذا الموضوع يعتمد على طبيعة المنتج وأهداف المنشاة ومدى رغبتها بالإنتشار وسرعته<span >.</span></p>',
      price: '790.00$',
      img: 'services_2'
    },
    {
      id: 3,
      title: 'خدمة تصميم الفيديوهات الاعلانية و الدعائية باعلى جودة',
      desc: '<p>أي شركة أو مؤسسة او تخصص معين يحتاج إلى وجود فيديو تقديمي مميز يشرح عملك ويوصل أهدافك ورسالتك بطريقة سلسة وواضحه، نحن في دوكويمانتال قمنا بتجهيز قسم مختص لتصميم وانتاج الفيديو للغير، حيث يمكننا عمل التالي:</p> <p>١- البحث عن خدمتك وتفهم احتياجك</p> <p>٢- كتابة نص اعلاني محترف</p> <p>٣- تصميم كاركتر خاص بك</p> <p>٤- يمكننا تصميم شخصيات واضافتها للفيديو وتكون تشبه شخصية حقيقية من شركتكم</p> <p>٥- تصميم الفيديو بطريقة احترافية مع عرض جذاب</p> <p>٦- تسجيل صوتي احترافي مدمج مع الفيديو</p> <p>٧- تصدير الفيديو بجودة </p>',
      price: '550.00$',
      img: 'services_3'
    },
    {
      id: 4,
      title: 'سي ار ام واتساب',
      desc: '<p ><span ><strong>وظيفة الخدمة هو ربط عملائك وتواصلك معهم من مرحلة الاعتماد على الشخص الواحد والجوال الواحد الى شاشات متعددة وسيطرة اكبر على خدمات الواتساب وربطها مع السجلات الخاصة بمعلومات العملاء، اي لا تحتاج الى تخزين اسم العميل ورقمه على الجوال، ولا تحتاج الى ان يكون جهاز الموبايل مع شخص واحد.</strong></span></p> <p><strong>ما هي الخدمة:</strong></p> <ol> <li >هو برنامج سي ار ام لإدارة علاقات العملاء.</li> <li >الواتساب هي اضافة مخصصة لتفاصيل تفاصيل العمل بعدة شاشات مخصصة.</li> <li >ارسال واستقبال من العملاء.</li> <li >ارسال رسائل جماعية لجميع قواعد بياناتك، او حسب التقسيم والفئات التي ترغب بها.</li> <li >ارسال رسائل بالاعتماد على خط سير العمل، مثلاً لو العميل ارسل كلمة سعر، يقوم النظام بارسال رسالة مخصصة مسبقاً.</li> <li >يتم حفظ جميع الرسائل المرسلة والمستقبلة ولا يمكن محوها ويتم حفظها وارشفتها.</li> <li >امكانية اضافة أكثر من رقم واتساب على نفس النظام (في حال الاشتراك السنوي لغاية عدد ٣ ارقام)</li> <li >يدعم النظام تعدد الموظفين، مثلاً موظفين عدد ٥ يمكنهم مشاهدة جميع الدردشات ويمكن ايضاً ادارة الصلاحيات بحيث كل موظف يتحدث مع عميله فقط، او كل موظف يمكنه التحدث مع تخصص معين بالعمل.</li> <li >النظام يدعم التقارير التفصيلية. ويدعم ايضاً الداشبورد.</li> <li >يدعم النظام الرد الآلي bot بحيث يقوم النظام الياً بالترحيب بالعميل وتوجيهه حسب القسم.</li> <li >في حال رقمك عليه قروبات يدعم النظام ايضاً التحدث مع القروبات والمجموعات.</li> <li >يدعم ارسال الصور والرسائل المعدة مسبقاً<span> (</span>نماذج جاهزة<span >)</span></li> </ol> ',
      price: '99.00$',
      img: 'services_4'
    },
    {
      id: 5,
      title: 'خدمة الواتس اب بوت WhatsApp Bot',
      desc: ' <p><strong>هي خدمة تتيح لك بناء رد الي ذكي وشجرة ردود جاهزة الغرض منها خلق تفاعل مع عملائك وتوجيهه للقسم المطلوب وافادته بمعلومات جاهزة معدة مسبقاً لكي نتمكن من خدمة العميل بطريقة صحيحة.</strong></p>  <p>فوائد استخدام البوت سيستم على الواتساب هو:<br> ١- عدد مستخدمين الواتساب حول العالم هو ٢ ونصف مليار مستخدم<br> ٢- طريقة معتمدة للعمل وتقبل العملاء لها<br> ٣- اعتماد اي نوع من الاجابات صور او فيديوهات او كتابي<br> ٤- زيادة مبيعات مواقع التجارة الاكترونية<br> ٥- يمكنك تقديم دعم أعمالك بالكامل من خلال الواتساب<br> ٦- سيطرة كاملة على المحادثات حيث يمكنك مراقبتها من تطبيق على الجوال<br> ٧- امكانية ربط فريق العمل للرد على الطلبات ايضاً في حال اختيار العميل التحدث مع موظف خدمة العملاء<br> ٨- ربطه مع الفيسبوك ومع الانستجرام والواتساب بصورة رسمية<br> ٩- في حال توفر متجر على الفيسبوك catalogue تظهر في اعدادات الواتساب</p> ',
      price: '98.00$',
      img: 'services_5'
    },
    {
      id: 6,
      title: 'منصة دوكيومانتال Booking لإدارة حجوزات القطاع الطبي ',
      desc: ' <p>سهل على نفسك عناء حجز المواعيد التقليدية مع نظامنا المحترف للحجوزات والمواعيد عبر واجهة صديقة للمستخدمين والعملاء التي تمكنك من إضافة وتخصيص الخدمات المقدمة من مؤسستك وتنسيقها مع ( الموظفين / مدراء العمل / الأطباء / المدربين ) ودمجها بتنبيهات تلقائية بمجرد إنشاء الموعد على الواتساب والرسائل القصيرة تحت قاعدة عملاء و بيانات خاصة بك. بمعنى آخر دوكيومانتال بوكينج هي لمختلف الأعمال التي تحتاج سكرتارية وجدولة وتنظيم للمواعيد .</p> <p>آلية عمل النظام :<br> – تحديد موقع العمل<br> – تحديد الخدمات والاقسام<br> – تحديد العيادات والاطباء<br> – اضافة ساعات وماعيد العمل<br> – تحديد مدة مكوث المريض سلفاً ومدة الإنتظار<br> – ارسال واتساب أو ايميل للعميل عند الحجز<br> – ارسال واتساب او ايميل للطبيب عند الحجز<br> – ارسال تذكير للعميل قبل الموعد للعميل ايميل او واتساب<br> – ارسال ايميل او واتساب بعد ٢٤ ساعة من حضور العميل للتاكيد على جودة الخدمة<br> – امكانية اضافة الحجز الذاتي على موقعك الالكتروني او التطبيق</p>  ',
      price: '225.00$',
      img: 'services_6'
    },
    {
      id: 7,
      title: 'سي ار ام CRM',
      desc: '<p><strong>نظام إدارة علاقات العملاء سي أر إم مخصص للتواصل،، وهذه النسخة خاصة للتنبيهات وتحويل الطلبات وتحتوي على الموديلات التالية:</strong><br> موديول ادارة جهات الاتصال ومعلومات العملاء<br> ارسال واتساب<br> موديول البريد الإكتروني<br> موديول نماذج الويب web forms<br> موديول نماذج الرسائل القصيرة<br> موديول نماذج البريد الاكتروني<br> موديول سلة المهملات (لاسترجاع المحذوف)<br> الربط مع الرسائل القصيرة<br> نظام تذاكر والغرض منه فتح تذكرة بكل طلب وتحويلها للقسم المطلوب بصورة اوتوماتيكية ومتابعتها لاغلاقها<br> تقارير تفصيليه للحالات<br> متابعه المبيعات<br> متابعة العملاء المحتملين<br> خصائص الأدمن<br> موديول العملاء المحتملين<br> موديول الشركات<br> موديول تذاكر الدعم الفني<br> موديول بنك المعلومات<br> موديول التقويم<br> موديول البريد الإلكتروني الداخلي<br> موديول صفحة الملخصات<br> موديول الموظفين<br> موديول سجل المكالمات<br> موديول المستندات<br> موديول التقارير</p>',
      price: '75.00$',
      img: 'services_7'
    },
    {
      id: 8,
      title: 'تطبيق شات ديسك وربط الواتس والسوشيال ميديا',
      desc: ' <p>هذه الخدمة مخصصة للرد على الواتساب الخاص بك ,بالاضافة لمواقع التواصل الاجتماعي مثل (فيسبوك ، انستقرام ، الدردشات الحية على المواقع الاكترونية ) من تطبيق واحد ولعدد مستخدمين حسب عدد موظفين خدمة العملاء لديك.</p> <p>خدمة احترافية ويمكنك متابعة الطلبات من جوالك الخاص (كمدير مشروع أو أدمن) بحيث يمكنك مشاهدة جميع المحادثات من الواتساب او الفيسبوك او الشات من الموقع او الإنستجرام، ومتابعة أداء الموظفين وطريقة تعاملهم مع العملاء. </p> <p>يمكنك استخدام التطبيق لغايات ومنها:<br> •\tمبيعات : تحسين مبيعات المنتجات او الخدمات والرد على جميع الطلبات من مكان واحد<br> •\tالاشعارات :استقبال الاشعارات لجميع منصات السوشال ميديا من مكان واحد<br> •\tالطلبات : ادارة الطلبات بسرعة<br> •\tالنشرات الاخبارية : ارسال التحديثات عبر الواتساب<br> •\tتذكير : ارسال تذكير حول ما يجب القيام به<br> •\tالتقديرات : ارسال عروض اسعار للعملاء المحتملين </p>',
      price: '90.00$',
      img: 'services_8'
    },
    {
      id: 9,
      title: 'إطلاق حملات إعلانية مستهدفة على السوشيال ميديا SMM\t',
      desc: '<p><strong>نقوم بانشاء وتهيئة حسابات الحملات تسويقية وتهيئة الاعدادات والادارة للاعلانات والتحسينات عبر حسابات الأعمال ( Facebook » Instagram )، ستكون على اطلاع بتقارير الحملات التسويقية على جميع قنوات التواصل Marketing Campaigns Report.</strong></p> <p>لدينا المعرفة التامة كيف يتم الإستهداف وكيفية تحسين الإعلان واعدادات الإستهداف لضمان اعلى نتيجة عملاء مهتمين وبأقل تكاليف ممكنة كإعلانات ممولة.</p> <p>يتم احتساب حملاتنا الإعلانية على قيمة التمويل. بمبلغ وقيمته ٢٠٪ من قيمة الحملة<br> مثال: مبلغ الحملة هو ١٠٠٠ دولار، يتم توزيعها كالتالي: ٨٠٠ دولار تمويل للحملة مدفوعة باالكامل. و ٢٠٠ دولار مبلغ لدوكيومانتال.</p> <p>الحد الأدنى لتنفيذ الحملة هو ٥٠٠ دولار شهري شاملة تكاليف الاعلان بواقع ٤٠٠ دولار للإعلان الممول و ١٠٠ دولار لدوكيومانتال</p> <p>يشمل المشروع،<br> ١- تصميم الإعلان بطريقة احترافية<br> ٢- كتابة محتوى الإعلان بحيث يلامس شعور العملاء المهتمين<br> ٣- اعدادات الإستهداف للإعلان – نقوم بترتيبها لتصل للشريحة المطلوبة بعينها وبأقل تكاليف تمويليه لنقلل الهدر المالي قدر المستطاع.<br> ٤-إطلاق الإعلان، مع اشراف تام منكم على الحملة وقيمة تمويلها من خلال رابط مباشر ولحظي.</p>',
      price: '100.00$',
      img: 'services_9'
    },
    {
      id: 10,
      title: 'إدارة صفحات وحملات الفيسبوك Facebook',
      desc: '<p><strong>إدارة اعلانات الفيسبوك وخدماتنا بهذا القطاع وبخبرتنا الكبيرة ومعرفتنا بمدى أهمية وجود صفحة مشاركة اجتماعية تسويقية، علامتك التجارية مهمة، الفيسبوك يقدم خدمة رائعة تساعدك على نشر علامتك التجارية بطريقة تصل لكثير من المتابعين والمهتمين بخدماتك.</strong></p> <p>هذا الموقع العملاق الذي يضم أكثر من مليار متابع يعتبر مصدر جيد لاستقبال طلبات شراء لخدماتك ومنتجاتك، طريقتك الذكية بطرح المواضيع والإعتماد على دوكيومانتال لصياغة الكلمات والصور، وعمل استهداف اعلاني بطريقة ذكية يوفر عليك طلبات أكثر ومصممة خصيصاً لخدمة زبائنك.</p> <p>نوفر في دوكيومانتال باقات سهلة وواضحة مع فريق عمل محترف في ٥ دول مع خبرة آلاف العملاء.</p> ',
      price: '490.00$',
      img: 'services_10'
    },
    {
      id: 11,
      title: 'كول سنتر – شراء مرة واحدة',
      desc: '<p ><strong>نظام دوكيومنتال كول سنتر هو حل مبتكر لإدارة قنوات الاتصال المتعددة بهدف الارتقاء بمستوى الاداء وزيادة الولاء وتحقيق الارباح</strong></p> <p >نظام دوكيومانتال كول سنتر هو موجة من المستقبل، ويمكن من خلاله تعزيز عملك بطرق قد لا تكون قد نظرت فيها. والتي تبرز فوائدها بشكل ملحوظ بدلا من الطرق التقليدية لإدارة المكالمات وذلك من خلال توحيدها بواجهة استخدام موحدة سلسة وعملية بالاضافة الى سهولة التركيب والتخصيص والإستخدام .</p> <p ><strong>يتوفر لدينا ٣ باقات لنسخة دوكيومانتال كول سنتر للشراء. نسخة بيسك (أساسية) ونسخة أعمال متقدمة ، ونسخة أحترافية انتربرايس.</strong></p> <p >خدمة دوكيومانتال كول سنتر شراء تصلح لجميع الأعمال، اما كانت اتصالات صادرة او واردة او كلاهما معاً. حيث يتوفر جميع الصلاحيات من تسجيل وادارة للمكالمات واداء الموظفين وقياس رضا العملاء.</p> <p >يمكنك ربط فروع، وتركيب هواتف متعددة أو يمكنك استخدام برمجية دوك ساس للرد على الاتصال من سطح المكتب. يمكنك ربطها مع خدمة كلاود كول سنتر للعمل عن بعد أيضاً.</p> ',
      price: '2,000.00$',
      img: 'services_11'
    },
    {
      id: 12,
      title: 'تطبيق دوك فود للمطاعم وتطبيق إدارة التوصيل Doc Food',
      desc: '<p>تطبيق دوك فود يشمل</p> <ul> <li>قائمة الاصناف الرئيسية مع صورة رئيسي لكل صتف وصورة ايقونة</li> <li> قائمة الاصناف الفرعية مع صورة فرعي لكل صتف وصورة ايقونة</li> <li> قائمة المنتجات مع صورة لكل منتج</li> <li> قائمة الطلبات الجانبية</li> <li> قائمة العروض</li> <li> سعر كل منتج غير شامل الضريبة</li> <li> وصف لكل منتج</li> <li> اضافة سعرات حرارية لكل منتج ان رغبتم</li> <li> تحديد المنتجات المتميزة ليتم عرضها اولا</li> <li> اكواد الخصم</li> <li> خصومات مع نسبة كل منهم وعلى اي منتج وصورة الخصم</li> <li> مناطق التوصيل مع سعر كل منطقة</li> <li> الأفرع الخاصة بالتطبيق مع العنوان ورقم الاتصال بالفرع</li> <li> مقالات المدونة</li> <li> يدعم Google Play , App Store</li> <li> تصميم ذكي للمأكولات</li> </ul>',
      price: '493.00$',
      img: 'services_12'
    },
    {
      id: 13,
      title: 'الرد على واتس اب بيزنز متعدد المستخدمين – شهري',
      desc: '<p>هذه الخدمة مخصصة للرد على الواتساب بزنز الخاص بك، بحيث لدينا فريق عمل وظيفته متابعة الطلبات على الواتساب والرد عليها بما يتناسب احتياجات مشروعك، يمكننا ربط الواتساب الخاص بك بمنصاتنا ويقوم الموظف المناوب او اكثر بالرد على عملائك من غير الحاجة لاستخدام جهاز الجوال الخاص بك. خدمة احترافية ويمكنك متابعة الطلبات من جوالك الخاص تشمل الخدمة جميع الحلول الإضافية الموضحة بالجدول أعلاه. اذا كنت مهتم يفضل تنبيهنا بالضغط على ايقونة الشات او الواتس اب والاستعلام مع موظف خدمة العملاء مباشرة</p>   <ul> <li> مبيعات: تحسين مبيعات المنتجات او الخدمات</li> <li> الاشعارات: ارسال الاشعارات عبر الواتس اب</li> <li> تتبيع التوصيل: ارسال و استقبال معلومات الشحن</li> <li> الطلبات: اداره الطلبات بسرعه مع الدردشه عبر الواتس اب</li> <li> التنبيهات: ارسال التنبيهات من خلال الواتس اب</li> <li> عملاء من كل مكان: دارة العملاء من جميع انحاء العالم بفضل اداة الترجمة</li> <li> النشرات الاخبارية : ارسال التحديثات عبر الواتس اب</li> <li> تذكير: ارسال تذكير حول ما يجب القيام به</li> <li> التقديرات: ارسال عروض الاسعار للعملاء المحتملين</li> <li> المصادقة: ارسال و التحقق من رمز الحماية</li> <li> مكتب المساعدة: تقديم الدعم لعملائك على الواتس اب</li> <li> تفعيل الحساب: ارسال رموز التفعيل للمستخدمين</li> </ul>',
      price: '432.00$',
      img: 'services_13'
    },
    {
      id: 14,
      title: 'تصميم المواقع الإلكترونية والويب',
      desc: '<p><strong>لماذا عليك اختيار دوكيومانتال ويب لتصميم موقعك الالكتروني وإبراز هويتك ؟</strong></p> <ul> <li>قمنا بتصميم وتطوير مواقع عديدة في مختلف المجالات سواء كانت شركات صغيرة أو متوسطة أو الشركات الكبيرة بالوطن العربي</li> <li>لدينا خبرة سنوات طويلة في تطوير المواقع الالكترونية نقدمها بين يديك لتنفيذ مشروعك الذي تطمح له وإعادة موقعك للحياة</li> <li>لدينا فريق عمل من المطورين ذو خبرات عالية يسعى دائما لخدمتك وتلبية إحتياجاتك بالطرق التي تفيد مجال عملك</li> </ul> <p><strong>موقعك الالكتروني هو المتحدث الرسمي لأعمالك</strong><br> نعمل علي انجاح علامتك التجارية من خلال خدمات مميزة و احترافية للشركات وتصميم موقع لشركتك هو اول الخطوات الهامة لهذا الامر. معنا موقع شركتك دائما مميز, مبتكر, بسيط كل هذا مزيج رائع عبقري نقدمه لك من خلال خبرتنا طوال السنوات الماضية</p> ',
      price: '900.00$',
      img: 'services_14'
    },
    {
      id: 15,
      title: 'تطبيق ومنصة دوكيومانتال لايف لإدارة المركبات والتوصيل',
      desc: ' <p><strong>دوك لايف هو تطبيق يتيح لك اداره اعمالك التي تحتوي على خدمه التوصيل وخدمه التسليم </strong><br> – يمكنك استخدام دوك لايف في اعمالك مثل التسليم والتوصيل, وخدمات التجميل ,خدمات التصليح ,خدمات المنزليه خدمات الصحة , وخدمات الرفاهية وأي نوع من الشركات التي تحتاج مراقبه وتوجيه يومي للمهمات المطلوبه لاعطائها وقتها الحقيقي لنجاح اعمالك<br> – دوك لايف عباره عن منظومه كامله تربط المسؤول مع العميل عن طريق برمجيات سهله وبسيطه<br> – تستطيع استخدام الدوك لايف عن طريق الاشتراك بالعضويه الشهريه او السنويه</p>  <ul> <li>إدارة مهمة السائق اليومية</li> <li>سهوله تعيين طلب التوصيل او التسليم</li> <li>اشعارات تنبيه</li> <li>اعطاء الوقت الحقيق للمكان عند السائق</li> <li> سهوله اختيار السائق من مجموعه السائقين</li> <li> ارسال تنبيهات للسائق عن طريق الرسائل او تنبيهات البرنامج او الايميل</li> <li> تنشيط خرائط الموقع</li> <li> جاهزيه النقل</li> <li> توقيع استلام العميل</li> <li> مشاهده مواعيد وتواريخ المهام</li> <li> اظهار السائق متاح او غير متاح</li> <li> اعطاء الوقت الحقيقي للسائق المتاح</li> <li> اعطاء الوقت الحقيقي لوجهه السائق</li> </ul> ',
      price: '199.00$',
      img: 'services_15'
    },
    {
      id: 16,
      title: 'كلاود كول سنتر سحابي – شهري',
      desc: '<p>هي خدمة تتيح لك اقتناء كول سنتر متقدم بمواصفات عالمية تامة وخصائص ومزايا متعددة مع السماح بخاصية وجود الموظف عن بعد خارج مقر الشركة من غير شراء النظام، والإتزام بصورة شهرية فقط، مع العلم بأننا يمكننا ربط النظام من مكتبك مباشرة او من خلال استضافته لدينا وباسم شركتك مباشرة</p>  <p>مع توفر جميع أمكانيات الإتصال، بحيث يمكنك الإتصال باستخدام عدة طرق:</p>  <ol> <li>الإتصال من خلال تطبيقات الجوال دوك فون</li> <li>الإتصال من خلال برنامج دوك فون على الكمبيوتر ويندوز أو ماك</li> <li>الإتصال من خلال الويب من خلال رابط مخصص ومن أي مكان</li> </ol>   <p>سنوفر جميع سبل المراقبة لتكون مطمئن على عملك:</p> <ol> <li>مراقبة حية للاتصالات بنفس اللحظة</li> <li>تقارير تفصيلية تظهر جميع تفاصيل الإتصال لأكثر من ٥٠ تقرير</li> <li>تسجيل جميع المكالمات الصادرة والواردة ويمكنك سماعها بسلاسة</li> <ol>',
      price: '186.40$',
      img: 'services_16'
    },
    {
      id: 17,
      title: 'تسويق عبر الهاتف',
      desc: '<p>يتم احتساب ٣ دولار على كل اتصال ناجح يشمل جميع معلومات العميل واهتمامه للشراء او الإشتراك بنسبة تفوق ٩٠٪ مع تسجيل المكالمة والتواصل معه شاملاً حجز موعد مؤكد إما بالزيارة او الحضور<p>  <p>أقل عدد إشتراك هو ١٠٠ اتصال ناجح</p>  <p>التسويق الهاتفي هو من اهم اقسام الشركة لديك، حتى مع تواجد التسويق الإكتروني، فما زال التسويق عبر الهاتف من أقدم واسرع الطرق نجاحاً لتطوير الأعمال. ولتنفيذ هذا العمل تحتاج أدوات وفريق عمل متمرس وخبرة وصبر وخطة واضحة للتنفيذ.</p>  <p>نقوم نحن بدوكيومانتال بتوفير جميع هذه الأدوات بالنيابة عنك، ودراسة منتجك وتفهم مشروعك، وعليه نقوم ببناء قسم التسويق الهاتفي للغيروحصد عملاء مهتمين بمنتجك وترويج سلعتك.</p>  <p>طريقتنا ناجحة بسبب امتلاكنا جميع الأدوات من اتصالات سحابية، وسي ار ام، وربط السوشيال ميديا بالاضافة لخبرتنا سنوات طويلة بتنفيذ مشاريع من هذا النوع.</p>  <p>وللإشتراك معنا يمكنك استخدام هذا العرض هنا وتعتمد على عدد العملاء المحتملين (مهتمين بنسبة ١٠٠٪) لشراء منتجك او الإشتراك معك بخدماتك.</p> ',
      price: '3.00$',
      img: 'services_17'
    },
    {
      id: 18,
      title: 'تشغيل كول سنتر للغير – شامل موظفين وكول سنتر',
      desc: '<p>هذه الخدمة مخصصة للكول سنتر للغير، حيث نقوم بالرد على مكالمات شركتك يومياً ٨ ساعات او ١٦ ساعة او ٢٤ ساعة (اختر من القائمة لمعرفة السعر). تشمل الخدمة جميع الحلول الإضافية الموضحة بالجدول ادناه. اذا كنت مهتم يفضل تنبيهنا بالضغط على ايقونة الشات او الواتس اب والاستعلام مع موظف خدمة العملاء مباشرة></p>  <p>ويمكنك الإختيار إذا أردت خدمات إضافية على خدمة الرد على المكالمات من القائمة أيضاً، يرجى الضغط على مشاهدة الأسعار والتفاصيل أدناه.</p>  <p>نقوم باختصار بربط خطوط الهاتف الخاصة بك مع خدمة دوكيومانتال كلاود كول سنتر، وربطها مع منصات خدمة العملاء الخاصة بنا، حيث يقوم فريق العمل بالتعامل مع طلبات عملائك وإضافتها الى السي ار ام او اذا كان لديكم منصة خاصة بكم.</p>  <p>احترافية عالية في العمل ومرضية جدا وتنساب تطلعاتكم</p>  <ul> <li> حساب سي ار ام خاص لكل مشروع</li> <li> الرد على الهاتف باسم شركتك</li> <li> تنبيه فوري لك عند قدوم اتصال</li> <li> شكر العميل بعد الإتصال اكترونياً عبر الرسائل</li> <li> الرد على السوشيال ميديا الخاص بك</li> <li> بناء ملف سؤال وجواب الخاص بك</li> <li> تسجيل جميع المكالمات</li> <li> رد الي احترافي على الإتصال بصوت اعلامي مميز</li> <li> رد الي في حال خارج وقت الدوام</li> <li> تقارير أونلاين للمكالمات</li> <li> مشرفة لكل مشروع</li> <li> تعرف على المزيد عند تواصلك معنا</li> </ul>',
      price: '720.00$',
      img: 'services_18'
    },
    {
      id: 19,
      title: 'تطبيق ومتجر دوك ستور Doc Store\t',
      desc: '<p><strong>تطبيق دوك ستور وموقع التجارة الاكترونية ، هي منظومة متكاملة، تتيح لك عرض وسرد منتجاتك والاقسام وطرق التوصيل وغيرها من خلال منصة اونلاين على موقعك الاكتروني.</strong></p> <p>نحن نقدم خدمات رائعة واحترافية حول التجارة الإكترونية ابتداءاً من التخطيط وتصميم الموقع وانتهاءً باستعراض المنتجات ومن ثم فتح سلة مشتريات والتسوق داخل الموقع …</p> <p>أبرز المميزات التي تعتبر من أساسيات البرمجة وتشغيل موقع التجارة الالكترونية:</p> <ol> <li> جاهز للعمل والتعامل مع اي نوع من السلع والخدمات</li> <li> طريقة تنصيب سهلة جدا من خلال الانترنت</li> <li> لوحة تحكم سهلة الاستخدام</li> <li> تواجد قوالب جاهزة متكاملة</li> <li> القدرة على رفع مجموعة من المنتجات والصور مرة واحدة على شكل مجموعة</li> <li> القدرة على تصدير ملفات و استيرادها على شكل ملفات CSV</li> <li> ليس هناك داعي الى معرفة مسبقة بالبرمجة حتى تتمكن من تنصيب النظام وادارته</li> </ol> <p><strong>للتعرف على المزايا والتفاصيل والأسعار الرجاء الضغط على “للتفاصيل والأسعار في أسفل الشاشة”</strong><br> خصائص اللغات و الترجمة<br> تعديل محركات البحث<br> التصميم والشكل الخارجي<br> مميزات كاتالوجات المنتجات<br> تفاصيل المنتجات<br> التسويق والادوات الترويجية<br> المتاجرة والمخزون<br> بوابات وطرق الدفع<br> خدمة العملاء<br> الحماية<br> حفظ معلومات العملاء</p>',
      price: '670.00$',
      img: 'services_19'
    }

  ];


  constructor() {
  }

  public GetProduct(locale) {
    if (locale === 'en-US') {
      return this.ProductListEn;
    } else {
      return this.ProductListAr;
    }
  }


}
