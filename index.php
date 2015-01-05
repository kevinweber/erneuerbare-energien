<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Erneuerbare Energien in Europa (ON.data)</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/agency.css" rel="stylesheet">
    <link href="custom/css/custom.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome-4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-top" class="index">

    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">ON.data</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#services">Energie</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#portfolio">Klimawandel</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#about">Begriffe</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#team">Fakten</a>
                    </li>
                    <!-- <li>
                        <a class="page-scroll" href="#another-id">Fakten</a>
                    </li> -->
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

    <!-- Header -->
    <header>
        <div class="container">
            <div class="intro-text">
                <!-- <div class="intro-lead-in">Welcome To Our Studio!</div> -->
                <div class="intro-heading">Erneuerbare Energien in Europa</div>
                <a href="#services" class="page-scroll btn btn-xl">Jetzt entdecken</a>
            </div>
        </div>
    </header>

<?php 
/** 
* PHP_Text2Speech Class example 
*/ 
include 'audio/PHP_Text2Speech.class.php'; 
$t2s = new PHP_Text2Speech;
$text = '
Eine stabile, verlässliche Energieversorgung trägt entscheidend zu Wohlstand und Erfolg eines Landes bei. Aktuelle Herausforderungen der Energiepolitik sind insbesondere die Versorgungssicherheit, Wirtschaftlichkeit und umweltfreundliche Energiegewinnung. Bislang basierte die Energieversorgung in Europa sehr stark auf den fossilen Brennstoffen Kohle, Erdöl und Erdgas.
In den letzten 40 Jahren wurden sie von der Kernenergie als nicht-fossilem Brennstoff ergänzt. Angesichts des Klimawandels und knapper werdender Ressourcen gewinnen die erneuerbaren Energieträger wie Wasser, Wind und Biomasse zunehmend an Bedeutung. Die aus ihnen erzeugten Energie- mengen werden in den nächsten Jahren aller Voraussicht nach steigen.
Die Europäische Union (EU) hat die Erhöhung des Anteils erneuerbarer Energien am Gesamtenergieverbrauch auf 20% bis 2020 zu einem ihrer klima- und energiepolitischen Ziele erklärt. Mit einer Vielzahl von Veranstaltungen informiert die EU-Kommission während der „Europäischen Woche der erneuerbaren Energien“ im April 2011 über Ver- fügbarkeit, Effizienz und den Umweltnutzen erneuerbarer Energien. Informationen hierzu finden Sie online unter: www.eusew.eu
Dieses Faltblatt enthält Statistiken zur Energie- und Stromerzeugung sowie zum Energieverbrauch in Europa. Dabei wird der Fokus auf die erneuerbaren Energien gelegt. Sämtliche Daten stammen von Eurostat, dem Statistischen Amt der Europäischen Gemeinschaften.
';
?>
    <!-- About Section -->
    <section id="audio" style="background:#666;padding:15px 0 10px;">
        <div class="container">
            <div class="row text-right">
                <div class="col-md-offset-4 col-md-4" style="text-align:center;">
                    <audio controls="controls"> 
                        <source src="<?php echo $t2s->speak($text, 'de'); ?>" type="audio/mp3" />
                    </audio>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services">
        <div class="container">
            <div class="row text-left">
                <div class="col-md-offset-1 col-md-10 text-left">
                    <h2 class="section-heading">Energie</h2>
                </div>
            </div>
            <div class="row text-left">
                <div class="col-md-offset-1 col-md-4">
                    <h4 class="service-heading">Der Motor der Volkswirtschaft.</h4>
                    <p class="text-muted">Eine stabile, verlässliche Energieversorgung trägt entscheidend zu Wohlstand und Erfolg eines Landes bei.</p>
                </div>
                <div class="col-md-offset-2 col-md-4">
                    <h4 class="service-heading">Aktuelle Herausforderungen:</h4>
                    <p class="text-muted">
                        <ul>
                            <li>Versorgungssicherheit</li>
                            <li>Wirtschaftlichkeit</li>
                            <li>Umweltfreundliche Energiegewinnung</li>
                        </ul>
                    </p>
                </div>
            </div>

			<br><br><br>
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Verbrauch, Erzeugung und Energieabhängigkeit der EU-27 Länder</h2>
                    <h3 class="section-subheading text-muted">Sie können die Ansicht vergrößern, indem Sie mit gedrückter Maustaste eine Auswahl aufziehen. Per Klick auf Verbrauch bzw. Erzeugung in der Legende, können Sie diese ein- und ausblenden.</h3>
                </div>
            </div>
                        
			<!-- Container für Bubble-Chart -->
            <div id="container" style="height: 600px; min-width: 310px; max-width:100%; margin: 0 auto"></div>
            
