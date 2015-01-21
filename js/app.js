(function() {
  angular.module("Sunburst", [])
    .directive("sunburst", sunburst)
    .directive("onReadFile", onReadFile)
    .controller("MainCtrl", MainCtrl);

  // controller function MainCtrl
  function MainCtrl($http) {
    var ctrl = this;
    init();


    // function init
    function init() {
      // initialize controller variables
      ctrl.examples = [
        "erzeugung_de",
        "erzeugung_fr",
        "erzeugung_pl"
      ];
      ctrl.exampleSelected = ctrl.examples[0];
      ctrl.getData = getData;
      ctrl.selectExample = selectExample;
		
		ctrl.laender = new Array();
		ctrl.laender["erzeugung_be"] = "	Belgien	";
		ctrl.laender["erzeugung_bgr"] = "Bulgarien	";
		ctrl.laender["erzeugung_dk"] = "Dänemark	";
		ctrl.laender["erzeugung_de"] = "Deutschland	";
		ctrl.laender["erzeugung_ee"] = "Estland	";
		ctrl.laender["erzeugung_fi"] = "Finnland	";
		ctrl.laender["erzeugung_fr"] = "Frankreich	";
		ctrl.laender["erzeugung_gr"] = "Griechenland	";
		ctrl.laender["erzeugung_irl"] = "Irland	";
		ctrl.laender["erzeugung_it"] = "Italien	";
		ctrl.laender["erzeugung_hrv"] = "Kroatien	";
		ctrl.laender["erzeugung_lv"] = "Lettland	";
		ctrl.laender["erzeugung_ltu"] = "Litauen	";
		ctrl.laender["erzeugung_lu"] = "Luxemburg	";
		ctrl.laender["erzeugung_mlt"] = "Malta	";
		ctrl.laender["erzeugung_nl"] = "Niederlande	";
		ctrl.laender["erzeugung_aut"] = "Österreich	";
		ctrl.laender["erzeugung_pol"] = "Polen	";
		ctrl.laender["erzeugung_pt"] = "Portugal	";
		ctrl.laender["erzeugung_rou"] = "Rumänien	";
		ctrl.laender["erzeugung_sm"] = "San Marino	";
		ctrl.laender["erzeugung_se"] = "Schweden	";
		ctrl.laender["erzeugung_sk"] = "Slowakei	";
		ctrl.laender["erzeugung_si"] = "Slowenien	";
		ctrl.laender["erzeugung_es"] = "Spanien	";
		ctrl.laender["erzeugung_cz"] = "Tschechische Republik	";
		ctrl.laender["erzeugung_hun"] = "Ungarn	";
		ctrl.laender["erzeugung_gb"] = "Vereintes Königreich	";
		ctrl.laender["erzeugung_va"] = "Vatikanstadt	";
		ctrl.laender["erzeugung_fo"] = "Faröer (zu Dänemark)	";
		ctrl.laender["erzeugung_cyp"] = "Zypern	";
		ctrl.laender["erzeugung_al"] = "	Albanien	";
		ctrl.laender["erzeugung_ad"] = "	Andorra	";
		ctrl.laender["erzeugung_bih"] = "	Bosnien-Herzegowina	";
		ctrl.laender["erzeugung_lit"] = "	Liechtenstein	";
		ctrl.laender["erzeugung_mc"] = "	Monaco	";
		ctrl.laender["erzeugung_isl"] = "Island	";
		ctrl.laender["erzeugung_yu"] = "	Jugoslawien	";
		ctrl.laender["erzeugung_mkd"] = "	Makedonien	";
		ctrl.laender["erzeugung_md"] = "	Moldavien	";
		ctrl.laender["erzeugung_nor"] = "	Norwegen	";
		ctrl.laender["erzeugung_ch"] = "	Schweiz	";
		ctrl.laender["erzeugung_ukr"] = "	Ukraine	";
		ctrl.laender["erzeugung_blr"] = "	Weißrussland	";
		ctrl.laender["erzeugung_ru"] = "	Russland	";
		ctrl.laender["erzeugung_tur"] = "	Türkei	";
		ctrl.laender["erzeugung_rs"] = "	Serbien	";
		ctrl.laender["erzeugung_mne"] = "Montenegro";
		ctrl.laender["erzeugung_kos"] = "Kosovo";
      
      // initialize controller functions
      ctrl.selectExample(ctrl.exampleSelected);
    }

    // function getData
    function getData($fileContent) {
      ctrl.data = $fileContent;
    }

    // function selectExample
    function selectExample(item) {
		var title = ctrl.laender[item];
		$('.sun-title').text(title);
      var file = 'csv/'+ item + ".csv";
      $http.get(file).success(function(data) {
        ctrl.data = data;
      });
    }
  }


  // directive function sunburst
  function sunburst() {
    return {
      restrict: "E",
      scope: {
        data: "=",
      },
      link: sunburstDraw
    };
  }


  // directive function onReadFile
  function onReadFile($parse) {
    return {
      restrict: "A",
      scope: false,
      link: function(scope, element, attrs) {
        var fn = $parse(attrs.onReadFile);
        element.on("change", function(onChangeEvent) {
          var reader = new FileReader();
          reader.onload = function(onLoadEvent) {
            scope.$apply(function() {
              fn(scope, {
                $fileContent: onLoadEvent.target.result
              });
            });
          };
          reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
        });
      }
    };
  }
})();