<!--
            <div class="row text-center">
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="service-heading">E-Commerce</h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-laptop fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="service-heading">Responsive Design</h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-lock fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="service-heading">Web Security</h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
            </div>
-->
        </div>
    </section>

    <!-- Portfolio Grid Section -->
    <section id="portfolio" class="bg-light-gray">
        <div class="container">
            <div class="row text-left">
                <div class="col-md-offset-1 col-md-10 text-left">
                    <h2 class="section-heading">Klimawandel</h2>
                </div>
            </div>
            <div class="row text-left">
                <div class="col-md-offset-1 col-md-4">
                    <h4 class="service-heading">Die Ressourcen werden knapper.</h4>
                    <p class="text-muted">Bislang basierte die Energieversorgung in Europa sehr stark auf den fossilen Brennstoffen Kohle, Erdöl und Erdgas. In den letzten 40 Jahren wurden sie von der Kernenergie als nicht-fossilem Brennstoff ergänzt.</p>
                </div>
                <div class="col-md-offset-2 col-md-4">
                    <h4 class="service-heading">&ensp;</h4>
                    <p class="text-muted">Angesichts des Klimawandels und knapper werdender Ressourcen gewinnen die erneuerbaren Energieträger wie Wasser, Wind und Biomasse zunehmend an Bedeutung.</p>
                </div>
            </div>
			<br><br><br>
            <div class="row" style="background:#fff;">
                <div class="col-lg-12 text-center">
                	<br><br><br>
                    <h2 class="section-heading">Energieverbrauch in der EU, der durch erneuerbare Energien gedeckt wird:</h2>
                    <p>Grafik: 1998 (5,5%) -> 2008 (8,4% -> 2020 (20%)</p>
                    <h3 class="section-subheading text-muted">Die Europäische Union (EU) hat die Erhöhung des Anteils erneuerbarer Energien am Gesamtenergieverbrauch auf 20% bis 2020 zu einem ihrer klima- und energiepolitischen Ziele erklärt.</h3>
                </div>
            </div>
        </div>
    </section>
    
    
    <br><br><br>
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Headline</h2>
                    <h3 class="section-subheading text-muted">Sie können die Ansicht vergrößern, indem Sie mit gedrückter Maustaste eine Auswahl aufziehen. Per Klick auf Verbrauch bzw. Erzeugung in der Legende, können Sie diese ein- und ausblenden.</h3>
                </div>
            </div>
    
    <div id="container_pf" style="height: 600px; min-width: 310px; max-width:100%; margin: 0 auto"></div>

    <!-- About Section -->
    <section id="about">
        <div class="container">
            <div class="row text-left">
                <div class="col-md-offset-1 col-md-10 text-left">
                    <h2 class="section-heading">Was sind erneuerbare Energietr&auml;ger?</h2>
                </div>
            </div>
            <div class="row text-left">
                <div class="col-md-offset-1 col-md-4">
                    <p class="text-muted">Als erneuerbare Energieträger gelten alle natürlichen Energievorkommen, die entweder auf permanent vorhan- dene oder sich in wenigen Generationen regenerierende Energieströme zurückzuführen sind, zum Beispiel Wind- und Solarenergie, Wasserkraft, Biomasse und Geothermie.</p>
                </div>
            </div>
            <br><br><br>
            <div class="row text-left">
                <div class="col-md-offset-4 col-md-4">
                    <p class="text-muted">Schweden (32%) und Lettland (30%) deckten 2008 fast ein Drittel ihres Energieverbrauchs aus erneuerbaren Energien.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="container white">
            <div class="row text-left">
                <div class="col-md-offset-1 col-md-4">
                    <h4 class="service-heading">Biomasse</h4>
                    <p>= Der biologisch abbaubare Anteil von Industrie- und Haushaltsabfällen sowie von Erzeugnissen, Abfällen und Rückständen der Land- und Forstwirtschaft.</p>
                </div>
                <div class="col-md-offset-2 col-md-4">
                    <h4 class="service-heading">Geothermie</h4>
                    <p>= Die im zugänglichen Teil der Erdkruste gespeicherte Wärme. Sie umfasst die in der Erde gespeicherte geothermische Energie.</p>
                </div>
            </div>
           	<br><br><br>
            <div class="row text-left">
                <div class="col-md-offset-1 col-md-4">
                    <h4 class="service-heading">Energieträger</h4>
                    <p>= Alle Quellen oder Stoffe, in denen Energie mechanisch, thermisch, chemisch oder physikalisch gespeichert ist.</p>
                </div>
                <div class="col-md-offset-2 col-md-4">
                    <h4 class="service-heading">Primärenergieträger</h4>
                    <p>= Energieträger, die in der Natur vorkommen und technisch noch nicht umgewandelt sind.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section id="team">
        <div class="container">
            <div class="row text-left">
                <div class="col-md-offset-1 col-md-10 text-left">
                    <h2 class="section-heading">Interessante Fakten</h2>
                </div>
            </div>
            <div class="row text-left">
                <div class="col-md-offset-1 col-md-4">
                    <h4 class="service-heading">Die Ressourcen werden knapper.</h4>
                    <p class="text-muted">Bislang basierte die Energieversorgung in Europa sehr stark auf den fossilen Brennstoffen Kohle, Erdöl und Erdgas. In den letzten 40 Jahren wurden sie von der Kernenergie als nicht-fossilem Brennstoff ergänzt.</p>
                </div>
                <div class="col-md-offset-2 col-md-4">
                    <h4 class="service-heading">&ensp;</h4>
                    <p class="text-muted">Angesichts des Klimawandels und knapper werdender Ressourcen gewinnen die erneuerbaren Energieträger wie Wasser, Wind und Biomasse zunehmend an Bedeutung.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="another-id" class="bg-light-gray">
        <div class="container">
            <div class="row text-left">
                <div class="col-md-offset-1 col-md-4">
                    <p class="text-muted">Sämtliche Daten stammen von Eurostat, dem Statistischen Amt der Europäischen Gemeinschaften. Weitere Daten zum Thema Energie finden Sie auf der <a href="http://epp.eurostat.ec.europa.eu/portal/page/portal/energy/introduction" title="Eurostat Website">Eurostat Website</a>.</p>
                </div>
                <div class="col-md-offset-1 col-md-4">
                    <p class="text-muted">Weitere Informationen &hellip;</p>
                    <p class="text-muted"><a href="http://www.eds-destatis.de">www.eds-destatis.de</a></p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                </div>
                <div class="col-md-4">
                	<span class="copyright">&copy; ON.data 2015</span>
                </div>
                <div class="col-md-4">
                </div>
            </div>
        </div>
    </footer>

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="js/classie.js"></script>
    <script src="custom/js/cbpAnimatedHeader.js"></script>

    <!-- Contact Form JavaScript -->
    <script src="js/jqBootstrapValidation.js"></script>
    <script src="js/contact_me.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="js/agency.js"></script>
    
    <!-- Highcharts.JS -->
	<script src="http://code.highcharts.com/highcharts.js"></script>
	<script src="http://code.highcharts.com/highcharts-more.js"></script>
	<script src="http://code.highcharts.com/modules/exporting.js"></script>
	
	<!-- Bubble Chart JS (Chris) -->
	<script src="js/bubble.js"></script>
	
	<!-- Stacked Column Chart JS (Patrick) -->
	<script src="js/stackedcolumn.js"></script>

</body>

</html>
