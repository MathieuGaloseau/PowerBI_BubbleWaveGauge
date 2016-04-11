module powerbi.visuals.samples {
    export var gaugeWaveChartProps = {
        values: {
            pointerValue: <DataViewObjectPropertyIdentifier>{ objectName: 'values', propertyName: 'pointerValue' },
            evolution: <DataViewObjectPropertyIdentifier>{ objectName: 'values', propertyName: 'evolution' },
        }, 
        color: {
            circleColor: <DataViewObjectPropertyIdentifier>{ objectName: 'color', propertyName: 'circleColor' },
            waveColor: <DataViewObjectPropertyIdentifier>{ objectName: 'color', propertyName: 'waveColor' },
            textColor: <DataViewObjectPropertyIdentifier>{ objectName: 'color', propertyName: 'textColor' },
            waveTextColor: <DataViewObjectPropertyIdentifier>{ objectName: 'color', propertyName: 'waveTextColor' }
        },
        wave: {
         waveCount: <DataViewObjectPropertyIdentifier>{ objectName: 'wave', propertyName: 'waveCount' },
         waveRise: <DataViewObjectPropertyIdentifier>{ objectName: 'wave', propertyName: 'waveRise' },
         waveHeight: <DataViewObjectPropertyIdentifier>{ objectName: 'wave', propertyName: 'waveHeight' },
         waveRiseTime: <DataViewObjectPropertyIdentifier>{ objectName: 'wave', propertyName: 'waveRiseTime' },
         waveAnimateTime: <DataViewObjectPropertyIdentifier>{ objectName: 'wave', propertyName: 'waveAnimateTime' },
         waveAnimate: <DataViewObjectPropertyIdentifier>{ objectName: 'wave', propertyName: 'waveAnimate' },
         waveHeightScaling: <DataViewObjectPropertyIdentifier>{ objectName: 'wave', propertyName: 'waveHeightScaling' },
         waveOffset: <DataViewObjectPropertyIdentifier>{ objectName: 'wave', propertyName: 'waveOffset' }
     },
     parameters: {
         minValue: <DataViewObjectPropertyIdentifier>{ objectName: 'parameters', propertyName: 'minValue' },
         maxValue: <DataViewObjectPropertyIdentifier>{ objectName: 'parameters', propertyName: 'maxValue' },
         circleThickness: <DataViewObjectPropertyIdentifier>{ objectName: 'parameters', propertyName: 'circleThickness' },
         circleFillGap: <DataViewObjectPropertyIdentifier>{ objectName: 'parameters', propertyName: 'circleFillGap' },
         valueCountUp: <DataViewObjectPropertyIdentifier>{ objectName: 'parameters', propertyName: 'valueCountUp' },
         displayPercent: <DataViewObjectPropertyIdentifier>{ objectName: 'parameters', propertyName: 'displayPercent' },
		 displayPercentforevo: <DataViewObjectPropertyIdentifier>{ objectName: 'parameters', propertyName: 'displayPercentforevo' },
		 x100: <DataViewObjectPropertyIdentifier>{ objectName: 'parameters', propertyName: 'x100' },
		 x100forevo: <DataViewObjectPropertyIdentifier>{ objectName: 'parameters', propertyName: 'x100forevo' },
		decimalpointerValue: <DataViewObjectPropertyIdentifier>{ objectName: 'parameters', propertyName: 'decimalpointerValue' },
		decimalevolution: <DataViewObjectPropertyIdentifier>{ objectName: 'parameters', propertyName: 'decimalevolution' },
        disableevo: <DataViewObjectPropertyIdentifier>{ objectName: 'parameters', propertyName: 'disableevo' }
     },
     text: {
         textVertPosition: <DataViewObjectPropertyIdentifier>{ objectName: 'text', propertyName: 'textVertPosition' },
         textSize: <DataViewObjectPropertyIdentifier>{ objectName: 'text', propertyName: 'textSize' }
     }
 }


 export interface iGaugeWaveChartSettings {
    values: {
        pointerValue: any;
        evolution: any;
    };
    color: {
        circleColor: string;
        waveColor: string;
        textColor: string;
        waveTextColor: string;  
    };
    wave: {
     waveCount: number;
     waveRise: boolean;
     waveHeight: number;
     waveRiseTime: number;
     waveAnimateTime: number;
     waveAnimate:boolean;
     waveHeightScaling: boolean;
     waveOffset: number;
 };
 parameters: {
     minValue: number;
     maxValue: number;
     circleThickness: number;
     circleFillGap: number;
     valueCountUp:  boolean;
     displayPercent: boolean;
	 displayPercentforevo:boolean;
	 x100: boolean;
	 x100forevo:boolean;
	 decimalpointerValue:number;
	 decimalevolution:number;
     disableevo:boolean;
 };
 text: {
     textVertPosition: number;
     textSize: number;
 };
}

    //model
    export interface iGaugeWaveChartModel {
        gaugeWaveChartSettings: iGaugeWaveChartSettings;
    }
    export var gaugeWaveChartRoleNames = {
        pointerValue: 'pointerValue',
        evolution: 'evolution',
    }

    export class WaveGauge implements IVisual {

        public static capabilities: VisualCapabilities = {
            dataRoles: [
            {
                name: 'pointerValue',
                kind: powerbi.VisualDataRoleKind.Measure,
                displayName: 'Pointer Value'
            },
            {
                name: 'evolution',
                kind: powerbi.VisualDataRoleKind.Measure,
                displayName: 'evolution'
            }
            ],
            objects: {
                color: {
                        displayName: "Color",
                        properties: {
                            circleColor: {
                                displayName: 'Circle',
                                type: { fill: { solid: { color: true } } }
                            },
                            waveColor: {
                                displayName: 'wave',
                                type: { fill: { solid: { color: true } } }
                            }, 
                            textColor: {
                                displayName: 'Text',
                                type: { fill: { solid: { color: true } } }
                            },
                            waveTextColor: {
                                displayName: 'Wave Text',
                                type: { fill: { solid: { color: true } } }
                            }
                        }
                },
                wave: {
                        displayName: "Wave",
                        properties: {
                            waveCount: {
                                displayName: 'Count',
                                type: { numeric: true }
                            },
                            waveRise: {
                                displayName: 'Rise',
                                type: { bool: true }
                            },
                            waveHeight: {
                                displayName: 'Height',
                                type: { numeric: true }
                            },
                            waveRiseTime: {
                                displayName: 'Rise Time',
                                type: { numeric: true }
                            },
                            waveAnimateTime: {
                                displayName: 'Animate Time',
                                type: { numeric: true }
                            },
                            waveAnimate: {
                                displayName: 'Animate',
                                type: { bool: true }
                            },
                            waveHeightScaling: {
                                displayName: 'Height Scaling',
                                type: { bool: true }
                            },
                            waveOffset: {
                                displayName: 'Offset',
                                type: { numeric: true }
                            }
                        }
                },
                parameters: {
                        displayName: "Parameters",
                        properties: {
                            maxValue: {
                                displayName: 'Max Value',
                                type: { numeric: true }
                            },
                            minValue: {
                                displayName: 'Min Value',
                                type: { numeric: true }
                            },
                            circleThickness: {
                                displayName: 'Circle Thickness',
                                type: { numeric: true }
                            }
                            ,
                            circleFillGap: {
                                displayName: 'Circle FillGap',
                                type: { numeric: true }
                            },
                            valueCountUp: {
                                displayName: 'Value Count Up',
                                type: { bool: true }
                            },
                            displayPercent: {
                                displayName: 'Display Percent',
                                type: { bool: true }
                            },
                            displayPercentforevo: {
                                displayName: 'Display Percent for evo',
                                type: { bool: true }
                            },
                            x100: {
                                displayName: 'X100',
                                type: { bool: true }
                            },
                            x100forevo: {
                                displayName: 'X100 for evolution',
                                type: { bool: true }
                            },
							decimalpointerValue:{
								displayName:'Decimale pointer Value',
								type:{numeric:true}
								
							},
							decimalevolution:{
								displayName:'Decimale volution',
								type:{numeric:true}
							},
                            disableevo:{
                                displayName:'Disable evolution',
								type:{bool:true}
                            } 
                        }
                },
                text: {
                        displayName: "Text",
                        properties: {
                          textVertPosition: {
                            displayName: 'Text Vert Position',
                            type: { numeric: true }
                        },
                        textSize: {
                            displayName: 'Text Size',
                            type: { numeric: true }
                        }
                    },
                },
                values: {
                    displayName: 'Data values',
                    properties: {
                        pointerValue: {
                            displayName: 'Pointer',
                            type: { any: true }
                        },
                        evolution: {
                            displayName: 'Evolution',
                            type: { any: true }
                        }
                    }
                },
            },
    dataViewMappings: [{
        conditions: [
        {
           'pointerValue': { max: 1 }, 'percentage': { max: 1 }
        }
        ],
       categorical: {
            general: {
                select: [
                { bind: { to: 'formatString' } },
                { bind: { to: 'lable' } }
                ]
            },
            values: {
                select: [
                { bind: { to: 'pointerValue' } },
                { bind: { to: 'evolution' } }
                ]
            }
        }
    }]
};

private guidgauge;
private guid_div;
private valeur: D3.Selection;
private Value: D3.Selection;
private progression: D3.Selection;
private progressionText: D3.Selection;
private htmlgauge: D3.Selection;
private bodydiv: D3.Selection;
private imgprogression_red : D3.Selection;
private imgprogression_green  : D3.Selection;
private imgprogression_stable  : D3.Selection;
private divprogression  : D3.Selection;
private gauge;
private model: iGaugeWaveChartModel;
private dataView: DataView;
private clearCatcher: D3.Selection;
private evolutionIsEmpty;

public static DefaultStyleProperties(): iGaugeWaveChartSettings {
    return {
        values: {
            pointerValue: 0, // This is the value display in gauge and height of water
            evolution: 0 // Is a represantation of evolution. (positive or negative)
        },
        color: {
           circleColor: "#3D82AB",// The color of the outer circle.
           waveColor:"#3186AD",// The color of the fill wave.
           textColor: "#A1C4D8",// The color of the value text when the wave does not overlap it.
           waveTextColor: "#A1C4D8", // The color of the value text when the wave overlaps it.
       },
       wave: {
        waveCount:1,// The number of full waves per width of the wave circle.
        waveRise: true,// Control if the wave should rise from 0 to it's full height, or start at it's full height.
        waveHeight: 0.05,// The wave height as a percentage of the radius of the wave circle.
        waveRiseTime: 1000,// The amount of time in milliseconds for the wave to rise from 0 to it's final height.
        waveAnimateTime: 1800,// The amount of time in milliseconds for a full wave to enter the wave circle.
        waveAnimate:true,// Controls if the wave scrolls or is static.
        waveHeightScaling: true,// Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill.
        waveOffset: 0,// The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave.
    },
    parameters: {

       minValue: 0,// The gauge minimum value.
       maxValue: 100,// The gauge maximum value.
       circleThickness: 0.05,// The outer circle thickness as a percentage of it's radius.
       circleFillGap: 0.05, // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
       valueCountUp:  true,// If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed.
       displayPercentforevo: true,// If true, a % symbol is displayed after the value.
	   displayPercent: true,// If true, a % symbol is displayed after the value of evolution.
	   x100:true, //x100 if value is in % in source
	   x100forevo:true, //x100 if value of evolution is in % in source
	   decimalpointerValue:0,
	   decimalevolution:0,
	   disableevo:false,					
   } ,
   text: {
    textVertPosition: 0.5, // The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top.
    textSize: 8 // The relative height of the text to display in the wave circle. 1 = 50%
}
}
}


        //Convert a DataView into a GaugeWaveChart Model
        public static converter(dataView: DataView, options: VisualUpdateOptions): iGaugeWaveChartModel {


            var gaugeModel: iGaugeWaveChartModel;
            if (!dataView) {
                return;
            }

            var dataViewCategorical = dataView.categorical;
            if (dataViewCategorical === null || dataViewCategorical.values.length === 0
                || dataView.metadata === null || dataView.metadata.columns.length === 0)
                return;

            var defaultSettings = this.DefaultStyleProperties();
            var objects = dataView.metadata.objects;
            if (objects) {
                defaultSettings.values.pointerValue = DataViewObjects.getValue<any>(objects, gaugeWaveChartProps.values.pointerValue, defaultSettings.values.pointerValue);
                defaultSettings.values.evolution = DataViewObjects.getValue<any>(objects, gaugeWaveChartProps.values.evolution, defaultSettings.values.evolution);

                //Update Values of each parameters from parameters settings of gaugeWaveChart Properties
                //Update Color
                defaultSettings.color.circleColor = DataViewObjects.getFillColor(objects, gaugeWaveChartProps.color.circleColor,defaultSettings.color.circleColor);
                defaultSettings.color.waveColor = DataViewObjects.getFillColor(objects, gaugeWaveChartProps.color.waveColor,defaultSettings.color.waveColor);
                defaultSettings.color.textColor = DataViewObjects.getFillColor(objects, gaugeWaveChartProps.color.textColor,defaultSettings.color.textColor);
                defaultSettings.color.waveTextColor = DataViewObjects.getFillColor(objects, gaugeWaveChartProps.color.waveTextColor,defaultSettings.color.waveTextColor);
                
                //Update Wave parameters
                defaultSettings.wave.waveCount = DataViewObjects.getValue<number>(objects, gaugeWaveChartProps.wave.waveCount, defaultSettings.wave.waveCount);
                defaultSettings.wave.waveRise =DataViewObjects.getValue<boolean>(objects, gaugeWaveChartProps.wave.waveRise, defaultSettings.wave.waveRise);
                defaultSettings.wave.waveRiseTime =DataViewObjects.getValue<number>(objects, gaugeWaveChartProps.wave.waveRiseTime, defaultSettings.wave.waveRiseTime);
                defaultSettings.wave.waveAnimate =DataViewObjects.getValue<boolean>(objects, gaugeWaveChartProps.wave.waveAnimate, defaultSettings.wave.waveAnimate);
                defaultSettings.wave.waveAnimateTime =DataViewObjects.getValue<number>(objects, gaugeWaveChartProps.wave.waveAnimateTime, defaultSettings.wave.waveAnimateTime);
                defaultSettings.wave.waveHeight =DataViewObjects.getValue<number>(objects, gaugeWaveChartProps.wave.waveHeight, defaultSettings.wave.waveHeight);
                defaultSettings.wave.waveHeightScaling =DataViewObjects.getValue<boolean>(objects, gaugeWaveChartProps.wave.waveHeightScaling, defaultSettings.wave.waveHeightScaling);
                defaultSettings.wave.waveOffset =DataViewObjects.getValue<number>(objects, gaugeWaveChartProps.wave.waveOffset, defaultSettings.wave.waveOffset);

                //Update parameters divers
                defaultSettings.parameters.circleFillGap =DataViewObjects.getValue<number>(objects, gaugeWaveChartProps.parameters.circleFillGap, defaultSettings.parameters.circleFillGap);
                defaultSettings.parameters.circleThickness =DataViewObjects.getValue<number>(objects, gaugeWaveChartProps.parameters.circleThickness, defaultSettings.parameters.circleThickness);
                defaultSettings.parameters.displayPercent =DataViewObjects.getValue<boolean>(objects, gaugeWaveChartProps.parameters.displayPercent, defaultSettings.parameters.displayPercent);
                defaultSettings.parameters.displayPercentforevo =DataViewObjects.getValue<boolean>(objects, gaugeWaveChartProps.parameters.displayPercentforevo, defaultSettings.parameters.displayPercentforevo);
				defaultSettings.parameters.maxValue =DataViewObjects.getValue<number>(objects, gaugeWaveChartProps.parameters.maxValue, defaultSettings.parameters.maxValue);
                defaultSettings.parameters.minValue =DataViewObjects.getValue<number>(objects, gaugeWaveChartProps.parameters.minValue, defaultSettings.parameters.minValue);
                defaultSettings.parameters.valueCountUp =DataViewObjects.getValue<boolean>(objects, gaugeWaveChartProps.parameters.valueCountUp, defaultSettings.parameters.valueCountUp);
  				defaultSettings.parameters.x100 =DataViewObjects.getValue<boolean>(objects, gaugeWaveChartProps.parameters.x100, defaultSettings.parameters.x100);
				defaultSettings.parameters.x100forevo =DataViewObjects.getValue<boolean>(objects, gaugeWaveChartProps.parameters.x100forevo, defaultSettings.parameters.x100forevo);
  				defaultSettings.parameters.decimalpointerValue =DataViewObjects.getValue<number>(objects, gaugeWaveChartProps.parameters.decimalpointerValue, defaultSettings.parameters.decimalpointerValue);
  				defaultSettings.parameters.decimalevolution =DataViewObjects.getValue<number>(objects, gaugeWaveChartProps.parameters.decimalevolution, defaultSettings.parameters.decimalevolution);
                defaultSettings.parameters.disableevo =DataViewObjects.getValue<boolean>(objects, gaugeWaveChartProps.parameters.disableevo, defaultSettings.parameters.disableevo);
  		 
                //Update Text parameters
                defaultSettings.text.textSize =DataViewObjects.getValue<number>(objects, gaugeWaveChartProps.text.textSize, defaultSettings.text.textSize);
                defaultSettings.text.textVertPosition =DataViewObjects.getValue<number>(objects, gaugeWaveChartProps.text.textVertPosition, defaultSettings.text.textVertPosition);
	

            }

            var categories,
            categoryValues,
            categoryValuesLen = 1;


            if (dataViewCategorical.categories) {
                categories = dataViewCategorical.categories[0];
                categoryValues = categories.values;
                categoryValuesLen = categoryValues.length;
            }

            for (var idx = 0; idx < categoryValuesLen; idx++) {
                var PointerValue: number = undefined, Evolution: number = undefined;                    


                var values = dataViewCategorical.values;
                var metadataColumns = dataView.metadata.columns;



                for (var i = 0; i < values.length; i++) {

                    var col = metadataColumns[i];
                    var currentVal = values[i].values[idx] || 0;
                    if (col && col.roles) {
                     if (col.roles[gaugeWaveChartRoleNames.evolution]) {
                        Evolution = currentVal;
                    } else if (col.roles[gaugeWaveChartRoleNames.pointerValue]) {
                        PointerValue = currentVal;
                    }
                }
            }
            //the "undefined" value is use to hidden evolution indicator
            if (Evolution === undefined) {
                Evolution = defaultSettings.values.evolution;
				defaultSettings.parameters.disableevo = true;
            }
			
            if (PointerValue === undefined) {
                PointerValue = defaultSettings.values.pointerValue;
            }

            if (!isNaN(PointerValue) && !isNaN(Evolution)) {
                defaultSettings.values = {
                    pointerValue: PointerValue,
                    evolution: Evolution
                };
            }
        }
        gaugeModel = {
            gaugeWaveChartSettings: defaultSettings
        }
        return gaugeModel;
    }


    public init(options: VisualInitOptions): void {

        //Marke an unique guid by items
        this.guidgauge= this.guid("wave_gauge");
        this.guid_div= this.guid("guid_div");

        //Add an html with all other componants
        this.bodydiv = d3.select(options.element.get(0)).append('div')
        .classed('wave_gauge_bodydiv', true);

        //Add gauge html item
        this.htmlgauge = this.bodydiv.append('svg')
        .classed('wave_gauge', true)
        .attr("id",this.guidgauge);

        //Add a div for img of evolution
        this.divprogression = this.bodydiv.append('div')
        .classed('wave_gauge_div', true)
        .attr("id",this.guid_div);

        //Add picture of evolution down
        this.imgprogression_red = this.divprogression.append('img')
        .classed('wave_gauge_img_red', true)
        .attr("src",sampleImgRed);

        //Add picture of evolution Up
        this.imgprogression_green = this.divprogression.append('img')
        .classed('wave_gauge_img_green', true)
        .attr("src",sampleImgReeg);

        //Add picture of evolution stable
        this.imgprogression_stable = this.divprogression.append('img')
        .classed('wave_gauge_img_stable', true)
        .attr("src",sampleImgStable);


        //Add value of progression
        this.progressionText = this.divprogression.append('div')
        .classed('wave_gauge_progressionText', true);



        //Init default parameters
        var config = liquidFillGaugeDefaultSettings();
        //init gauge with default parameters
        this.gauge = loadLiquidFillGauge(this.guidgauge,0,config);

    }



    /* Called for data, size, formatting changes*/
    public update(options: VisualUpdateOptions) {

        if (!options.dataViews && !options.dataViews[0]) return;
        var dataView = options.dataViews[0];
        var model: iGaugeWaveChartModel = WaveGauge.converter(dataView, options);
        if (!model) {
            return;
        }

        this.model = model

        var settings = model.gaugeWaveChartSettings;

                //Update vew of wavegauge
                var config = liquidFillGaugeDefaultSettings();
                //color
                config.circleColor =model.gaugeWaveChartSettings.color.circleColor;
                config.textColor =model.gaugeWaveChartSettings.color.textColor;
                config.waveTextColor =model.gaugeWaveChartSettings.color.waveTextColor;
                config.waveColor =model.gaugeWaveChartSettings.color.waveColor;

                //text
                config.textSize =model.gaugeWaveChartSettings.text.textSize /10;
                config.textVertPosition =model.gaugeWaveChartSettings.text.textVertPosition;
                
                //wave
                config.waveAnimate =model.gaugeWaveChartSettings.wave.waveAnimate;
                config.waveAnimateTime =model.gaugeWaveChartSettings.wave.waveAnimateTime;
                config.waveCount =model.gaugeWaveChartSettings.wave.waveCount;
                config.waveHeight =model.gaugeWaveChartSettings.wave.waveHeight;
                config.waveHeightScaling =model.gaugeWaveChartSettings.wave.waveHeightScaling;
                config.waveOffset =model.gaugeWaveChartSettings.wave.waveOffset;
                config.waveRise =model.gaugeWaveChartSettings.wave.waveRise;
                config.waveRiseTime =model.gaugeWaveChartSettings.wave.waveRiseTime;

                //parameters
                config.valueCountUp =model.gaugeWaveChartSettings.parameters.valueCountUp;
                config.displayPercent =model.gaugeWaveChartSettings.parameters.displayPercent;
				config.displayPercentforevo =model.gaugeWaveChartSettings.parameters.displayPercentforevo;
                config.circleThickness =model.gaugeWaveChartSettings.parameters.circleThickness;
                config.maxValue =model.gaugeWaveChartSettings.parameters.maxValue;
                config.minValue =model.gaugeWaveChartSettings.parameters.minValue;
                config.circleFillGap =model.gaugeWaveChartSettings.parameters.circleFillGap;
				
				
 var left = (options.viewport.width/2) + (Math.min(options.viewport.width,options.viewport.height)/2);

 
 
var tofixedevo = this.model.gaugeWaveChartSettings.parameters.decimalevolution;
var tofixedvalue = this.model.gaugeWaveChartSettings.parameters.decimalpointerValue;



this.divprogression.attr('style',"padding-left:"+left+"px;");
var Value = this.model.gaugeWaveChartSettings.values.pointerValue;
				
                
if(this.model.gaugeWaveChartSettings.parameters.x100)
 {
    Value =Value*100;
   
 }
 
  Value= parseFloat(Value.toFixed(tofixedvalue));

               this.gauge.update(Value,config,options.viewport.width,options.viewport.height);
				
                //Update evolution picture (arrow up or down) 
                //if evolution value is polsitive then picture is arrow up (and green)
                //if evolution value is negative then picture is arrow down (and red)
               
                var evo =  this.model.gaugeWaveChartSettings.values.evolution;
                if(evo != "undefined" &&  !this.model.gaugeWaveChartSettings.parameters.disableevo)
                {
                    
                    
 if(this.model.gaugeWaveChartSettings.parameters.x100forevo)
 {
    evo =evo*100;
 }
 
  evo= parseFloat(evo.toFixed(tofixedevo));
 
              evo =  config.displayPercentforevo?evo+"%":evo;
               
               
                 this.divprogression.style("display","block");
                 
                if(this.model.gaugeWaveChartSettings.values.evolution > 0){
                     this.progressionText.text("+"+evo);
                    this.imgprogression_red.style("display","none");
                    this.imgprogression_green.style("display","block");
                    this.imgprogression_stable.style("display","none");
                }else if(this.model.gaugeWaveChartSettings.values.evolution < 0)
                {
                    this.progressionText.text(evo);
                    this.imgprogression_red.style("display","block");
                    this.imgprogression_green.style("display","none");
                    this.imgprogression_stable.style("display","none");
                }
                else
                {
                        this.progressionText.text("");
                        this.imgprogression_red.style("display","none");
                        this.imgprogression_green.style("display","none");
                        this.imgprogression_stable.style("display","block");
                }  
                 }
                 else
                 {
                     this.divprogression.style("display","none");
                 }
                 
                  
            }

            //generate a guid for id of each items
            public guid(title) {
              function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
            }
            return title + s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
        }


     //Display parameters in ribon (tab) parameters of chart
     public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstanceEnumeration {

        var enumeration = new ObjectEnumerationBuilder();

        switch (options.objectName) {   
           case 'color':
           enumeration.pushInstance({
            objectName: 'color',
            displayName: 'Color',
            selector: null,
            properties: {
              circleColor: this.model.gaugeWaveChartSettings.color.circleColor,
              waveColor: this.model.gaugeWaveChartSettings.color.waveColor,
              textColor: this.model.gaugeWaveChartSettings.color.textColor,
              waveTextColor: this.model.gaugeWaveChartSettings.color.waveTextColor,
          }
      });
           break;
           case 'wave':
           enumeration.pushInstance({
            objectName: 'wave',
            displayName: 'Wave',
            selector: null,
            properties: {
              waveCount:this.model.gaugeWaveChartSettings.wave.waveCount,
              waveRise:this.model.gaugeWaveChartSettings.wave.waveRise,
              waveHeight:this.model.gaugeWaveChartSettings.wave.waveHeight,
              waveRiseTime:this.model.gaugeWaveChartSettings.wave.waveRiseTime,
              waveAnimateTime:this.model.gaugeWaveChartSettings.wave.waveAnimateTime,
              waveAnimate:this.model.gaugeWaveChartSettings.wave.waveAnimate,
              waveHeightScaling:this.model.gaugeWaveChartSettings.wave.waveHeightScaling,
              waveOffset:this.model.gaugeWaveChartSettings.wave.waveOffset
          }
      });
           break;
           case 'parameters':
           enumeration.pushInstance({
            objectName: 'parameters',
            displayName: 'Parameters',
            selector: null,
            properties: {
              minValue:this.model.gaugeWaveChartSettings.parameters.minValue,
              maxValue:this.model.gaugeWaveChartSettings.parameters.maxValue,
              circleThickness:this.model.gaugeWaveChartSettings.parameters.circleThickness,
              circleFillGap:this.model.gaugeWaveChartSettings.parameters.circleFillGap,
              valueCountUp:this.model.gaugeWaveChartSettings.parameters.valueCountUp,
              displayPercentforevo:this.model.gaugeWaveChartSettings.parameters.displayPercentforevo,
              displayPercent:this.model.gaugeWaveChartSettings.parameters.displayPercent,
			  x100:this.model.gaugeWaveChartSettings.parameters.x100,
              x100forevo:this.model.gaugeWaveChartSettings.parameters.x100forevo,
			  decimalpointerValue:this.model.gaugeWaveChartSettings.parameters.decimalpointerValue,
			  decimalevolution:this.model.gaugeWaveChartSettings.parameters.decimalevolution,
              disableevo:this.model.gaugeWaveChartSettings.parameters.disableevo
          }
      });
           break;
           case 'text':
           enumeration.pushInstance({
            objectName: 'text',
            displayName: 'Text',
            selector: null,
            properties: {
              textVertPosition:this.model.gaugeWaveChartSettings.text.textVertPosition,
              textSize:this.model.gaugeWaveChartSettings.text.textSize,
          }
      });
           break;
       }
       return enumeration.complete();
   }
   
}

//Picture for progresion is "Stable"
var sampleImgStable = "data:image/png;base64,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"

//Picture of arow "Up" for variation is positive
var sampleImgRed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgCAYAAADbcAZoAAAgAElEQVR4nOy9ebAlV33n+c23VpWk2iS0lBazQ3cLI8wmQWPAdGPcxg2FQEVJVXLbhM30TDhiYpbwODye9kx0gBtPw7QnJry06QWkEiqtbIGBtgCzhBFopUqSJaEq1aLaXm3v1Xv13rv3Zs4f991XefOezDzn5Nky8/uJeCHVu3l+v985me/m75u/c05GIISscifwSzGwMwJeC+CVAK70HRMhLWc9gDHfQZDGcy4BXhgDXoiBL08DX7oFWPQdFCFNJfIdACEhcCfwngT4dwDe5jsWQggh3jkF4N9PAX9yCxD7DoaQpkEBQlpNAuAO4H+PgP8TfMpKCCEkRQQ8NAlsuwWY8R0LIU2CAoS0mjuAvwTwu77jIIQQEiYR8GwCvHUHMOs7FkKaAp/4ktZyB3A7KD4IIYQUkPTXBH4+8R0IIQ2CFRDSSu4CtvSA5wCs8x0LIYSQ8ImA7bcBX/IdByFNgBUQ0kq6wCdB8UEIIUSSBPg93zEQ0hRYASGtYzcwtgwcBLDFdyyEEELqQwK8cSfwpO84CKk7rICQ1tHtz+el+CCEEKLKjb4DIKQJUICQ1hEDL/cdAyGEkPoRAa/yHQMhTYAChLSOCLjOdwyEEEJqCavnhBiAAoS0EV73hBBCdOD9gxAD8A+JEEIIIYQQ4gwKEEIIIYQQQogzKEAIIYQQQgghzqAAIYQQQgghhDiDAoQQQgghhBDiDAoQQgghhBBCiDMoQAghhBBCCCHOoAAhhBBCCCGEOIMChBBCCCGEEOKMCd8BENIEfuF978Nrt28vPzBJkPR6pcfI2DFyDIDEpT/JmETHCltm7anYV22XOiaJY327OjGWtIkgeR51YnHUh+wxSadTPM4Vzv3QWBm4hrTGXtZX2TEWfZf2K+/zONaPyyDH9+zBs9/7nu8wCCECKEAIMcDE+Dgm1qwpP1BwUx75jeyN26NwkBIDKsdY7IvU+AYmwoyIwrrFW3aMTn9tX7cqx9i8fgM6JgGAXi8IATK5dq3vEAghOXAKFiEuiSIzxzQNU+PC8b1AW/o5IPT+hh4fIYQ4hAKEEFO0KMFoT08bTouuWYDXLSGEhAIFCCGeYVJEgkZCpEQtEzLW4DgSQloCBQghhBBSF+ogUgJY/0EICRsKEELqSmjrJgJdfyHlMdDYGwXHjxBCyAoUIIS4hsluc+F5q4bp8Wvr+fDY75aOOCFEEQoQQkzS1oTHBG0RZk3oAyE5cPIVIUQGChBCiBbBptENEDJc1O2Qto51W/tNCAkCChBCAoCpAFGmbQmkz/5yShMhhBiFAoQQQppK20QKMYvO9cMdsAghElCAEOKD0HaeasC0JaJJk85rS6skhBBSNyhACDFNmxORQIVMi8+IGRp0TTenJ4HQoGuDEOIOChBCCAGYSFWEC+cl4BgRQggAChBCgoGpCcJP0EKPj9Sful9jXANCCJGAAoQQoo2XVCn0BC30+HzCsSGEEAIKEEJIEwk90Q09Pp9wbAghpPFQgBBiA+5OFT6BjxvXVBiiiePYxD4RQloFBQghbYBCppnwnBFCCKkhFCCEEHkoZOoHz0c5TRwjX33iInRCiAQTvgMgpBEYutlHAAa373h2FnPf//7oDV10g5c4JpFJDDR8Ce2q2DFtr0obETpjayg+I3YFv9OyK8LEuVOJ11b/deMcMTF8TDQxgWh8XDk+rXjFAVW3q3hM3OkAcVweW4aLbroJa//RP1JuRwipJxQghARKb34e8fy836SzSQJEZNuVXU1fQZ0zF9eCjN26xFkDu0LbVQXI0pKcOMrQPXoUoAAhpDVwChYhbYXTqUZpW38JMY2G+CCEtA8KEEJs0ZJk1vRuTcHv/uQzvpb6VromQr9+NAj+b4IQQhShACHEJ23Zitd0fG3rb118t5xGCgWFPkmtMyOEEFCAENIaGpkcFdG2/gZAXa6xusSpRBP7RAhpLBQghJALtC2JaWmlopEJeF1o8tizAkIIkYQChJDACD494XQqUoW6jGdd4gwBjhUhRBEKEELqSOg3/LaJFEt4rVTUZczrEmcI2B4rVkAIIZJQgBDSVEJPzBokUigUDNPEPqlQ1/5TgBBCJKEAIcQmoScSocdHwqbt10/b+08IIZpQgBDim9CTmNDjU4CVipbCsZenylixAkIIkYQChJA6EHgC1aiXEQY+1lo0sU9th+eUEFJjKEAIaQqhJyShxxcCTRyjJvZJhRb1ny8iJITIQgFCSIto1PsfWCUxSxP7pELb+08IIQ6hACGEDMNELGyaeH5U+tTE/teNvHPACgghRBIKEEICJPgUqy5JIKskZmlin0LA1ri6Pl8UIIQQSShACKkrTUoGm9QX0lx4nebC9R+EEBUoQAhpMqwAlFOXOFVoYJ+U1i81sP+EENIkKEAIsU3oyVDo8Q2oS5wqNLBPjdrooAUYO1+sgBBCFKAAISQE2pq01aXfdYlTAQqFehH8+aIAIYQoQAFCSF3gdKpy6hKnAsEnnmQIni9CCCmHAoQQQgzAxLNe8HwZhhUQQogCFCCENAmPSVVdErq6xNloeA6aBwUIIUQBChBCWgYT8AbSlPdIkDDhdUAIMQwFCCHEHQqJTCOFUhP7RNRpoGDke0AIISpQgBASKF5T1bYnym3vf91oYEJfOyhACCEKUIAQQuoLE0T/MPknAAUIIUQJChBC6gyTNCILrxVCCCGBQAFCiAuamPw1sU8q8Mk/IX1Y/SCEKEIBQkjTaXtC2/b+k3pSI4HLBeiEEFUoQAgJhbYnym3vP7FLjRL62kEBQghRhAKEEGIPJmf1gkk60YEChBCiCAUIIYQJoi2Y0JM2QAFCCFGEAoSQOsHE0w4cV0L0oQAhhChCAUII8YtK8k+hQEhwcBE6IUQVChBCiBxM/glpB6p/6xQghBBFKEAIaRoUCqSOhFAJo109KEAIIYpQgBBCiE/qlpyGkvSSMKD4IIRoQAFCCGkWTLwJcQbXfxBCdKAAIYQYI2KSTki7oAAhhGhAAUJIwNhK6CkUCCFGoAAhhGhAAUIIIYQQPShACCEaUIAQQgghRA8KEEKIBhQghBBCCNGCi9AJITpQgBBCiCHqtmaHa4FIZShACCEaUIAQUnfqtu2sgl0m3vUkiPMWwPUbhF3bUIAQQjSgACHEFXVNMAgh9cWmYKL4IIRoQgFCCCGEEGWSOPYdAiGkplCAEEIIIUQdVkAIIZpQgBBCCCFEHQoQQogmFCCEEEIIUYcChBCiCQUIIYQQQpThO0AIIbpQgBBCCCFEHS5CJ4RoQgFCCCGEEDVY/SCEVIAChBBCCCFqUIAQQipAAUIIIYQQJfgOEEJIFShACCGEEKIGKyCEkApQgBASElHkOwJCCCmHAoQQUgEKEEIIIYQowSlYhJAqUIAQEhJ8qkgIqQP8riKEVIAChBBCCCHyJAkFCCGkEhQghBBCCJGH4oMQUhEKEEIIIYRIw/UfhJCqUIAQQgghRB5WQAghFaEAIYQQQog8rIAQQipCAUIIIYQQaRJWQAghFaEAIYQQQog8rIAQQipCAUIIIYQQOSg+CCEGoAAhhBBCiBScfkUIMQEFCCGEEELkYAWEEGIAChBCXGHrySGfSBJSf+ry/cDvG0KIAShACCFiAkiIbE33oN0W2A3g+m0ifAkhIcQEFCCEEEIIkaPlAowQYgYKEEIIIYSUkyQUIIQQI1CAEEIIIaQUTr8ihJiCAoQQQggh5VCAEEIMQQFCSMAEsZiXEEIAChBCiDEoQAghxghC2IQQAyENJIi/b0JII6AAIYQQGbitK2k7rIAQQgxBAUIIIU2kboIphHd8kHwoPgghBqEAIaRpMDkjRI8QxFWgdrkDFiHEJBQghBA5KGwIaS8UIIQQg1CAEEL8wqk3hAQPKyCEEJNQgBBSJ5iA26FuU2QIcQ2vZUKIQShACCFMLuoGBRNxSZLw2iCEGIUChBBiD06vIgDPbd3h9CtCiGEoQAgJBSZpduC4EoBVowpw/QchxDQUIIQ0nRYkSF7guBKbhCSYej3zcRBCWg0FCCEuaGKy2sQ+hQDHlQQGKyCEENNQgBBSZ9qerLa9/yqE9ESd1AcuQCeEWIAChBAyStsTjrb3PwS4gUEYsPpBCLEABQghgcKUqoEwUa4XPF9IuP6DEGIBChBCWkbiM6lS8O01zrrBsaoXdZoOxwoIIcQCFCCEkFZBYaMAx6r1cAE6IcQGFCCENAmPCWPbE/u2918JjlU9iGOeK0KIFShACCEkYChs7MBxLYfVD0KILShACKkLNVm74ZW6xBkATMDt0KhxpQAhhFiCAoSQEGiruKhLslaXOAOgUQl4QNga1yK73AGLEGILChBCbMOEzAxNHMcm9skSFDYeYAWEEGIJChBCmgyrG+XUJU4VmtgnFdrefxNQfBBCLEIBQkhdaZK4aGLCyD41jzq9v6MinH5FCLEJBQghARJeOlJTAkzsiACeJztUGVcKEEKIRShACCHDMBkMm7afn7b33xHcgpcQYhMKEEJaRKMW8jZpCloINLFPKrS9/2n4AsJcEuCc7xgIaQIUIIQ0hdATBoX4vAqltvq2RRP7pEIN+8/1H4WwNESIAShACKkDgScxjaqsNBGen+Zhc0E8p18RQixDAUKITWSShNCTw9DjU6C1lRVb1KVPdYkzEFgBIYTYhgKEkDbDxKz+8Bz6o4ljz/UfhBAHUIAQ0lRCTyIa9C4RTkEzjMp4NnHsfV7LnH5FCHEABQghgSGVeoSedDVIXLRW2IR+jdmmif2X6ROnXxFCHEABQghRo0nigrin7ec78P6zAkIIcQEFCCHkAoEnR8ZpaYWBU8aIEO6ARQhxBAUIIU1AIqFsXdLZUnFBYVNOXeJUwkSfOP2KEOIIChBCbGFqC94mJEuctkUqUBfBUJc480i6Xd8hGIW1HELChQKEEFIJ00lX8ElcS6sbtRF9dYlTAVd/E3z/ByHEFRQghLSVtlRfVGhbf0OgLmNelzgVGBI2fP8HIcQhFCCEmMDQjdvYFrxMJEZgZSVQ3yrUJc4a0rTpV4SQsKEAIYS4p21rQtoqLkI/LwM4Rt4XoFMAEdIuKEAIIfL4qL6EkqDlEHxlhbQTxevS9/oP3/4JIW6hACHEBi53wDK1Ba+PRDr05J3xhelbBY5ROUz+CSGOoQAhhLSTwJNDr5WVtvquC6Z3nqMAIYQ4hgKEEGIXVlZGCT2+ukChZASuvyCEuIYChJBAcLoDlsupXQoEO1VMhcDja21lpS64HqMk6W/BSwghDqEAIYQQWUJPoD3G16jF+E3qSxmcfkUI8QAFCCGEAOEnnaHHVxNaWwHK8c3pV4QQH1CAEGKaOk6TCu0YFTxMFTMO4ytwHfjY1BwuQCeE+IAChBDihyas95Ah9D6EHp8KbRVKur57vWadf0JIbaAAIYQQTYJ/Ot+k+ELviyVsXmOcfkUI8QUFCCEB4HQHLEPUeseqOsc+gPG5o0l9SUEBQgjxBQUIIW2jzsl3nWNXgJUVh9Rx6pQJ15x+RQjxCAUIISbhDV2b4JNuU4Tez9DjI0Zg9YMQ4hMKEEJcE9oOWC4JLR4VGlB9Ce56yOJhhzRrBO6bAoQQ4hMKEELaTqjb6xqi1mtVVAi9DxQXwfhO4phvPyeEeIUChBDPBJ422qHhosc4gfcz+MoKGYLVD0KIbyhACKkDTNjrSRPOSejxmabm1Q0pKEAIIZ6hACHEFE1INgG3b1f3QVPX1+gQeB9Mj3EtXxZomCRJ+PZzQoh3KEAICY1AEhWXGBM0LRy7XEIfiyatCQmd1NgknY7HQBwzxhSHkFDhXychdcRllYKJnVNqXV0a0DJxUavKSoumX41NTfkOgRCSAwUIIR4JO61SoAlJcxEUcxdoQh9UaFB/kzjm9CtCSBBQgBASOk1LbEN7D0qdxq4CHAsBgffX+BqYFlU/CCFhQwFCiCt8JztcfN1cmnBOWjZty0t8FCCEkECgACEkJJrylLoOMdqG07YuQHHhHU6/IoSEBAUIIQ2kTtNtnC6WZxVIDY7FKKH3Nyc+Tr8ihIQEBQghnpBKY3wnO3yK31x4TkYJfUwqxNeq7XcJIcFDAUKIC2wmNqEnTUQabp18gUa9hFAGi/ElcQzEsTX7hBCiCgUIIaHgW6S4SNBCmyYV2jFNwMdYhD62nuNj9YMQEhoUIITUCd+JDBPtduPj3AZ+PdWhskIBQggJDQoQQjxgM2WhSGgZfB+KPUIfE5lz3+2G3w9CSOugACEkVHwnDQ6S1jpOkwou5ibAysoIpiorrH4QQkKEAoQQ27RhbUfI/olfKC5GcRVfknD7XUJIkFCAEBICvoVEKAvQiRvq/D6U0K+jgOJj9YMQEioUIIQ4xvv6D5u2q/pv6jSp0GImeoQ+tpn44uVlT4EQQkgxFCCE2CTEhCXEmEh7YGVFD8X4kl6P7/4ghAQLBQghdcX3lKxQFqATN4R6vkIVNCpYiC9h9YMQEjAUIIT4xreQsEkoa0vqOE0qtJh9EGpcKngSZVx8TggJGQoQQhyinYp4FimVnyA3IZEk7aLGlZWk0+HfHCEkaChACLGF4wTA+5PuQBagk4AI9Zw24Toq6AMXnxNCQocChBCf6CZCIQsJz7R6mlRoMZsmVEFjmCpjm3S7XHxOCAkeChBCmkrAIsV7tYYQGwRwXXPxOSGkDlCAEOKIuq7/CNK2ig8KmVoR6rqKOlxHSRxz8TkhpBZQgBBigxDXf/iyXYPErdXTpEI7xjCtqbYlCasfhJDaQAFCiC9cr/8IudrRliSRyNOWa8JgP5NOp2IwhBDiBgoQQhzgfPqVzXYBJ31On/gTUobD64hb7xJC6gQFCCGmqUsS4Kki0pgpMS2eJtV4oRfqLmAFcPoVIaROUIAQUnOCXv9hkzonuESdposeFTJ9SLpdJL2ep2AIIUQdChBCfBDi1CpdimzXISGs4dNu0lx0rrVkaclCJIQQYg8KEEIs4zx1DVGkVCXk2Aa0eZpUnV9uaApPYjvp9bj1LiGkdlCAEGKSumy/60mkeJ8uVucElyjT+LUqYPWDEFJPKEAIcU3AyUwa5+LGVPuqtCBpDR6OrxxxzK13CSG1hAKEEIsYTZFCnFpVdf2HDb8u/BuijtOkjFGD82OdiuckZvWDEFJTKEAIMYXJhKpmU6u08Z2ENn1dggUaP9XN5fqaKvDN54SQGkMBQohLDCYlrVn/UQeREEJC2mTqWOGxDKsfhJA6QwFCiCXqPP2qkes/6pB81nEHLGIM6fPG6gchpOZQgBASGnWZRhXy+g+btpmUD9P0LXgDFHPx0hKvQ0JIraEAIaSGGE3Wmrj+w3dyVpd1BCESWhUoNFj9IIQ0AAoQQgyQTXaEaU0IlY0QYgjFb52fyqfhiwJbBasfhJAmQAFCiAl6PTN2AhAbNtZ/eH8BoU2a+qRdF46HPVEYx6x+EEIaAQUIIU0gpB2xbMYSom1T1CFGHwT2HhSfgpfVD0JIU6AAIcQwRqdfCU0FJDZ0qev6jxokf61+uWGTiWMk3HqXENIQKEAICQVRohaSaHBNXYVE4E/RQ4TjUT4G8eKio0gIIcQ+FCCE1J3Aqyt1Xf/hPSluYwUitB2wQjkHXPtBCGkYFCCEGCTY6VdiY+bbhVix8W27DgIgtKSeDBGfP+87BEIIMQoFCCGhErrY0CWkWFRsN9k/CZak20XS6fgOgxBCjEIBQkgIBCA2gpp+VdfdrjyLhMa9fC+waVI+pnYlrH4QQhoIBQghhvAy/SrEaoIj6rr+oxYiIbSkvqUky8tITL1jiBBCAoIChJCm46q6EqIYqqvtOvgndkkS7nxFCGksFCCE+CaA6VfWbVW1WVch4Vsk1KlKUeNpUlWPEcWcLC0BcVxunxBCaggFCCEmMDk9Smjeg325hk5tWmlXB9u+hYwMTelHCMRx/63nhBDSUChACGkyrtaNOBYNzsWNIdutX1tCpIjPn+e5IoQ0GgoQQmwgmzyEOmWqCcmPTXHjuyJiE9/9Nx1HzaZ2JZ0OXzpICGk8FCCEBE6w06/UHblt13bbNRAy3AErQ5IgXljwHQUhhFiHAoQQX/hIvhxVSbj+IwDbhvwHswC9BSSLi1x4TghpBRQghJgmFGFhMpnn+o+gbXuvJLioyAQ0TcrkMasx93rcdpcQ0hooQAgJGE6/qom48WxbMgC//kkhnHpFCGkTFCCE+CCUKokFW0FWKEz6811JabL/0OJwRLK0hKTb9R0GIYQ4gwKEEJOEIixc7YgVQhLoOyHXbRdi3A79B7O2xPfUriTpb7tLCCEtggKEkFCp+csNS5xrNqtp1aKmtoMRCQ0mXlho/RgQQtoHBQghpvDx7g9ZfL4jhOs/amtbMgAzx1Rs730cNIiXl/nOD0JIK6EAIaTOBDb9qjbb77KS4tZ/KAS0A1YSx4jn58vtEEJIA6EAIcQlVaoknH7l1F/rREoo/n330RHx/Hxr+koIIVkoQAhpOm2afuWaEPvnu9rhYrqUy0qGBeKlJSSdjhffhBASAhQghNQB2YqFR7ERxALxJq3/8LzuoY5rKmxgegesJI75zg9CSOuhACHEFYEsUjcy/arGYiOI2Ntku+o2zg1bgM6pV4QQQgFCSHPwua5DhO01KzZjoEhpHgFM24oXFzn1ihBCQAFCSFj4mGpVJY7Vj+pb2aiNuKmDbRdrO+qAaIe4bpdTrwghZAUKEEJcEEhi5XX6lUlbgYxnGUGsi3FpW8p9IAvQXZIk6J075zsKQggJBgoQQupGKFWSIgzGU+fqik3b3heg173aYWpticQxvXPngDiWiYoQQloBBQghtgnk3R/S1HH6lUlbDRIp3qsFDkRK6AvQ48VFvu2cEEIyUIAQ0hIaM/3KoC2u/wjAtgs8CTGu+yCEEDEUIITYxPTWu3WYfiUiALHR+MXtdbcd2jUrQkXIJAnic+fq0S9CCHEMBQgh5AImpl/Veftd19R1/Ycv276nlCnQO3cOSa/nOwxCCAkSChBCmoZoC9A6TL8KQWyEEIMp2yHGZKp9VSyvLYkXFrjugxBCCqAAIcQWvqZfhUYIAkFoqh5TuazaDjEmhfbeF6CLxP7yMuLz5z0EQwgh9YEChJA2YmAtSbDTr8TGnLYLcupYXXfSqorD+JNul+/7IIQQCSZ8B0BIIwlo8bmRRD7U6Vey9hvULug1GnlEUd92FOU5zv9M5RhT6FyjcYx4bi5sMUYIIYFAAUIIEdNg4RJkhcKkPxtxDpJ/A0JAp7WoRyN2dK+HEcPqEXLROSGEyEMBQohpAnoCKj1NSjHmVky/MknIU6sUk22Zo0XnL7rwoYwBlZDUKIpt9ZBESST1zp1D0umojWUI1yUhhHiCAoQQX9Tl3R+BVjGk7Tu2FVx1RSEpNlVRcILv2Fb8x+fPI1lclBYsq1HLTDkjhJCGQgFCCBkltOlXBu0brd6EsP5DQmBEorVBWhEICHlLXsvVlmRpCfH8vFKbsrMlJVAoTgghNYcChBCThL74XDX5rmJXkyAEgklbptoVLeCG4hQnGX+6x5hst9o8jGrH0K86HfTm5oy7khIoFCeEkJpDAUIIcQOnX8n5K0gujS269rWTVo2rHUNmul30ZmeN2FIl7+oorJxQlBBCAoMChBBTmK5+mMbWWhKX61Fs2PdZXckRGxECmCJl+hzKrkVxud2uwHepOItj9M6eDS6pLxQmJdUzQghxDQUIIaFievqVAf+2p8IEu7uWSbGRSbClU+0QksVsIutLLNiqdpT1JY77lQ9Rv0M4PwKUhUmg/SCENAsKEEKIfXxMv6qx2PAilGSEhI59xSlZVbfEzXUl6T/fQILe2bNIul3x5zXbglcULUUJIcQVFCCEuCT0xeecfqXOSsKWfdO39cqGSrtUXMI3kleoKARRwZGwnZtwlx2XJKviA93u6ueVehPoFrzSooSChBBSEQoQQsgonH6VTxQJp+BIJeI2xUbek2uNKVKibXtlqDzGvhep57TrnT3bf9FgCpVRVfYc0C5XIxUpgFUSQkhlKEAIcUXTqh+y1Gn6VR466xxsjKeB9RbGXjYY0mYKtmwnCXqzsyPiQxWpt8dLG/O7oJxVEkKICShACCHDmBY2JnEhXASJlPApsKW4hFOk5BoCGE4QvaeAIW/JK0FvdhbJ8rIRW2UUnXGp3ngUJlJVEgoSQkgKChBCXMCbbyFep18JErfCZNC0CNIUG1q1EF/VjnR7hf5qizEd2+kYB5WPpSUrvlWpJE48CJNSQcLvQ0JaDwUIISFR5+lXPqokuvZl128EIDacr8coa5fTh8piwaY4UrkmBuJjeVnt3SWeKH0xYW5Dd+s4RqpyrI4Q0nq8CZBdwGUJ8EoA633FYJsE2OjpdVpBEgPrxoA1vuNIgE+6dVijm2sVYWObKj5lBEcAYsNrZaMO28janrY1WHCuOu0qQKGiJUwcCIPc6sjgJ/Dvywj46J3A3/qOI0QSoBsB53zH0UQiYDEG9t8GHGpKXulUgHwReE8E/GsAH4gbLDzShP1V6hajb3duInWufsjiUuCkt8dFJvExWVUY/E4hgY/ybMkFoddOtzphI84Q138kCXpnzlRecF6IrXetqIQgcpl7sP0qSZT5bw2qI5clwD2+gwiV4M5WQxiM6x3A8h3AdwH8+RTwlVuA2GNYlXAiQL4AvHwMuBvA21z4IyQYwrt5KhG0sMnar7I9roz9rC9JojJbJvG8fWuVypJoYb+tJ30jLzeMY/TOnAE6Hf0pTabwcA5LN1kYOtixQODaEUJWiYApAO8H8P4l4IUvANtuB37qOy4dxmw7uAP4wBjwGCg+CMknhKQ+lJu7Sr/TUzdM+8zzU+IrWkluBz/G48rGIojLVHUlyvkRtavSVy9vfh8Qx+idPl1a+cgbC+kxMkHJeTfmRvAjHZNNXPkhpAZEwCsj4IdfBH7Xdyw6WBUgXwDeAuDLADba9ENIkDhK6IOsUlSZOnS6UyUAACAASURBVFZGJgkpS4ylfifhR3hIRmxUSotkxYZMOwlEscv0xfYLKXOxIVK6XfROnULS7erZLsCpSHEgTIITJBQjhCACpiLgL+8APuo7FlWsCZDdwOYx4D70y0WEkDxCqDyYXldimqzoSCXPF8KoGEdJQpPoig1TwivHVhGrsRqMvXK7wTQ5Gz+A9LFJt4vumTNIYn9TqK0LFIuiJChB4rIKQ0iYfP6/Aq/1HYQK1gTIEvAHAK6zZZ+QoLGRlNd58bks2V2ZUsmE8SfH2aS17HAZmx7GdCQRFIgzq6hOX/O8EDtJEiRLS+idPg0MxEdV0WMJK+LEUh+0BIktKERI+1g/Dvyp7yBUsCJAdgNrIuC3bdgmpFGEIAJcCBtZHyrTq8ooWzeSg/XqgKYtYSLqOAYbuF7/ES8s9Becm+qvJ6FiVJhYiFcqLttijiKEtIt/8YUaPfi3IkA6wIcBbLZhm5DgCa36ETqqokNlSpNEgiOVKBkc17KEOzexDEBs1H39R29uDvHcnIGANHAkUqyJEsNxuYDyg7SMiTFgh+8gZLG1De8bLNklpDm4SuZ8C5U8wZCZXmUszpJkaehTk+szREiIDeu43mEqwPd/JIN3fCwt2fNvgqJrt8LYiawqWxPFZiimGj42ISRU3ug7AFmsCJC4vzUYIe3DZ/XDpm1T60qyosMU2eRIsJ2s9QqCpP2RfjusrhQ0dNvOoc2k1+tvs2thpyun5IkT3V3QRKaUjRT/3anEkq6MUJAQos0rfQcgixUBEnHbXdIylOcyukrcfFc/AGHiJCU+ymJfsZuXdBsTOBWSqpGWAUyj8jn9KntORl4IKB+M1GHx8nJ/vUccS/mpZeJrUJhUFiUGBYmWf0JIbfJvW1OwDliyS0iQjAO1eBpcZtto9SOKzIsilelVZRiuLImSazUDKQvZtgFVKJxXt3UXm8/Pozc7q9RGt29BJsmGpkyNXNe6MXgQI7YSHEJCJQL2+45BFlsVkJ8H+YVMiCUmVQ6umBQGvfWu7Z1sBIm51JQmC5WHsrUkpRieUmOyQiGypV21kvnMBKmKWHz2LOLz540kwFKuJY/zfl80IEq0BYmB6oiqGBlX9kBIvYmBF3zHIIuVXbDGgG/ZsEtIiIwBmK7b7lOm45XdxUpFHGR337E8xmXCrtIuPun3jaT75biyIdxhK9F8b0h2OpyJHZOqivNeD72TJ/viI0uVd30Y6p9w/FM/XqjYP+0+VBxPGZ+TUHw4REj9+abvAGSxIkC2A48D+HsbtgkJjQ1Q+EPyWf0wbTudQAiSWK0pSDbeB6A5PlWSwwQw1x+NJ9S5Ca6KrWz8hhNy0wvm48VFdGdmkHQ6enZVsCRWghEnrgVJ9hpTJM9fBGAT3wVC2sNL1wBf8R2ELNbehJ4An7Nlm5BQGAOwyYbhkNeTqLyzQ9HeyEcD2w6mmEklTmXVGo8VgJG4i2wVJMyr4kkVG9OvJNv15uaG32weEoYEildhYkiQaPlTJOtvYxRxKhZpBRHwufcCtdnuz5oA2QnsBnCvLfuEhMCVAKZkD3ZV/dCIQ8p2KhkYSih07BWJDt0pQVXQmRqmkiBV3La3NOkU2ZJJeus2dTBDEsfonjyJ+Nw536HoU1GceBEmhkSUsi8NJgBcHUX+prgR4oY9k8BnfQehgjUBAgBTwCcAPGPTByG+uBTAehuGqyaFJisDqZt/5eSmIJGwljiZGguFJKjqTlpDPzLiTjZ5dbUFsKN1LfHSEronTiBZXtbzVwcqiBOnosSAIFH2o8DFUYSXcSoWaTZ/dAsQYAk4H6sC5BZgNgF+IwFmbPohxCVjALYAeJlKo7pVP4DVm3zl5KUgIR6xbXprYBh46jqI3fKUL5HYKIypKBEL4X0jhSbzF/cX/qxcM/HsLOJTpxCtvN9D56f2aAgTZ+OgWcnR9iHBZVGEa6LIbtJDiHuWY+DtO4AHfQeiivW/xZ3A8wnw6wAWbPsixCZj6L/h5+WwVPkA/Fc/BOs7VG0nSVKYvLtIApV8ZOONIuNJtxGxkYfBWHWqN2lhIExwc7b0LTw/g/5m16f0ev0pVwsL+Qm45LjpCpfgBUxFUWI9Jo/210cRXjU2hk0UIqQhRMBv3Q487DsOHZy8p+d24OE7gd9JgDtd+AOAaHwcF61bBwAYm5wExqp/3eRZiCYmEKW++MYmJxGNu132Fkn0cWxiQm0cSpKRyakpIzeUbNITjY/3x08w1WRsSnrFxcB4pdjGxsYwNTGBCQBrkLkGomj1PK9905usxeCk+pE6j5XOaM71YD1hk3wfyNBYWkiGBvZLhVsahThMvOsjZSz3o8KIiipmAzGnE0tJu3hhAb2zZ9WvfdPnWXSOiw43610PhSl5on4Z7UM2Fhtbgq/YnX75yzH1ilcMfTwF4CL0+zSXJOgC6EBy5W6FWG1eB8nyMpIQN2CwQAI/f1Px8jKSXq/wmOVOB0vz844iAgB86jZgl0uHJnH2otDbgF13ANcB+LQLfxGAN/3+7+OS173OnhNTX5w2EtSqfg0luMbb5Byfa0XFvq1jXdnUESoi4aEz5WnFzoiY1LW3+qvi47SmbeggGW+pdZUpUyb/rgXnRWRdGJ3nufNJr4femTNIlpa8xrGKyniIhLHoMO1gKqAgBLJ9sCJITF9nUYSxiy/G5ltvze3bpSUmrJ+Xmm8CQS4Qdzp44s47XQqQ3bcBf7jDlTcLOK1C7gD+BMAXXPiKez38+FOfwtLRo+aNJ0n9xUexUfM2Tfipo/gItfphYmG5xKJyGyjHPJi+I/pMc3xVfZeuJdGlJGksnD4kik1zMbGpmLPE58/3F5qHIj5UkZweFsRUrwrT14JH85q23j+bf2fEKc9+7Ws4c/iwK3cPzwO/Vfcrx/k0yCngdyLgIRe+lhcW8JNPfxrduTlzRgNa3FlJfJgWGYbEhLJby/ad4aL6IZMIy9rJiWHkhm2o+rGa7KgIBoM3d6mEy/Jakry/dyWRUSTG9ANTjrmUXg/dU6fCfbeHKSqIEy/x5R3mOq4qaIgRChFSxIHvfQ9HnnrKlbtD48DWTzZgXbVzAXILsDwJbIWj7XlnX3oJj3/mM4irbtVouuoRqvhwNfUqJB9Nr36Yurl5uEnqVDoqxSgpeobWzlT1qzC9S1Vo5No3GJfUZwp+4vPn0Tl+HMniop69plAiTryIEonrvVbVEU0hYq1fFCK1Y2bPHvz8Bz9w5W5hDPj17cBLrhzaxMtGEK635z3+zDN45vOf12tsUngM7FU2UXPxUdepV7awVf0oegrvqZKggpRHUTKksZZk4K80wagqOKqe67wpU1XthzDtcmWHq96pU82uephAQZQ4eXIvKUiCJbSqCIVILZg7fBh7v/Y1V+7iBNh+K/CkK4e28bYTnevtefc/9BBe3L1brZHvaUpCExQfgKepVy6rH1VsZhISLXJugFFeHC5/Z3CKk47gqPpekqIYcqsag38bwNVOWip+4vl5dI4dE1Y9oijS+mkdCtUSJzGIPnYVRxUoRIgES2fP4snduxGX7Ixligj4g53AV5w4c4TXrbBX9i7+HVf+9t5zD0786EflB9qoehiYjtM68WGbEKZemax+pJLywU1ROVkuEB42boPSNk1Mr0r5FPbHgsAp8x8JfCaDf5vAVfVW0A8pkdDtojczg/js2f54GBQSusKlcaJGslLiwu/IITb9V0VTiFgdSxIEvaUl/Gz3biwvOFuG8Z9uAz7jypkrvL+LZ0d/D+M/cOXvp3/2Z5h7+mnxh6aFx8BmZRMWpujIfOabkKofDtGqfmQSC2VENzjBovJKT/9Xfpe+URfaKxMCCovZR5KD7HEGBU7aflZsCKsbgYsNqcRctR9JgnhuDt3jx5FUXZ/nkEaIFV9VEonrJEgxonF9U4g0lyRJ8A9f/jLmjh934i8CHpoC/rUTZ47xLkCA1e15/4sLX0mvhx//yZ9g6dix1C8tCY+mio8mTL0KoaJh4twOnjZj9IYnJRYcVjykbRq+yQotaQoAmfeSjCRxOQmfglO530mZGm2XV3koTaQ1/+aSxUV0jx3Te6lgjaiVQHEtSOpaGaEQaT37v/1tHHvuOVfunp8Ett0C1OcpjQJBCBAAmAI+GTncnvfhT30K3dlZOzdAQzZbKz5sE1o8KaSrH3nCQ2OdiCiB1l3IPeIGkjdh09WAAaIpamXHFf0ug5TgkIlt9VfmqxhGEmETAr/XQ+/kSXRnZpB0pd473WiCFicuBUkdxQiFSCs5+sgj2P+Tn7hyN9sDfv0WR5s1+SAYAZLantfJZspzL72Ex//0TxF3OuaMGqyktFp8hDT1KrTqR2pKUtFtJ1csCG5Yxm/wgqlbucl2Nh6NqVZFosmGsCkVHAYrFtIkiblkVjHW0u+qlelWnaNHEZ8/rx5PCwlOmLgSJHUTI4rfLxQi9eXs/v145lvfcuWuGwNbfxN41pVDHwQjQIDV7Xk/lLjcnvev/9pMcmBQeFRebE7xoWzfiO2KFFY/BDf+3GNF5AkPhXUUMriqdhQmIiZER864jIgO2yhMmTJl3ySr063OnAm68lgXghEmJYLEuA/Rx6b9VSUUIUKMs3jyJJ68914kjrYHj4Dfu93RjCCfBCVAAA/b837nO3jxvvv0DdSl6iHzuel2hvx4ER+qVBQ2ua1FwqPE19B1JHgqb+zmJ1hoXfj0P9UXncXsq37yxs9ANSUX2WlVskiKPJNTplxtv4skWd3dqnviBBKTVWZg9Fww6fIvSjLnw3h1RFKMBIFvIcK/CaN0Fxbw5N13o7u05Mrl/3Mb8BeunPkkOAEC9LfnTYBPuPK3d/duzPz936s3NHhDb5z4CEkc6BDQ1Cupm5TE4vIROxWrH66rHTZsZ30M+Sqzb1LgwKzY0EYx/pFrI47Rm51F59gxxIuLYrFQ9UeEDT81FzleRYnN6kjBOTHqpyoUIrUn7vXw1P33Y/70aSf+EuBrU8D/7MRZAAQpQABgJ/AlONye9yf/4T9g9pln5A42XPVovfgoMmXKR2gCJ0VeZMKbUkmCuFoJSNspWS+iSl4VQrjgW/NJfGEioXtjzfgd9CMrOERjaOX6KUtwba8lUbElkaDH8/PoHj2K2NbmHr5pgFjxIkraLkYoRGrLz7/xDZx88UVX7vZMA7fdAriZ5xUAwQoQoL89b+Rwe96HP/OZ4e15Rw4yJzz65hysPamD+Aht6lUA1Q9Tt4tcOxrJrdTNsYI4GEkYRIJG2FS+LyM+bCeN6Slk6YTPpsDREX0qCXXGVnL+PLpHj6J36hSSnLcCRzX6MUKNBIpTQZIZBytiRPSRKR9VoBCpFYd/9CMceuIJJ74SYCbu73g168RhIAQtQABg0uX2vOfO4eFPfxrdubnhDwwLj75Jio+iNt6en3peeF5445GpfmTtVOxP+iV+hXEA2kl1bp8NJWyVRYfmVCsniZ2pKkaerQIhlywtoXf8OHonTgDLy/aTekc4ES0BixNfgsSK+Mt+hACuyRCECCnk9LPP4tnvfteVu8UE+PXbgQOuHIZC8ALEy/a8n/3she15LQgPig+HbQJeeJ7G1I1Gyo5iopnvTD1pSl/7uSIpz57sk31RNSUdr6o9SbQTN5uL5SWrGEMmSn7Q6aA7M4Pu0aNIFhfLY2oBRkVKYMLEmSCxYVtCjHjDpxAJROyGyMKxY9jz4IPOHkZGwCduBx524iwwghcggIfteffu7W/Pa3jLNWPCo2wHmjqIjyJzpvyEMvVKRNRfayB9Y5F54i7TRoU8nxKJfB65CZmBRGvEtuXkrTQxMyxwBAGM/kj41E2Uk14P3VOn0DlyBPH8vKletIbK4iQQYRLEe0l0oBCp5LsNdObm8OTu3eia3rkvhwj4t7cBu5w4C5BaCBDAz/a8Bx54wIit4KseVdoabmdMfKjiqlKS+sKX/tq3vfBY1r6NaUsDuxptB39TOpUOlWrKsOmVeeua080qISE2hM0yP9Ks2E/iGL0zZ9A5fLi5C8w9U0mceBQl3t9HokPOOGn9jZhEUYgY991y4k4He+67D+dn3SzDSIAv3Qr8kRNngTLhOwAVbgcevhP4RALc5cLfnrvvxtqrrsLLbrpJ24aO8EiWl4s/73TcTkWK4/w3xpucRpX+fZIg6Xb1/cj4SP8a/Se8SC+iVbRReqwgKR7xmaJXtPWfTTGabV+0RkAXAzaHKh0DDCfH1pMqA+tp0kdK9V5hylfv3DnEZ87kLi4n9sm7AgvPtWRFzjTpvxfVe188O4vl/fvFdqemEI2lnpdmN0JQ8iQgtLWIgPT5MhFjtGaNne/5Ckxs3OjU37Nf/SrOHD7syt3DC8An2i77atn/O4D/DcCnXfiKxsfxT//4j3HJa1+r1E634pEsLGDue99DfP582liZM+3PS+Msm+5lqk1RLJZ/b8Rv0bGyyaSq3SKqriuQjVvldzbGoUo8I79aqagUCRoD9kspsBcVHKfzcse838Xz8+idPm3mJYJ1fboaSCKmglLEjvtndPrhsOEL/2vQ1tCvLdiUtl1FiCiO+erRnq/98Y0bcdlv/RbG1q1z4u/gd7+L53/4Qye+ABzqAG/9LeCoK4ehMu47AB3uB37wEeA6AG+y7ixJcPQnP8GWm27CxEUXSTap8FR3chITl1+OzqFDuU/Gs/Hpfm5FfJiOpQ7iIw9R0l10rIpdU7by0JhilDt9weSC7KJpChVF18g0Ehs3YYWpMqtTQhKFncgqEi8soHviRH+qVd4auKKF7gGsUTBGDfupNIXLcfzWpmplprVWmkZlY3pWyfhKn6cyNyI7iud21YbHazqansbmW291VgGZ2bMHz3z72058ob+E4D2/CbzgymHI1FKAAMDHgb+JgXcCeIVtX73lZcw8/jiufuc7MTY9nXucqSc8Y2vWYPySS9ApKweGKD40EndlEeALlThVkmRVfzrIJOKqN53UU/lo9VcCsaDRj5Ebvo0boovka8V+Mvj/NKlxKRQbJsm5DuLz5y8Ij17PSaItSpZ9/JjrUJgCJURBYkWMZGKvfH5zxsGrEJFxU6HtiA3X124UYdPNN2P62muduJs7fBhP3nuvvercMHECfGwn8H0XzupAbRahZ3G+Pe+RI3j8c58TroUwtsj8gkFMXnUV1r3xjbmf10p8FLoyWEmxXf2QOVYn6bZc/Si9faRvMioVgzzbMjetHD9Z0VGWuCv/ThSfwalLq3Ylkw1TSbDKyxjTiVq8uIjO0aPoHjtWuvYsD++Jf0WcxR+IQJHui6P4bIuRytdcSELERzVk0NYB6//5P8eaV7/aia+lM2fw5O7diB2tb0uA398JfMWJs5pQ2woIANwDLG0FvgXg1giwPllw/sQJdE+fxmVvfvPql6Vp4ZFmfNMmJMvLw4uRK06/8SI+VAVAkb2Qp14VJfGyNnSOzQtn5Sc3OdVMLCIAkSDxFooFhThtPXWzvkuPRJImlfBVFVZFcWXiSxYX0Ttxov/dkt7soSDm0IWEa4yPjUdhEoogsSpGUD8hots2bcOEENFpp8q6N78Zl7z73dbsp+ktLeGJu+7C+TNnnPiLgL/eAfyBE2c1otYCBAAeAE5tBb4XAbcBmLTt78z+/VgzOYn1r3udWcM5ScXkFVegd/Ys4nPnKD58TdUq85u5wWnZWEE5QRV8XnpDzLuJlCS7WjezApsj9rJJcoXzmrtdrgnScZquzujGk44r75wkSf/t5TMz6J06haTbpbCwjBGB4kGYSMXoSIwYNBiuEMn7qMxmVSEiyVB7C+d76uUvx8atW+09JEqRJAmevu8+nD540LovAIiAhyaBW+8BuJVghtoLEAB4ADh8c39Rz0dd+Du+Zw82X3MN1l1zjRmDRclIFGFqyxZ0yt46XCPxoRWHQVtGp15lbmhKSXNOcl84nabkCzr7qYk1GSM3L0H1RKXfIzczlZtOkaBJPz0VHFdpl6iSWJ0l7QKxUdavCAAGwuPkSaDTocgIBOPCxEGMUrGY9G+6KmJqepZJIVJlWtagvYwbRb+57Q2e54nLLsPmW2/F2ISbt0Ls+9a38NKePU58AXi+B7z/NuCcK4d1ohECBADuB/Z8BFgC8M9c+Hvppz/Flddfj6lLL9U3IpO0rSR7U1deic7hw8PvxpC0E5r4MLro3NfUK5mqR5mNgamhQ9WTXwCri5eH3Y5WaFRiFNmsIhaiFZsjMVWsBlibXlWSUGknL5rrNcrEozCRXVpC7+RJ9GZmzGypq0veU/xQfzyjLUxCFCQmfdsSI2iAEKlhNWRs3Tpsvu02jF98cSU7shx75BE8/3d/58QXgNkE+OXbAWcvF6kbjREgQH973q3AdZGL7XnjGEd/8hNcfeON0tvzDiErPlaIJicxccUV6Bw4MLw9ZhvER6DrPrJf5KrVDxPJq/KTMYkYc29QKpWFjK0oHYvETav0qf4gERE3VrY3RPZGLqhUjayBUfVR5FfjqeTQ0empVidPai8uL3Zar4RemUD7pyxMHMTqW4wYMtZKIaLTbqS95rmNxsexeds2TF55pXJbHc7u348nH3zQiS8AyzHwG7cDj7hyWEcaJUAAYLvj7XlPPvlkf3veqSm5RrIJieC4selpjK9f39+eV8KO1joLmc9Niw+dOGyv+xCRuUkNh6MWp+jresRGwRf70A1IlAwP2ssgWpOhUj0RxZeunhSIF2W7JpOOC0ZLkwftpETTrygGmcpJsrTUX1x+8qR+xSOghLs2eB4vpevUYmw+xIjRqkgNhYhu29yYFM7PUHvF8d/wwQ9ijeILnnU5PzODx3btQpyz4YZpEuC/vx2414mzGlPbbXjzSG3P62SS3+zhw3j8s5+Vu9nLVj0KjivcnnfVRMm2wKGJjxDXfYjEACCelqQQS7Rio5D0DSB9bEooFMaZdyMoEENSNyGJp/4jN6Sym5KMzShnQbmpikP218gZkwKkqh/pClBOhWXVv2KFLFlcRPfIEXQOHkQ8P1/eIFBxkU2kTf54xfF4K/XfUjw+xYgBQ6s/2teQIyEidX7LzItsWKyGXPyOd2DdL/6itP0qdBcW8OTu3eguLTnxFwGf3Qn8lRNnNadxAgQAbunPvduaADMu/B1/6ik885//c3EyqzjlqoipV74S0696VY6JCuKi7PNQxIfrqVcp8aFkP21i5ac0xgLxIHUzl4xnNaa8JFmRkdhkxEKZTUPJhPT5EYnLKiJHIrGrmiivCo9Dh8TCw7HICFkkBCtiHIkTn4LEtRgJqipiWojkfVRkT3JshSLEcDVkzWtfi0ve+14pm1WJez08dd99WEi/ysAuX5kE/ldXzupO46ZgDXC+Pe++fVgzOYkNr3/98AcGhUea1e155+ZSZhoiPopwOSUr8wRM7LY8nrKv7yRJxF/0oqlRIh8yNwjBOoYhym40OZWKkZuOyg0/ryKTTRwsTbdzlfjm+cz1K1EVSs6fR+/48QtTrSwnsCEIiBBwPg4Oz6lUDIb9OvFXAyFiwo6UPdfVkAyTV16Jzdu2IRp3k3o+//Wv49izzzrxhf6smw9uBwq2KyVpGitAgP72vB8BngfwMRf+ju/Zg83XXtvfnrfCWg8pouHteRslPgyKDO3qR+pGo+w7TzgULXousCG9WBrFYy6Mp2Q6UBFC4aFbMTAhXhSmiI14ko1bwkeWVZ9Vp4xhRXicOLH6Hg9TiVrbhYVprI6nJVEiFaNhv9L+DGCsKmJBiJgUNKX2XFZDUm3G16/vb7e7zvo7owEAh3/0I+z78Y+d+EqAmQh41w7ghBOHDaHRAgQA7gf2Brs9b9Unu2NjmLrqKiwfPCjenlfWjwXxYdyfRhst8ZG5uWjZh+TNJFp5e3hO+8IbiAp561Zk7eQlzlWSg7TQqypeJHCZSNtI3pPFxX7F49Qp7cXl3gVG0VSjkH5cDEXOj75B8/1QFiQG/dn00zfXMCGS95Fmu8J4NKoh0dQUNm3bhsnLLpNuW4XTzz6LvV//uhNfABYS4P07gaddOWwKjRcgQH973puBawD8knVng+15b7opf3teU1NKkgTRxAQmr7gCy9nteWV92RAY0Ej+df2ZEh+A0s0kz37uInXJtRbRig3VdnkxKd1AVNY2yLZXqN5Io1CtkLqhV6x+SCVqmj7i8+fRPXZMWXg4ERkBJvZG8Ngvo8LEV7XClRgxQGOESODVkI1bt2L6la908j0wf/Qonrj7bsSifMgCEfCvdgJ/48RZw2iFAAGAjwPfdLo9789+hi3veMfw9rwm57KnbI1NT2N8wwYsHzqUe0yZDaXPSj43ut1u0WcW1gaMfD3qTEkqspH64hZND5JpJxPT6k1HZENjOpl2+3RMRTd7S+s8bGPrdjokPAqqm0YT1iHDDRIUtnEwTkbOscHYfIgRqz5CESLZX1WIQWSrihARtpcYs0ve+16se1Pq1WwWvzs6s7N4fNcuLJ8/b81HmgT4v3YA/68TZw2kkbtgiXC+Pe+hQ3jic5+7kDxYEh8DJq+6CutuuOHC52UJvQ/xYbIqohOD6PdFNwyF6spIsi8i9cWbtjHkW1TxSH9hl8QktCVzky6rDFVor31zr1CZqKugiRcW0Dl0qL+rleAmalRoUFy4wdI4GxclhuKw4SPrJ9dHRWwIEd22q7/StZP3kWa73PYFbdZefz0uesc7tPyoEnc62HPffTg/O2vcdg67dgD/xpWzJtKaCggA3AMsbQW+DeDWCLC+Emr+xAn05uZw2ZsMvZi9JKma2LSp/yKyoi3nqlRFSj53tuNVYRNF8SE7ZSrH/urNQXJdyUgIeT4H7SRIi49RB5nfqo5phfYRMHIzr/y28Kx9rZYlvkXisErcMlOtFhbQPXp0qOJhJMEEKDJCxrA4qXTNuKiOGBYj1uwbFCLaAqKqELFcDSlrM3nNNdj00Y8CYznPuQ1/Dz3z4IOY2bfPmL0SHp4Hbn4LoPm2VwK0TIAAHrbnfeEFTE9MtE3t8gAAIABJREFUjG7Pq4pksjN55ZUj2/NK26ggIJzueGVi3YfuE6q0ibIDckTEyPa1ObEJ7eXEISU+8iiruii2ty0M0va1pvuVUDnhVyCen1+daoVu147YIPXEkijR9l/Rd6F9TaTsV6AxQiTvI812uXGstBnftAmbb7sN0fR0pfhkOfCd7+DgY49VtiPJoRh4zyeAM64cNpXWCRCgvz3vVuD5yNH2vCf27sXmX/gFrNuyRc+ASpIVRZjcsgWdI0eQpN/82VbxkSV9M1D0L5zmlHe86pd+erqU7hqNQXtFASNsq/HEv+zGWKX6oZRAaVQmVu3nLDQv9KE65knSr3gcOYL49OlV4aFMTcRGNgGuw0+wGDjnRgSJBq7ESK7tChgTItC8xgS+tc6d6KMiWxpTsqI1a7B5+3aMb9yoFp8mM3v24Jn/9t+02ytyDsB7dwLOSi1NppUCBAAecL09709+giuuvx7TMtvzDtCdmjI2hsmrrkLn8OH+zjl1Eh/Fzqq1SVc9KoiP0uOLRETe7wc3CB1RlrYheyxS41DlBl1WzdG0OWDVtm6lQ+LGWzn5l20CIFmZahWvVDy0/AUgNrST+aIpRyH8VO2fDypeG1r9MSRGCm1rErQQScWgfP34qoZIjNtqHFGETR/9KKauuUYlqtLY8pg7dAhP3nuvlUq4gDgBbtkJfN+FszbQWgECuN+e99ijj2LLjTdiQuZFPBX/oKLJSUxefjmW9+/XFwI+xIetRecy4qOE0q9HEyJCpZ3mIvOhm5aonWSlQuXmp3qDkLFdWJnIqeasJlo650Ix6Uondcn58/01HidPygkPz2JDOunWTPCDRaM/QYoUQ4LEqy9DImektYHr0bQQ0W27+quK7dN2CoVICRt+9Vex5p/8E5VoRn1IjuvS6dN4bNcudJeX9f2p8b/sBP6LK2dtoNUCBHC8Pe/SUn973ptuGt6eN40pJZ8k+dvzyvgJSXzoxJEnPoqN5f5e2FbgQ4lsG9WpV6Iv6wIbWeEhPFIihlU7Va9VkagRjbXK9Lr0f9MfQe/8JwN7aZsS61MG4xMvLvaFx8xM/ns8PCXqpQlzEwSFbQxUVLzEKdsMGrEGLEZy7WpiSohoXQuBVUPWvfnNuPhd7zJzTZeMaW9pCU/cdRfOn3GzDCMB/mon8IdOnLWI1mzDm4eP7Xmf/LM/E+/tb1B8DJjcsuXC9ryyfkITH7rrPkRf7qrVCdXqg6wd2ZtW0ZQt2WPTSf1KvEoViby1L9LN5daOqNgesplTeYqQI2jKqFDpGBAvLqJz+DA6L76IeH6+so8qaIsMUh1NceI8LtlmUIxR81oq9NFUIQJNEVFFiBiqhky94hW45P3v14tB0seAJEnwzP33Y+748aoe5MIAHpoGfs+Js5bR+goI0N+e9xbgmz3gtsjF9rzHj6M3O9vfnleQOFVCYGti8+YL2/O2QXwMqgPIfAnaEB+qdtJf+Onf50xxGv2l4lPFQQIuc4PNiV94MzFQ/RixKzn1qx9UfvJUevMrs7l6mDiekWQxdVyytNSveBw/jiQ9NcBRcq8sNIg/Cs5JoWh0EYtME5W4bFZFNAhSiAjOv1Lb7K8qti+1s9Jm4mUvw6aPfxxjExPVYpCMa983v4mXnnqqqmVZno+Af7YdEDxFIlWhAFnhXuC00+159+3D9NQUNrz2teaMFiSFk1ddhd7p0+LteSXa9z8OQ3wUoio+dNG5yeRVSnLEx8h4F/kUPf3PaadS/dBaK1Hiq1IyFYmnjkUiQSNhSzbhKEu2kuVldI8cQXcgPBwk+kpig9QHRWFiPQaZw1XiqShGTNmTsqmJSSGi0271Vyo2SqohIsYuugibbr0V4xdfnG9W1r9EXEcfeQTPf9/ZGvAzCfDuHcBLrhy2DQqQFA8Ah28GngVwiwt/J/buxebrrtPfnneAZJIo3J5X0kZI4qNw3YfqF7fOgnHRl3RZTIo3cuEUo7K4UjYKY82LUxCHzLGyrNpUqXSsNhaPoXKcovMhWvuRqXTkHtftonfsGLpHj/bXeFhK+Ck2iKwosepX5nCVWDSu20L7DRQiyuc1R4gotRf9OmMnGh/Hpm3bMHnFFaVjZOLaPLt/P3724IMVrUizHAP/8nbgEVcO2wgFSIb7gaecbs/705+qb8+bRuVpdnZ7XkkbtRAfQP6XtampV/lB5f++TKyk/n/kSIlEOf371b4X3DRl12MU+pMk970pKmT6IisMyuyUHl52QK+H7swMui+91Bf0hhP/JosNkZjy/VNbXAsSxetPS4yohJNnO0AhUqFx/z+oJiSU2ktUQzZ88INY85rX5PoraqvK4okTeGzXLsQqW5dX47/bCdznyllboQARcD/wg4+43J73scew5e1vl9ueN41GghhNTmLyiisubM+rm+yX+XcpPoqqHqZEhmJpOreNQHxkbwxJnnARkZ16pFApybVRcqws0mJQNNVMZ7xFNsuqR6rXQRyjd/o0Oi+9hGRhQa1tAVKCI1AqJft5041c/FToQ7BnQ9BPZ4Kk7FDZGCpURXJtKWJDiIQ0LUupvYCLb7oJF7397VL+Rg5R8Q+gu7CAx++8E0vnzim21CMB/u+dwL9z4qzltH4XrDymgP8hAh5y4Wvp7Fn89DOfQVf2D6xEOJQxvmGD+MtjyEWNxEfeTke6a0iy9ld8jLjOi6vCk/Ykr33BAvGhOAuOzRtD6bFT6avO2OuIhbyYqtwIc/z0zp7F8r596B4/DvR6hbbLqIvgUErEK4oA51QULrURKK4EiYYYkbYpG0Kebc1rLkghUhRXSbvVf6q0z7Sdft3rcPF736vUZuRjSddxr4e999yD+dOnJVtU5ivTwO+7ctZ2WAHJ4R6g93HgwR7wGwAut+1vaW4OCwcO4Mobb0Q0VqALTSymThKMX3IJxqan0TlyRPBxw8WHbFUkJxkefHnnig8Z+6K4VW+06af8JeQuBtetChQIs4IgxL8zlYwWxZSZ6qaS/MTz8+gcOoT4zBkgjvXDy/oOJBk3Ji7aguRYBCtOSuK04SP3MFm/nqsiQQkRH9WQlbaTV12FjR/7GKJxidRR8twX8fxXv4pjzz0nG2VV9kwB/+KW/hR84gAKkALuAZZuBr6ZONqe99yxY+jOzuJlg+1505jaxSllZ2h73tWPLYkPTbTER7FBud8XiI/ceIq+cNMJcI74kHqpYjoGkU/JReqR5LEjdmVuuDaqJ0XXgWaiU3htRVH/7eWHD6M3M6NV8RAmdh4T9koig6ihKU68x2kjHsWqiLQYkXWfZ9O0ENEkhGqIDOPr1/e321WZKi753Szi8A9/iH0//rG8r2ocB/DL24EZVw4JBUgp93vYnnfN9PTw9rwWxMeAyauuQu/MGcRzc3bFh0ZbbfFRddF5zhdmbvKaPl5ikfeIL1nhImovQZKxUXKw+PeaYqfQlqBvSk/kRIhslsWZScCSpaX+lrrHjuW/vTzPFDL98JTIawkN4oaQhYnN6ojCtVZLIVK3akj6nyXto8lJbNy2DROXXaYaodDfyMeZf5/+h3/A3q9/Xc+XOgsx8Ks7gaddOSR9KEAkeAA4/BGH2/Me37sXm6+9tvr2vANKErDJq6/G8uHD4u15ZWy4rJpEUfHbrassOs/eQHISd2XxkV7kndNWZneqEX8CP0Xth1paqFbl2i2onmTjynv534UGck/Uym7Gqwv907a6XXRPnLiws5UkhaLDAbkJK4VGvSg4V14Eic3qSIXKpa6trM1cOwoEJUTy4ilqI1kN2bh1K6Ze/nL1uLL+ij5e+e/CkSN4/O67kVSY7qpCAtx+O/BNJ87IEBQgknjbnnfz5mqGZBLNsbH+O0IOHRI/8fUgPoQv4VsRH9qxFLXJebqfmyAXiJWsnSh7TKZt0dSrkYQyDxn/ZeQtwFfxJ0J0o1OdPicx3kKbMn1Kkv7OVgcPIpmXe+GtT9EhLTZI/VGolDiNxaRvT1WR0IWIRqOhc6PULv3PTPuL3/MerL3hBvV4JHxl6c7O4tFdu9A5f96Mv3L+zU7g/3PljAzDu5QiXwT+MgJ+14Wv6Y0b8c4//mNM65Y9S5LE7Ke9M2cw97d/i2Qw372KuCj7XFV8AKMVhKq+JMSHMDbRl2iOjyHBlNM276m/UHio9F93Kpopf1GUv35F0F7lDe3Cc1RWfRH4ic+d679EUKLiIUwwLJProWECo9J7EjRQutbqgOjvyZNvI34lzo+UH4XznHuk4rUiPLrC9aZ1rabaKLXO+Jq+/nps+I3fUPev4SvudPDYF76As4KNcay4B3bt6K/vJZ5gBUSR7cC3YuCdAF5h21dvcREnf/YzbHnHOzA2NaXWWFF8AMDYmjUY37ABy4cOtVd8DNzmxSYpPiLoi4/cqkeV6WUyNmSf2GlMkxrqk+KaDJGvkSeOIpuD9qJxX15G99Ah9E6cKFxg7qPSUefqxmAKieoP46yIRJXEiW9T/iSuc6cVEQWaUg2ZvPZabPzIR4CiXTmrkOnXMw88gJn9++34GuXhaWDr9YCzNxuSUShAFPG1Pe8Vb3978fa8Ayo+ORpfvx5jU1PC7XmlfbgUH7pxpOxn25gQHzIL2/PEh5IYyENVlMhWdYrsCqZJySYjwjUZZeKsLA7RU+FeD70TJ/rTDZeXxc2zfiwn/iOJYqBio9YJuiFqMwa+BEnKpxFfEn8HUn6qChGNv0WTQsT12pDxTZv6O15NT9u/XgC8+J3v4MBjj9nykuXQFPDLtwCzrhwSMRQgGvjYnrc3O4uX3XBD8ZeXibJ1klzYnvfUKTUfFYSJtvjQrQoIxjFvXUKSc7zQrISfwraKU7wqVz9E46Bqt8iORAwy47t6EyybZlVgpzc3h86LLyKemyv2kbZlIaEUJoKBCI7gE+saEOQYlggSqz5N+TJRFQlJiGjgohoSTU9j0/btGN+4cfj36p6lOPGzn+GZb3/bkvURZgH8ynZgvyuHJB8KEE28bM+7Zs3w9rxpNKZcFdlIb88r5aNO4kNA7uJ2ScE3dJNJJ8Q5drNb464++Vahav8z8ZXevBUETOnWt4O2eX1OrfEoTShEcaTnQC8vo3PwYH+6VWZnlaHEyJHoWI3Xo+gILkFuCcGMe+b6E4piG75M+KixEKlqo9+sejWk6JhNH/0oJq++eqjN6sfqXguZO3AAT9x7r6s1WXECbNsJfN+FM1IOBUgFHgAObwWeiYBtLvwd37sXm669FusGXw6A1cV6U1u2oDPYkrQu4kOD3C/VSO7lgFH294Mbi6T4GPiyvsYj7avgxiJ1MxD0UVrApPzn+RLaEvWh5NrqnTjR390qM91KKAYMUyg6HBFMwksK8X6OXFVHckRPJVtFh5TZdyxETImZfjNNEZIa+yyX/OqvYs0//sejbdL/VPcqZOn0aTxy553o5UyFNU0E/E87gP/qxBmRggKkIg8AT7vcnvfoY49d2J7X0JSrXMbGMHn11f0ELu+FbKGJD0VhkuurivgoiMOY+NARJdkbncIajaJpTiM2iqpJMgmDyjqTnFjj+fn+dKvZC9N8hxIeC2Jg5CmyhyoHhUZz8CZKXIuRqvYl/sZMCxFhewVyhYgiJqsha3/pl3Dxu96Vf3zKT9Xrobe0hMfvuAPnz56tYEWJv9gB/JErZ0QOChAD3A/84CPAFgBvtu0r6fVw7PHHseWtb8XEuuLlJ5XExwrR5CQmr7gCyy++ODJ9pZXiI9s+007W71CCqkDh+JQl7ul/Fi22z2svaUMW4TS0IrJjlbPIvPvSS+geObK6u5WwCmGIkeTMoeDw/tTcNFnBZuunxjg/5y7EiMOqiCkhkisgdL7PK9roN6smQqZe8Qps+NCHyu0YqIYkSYKn7r4bpw8f1mitTgQ8NAXsuAfI3+6QeIECxBAfd70971NP4aobb8S4YHte3SlXeaxuz3vwoHz7UMSH4At19eYhikPi6frIzUciMe7/utq7PSrdlCXsqMzDzY0l59wW2Rk6QuecrNA7c6Zf9VhYcFbtGIrRcjJYG7ERujAIPT5FnF0XLsVIVds1EiK5NhTROv9RhInLL8embdsQTUxItxn6p5pH7Pubv8HhvXsVW2nz/BTwK7cAC64cEnkoQAzhfHve2VksHDyIK972tqHteU2LjwFD2/PWQXwMbgJ5SXxBolz2ZvKRdunjLYiP9A1KZlrYUGzpf0JinAval9ooWWeSPVY6ASjxlXQ66Bw4gN7MDKI4dlPtcJCYBik4apyoV6YmfXdy3dgWIy0VIlXaX2gm32Zs3Tps3L4dYxdfrOpk+J+SzY7+9Kd47u/+Ts2XPjMJ8N5bATdvNiTKUIAY5B5g6cPANwDsiBxtzxvPz+OyG26wJjzSTFx6KZLFRfH2vBI+nIoPwWfWxUcBQ0mrAumjpcWHQHyVeU1KxMPQDVZljYbqWhXFMeqdPt2fHri0ZEV4jCRWFhPNYASH4QQ7qumPXmfDEye+xIhp25XOjQkhIuOmQtvcOCxVQ6LxcWzctg0Tl2s+L82MadkYnn3hBTz5wAN6vtRZjoEP3w484sohUYcCxDAPAGecbs/7wgtYs2YN1r/mNcUHmtg1KkkwuWXL6Pa8Ej6CER95x4tiTPmRuikUCQTV41HhRpuxMWSn7DoQiAfpOGRvlBLVmsJjk2S16hHPzFxYtG4o0csVHRYSuJC2YtV5YmstkQ8A430LQJhYF7mmBEOR7Sp2qwiRhlVD1n/wg5h+1auUbQqcDP9TcMj548fx6K5diLtuXjweAb+7E7jfiTOiDQWIBR4ADt8MPAOH2/Nuvu46rN2yRXyAIfExYGrLFnSOHEGyuChlPyjxkX3SnxdjXvs8PwbFh+gGVlr9yKlayPgUvoUcOTfSquJB1DavkpTTvnf6NDorVY8hGxVxITq8VTk0E98mCguTGBEoHkWJEzECw9eNIyGi2zZtI/feIUHV9heajLZZd9NNWPfWtyrbKnAy/M/U/3cXFvD4HXdg6dw5c/6K+cwO4E9dOSP6UIBY4n7H2/MeefRRXHH99ZjavPnCLw0Lj1XGxjC5ZQs6hw6NvF9htLmm+FClgvjINQkMbwmbvvFUER8lPkfNSIiPtA2F3akSQYwj/c6jQDzk+q9QrUg6HXRffBG9mRltG1lGEiPLosMJigktRYY9tMfVgyixdp1m+lAXIVJqU0GI6LQz1b7f5MJ5nX7d67D+Ax9Qai/pZPif6O9KuOeuu3D22DHz/sR8ZQr4nXskl8MSv1CAWGRle94rAbzFtq+k18Oxxx7D1W97G8bXrbMnPlaIJicxefnl4u15V5tXEB8q1Q8V8SH48hYl+CMxptvIJud55LSXSvpL/OTakKxcFJ4bSfEQoUA0idpKVD/is2fR3b+//1LMGlQ7vGyTqik2gkLUH1M/AaElTBz2x7oYgcFr0JQQyfuozGaNqiFTW7Zgw803Ixq3lPplYnr2K1/Bseees+NrlD3zwAd+E3DzZkNSGQoQy3wc+Laz7XmXlnDy6aex5e1vx5hge14lJJLhsbVrR7fnXW3uWHxkyBUfI+YUxUdZPIPjFYRAhHzhULg1biou5RtvNPyuk9L2eWMoayNvDMuuhThG99AhdI8dMyKqhcLDEM63Qg1ZbIQoEmogXpTOmaMYrVzXmbiDECISD1YKv98khYhOu8L2koytX4+N27b1H1DaZKVPh374Q+z78Y/t+rrAUQDv/m3gpCuHpDpj5YeQKtwCLE8CWwHsceFv9sABPPnnf46kymIvhURv8uqrse5Nb8o09yA+8nZ80hEfeT6yMRgSH4VrMyRYjVDGr+CGJxyvESeCG2XOQnfh+VfcDSsCkMzPY/n559E7c0a+rYChZM5wwuZ0hyGJ5MiJ2AgoYXeGx/6GJEisihHUR4jots2NqUo1RMbn5CQ2fOQjGF+/fqWJ3Qclp55+Gv/w0EPW7GdYiIEP7QAOuXJIzMAKiAPuAZY+BnwjdrQ97/yxY4gXFnDZG9+o3ljjKXN6e96gxIfo2NUmBeJD4mm/svgQhSV9ZMp+nniQFR+rvxYvdhf6LPp4xF2x2MmNLWUvShJ0T5xA5/BhoIKQHuqfpWqHFTQEh9UYmi4uTOBwvEIRJMbFSI2EiNTYl5lX8CfdPocNW7di6hd+YdSGheti/vBhPHb33UhypmZbYMdO4FuunBFzUIA44j4f2/OuXYv1r361XIOK01smr7oKvdOn0Utvz+tQfAhvCDmLwI2LD5kbR976FNnqx8B+UX/zyMQ39FLEghgLE+Cihe7Z8ZC4tgb9SToddPbvr1T1sCU8nCzSLUl4jAsOxyIj24+Qfux12u4YawkSwxj920jFaeT8mBAieR8V2XNUDSnzedG73421BQ8jTX6fLZ89i0fvvBOd8+eN2SwiAv5oB/DnTpwR43AKlkNuBx6OgJ2u/O256y6cevTR8gOrzq1faX/RjTdifOPG/u8ciw9hOx3xIbppSK7DkKlCDN1wKogPqfhyxqBUfKTHQCCc8m5XSTrWMgRCKp6bw/JzzyFeWJCzkcGG8HC1M5DwEBSPdyWflpNg50m+AZyLFUvCRCpWi4Iz2KpIFVsSf6uFbcvMK/rLts0TMWve8AZcdNNN5TYMnK+408HPdu/G4uxsZVsyJMCuW4F/68QZsQIrII5xvT3vS488givf8AZMbdokPsCQ+ACAaHwcU1u2YPnQISSdTnDiQ8SI+ChDdWessulhhcGN3oSkxcegvcrx2TYqVZu8scvb8QvDfekePdqfcqVRtrcpPIzissphOLGts7CwgdXx8C1IDGGlKgLzQkS37chHRfY8VEMmr7sOGz78YURjcs+Zq56rp++9FzP792u3V+ThS4EPvRbouXJIzEMB4oH7gR9sBa6MHGzPizjGsccfv7A97wADOwoJ5/BPTWHi8sv7L4rrlXw3OBYfubs+FYmPvKlXMuIjhaxwWI0xKzyKpjyNOFMTA7mVn4E5FIiPlXYqC+bTby5Pul109u3TmnJlWni42O1n5GMgqKSVAsMMRsfRopgs9WeIkIWIlp2AqyEAML5xIzZu24ax6WmpdsPu1Ef1xYcewoHHHlNup8mBKeDdHwbmyg8lIUMB4ontLrfnXVzEyaeeurA9ryXxMfiSHFu7FuPr1wu35y1sn/eZBfGRaz8vjjzxUYTilKki8VEaXzo21fNbUCmRuZmWvihxcHi6XRQhnptD54UX+u/2UAlXYKsKtRQdFRPS2gsNi1OIbGJNlBiIp9SPAYyJfNNCRMdOoNWQselpbNq+HeMbNkgdL/SvcH5OPPkknv6WszXgswDetx3Y78ohsQfXgHjC+fa8Bw/iZ3/1V9W25x1QNgUnSYTb8662DUl8yMRRJD4Kkm/hTcSW+Bjc1FTFSg6FscskJKJqU6pN9/hxLO/bp3Q9Bi08bIuOCgmnd6EheoJf9ceHD1vDI/hRN1I9dmkxYoighEgVO1WESJlp1TZRhA1bt2L80ktLbZf6lohv7sAB7PnqVyv7kiQGcNsORzkTsQ8rIB65B1i6Gfh6AuyMHGzPe+7oUcTz83rb8w6QEB8DJi69FMnSEnqnTuW3LbIdgvhIx6IoPpTI2Fe6CSqIgaE2eesz8volGIOiqVcjgiFJgDhG58UX0ZuZKY65yE6VJ76mnsBKxOMroXQqNgJK5I3jsW+VRYlNMWK4/yELEeW2eR9J+JNuW9Dm4ve/H9Ovf32hPRWKzsvS6dP46R13oLfs5sXjCfA/7gS+6MQZcQIFiGfuB84635533Tr57XkHyCx2FhwzuWULeqdPIy7bGSMU8ZEOoch+SeKdE5D413ntZaoZOeIvP7iShNnQ9DyRYEiWlrC8bx/ic+ekzNgQHkYoSMCMiQ6VZlX9qsTVFHFhCodjo32eK8blSoyEKES0x1r0UZEtCREiFCIp1r75zbjone+UCFIN0XnpLS3h8S9+EefPnjXuT0QC/MVO4P9w4ow4g1OwAuB24GH0BYgT9n7pSzgpsz3vgDLxUTKtamh7Xhn7PsVHyl+iIz5UpkChgvjI3ugqihWdG2PelsaRIL747FksPfccEon94YMUHgGJDmuCw4PIyPbF5Y91LI+nEUFSwWeu3YrYECKV7EBzjPM+KmqjUw0BMPWqV+Hi971POjwdBuckSRI8dc89mD1xwqq/Vb/AQwvA7zlxRpzCCkgg3A8842x73iTBkUcfxZXXX5+/PW/q2FwG4qOEaHwck1dfjc7Bg0g6nWL7oYuPAlTFR9a+tDfZdhLiY+jGWnQuRkyPCphoYCPTrnv8ODqHDpVusRu08Mj+GtBPZBUTQOOJs8XEODgRUIC3WB2NvXIsmv5M2hw2Y2C6pG4lQ2ADqjZKqiGF7Yo+zvx74vLLseFjH0M0MaESnRZRFOHn3/gGDu/da90XAETAs5PA+34TcPNmQ+IUCpCAcL4975NPYstb3oKJdTnLTwyIj9XDJycxefnlWH7xxQuJqIT4AARf1j7Fh+q6CeHB/RtTkvI55K1su9y0KYgrEVlfwo/yfKbbqG4xnDmHnUOH0Dt+XN5GTYSHtj0N0VEZg8luyILCNlb7bkGUuBIjhX5CqYroVjJM2Cj4/s21IyFCIgBj69Zhw8c/jrGLLzYmZIs48vDDeO5737PuBwASYCYBfuVW4IgTh8Q5FCCB4Xp73lNPP42r3va2/va8A8qSTkXxMWBs7VqMb9jQ3563LeIjp59p8SHjI9120K5QfBRMH6ty4wMwKpxESUavh+UXXkBcMke40IYCRqdtCESeVuKikNAZS2YNJbJtFBhVMS5OLAlHZd8afnLtVaTS33mmkqFlxWU1pGTMovFxbNi2DRMve9lwG0ucee45PPHgg9bsZ1geA/7lDkBhrjipG1wDEhg+tufd8/nPX9gO1ZL4GDB5zTVYd8MNozYHaIqPIXMqAWWFgIL4KL2JmRIfgoS4kBLxkXt8to3MQntBpSRZXsbSc88VLjYfGrtQhEccXgNCAAAgAElEQVT213AnOrSpmKQ6ExoiYRTyj+nuC37UjZiJUVuMmPBhSlAZFCJVbCifywIRUihEBFz8a7+GyS1bxGNsmIXjx/H4ffdVuverkACfvA34rhNnxBusgATIPcDSh4Gvw9X2vEeO9Lfn/cVftOto5ctr4rLLLmzPa0h85Cb1RV/GmTa5X6054iPvM+Hvy8RHHhnBl24nrH4UPTEr8pGlbIvhnCQinp/vv1wwZ2vGEeGh+4Q+VOFRdpiu/awfQ4LDCB4Seus46FNlUWIgHiXfmr5y7RsSIhUa64mIrA3V9gX9lv2OXnfTTVj31rcOtYuyxxv6u+vMz+PRL34RS5K7FxrgT3YC/96VM+IPVkAC5XbgQAL8OoAFF/72/e3f4uC3v23PQSahXfeWt2DymmuEnxsVHyUCoVR8CNAVHyPti9oM2qmKj7xKjaHtdVf9CH7fO3MGyz//+ehGA6k4VtsHJjy0kkDJhMyo6FBpJvjRpkniwhQWxqTSOTMoTpV8KdrPtaWJ9/UhFqohRX6mX/96XPTLvyzXtuLfZ9zrYc/dd2Ph9OlKdhT4yhTwh66cEb+wAhIwDwCHtwJPRcDHXfib2bsXm669Fuuuusqs4Zzkd/Lqq9F56aWhrVmdiI+Mr8Kj8rarlU3oU7EnRVOgsm1S8WdvbKriI1fc5FE0FSxPfMzMoCNa24NM/IEKD2UbCtUOLSokeMb8UmToY3AcjQiSCj6l/SjarmpntHkA07JU2xeIENEnk1u2YP3WrYjG81M3kyLkH778ZRx77jnt9oo8OQ/82m8Cbt5sSLxDARI4D/jYnveNb8RU0Xs7FG0KiaL+9rxbtqxuz+tMfKSEgHHxUbD1rbT4EPnMw0A5vzAeCbpHj6L70kvFMVSsemiTk4RpJ3Nlh+nYTttXGKfKgoNCwz0GxlzrvLsQIw0SIlX/prTOjeij1P+PXXIJNm7bhrG1a8tNinwocvAHP8C+v/975XaavATgvb8NnHTlkPiHAqQGON+e94knirfnlaVsUXWSrG7P20lvzztoG6L4kGmTvaFoVEvyBEtSIHBWf40CsZQa+8oUbLO7GkNF4WHiiaYwrop2RDYriQ6Zw035qqHYyPa97KdWVDw3PsSISfu58fsWInlxKbZXbTPyawDR5CQ2btuG8bL3dmXbSdgXceqpp7Dna1+TPr4iCzHwazuBp105JGFAAVITPgB8cxr4pwBeYdvX6va8N96IsclJPSMS4mPA+Nq1GN+4EcsHDgx/lvOF6VV8lK37ULnhKVZLZMVHrv0y8ZE3FSzn2M6LL/Y3Esiw2sKH8MjxayNBcy06tP14Fhuq4sGEoHDtzzia50+5H7ZFj4mqiAEhotlQT0ik20Pju0fwu/Uf+hAmr71WJ4pREVIyHvOHD+PRu+9GUvLiWFNEwK07AYsLUEmocBF6Tfgk0HW+Pe9//I9Iej31xgriY/BVOHn11Vh7ww3S4kNoO0TxIZPsS4iP4aDyn5SpHJ8bT7qNKP44xvLPf45eZmHi6o1W9+mqCeGRaa8lPIoOUbWpYLuSD0+CQymZFz3pD+1Hp18uMCBIlHyohCZj37MQ8VYN0RExmX5e9K53YerVr1b1PGxS5EPA8uwsHt29G72cjURMkwB/eBtwrxNnJDgoQGrELcDsOPBrCTDjwt/Rxx7Ds7t2yTdIkmLxkfk8+xW45vWvx/RrXiMlPkYSG1/iIx1DiT3h7wUJs7hJ8bs6RtqV7FiVS9lNvtfD8nPPIZ6bG4p5tUWFBEEbh8JDKy6Jviknto4FhxFxUQcUhIpXcaIxtrbFiJT9ugoRHSGRba/aNoqw5g1vwNobb9TxOGouJ6YBcaeDJ+66C0uzs0b8lZEAu3YAn3LijATJ/8/emwdHfZ57vt9f71oA24BZvWAnNokN3sA+xnZsDF4AY4yJlTgSpJLcU665vrmnpk6dOjd1aurcOzV3KjU1de6cZCaHmcSYxeAFA96SOMZr4nhhEYvBIPZFGISRELIkJPXyu3+0WvTyW969f916PlVdgu73eb5vt5Z+v/287/MjA1JhPA20mm7P2/ruu/4DvRa2fgYhj9qZMxGdONEhvbz58ETUfLidVWF5vsWfuLrEuF6d3Xa5qrmPWXGdq9/4dBoDhw4h03vpR6/AeAi8sas+51F242HKdGjCc0Fd6eZCJYLmxMh8WIbzzElHVURgvirmdSlU4m8OBL+fg/NljY1ecw3qH3mEV8V7Ck5zAgDbxr6NG3HhzBmleh58Fgd+Mgz/chB5kAGpQJYBWyzgaVN6e9etQ3tzs/sAv8W2W3tYF+pmzUI4rwuXKvPBeuxaq/lwMAeWR4yf+ZCekyrzIUBVGg+/YTy5NS/yuY0GwQanMdGqzzKcdS4SVRGmvKK5qrAaEr7sMoxcuBAIh5X/7jmZkGPvvYfT+/cr1fHgWAxY2EDtdoc9dAi9QtkItJhsz3tm506MmzattD2vQDclvz+nVjicvUbIyZPI5F1RW5v5YDnE7RTD+8bgEONlPrIDnDVclTkXHUxv/qkUBg4fHjIfXLGOU5R/4x+6CxyLAJ/5ci8KGRdkwqZDIVxmg9ADoynRpskynHUOQTMiktUQ4b9HTnORjLXicYx6+mmERo4sHK/wdzM/09c7d2KfzosQF9IFYO7TwDFTgkRwIQNSwZhsz2un06XteTWYj6Fx0SgiY8diYLA9L9efXhXmwy/G7c3Aq9LgZD68ZFzu576qucv2Mtcs+eMdzEf2HwaNh4ueauPBNReZT2zd8ileYJDZqABMGhKO7zuzvg6DU0YjIhAEWILXDXGKDYUwaskSRNwuBqz4b8Q3x46hef16NW3Z/clYwJIm4K8mxIjgQ1uwKpzJwM8t4H0TWv3nz6P5179GqqdHq/mwB2/h0aNRN2sW3xtD0byEzQeHkRCJsfIfcwpxzuRsPrxeH0nz0T+47apkIctJWbZblcF46Fq4+aZz0iazUXmYMiQCZoQ5J8tQlpwyucpRnXWaB2ds/Zw5iF5zDdN4WfrPn0fz+vVinS7F+LtG4A+mxIjgQwakwpltuD3vhePHsfd3v+P+o8VjPvKJTZ6MmttuYwwu7AgVCPMBKDEfFgTMR3F8bjxLTDqN/kOHYF+8WLqg5aAs263KaDxU5GKlEg1H7uchiLdAYsKQMP7McJtrFmm/fJy5HOMFkDUh3NGWhZoZM9jf6yR/XtN9fdjxwgtI9vRI5WHFBpY3Af/diBhRMZABqQJMt+c9vWMHDr78svK8xcvr3J/Yofa8nsGazQcgZj6KU3jFWJar+fCcj88B8+LKheu1VHL3ZzIYcDIfnKjablUW48GwKONekEkuGhwXngEyHBW7yB+kIoyKjyFRmt9rGIteGYyIYx7B3w+h73fR94WV2PXXo272bL44wZ9FO5PBnldewTft7ULxvFjA+3HgWSNiREVBZ0CqhA1A12LgIwtoBCB4+XJ2zh85gkR9PUZed53vWJY/k34L7+jEiUh3dBRcf+JSsAHzwZDPDz/zwRWj03wcPgy7p4evYlIwNbVVD+ZYt4d486hcfCk0HSV5y7AYDuzC3CCBeg1MmBGvISx6QTIiAujekhUZOxYjlyyBFYlcCmeMFfk7cPgPf8CpvXu5YiTYHwPmNgB9pgSJyoEqIFXEMmCLbbI974svomPnTs8xKsxH9g4LdffcU9CeNxtcRvPBge+bKkrNgWrz4Uouj20jeewY7O5utjgHglj1YNY3/Kmvn045qxyBWWBXGGV9zYrMqTIzoqoqUiYjIjqHwjDBagi8n0uothYjnnwSVizmnIJTy4+vPv8cR7duZc0qhQ2cs7Ptds1c2ZCoOKgCUmVsMtye9/TOnRh3882l7Xmh0Hzk7s+15z1xAnYyWX7zwRhXoOdiJrjNB6tm3njX6segTvL4cWQ6O7l0CqdmsOrBYDxUfYJowniU03SQ0dBL2V5fnWbEa4ifjmojIpJDwohwBrhXQ8JhjHzqKUTGjPFOwaPlQefBg9i1aRNrNlkGwsBjTcAOU4JE5UEGpAox3p53925MmjED4Vx7XigyH07do6JRRMaMQfLYsYL2vKzmw1FDBBPmoyRZ3iMu+lauBXHRG6zf1qtUaysyHR2lOgzI7pUeugvyC32jxkPSJJTLdJDZKD/GTYlqMxIkI2J4W5aqLVkj5s9HjGELc3Eci04xF8+exba1a5FJpVgzyfLTRuANU2JEZUJbsKqUOPCsZbA97/Zf/xqpvKtk+yFiPnJEitrzBsZ8eH2Sz1jJcIwpfoP1MB9Ouf3MR/qrr5A+d05o8SvzZjz0X3CYBreHeHIw5FG1cPLSKMilcQFKhqMyMPZ9KvpUXsqMMPz8qjYisnlUVENkt2TV3n034t/9Ll84p06OVG8vmtetQ6q/n0tPgl82AatNiRGVCxmQKqUByJhuz7vnuedgp1Kefyhz1/goZijGtpna3UYH2/MGynywXlHdpTLhaj4Y9AsWtBxkzp1Dqq2trFUPkbj8eNlPB5nz6Kh2aIAMR3Wg/ftYZB50V0VUGRGmPCI5DG3Jin/nO6i9915uLYD/wxo7ncbuF19Eb25rrX7eaAR+YUqMqGzIgFQxg4e/jLXnPdPcjIOvvMJ9cb1LA1wW3cWPDxL3as9bjebDBSsX4zDeq/qR6exEsrW1oqsezNoyeRQYj4I8iheTlWo4dF3Pg+dWSZgyI8qqIm4P++VWYUQMV0NYiUyciPpHH5X+G8D6t7Pl9dfRfvKklBYrNrCzB3i6sn6riHJCBqTKaQJabWABAPb9URIc2bwZJ997r+R+ryX/0AIaYDYfOWpnzEB04kTPsczmQ+QxL/PhNHYonU+M0+vgMAdR82H39iJ5/LjXbB1RZT6YYmSrHga3hjjl1VntCPIiupIW/5U013y0zk9VVcSgEfHMwRAvWw1h+T6ERozAiEWLgGhUSKNE0+fxk3/+M07u3i2lwUGrBSx8xtA6g6gOyIAMA/La82ZM6O198UW057XnZTYfbvhcHLCgPa+M+eA0P77mIz+O1Xy4zUOR+bAAYGAge4ifsxJkdMuV20OCusU5dBqPghwKF4dBWhBX0mJdBUF/vlrm42BEhLKr+H30k/DKIVMN4cTt9beiUYxcsgSh+nppjYJwl/s79u7FfocPAjXRawFLmoBWU4JEdUBdsIYJg+15B2CwPe/46dMRHTXKdViJ+WBceJfkybXnPX482543Pz9Lnko1H0W5/bAAIJXCwJEjsDkOJMocuMzX9s0gW/UIkvFQRBAWukFddAeFoBkT5XMoMtNlMSIcJkImh6MJEaiGFOcY8fjjiF51lfu8JCiO7mltxfaXXoKdMfJ5I2zgh03Au0bEiKqCDMgwwnR73rO7d2NiUXvefCwF5mMoPBpFZOzY7LaivPa8THlEFtcC5qMghVMM4zz8RjlVPywge5XzI0dgc3QrK3fVg3mxU0XGo5yL2CAtpCudILyW2swI9BoR0VjmHD6xstWQ/Ne87oEHEJ82zS9A6u9HLjJ54QK2rl6N5MWLwrk4+cVS4LemxIjqgrZgDTPiwLMw1J63r6MD23/1K8f2vCrNR47ImDGou+eewnwyVzh3ipUwHzljwGU+irSEzYdtI9naikzuKucMBKHqwaQpal5kjUfRJ8MylGORGoQF8nCjnK95JRkRpt9dv/ReOURMjMBrl5g+HYmZM9kDJL4/mYEB7Fy3Dn3ffCOcgwcbWNcI/NKIGFGVkAEZZjQAmZjJ9rwnTmDvihWwcxdAsm1v85FrwytIdPJk1N5666VcoriZj/z/esVoMB9+uJoPAOlz55Bub2fIMhinwHzwxuTHqqh6eMbxfqKZPy8N1Q4TkNkIJqa/L0q1VBkRt4e8cspWQxi3ZBWM4Pjdj159NermzuV/TQS+L7Zt48uNG9F55gx3rCCfxIGf0F8RQgbagjUMWQ/0Pwm8CaAJQJ1uve7Tp2H39WH0TTc57o8dQsYw5BEZOxZ2Xx/XgrsAhnMfSsyHw1infKJ/5HNxme5u5o5Xqs57+I4vR9VDwniIxjtPw8xis2IMR34lyeQtoJTDjChIJGdEfL4nsr/Xpqsh4csuw4innkIoFnOO9xXkizj67rs40dzMqyKEDRyJA3MaADOlFqJqoQrIMKUJaM0AC2GwPW/rhx8W3qnBfORy1cyYgeiECUKxjniZj+JxBekYYjzmwBpXXP3IxdkDA0gePcp2mF/EeOTFMC08ZKoemrdsuOZTbDx0EhjDIWAELAM3oTmWEVMmUpmGASPiGeuXXlDXMdbtb1E8jhHf/z5CiQSbttecGDi7YwcOffwxb3ZRuixgUYOha4sR1Q0ZkGGM8fa869Zdas+r0Xzk8tfed9+l9rwsWqLmw+UaJkLmI1+WcVxxZ62huEwGySNHLm1/89LSXfVwiFER6xsvWPUQjS2V17t4LGuVQ7GpMDJlkTkFyJyYNCOSSbQZEc98mqshriY2RziMEYsWlb7vsGgLzKfr2DHsfvNNnowyZGzgB02Gtm8T1Q9twRrmGG/Pu2MHxk+fjpjLdTtk8+djhcOITZ6M5IkT2fa8ku12Pc1HbmxxOMO0nfKJmo98kseOMR06D/SWK40LEdd8Co2HDspiOARNRqUjbE5MzM2guZVIIm9E3B4SjPONFzEwgzF1c+cifuON4toc8+k7fx5bV69GamCAJ5sM/8dS4EVTYkT1QwaEKFt73khNjcLELhfey7Xn9brwnuJrfWQfsrWbj3yKY1JtbUh//bV/nAnz4XS3RKyvbhUaD6Omw2VBXa0mQxRuY6JzLobMiEQCcSOiuRqiKjYxcyZq77rLM4ZJ220+eaT6+7F9xQpc7OriySKMDSxfCvzfRsSIYQNtwSIADLXnNXIxob6ODmz/9a8d2/MK4VNFCY8Zg9p773V+Q6lg8+G2xSvzzTdInT7tG8+1oHD51Ns3xuluVj2XWFVVj5IFowS6jYc2OMwGwQazKdGlr9GMqDYi3LFuDwnG5WJlqiEAEPvWt1B3//1CH36wD86OttNp7Hn5ZXwj2mSFn3cH1wcEoRQyIASAofa8S2CqPe/x4/ji+eeRYTif4AnjFq7o5MmoybXn9YvVYT683pgUmg87lcp2vPJ5XbjNR/5/WcZr2nLlGceI46JQEB0LPe3VDjIbximXIdH1s6TKiBithvilFoyNjB2L+nnzLo3TbEIO/fGPOHv4MJeGBF/GgCUNhs6JEsML2oJFDFGW9rwXL2LMzTeLvQFznh+JjB0Lu78/256XMbaSKh8AsofOPa6Cy71wCMCWK9VVD5G4Ulm1izqtpqNooRtIs+FUidF5K/fThcP3QPMcA2tEIPCzKPJBBcPryhtr1dRg5A9/iFBtLbcWk24RX336KQ589BFzXhnsbKeruT8C/MvpBCEAVUCIAoy353333dL2vCwIHl6vmTED0fHjmcZqNx8CeJmP1JkzyHhcBbec5z184zQsJorzFCz0BNFlPJTisJAtm+EIqiEI2Lx8DYlKLQ1mVypf0c8pd6zT3V65GEwIS6wVjWLE4sUIjRjBPT83XS86W1qw5+23mfNJMgBg8VLgkClBYvhBBoQowXR73j1r16J9xw72AJnOWZZLe97iYV6aqsyH4KFzp/GZb75ByuMquIE2Hy5xogsI1zwSi7lALdicE7oaDu3L6AAs4LVRpudm2owEIt/g8+P+mS1HNQRA3UMPITJxItv8GHEbebGtDc0bNqjtGuk9j58tBYxdXIQYntAWLMIR4+15d+3C+FtuQWzUKN+xsljhMGKTJiF5/LjrNTIK3ghEr3LuheDWK6fxdiqF5OHDQDrtGKfVfLhtTfCLc9Bh1mMkaMZD+SfPpqsc1WoyRDH0epSYSQ1agTMiEPhZ1lQNcaJm1iwkbr+ddWZSJiTZ24ttK1agv6eHXU+OXzYB/58pMWL4QhUQwpUm4Jc2sNyEVqa/H1v/9V/Rf87jAqsKP/2x6upQd//9sCKR0scYNYNgPmDbSB47lr3OiQMy5sN3ASBT9dDwiWV+jgLzIYAO46EomRnToWlhXbyYDtJNGQYNifLvjwYjIhhY8DPOFef2kECMU1xs6lTUzJrFMysmHSfNzMAAdq9bh54LF/j1BLCA1xqBXxgRI4Y9ZEAIT+LAs5bJ9rz/438gVXyI2ra1lJ7DY8ag9p57ShbdBbr55I0LhPkAkPr6a9dzH7Jtdn3HO90tESe6QHDUF1yUBd54INiLZmOLfA1om7vGKknB3BTmV1mtM14NEf2Awyvl4C0yYQLqH3mEdSbcOsWaLW++ifYTJ8T1+GjuBhqD/ntKVA9kQAhPGoBM1HR73hUrLm2N0rnn1bYRveqqofa8lWY+7IsXkfrqK8fHytXpSmlcGaoeKlBmPPIWlMoX8ZIL4ko0GLIofc6KDUnJfDSYkbLlUVwNcf2++bxeoREjMOKJJwCHqjkXjK/BiY8+wsldu+S02GkFsOgZQ81nCAKgMyAEA3nteX8EoF63Xvfp08j09WXb8+rCtofeCCJXXgn09WXb8+Yey8fhDcOE+fDUymQwcOQI4LD1qmrMByNBqXooNx5QuLCXWPAaMxpOlQIdN9XTdrjxJzFgRmTzlvv3pIzVECsWw8iGBoRHjVL3++jBuT17sPutt1QosdCbAR5dCuw3JUgQAFVACEYG2/MuQtDb87KQZz5y1MyciciECb7mw9S1Pjy1bBupwWuoFBM486FhO0R+fMEii5OyL6gKkwzdlC30FRkOacpkDMo5HylTosGMFOSVzanw90YgqMCIcMU53c0y3rJQN38+wmPG+McpmFP3qVPYuWmTCgVWGpcB20wKEgRABoTgwGh7XtvOtufduVN53mIsIPsm49Oe15bYDqbSfGR6epD6+utSDcPmw3dhpXgLRHEO3phCqYAsxFRXOwQWr0oMRxCMhWoUPyeh11nRa1mgq8pkVWI1xOlun/G199+P2PXXs8fxUDSnga4ubF+7FmmXpiIa+EUT8JopMYLIh7ZgEVxsAlqWAH0AHtIuZts4vXs3xk+f7t+elzEfgII/+lbeY1Y4jOjkydmuUqlUwbignPtAJoMBh5a75TAfvDGecZwLZt6YSyHypiFwxoNzQSllOKrNZIii4DWQMiQSqKyKVFw1hPNDkfgtt6D2vvvc07HqMswpPTCA5pUr0d3RoSIrCy80AX9vSowgiqEKCMFNI/BfjLXn7evDtl/9Cv258xmi+JiPHKHaWtTefz+saDQvNCDmw7aRPHUK9sBAwd3azIfL4qRc5qPkE1xOym488harSisOLMNF9Ya70eBB0pRwfY8UVkUK8onmKqexFzEhDH+joldfjdoHHyzQ8IsRxQawd8MGdHpcTFYlNvBxDPiZETGCcIEMCCGEyfa8Fzs6sP03v0G6r08sgYP5KHksj8jYsUPteYNkPtIXLlw6KD+IVvPhdDenhm+cyJYrTlQtjiSC1Vc7/IYV3bhyGzIcxXMsx007gq+nSTMSRCMiEJT9As6fd6e7AYQuuwz1CxfCCod9x3PrOnDknXdwet8+iQxcHIoDixuyFxomiLJBBoQQwnh73mPH8MVzz7leudwVl3MblsdjABC96iokbrmFO2/+YyrNBzIZpFpbOTIWUSbz4frGzPnpvde8vKdUpk9ls8FqjAfjAlNoYa3RbJR98c+AcZMiYEiEzIjI1PI1ymxEhOIVbcmyEgmMXLIEViLBNL7gYVbdPM5u345DH38sEClEVyZrPjyu+EsQZiADQgjTAHQBmAfASN34dHMzDrz6KntAvkko3nrlZiAGx9m2jfhNNyF+ww2lbyoOXbSKNXnfiDzNB5DdelV0MJH5DbqM5oNHwyneyo3n3c5SjgXQpWC1xsNvGI+GhgpHkA2GCrQ+P11mROJ7rNqIyGBsS1aOcBj1Cxci5NGMRKUJ6Tp6FLvefJMjQooMgKeWGfrQkCD8IANCSBHY9ryS5iNHba49b35eH/PBi2t3rcH7M93d4luvdJsPlwWKCvPBM75QogyLnkvB2S8QXKTqqHYoNBxGjYbTljCRm67pOdzkEvLNm9uM8E4nP7dMZaVc1RDwm5DaBx9E5Oqrmce7Pswg2d/Rge0vvohMUUMRXVjAs03AO0bECIIBMiCENIFrz+tiPkoey8fBfFiD99d973vZ9ryM5oPnrdL3uiK2jeTJk0VTDZD54InRbD6CUPWQNh5eQ/JuzPlkXg+HmxTlMg4GNbW9Xoy6TPl4p5GfW9KIyCC6JYv1e5GYORPx6dP58ns97PFY+uJFNK9ejQGHaznpwAaWNxpqHEMQrJABIZSwFHgDwC9MaNmZDLb/9rfoLlqYw7Y9qxCWT4XCrRJhRaOomz3beU9wTjc31lOhVM91/GDO1JkzsPv7L+UXffP3fLA6zIcMlWA8mHNJ/IxIL57LUIlQiuL5KzMkKitjgs9JhRFR8SGBQFD2i8eQ6PXXo8aj3a5fbteHHe6z02nsfvlldMl2dmTnnTjwrCkxgmCFrgNCKGMj8NfFwHgLmKFby06l0LZrFybdcQfCtbXOxiPvzcHTfFhWifkofuOwYjFExo1D8tgxIJNX6NFoPuy+PiRPnMibJodC/nNnHFdwt8oYnk9wRRZG5ah65M2zrMZDYoEsvTiuVJMhigJjotTkMWqpyOWaV6IaIvxhikisx+9qeMwYjHjySSAsuBziNCEHf/97nNpj7BjGnhjwaEP22l0EESioAkIoZfCTFiP7TPvPn8e23/wGaacydv6bgqT5yBEZMwa19957KbdG8wHbRvL48UuH2qvcfLCOLUxdhk9Ts4HZLxBYRPos+JgXpwpMB1/gMDMbPEi8NsoMIIMGUy4e+VzeMm3LUmFCQrW1qF+8GMi77pPgZLwfHvz61Sef4OiWLXJajNjAOTvb8arLiCBBcEIGhFBKA5CJAU/BZHveFSvc2/P6nLFgNR85opMnI3HrrVIHzn3NB4DUuXPIDBorLebDLTS8/c4AACAASURBVJwxt28Mx6e0Xrndp1K+qodO48GUQ+JTd/Yg82ajuDqg62bmyfC/flLzLLMREY3NhpXHhFjRKOoXLUJoxAhhfafcbnS2tOCLt99Wo+XPgAUsWgocMiVIELyQASGUU472vAc3bLh0R16Fwu0twR68iZAYbM87JMcY59rtKvvgpX+mUkidPs0/MUGjMnSXQG5X88EyBc7xl4YbXLBkgxw/PeWNdXyYJacJ06HRcATKGJRrLhKGRFhHJq9gJWcolhOjW7IGn1vdQw8VdjhUgcs8es+eRfP69cIfXHFPA/hJE/CJETGCEIQMCKEF0+15D7/7Llo/+KDAfLjh9gjP21/NnXciMn48t/lwHF8019SpU0PnTEx1vKp28yFV9YDAYrCMi0Ah06EALYt5p+1NrDcNz0WZOeGYp7C2qp9BHslczoBXQ2ruvhux73wnGyes6DqRgv8me3qwfc0aJPOaiWjml43AOlNiBCEKGRBCG8bb8770UrY9r8diX4X5yAZYqLv/foQvv5xhauzmI9PdjfT584MSZD4uDZX7hFQgCELbrWQXfQILaOY5al6gswWaMxG6tLSaLA5t7vw+OUXj3XIOxXKi+3c99p3vIHH33bmA7BchNc+JAAAyySR2rluHns5O1QpubGw01I2SIGQhA0JoZSnwhg38owktO53G9t/9Dt0nT3KZD1GsWMy7PW/+WKc7i6s0to3kqVPZ8WQ+8lKb+VQ0Lyj7RTDO8SG/fDqrHZKLee4Fty5DoRuJeSszJAKa3LlF84kaY8PVEK+4yIQJqH3ooeKA7BchNc+JYN/rr6M9r5OhZrb1AEsD/ltGEENQG15CO5uAT0y25z27Zw8m3n47IrW1l+73iJH5g23FYohceWVpe96crlf1o4h0ezvSHR18b7x5Y8l8FMbpvnBZcZzjQ365TFQ7BJAyG9UIpzFRYkgYX1NunTIYkaE4TlSakNCIERjR0AArHncKyH4RUnPmxAcf4PCnnyrM6EkrgId+Chi7uAhByEIVEMIIJtvz9rW3Y/u//RtSfdnW57rMR47w2LHZ9rxF8Gy9stNpJHkPnusyH25pGHO7xvIuXDRuw3AIyn7hjfFZyInGOuXiMgOcMC2Yh4vZ4MGUIdFRFVFhRFilcrlEtnMJbsnKj7NiMdQ/8QSsmhqvgKG5ynLuiy/w5XvvKcjERK8NLGrKmhCCqBjIgBBGMN2et/PYMex+/nlk3NrzKiZy1VVI3Hbb0P95zAcApL76CkinhbZeqVokeMUoMR9cUzBkPvIWRNzmw+0hv1wcrxuX8eCE23AQ/ggYEuH8XsN4cssYkUqohoRCqJs/H+GxY1lEsl+ElLJ0t7aiOb8ro2Ys4OmlQLMxQYJQBBkQwhh57Xm/MqF3Zvt2HNy40fVx4TcZlw5b8ZtvRuyGG5jb7ebIXLyIdHu7kPkQQUm1pFrMB9Qt1piMh6pPsQWNAZfpIORhMCTSZsRrCE9e2YoeqwyjnrMM/89lzf33I3rddTwi2S/cSsBAVxe2rllj7IMvAL9oBN4wJUYQKiEDQhhlsD3vYphqz7t5c7Y9ryps2/NNs2bmTETGjwfg8AbmYkxSJ08Kmw8lZoJ3fMDMh/B5D6itenjGqTYeHHgucCukypH7HrPeAosOM8JRceHKx5uH42eoII/GvxHxW25BPK8yzSGS/cIRkunvR/OaNejv6eHXE8ACVjcBvzQiRhAaIANCGKcc7Xk7du0quFtoieJjPnKP1z3wACLF7XldzEf6/HlkesW8WFnMByMmzQdnAGBxHjTXvCDTYTyYTUcZ4DUTMqY00IaF0YwI5XR7mCen6WoIByzfs8hVV6HmgQe48haJZL+wjLVtfPHqq+gUuYCsGH+OAn9rSowgdEBdsIiysAloWZKtgjysXcy2ceaLLzBu2jTERo0SNx+A+xtlnsGwwmFEJ03CwNGjQCrlflFE20by2DFYDt2zHMnTLpv5YFxQB9Z8wGDVgyU9i76A8XDNY3CxHajFvg9lNyce3x+pqojbw6z5DFVDeGOyw92/P6HLL0f9978PKxJhzuciUjhHFw7/6U843mzsGMahGPBwA/CNKUGC0AEZEKJsbCxDe95JRe152YLZzUcOKxZDZNw4JI8edWzPC2Tb7mZYL1BVpM1jEMh8gN98lLvqIbCdxdN4aKSSjIYIxp8bgxnhzuX2MGs+md8HlvT5OST/flg1NRjx1FMI1dVx5fEQyH5xebht61bs3bxZjZY/XQDmPg0cNyVIELqgLVhEWRlsz/u2Ca3i9rxMCJiPHOExY1B7333OYek0UmfOsM2B1XzwwvNGz2o+uOTFt9dwBmS/cI53fMgrpkzGwzWHpoVytRoNHoyZElVVEZVGxCOHiLZjDlETEg6jbsEChEaN4opnEMh+Kbq76+hR7HrrLbVa7mQsYEkT8KUpQYLQCRkQoqwMtuf9AQy25/1i5Uq2LiVe3axYHkdpe95cXPrrr4F02n8ORSirZvDk5zEfrAsNwQUb90UaLYHzHk53e+UImvFQDBkONrS+TqqqIgxGRCYH798nzxwCJqT2wQcRueoqrjgOgeyXwf/2dXRg69q1yAj8HReSB55tBN41IkYQBiADQpQd0+15T2/bhoMbN7K3y3V6I2QwHzni06YhduONQ3F2KpU1ICzkaSs1H6zjNZgPUUSuEK9iYaai6iGi65SnZKSGagcZDjVoNyPFd0Pdz7tMNUTWrOdy8IwHgPiMGYhPm8Y8XojB+aR7e7F91SokearpcvymEVhuSowgTEAGhAgEZWnP+9FHzg8qqHwUUzNzJiLjxgEA0m1trudCCmB9860w88G7IONexCnacqW16qHKeCiiIgxHvtlyuwUULa+vKiPi9hBLHs3G3WIcH73+etTce+9ger0/B3Ymg90vv4xv2tu16uTxdgz4uSkxgjAFGRAiMBhvz/vii2jfubPk/gKK38wEzEcuT93s2QjV1iLd0cEfLqbqOA+m3AEyH5wB2S+c40vu9hrvMyffhVtAjEdZTQeLmRAxF7ryKkT56y5rRFRty3KJ1V0NCY8Zg9p58woe1/kz3fLWW2g7fFhb/iL2xIAfNJh4TyQIw1AXLCJQmG7P27ZnD668+WbER43SZz5yceEwwiNHon/XLth+Z1B0bL3iWWwzLLJZxhWmrALz4ZfST0+0cqJosVzW9rIOi36rzDfPORp4jZR+PzQaEaYcotUQlqm5jA/V1aH+qacQqqlxSK3++9f68cdocaucK8YGzoWAOU8DjN1KCKKyIANCBA6T7XkzySTO7tmDCbfdVtqeN/8NTNZ8ALCTSaC/H9GrrsLA/v3u27B0mA+e8dVuPkQWajJVjwAZD624LOB9DUAZETInuuaiyoyoMCJuD0nEqzYhVjSKuieeQHj0aI+pqPt+nW9pQfPGjcry+TAQBh5uBL4wJUgQpqEtWEQgMd2et/l//s/C9ry5Ny7bVmI+AMDu7gYARCZMQP38+WI5c5TJfHCPgxnzIbu4kjEPvK+7U7wO46G12sFhNioVZlOiQ1uzERGNzcUzVUNcYnnGu8ZbFmoeegiRCRP8YxR8j3rb2rD9pZfE3ws4sYCf/Aj4zIgYQZQJMiBEIDHenvfoUXyxcmXh1iiZN5vi2FQKdn//0H9j3/628zVCWKsfPCg0HxbjuEspzZgP1rGOd3OOZ44ViVdoPJRS5WaDFdOGRImJdJiXkWoIr4Hh+J1JzJp1qbMgAzKvX7K7G9tWr0ZyYEA4Bye/bATWmRIjiHJBBoQILHnteVtN6J3evh0HN23KvgmqNB8AMt98U3JfzV13IXHrrZfu0LH1SrX54ECr+RhcrJTLfHgu4GSqHhJo67LkYjgIs4akbEbEpxqiPNbnOcamTkXizjv9lB3S8r92mWQSO9atQ09nJ3esIK82Ar8wJUYQ5YQMCBFoBtvzLoGh9ryHNm/GyQ8+EE/gZFyKqh/51M6ejejVV7PnF91SIUnB4oplvM7zBnkLYp7xJXdzjmeKEzEukgtVLR2VHEwH4Y+vIVGhocmIMMU53c0Sr+h3MDxhAmoeFu9Pwvu67du4Ee3HjwvrcbKlB/gx/a4RwwU6hE4Enk3AqcXAHiu7JUv73+evv/wSl199NWoHr9vBjIP5sCwLmQsXXK96boVCiH372xg4ehR2b9ZjBa36YcJ8MMcoMB8yW0Bkqx68ep75VBkPMh3a0GlGlBiR/P/CQDWEJ65ofGjkSNR///uwYjE/JZ9psL1mx997D4c+M3YMoxXAwz8FjF1chCDKDRkQoiLYBLQ8CXQDeES72GB73nE334zYqFHMMY6kUo7br/KxIhHErrsOA19+CTuVkjcUPGMr7dyH5LYrmaqH0thyG48gmY7iLUumbqafZt6t4HnL5pX5edBQDVEal/v5jMVQ/+STCLH+PfadhvdMz+3ejV1vvaVEi4FeC5jbBBwwJUgQQYAMCFExbAQ+Ndmet+2LLzDx9ttL2/MW42I+/KofeQNhxeOITp6MpFt7Xt6tVxVS/agU8+EaxxsrsehU3RnJqOlgMAKWoRvPnHThaEQkdaWNSP5/IWcmfP828fx+hkKoW7AA4UmT/GbEhdtr1d3ais/XrIFtpuNVxgaeagI+MiFGEEGCzoAQFUUceNYG/mBCq6+jA9t/+1ukLl50H+TxJmUnk65nP4bIexOMTJyIunnzeKfpmXPoLsZxjjFkPoTiHM2HAMr2/BcZD224LOiZjYFmhM2J5rkU6MrkFP15EamGeMxXxMA4xdTcfz8i113nl02I4tdp4MIFbFmzBhm/D43U8U9LgTdMiRFEkKAKCFFRrAfsp4G30sBCAFfq1us7fx69bW0Yf+utsMJFvy4e5sOyLGS6ugCOK54DQHj0aFjhMJInTriOAfgWxmQ+2MdqiRNcVKo8bKx1oc9oNioBT2Oi2ZDoMCKCgYX/hVw1hDcu/57Y9OlI3H23p4YqMv392Pr88+jp6NCqk8fKJuAfTIkRRNCgCghRcRhvz9vcjIOvvVZ4p0953k4mYedf2NAJlzfUxF13IX7LLa5jpN+GWd/IA2I+ZMaKmAjXBZfolisBVBsPpTAYjmrDpCEp0JHMbbwa4nS3QJwFIHLVVah54AEmDRksywJsG1+88go6T59Wnt+FD2PAM6bECCKIUAWEqEg2Al1LgL8CaAQQ1a3XceQIEvX1GDVlCtM1QjLd3UAy6T7A5400du21SH31VbaKUhzKkTNo1Q8R88EUodB88Mbk4lSYD1UHipUbgWFmOPzwNSSKdcpqRIrmwzNeNC50+eWoX7IEiESYNWQ49Mc/4nhzs/K8bnIx4JEGwLs7CUFUOVQBISqWRmCLDTwNwOHUtmJsG3tefhntu3f7j81kYHudG2EhHEb9E08gPHZswd2VbD64qDDzUTJeoCoUOOORt6Ae7obDD91mRKUREQgqmYvveJHKbe5nuKYGdYsWwYrFhH8neTi9dSsOfvyxsnw+dIWAhQ3AOVOCBBFUqAJCVDSbgJbFQLdlsD3vlTfdhLhHO0i7pwf2wIB7HtbFfTiM2LXXon/fPsCrPa9LTpFP5IcWOSzz07X1qtLNByeBMh4upkM7xduZdN90PhVAmxlRYUSEzG6RHtPPhYgJiURQ9/jjCF956XifThNy4ehRbHvxRWMdrzLAgiZgqwkxggg6ZECIimeT4fa8Z/fuzbbnrakpHWDb2da7Xm9oPFuWEglEJ0/GgFt7Xpd8uqsfZD7kzYeK/flKDILL9irllMkQcM1FtQzgbEYU5ZU1IgJBJfPgGZ+LcYurmTsX0euvd4xhzc9K37lz+PS555D22iqrEAv435cC642IEUQFQFuwiKrAaHve9nY0//a3SDkcMrcvXnQ3CoDQG2ZkwgTUc7Tn1W0+eKk281GygBLcciWEDuORl0/Zdz8IJkMEjfMueI0V5Zc1NsLVEKc5MI53i4vPnInYd7/rnoYzvxep3l5sW70aSb9GIer4743AclNiBFEJkAEhqoIGIBPPngfZY0Lv/OHD+GLlSthFbXYzPT1a9GLf/jZq7ruv9AGVCztNW6+4psA2AfY4DeaDdax7evmqhxSat27pWrSL3NRMQv1zU1kVKcklkqPMJiR63XVIzJrlL8uZ3wk7ncbOF19E1zljxzD+EAP+zpQYQVQKtAWLqBrWA/1PAm8CaAAwUrde9+nTQDKJ0YOf2tl9fd6Hz0UXB4Nfo5MmIdPbi3Rbm2s+3dWPsm+9qmDzIduJSGpRnbeAVrZAl1yUmzAQWjQUGhItRkSiGsIZUKAjakIiY8ei9oknYIXYPg+V/bnY//rrOLXHyOdUALAnBsxvAIyVWgiiUqAKCFFVNGWvDbIYQK8JvUObN+Pkhx8CyB4+103t7NmIXn01e0A1bb3imWMAzQc3RYZBCJXVDsGFt9bqhAKk56bAjKg2IqJ5ZLdk+b5+RblDI0ag9vHHYTm12/VKw5Dbida//AVHt5o5A24D58LZjlelvdQJgqAKCFF9bAS+WgzssYAfwMBa5+t9+3DZlVeipr7efZBk9WPo/6EQYt/+NpLHjsHu7fUcy6JrMYy5lIpj0VnOcx+Vbj5UbLdSZTwUGI5KRNiUKKwKqcgzNCfeeJ1bsnI/l9Eoah9/HKErruDT8tLwmHdHSwu2b9ggpCXAgA3MbQL2mhIkiEqDDAhRlWwCWpZkP3l6VLtYJoMzu3ZhzDXXIHH55c5jRBYBbveHw4hNmTLUntd1bIVsvapW8yHzabK0aVCRg9WYFt2EKa6w6LjJTI/3eSowIwV5DOfQbUJqH3kEkWuu4dMoTsMwDwDoPXMGn69ciUw6LaXHigUsWwq8bUSMICoUMiBE1bIR+MxUe17btnFm/35MmDoV0bq6wgcVVT/y8xW35xVejFdC9aNCzQc3iqoewkaAY8EsbDg0mYNy6AuZEUENpTl4YjWZkMQ99yA6bRpfbjdJn3kku7rw+XPPoc/AFtlB/nMT8K+mxAiiUqEzIERVEweehaH2vKm+PjSvW4dkr/zxE5a3/ciECah79FHh/dBkPgJiPhQZB2nj4TcM4Ncoh8kQRcKUML82gq+FKiMyFM8Tp9iERKdORWzGDKG58JJJJtH84ovo6ezUqpPHK43AP5kSI4hKhgwIUdU0AJmYwfa83e3t2Ll27aWLW6l+gy3KF7vhhtL2vKxbr5jkNCwQVJsPrxQcuV1jdJsPJ03WWEXxrkMAPtNRSYaDBYHno7MqIlPNyMWLaHNvJ3QxIeHx41Ezd67nWBHcPpT4cuNGtB8/Lp2fkS09wE+q4KeeIIxABoSoega7kMxDtkOWdjpOnsT+116Dx7XQPeF9A0vceSfi06dziqh/m+SqlKgVVja+oswHBCoSuVhG48Gcy6DhsFxuZsTZnyt3VYRnGpKxRqohRWPDI0ei9vHHgbDDzm8NJuTY5s04sWuXdF5GWsPA4mcMdV8kiGqAzoAQw4KNQNcTwF8soAlAVLde19mzCGUyuPy667hjRT61j157LdJffYVMl3fHR56FR1VuvQqC+ZCpXCiKdXwY4FswKzIcboaC12ioyME3cX4zwpSPVT4/Z1C3ZOV+VmMx1C5ejPCoUb5jZchl+Hr3bux6803pfIz0hoAHfwQcMiVIENUAVUCIYcMyYJud3Y6VMaF38KOP0LZjB1eM8FtwOIy6xx9HeMwYBpEybRIg8yFfuRCJZTQeTDkkf3bKVrlgmIfUXBhfH11GRCSuJJYnjmd8KISaefPY/jYp4JvWVmxfv96IFoCMDTz9I2C3KUGCqBaoAkIMKzYBLU+aas8L4OyBAxhz9dXu7XmLEKl+DA2JRBC99tpsZ6zB9ryOuctY/SDzYbDqodJ4CCC0wC/e0qXyJjBnIRg0mTQMVUN0m5DEAw8geuONpXrOSbnmUEx/Zyc+/e1vkeozc+FxC/i/moAVRsQIosogA0IMO0y3523bvx/jndrzFqHijXmoPW9LC5ApLPRYjHkqeetVVZoPCFY93B5iySVoPJgX7xImQRgBcyJtSBirIjLxjrkETMjQ3weFvwOx6dMRv+suRz2PpMz6+aT7+7FlxQr0dHQIxQuwogn4R1NiBFFt0BYsYlgy2J73LRNayVx7XtE+9JxvyOEJE1D3yCOFKcSU1WBw65UUATYfXDEe5oxpsSvwybtnbtNGQwTGOQqbEdlqlEAVx9SWLLffhchVVyHxwAP+Ws5JmfUBwAaw+6WX0Hn6NFecKBbwfgz4d0bECKJKIQNCDEsG2/M2wmR73nXrkMm159VM9IYbUHPvvQD4FhVaqh9gWLCVe+tVpZsPhgWuaKxbPmbDUanoMCMqjAirlECMaFzx70ToiitQs2ABu5ZzUmb9Q7//Pb7av595vCSHosAPGoABU4IEUY2QASGGLcbb8544gf2vv+74mOdiTpDEnXciruhqw8IYWoBWjfkYXKByLWxFF7QS1Q7XXJVsOLzwMVXcZkTGiHBWQ4ZiOJAxIVZNDWoXLoQVi/FpCfLV1q048PHHklmY6UoDCxqAc6YECaJaoTMgxLDGeHvetjbH9rw6DAgARKdMQYqhPW9WSsNC3NJ/8Fy6UsK6mDNhPgRjSu72yyNgPBxzVLPp8EJmqxtjnlwuz1gWCc7xMnFWJILaxx9HeOxYLi33hN7anUeOYOu6dWq0/EllgMd+DGwzJUgQ1QxVQIhhT7nb8+oyHwBghUKoZ23PqxrB+fMaCqnclWo+fBbAInHFORwX0ppNh6X5pn7C/lURrjxOD3nl0XwuhNeE1MyZg8ikScz5S3QcH3R+9OK5c9iyZg1sW/SSr3xYwM+XAe8bESOIYQBVQAgC2fa8i4FOK7slSztnDxzAmGuuQeLyy/UaEGQ/lYxec41re96slOLqB+uCupzVj0o2H053e+XgNB6i8awYMwgmdV3MCLcRcXvIT5clPYOOaExsxgzEb7uNOa+rjuODhY+me3vx2e9+h4sMlV1F/Lcm4P81JUYQwwGqgBDEIEuBX9nAchNamXQa29etw8VzLluJFZmPHKHLLkP9E0/AimrfZeao7zyAzIdK88EbUxyv03gILfiLz12I3nTNj2XuDhoisUw5ymhCItddh8SsWXlTEXsVmaLSaexYuxbfuP3tVIwNvBUD/t6IGEEMI8iAEEQeceBZ22R73hdeQLK3V59I3kIgMmECaova82aH6Kl+8MJrKIRz69g+pNt8iGzz4ah6iMZ65WRa0EsaB7bJ8GsoMyQajYhrDEtqzvFeMeGxY1HzaOl1XUVNiPsEsvm+fO01tB05oja3O3viQGODoe25BDGcIANCEHk0AJm44fa8O9auVd6e1+2tP5bXnlcnItUP6fwi1QEvDdY5mjAfTncLxBTHl4ySWPz7Lth1mgxRBAyJlI5DTqZYlznxjHeNFzEhg4RGjEDNY4/BikRcpsL/inlFnPz4YxzdZuYMuA2cy2Q7Xhnb50UQwwkyIARRRDna8+57/XUMHaVUtTBzyZO4807Eb755cEjlVT+kKiWqt14FzXwwLOxVGg8u01EJMBgSHUaEKY5nLrzVL14TYlmwIhHUzJ+P0IgR3uMVmZCO/fux+/e/584lSJ8NLFgGnDAlSBDDDTIgBOFAE9BqAYsAaNwfdYmTu3bh6LvvKsnF8nZfM2cOIldfrUSPW1+jkSlJI5Czos2HX0qnGAnj4TqPSjIdXng8F6mqiEg1RNOWLBETAgCJRx5BeNw4rhge8mfTc/o0tplrtwsL+NkyYIsxQYIYhpABIQgXGoFmk+15D3z0Edp27VKTzO9T8HA425539GjGdIarHzxjFW694v20tlLMh2vVgxPfT9yrwXS4wWBGhPIV5WGKc7qbc7xjLOP3LzFrFqLXX880NptW/Oci2dWFratWITlg5sLjFvCfGgFzbocghilkQAjCg6XAGzbw703p7dq0CZ1HjwrHcy3mYzHULVoEq6ZGWI9bX7WRUbz1ikfXpPmQ2WqjourhuW2rmk2HG6qNCG+OMpqQ6I03InbHHb75SqfA/3NiJ5PY/sIL6Ons5I4VwQZe+hHwH4yIEcQwh64DQhA+bAI+XwyMt4AZurVs20bbvn2Y8N3vIlpbyx3P+0mmlUggOmkSki0tQMa50KPsuh8uCzaWcVJjy731SoH5YB1bHCdb9fA0HgawLEvqZmCCaoyISDWkDCYkPGECahYsEK92csTZAPa88grOHDggpCXAll7gyRmA2o4gBEE4QgaEIBh4GvhjGrgNwI26tTKpFNoPHsSE6dMRjsW4Yi2Ae3EQGjEC4csuQ/LgQeecjAZEZMHEukDmMR8l41kWXlVoPkrGcx40NmU8dBoIY8bEpRokZER44j0MEEt+xyEu94dGjULt4sXGriV07J13cOizz4xoAWhNAg/+b8B5U4IEMdyhLVgEwUADkIkBS2GwPe9Ozva8MsuqqEt7XmVnP3gWSZKIVD+E83sODJD5YMSE8TBepWCYg9J5yFZEFFVDpE1I3jgrFsu2200kfGN9czPon929G3vff19ai5FeAPN+ApwxJUgQBBkQgmDGdHve9sH2vFxILKTiM2cidtNNQrFKlm+qt14xy7JXP3jzV4r50Gk8gmA4WFA6R97KhFsOnljFJmRonGUhMW8eQldcwRYjyTcnTmDbK68Y0QKQsYGnmwx9sEQQxCXIgBAEB01Aq22yPe/OnTiyebPvOFXLutq5cxG56qpsTlXVD6cwoSheEfVbr3i0TZqPEgPBYR54t7cx5awAw+GFsvnLbssqownJPZp44AHlLbvdXtf+8+fx+erVyKRSSvXcsIF/XAq8YUSMIIgCyIAQBCdLy9Ged+dOE1JAKIQ6jva8TEgYGeHqh4YtNaKLRp5xouZDRF9H1aOSTYcbSsyIyLaq/FieOIXbHWPTpiE6bZqerYxFOTP9/di6ejX6uruVaznqA79bCvxXI2IEQZRABoQgBFgKvGEZbs97wa89FlKlIAAAIABJREFUr6JFAm97Xi3bklyD1Z5FYB7LnpRtPM/z0GQ+SuLIePiixIjk/5cnLv9MBqeOa4zHcwlffTXi999vpFpp2zZ2vvgiOk+fNqAGWMD7UeBZI2IEQThCXbAIQpCNAWnPO7RAULgADNXUIOLTnpdpsc2yECpT9UNZe+Gi8Uq3XpkyHwIY22aVW3zz3rROSeJ5O5gJkWqIThMSGj0atYsWwYpEPMfJknsND/7+9zjW3Kw8vwuH0sDDjYCZUgtBEI5QBYQgJIhnP0Uzsoc42deH7WvWINVr5PgJIhMmoGbuXM8xRqsfCtFV/RhO5kM5PkbCYryx5lMzZUkjkv9fgTgRZb+fNaumBjULFsDKawGu40OOHKe3bMGBjz9WnteFLhuY92Ogw5QgQRDOkAEhCAkasudAjLbn3fHCC6WHNDVtTYpNnYqEQ3temXMdLGN0Vz+YULRNym+cCfPhujjnRHmXqCJjwGQs/FL75dBgSIRfF90mhPdnOBxGzfz5CI0aVfoweyZmzh86hOZNmzRkdmQgAyxeChwyJUgQhDtkQAhCkqZytOd97TUAZioKCYn2vPlUVPWDd+sVy9gymg/emNIQhR2hPMyGbnwNiWz+CjEhbuMTc+YgPHEis64MF8+execvvADbtpXkY+DvlgHGLi5CEIQ3ZEAIQgFNQGsYWIiAtedVRe2cOUPteXMYNRSKqh9l3XolSTnNhzAepiMIlBgSBWZEyKw5bDdjjmOJYTAhsTvuQHTqVG85j3w8pHp78fmqVUhevCiVhxUL+JcmYLkRMYIgmCADQhCKeBrYabo975ldu7RtvyogHEbdwoUIX3FFebZfmSSgW694x8maD1UHrYNmOrxwrIyI5pKshogoi5qQyHXXIT5rlus4Zg0GMuk0mteswTfnzklmYuaNKPAPpsQIgmCDumARhEI2AS1PZg84zjehd7alBWOvuQaJyy9Xks9r0WRFIoheey0GWlpg+V0ojGVbCasBMV394KlosIxVvfXKkPkQwsF4VCKqqiLC1ZC8efCMZ47JI3zllah57DFYYc7lgODPyJcbNqB1716hWAH2AHjsaaDPlCBBEGyQASEIxWwEtphsz3tm3z6Mv/nmkva8IvgtlqxEApHJk5FiaM9bcBfDGMdxrGNVGRCesx+sYyXMWMl4zeZD6jC1TuPhdGjd66ZSGvJVkcCYkOJx9fXZdrvF1/zRVAU58ec/Y/9HHwlG82ED5yzgvibgayOCBEFwQVuwCEIDxtvzrlqFZE+PVB7WRVJk/Hjf9rzKUGQ+uCRVjpWcG2+0rPngRrXxUGUoNBiTEiPCPSWzJsR3XCSSbbc7YoR4Po7ndG7fPuz6/e+Zx0vSawMLmgw1BiEIgh8yIAShgcC059VE9MYbkbjnHqaxQdiGw1P9YEwoNIa3+sEzrizmA5LGQ2PlwldPNAWKtmZxyXNWmCRMiOd4y0LikUcQuvJK9rkUp3DQdKPn9GlsW7dOWIsXC/jbZcAWY4IEQXBDBoQgNFGu9rymmlrGZ85E7LvfLbyzkg+fQ/HWK45cvnOR+PTcf6hA7sGzL0KvAYMJsBTfROfh+TTy8/DG6jQh+aEu98fuvhuR667j0ubJn0+yqwufr1yJ5MAAw2h5bOA/NgLm3A5BEEKQASEIjTQBrZbB9rwnduww2p63Zu7ckva8yijD2Q9lsFY/3MJ9csmOvzRUzNhIGQ+nh8BgGCTwzS9oRmSrISL4RvnkjUyditgddwhp82qmUylsXb0aPZ2davXcWdcE/LMpMYIgxCEDQhCaaTTdnvfDD9G2ezdXjHDXo1AIdQsXIuTShSsIVQ1WdFY/pLZe8eTWZT6Kznpwx7kYMl2Gww8mM8KZbyiWJ05w+x2PCckfG544EYnZs9k0XbRLHvZ4bO/LL6P95Ek+PXG29AB/W0l/cwhiOENdsAjCAJuAlsVAh2WoPW/b/v1c7XmlLjYXDiM6ZQqSLS1A0RmUkqw8268UVEDK0vlK8uwH1/NjzFk6jH8LELdZCJjpcEOVETFtQrg0AIRGjULNokWwYjHhPN4ihfM7snkzDn76qR6tUlozwAM/A4yVWgiCkIMMCEEYYlMZ2vNOYGzPK2VAgKH2vMkDBwra8wobkDJsv2I1ILxbYHSZD5Hx2WFi5oMrxuE1CJLpcMLVHHEYkYItWTzaAiaEqwoSiyHxxBMIjRzJNS+nXCyc3bULO15/XUyLn24As5cCR00JEgQhD23BIgiDmG7Pu23VKqR6jRw/QXjCBNTMmTP0/6AvOPPhqX4YGcNA4MyHKeNR3DlLQ/csVyPCEW+isxeTCbEsxOfNQ/iKK4zMo+v4cWx95RVtWkVkbKCxyVC3QYIg1EEGhCAM0gBk+oFGGGzP2/zCC8ik065jZKsf+USnTnVvz2u4+5WOw+e8c+UZL7z1KijmI/+/PLFu+dxuKsazTsNNhydW9feH8znFv/c9NY0iGHT7Ozvx2erVxtqBA/iHpYY+0CEIQi1kQAjCMD/Lbhkw1573+HHs27RJr0je4iQ+cyZi3/mOklwFdzOMEZJjGhSs6odWeM/E8B6Q9sul+jWSNCQy1RATJsQrIjptGqLTpzONlSXT34/Pn38e/d3dGlUuYQP/qwn4FyNiBEEohwwIQZSBJqDVBhbAYHvew9XSnrdMDIvqh8CB/KH/ssYV5zCwVUmFprQJYdURNEnFhK+5BrHvfY87l7eQ89xs28bOtWtx4cwZtXpu0wDejwM/NyJGEIQWyIAQRJlYCuwOenteUaxwGLUe7XmHxunSr5ZqRBEiMzZlPrgQONjNc9Mxj/y5FMQzxmmp7LgQGj0aiYcfvvS95zm8LsCBt97Cqf37NWR25BCAJQ2AmSsbEgShBeqCRRBlZBPQ8iRwDtlqiHba9u/H2GuvHWrPq+z8h9On4eEwotdem23P63IGxVHdpX2r1+OlKdgMCM9i23Os35xdxpSMK1f1w5T5YFjwC5sJmRwCRkQo1sBWLKumBjWLFiFUV8eWQ5JTn3+OL95+24gWgE4buL8J+MqUIEEQeiADQhBlZiOw1Wh73i+/xIRp0xCtqdFqQABk2/NOmoSBlpaC9rzF49zyOI4rgwHxHceyKJd8brq3Xmk1Hz6LdFnD4SvPml/UhDDEDj2qo2lAjnAYNQsXIjxmjFPC0rmIkJfn/MGD+HztWplsPAxkgMeXAdtNCRIEoQ/agkUQAcB4e96VK9W15/VZKIUnTEDt3LlqtFShcjuMxHYvEVPBivKuSjLmw+0hnjxOeSUOlbtGinS64tAe0lBFXq7Egw8iPGGCutweXGxrw+dr1sC2bSN6FvDzZcD7RsQIgtAOGRCCCAANQCYWsPa8ojgtraI33ujenle1vsrFo6IDwbJoMyqsW69EzIfHQp57a5RXe12WMW7pveYh8nPEqMkKTxUkescdiNx4o19CoXkUk+ztxWerVmGgr08iCzs28F8bgf9lRIwgCCOQASGIgNBQhva8ezduhJnPL4H4jBmI5rXnZV0A6awScOtXCDwLV23mw0WLSU9VZyzGXKZNCNc4BiLf/jZid9+tLJ8XmVQK21euxDfnzhnRA/BGHPhHU2IEQZiBDAhBBAjT7XlPGm7PW+vVnteUuRgG26+Y0FXdYXm+TjG62/EynkPhjcuPL4hhGavgPFNo/HjE58zxzaOKfRs24OyxY6bk9sSAxgZDnQIJgjAHGRCCCBjG2/N+8AHO7NplQgoIhVD72GMIXXaZGT0ZAtKml3uLj8quV7xbdnjNh27TIaApWw1hHa/iWVv19Ug88ggQiXAEiW/DOv7RRzi8bRtnlDBnAcwbrAwTBFFlUBcsgggg5WjPO2bKlKH2vMywtJ8tfjwcRnTKlGx73lTKM1dJPr9FXZnb77p+gl58l8/jomOzQxS9Brxbr0TMByeWz40vmfcZFdcYn/lxI/o9jUSy7XYNmflze/Zg2/r1RrQA9GaAR5YC+0wJEgRhFjIgBBFQTLfnbdu3D+NvvhnR2lr2QAEDAmCoPW9y/34g10UngAZEepFuuPVu2aofLj8HMlua8nOwGgwhQyKyZcxnDn65ZTVgWUg8+ijCkyaJZuCiu7UVnzz/vJamFU7YwLJlwJ+MiBEEURZoCxZBBBiT7XkHLl7EtpUrkZRoz8uzoAqPH4+ahx5izxeQLVFDBG0+KpE0HzJjhSsaHrn8B3KYEB3fd05zGfubv0F4yhQlen7KyQsX8NmqVUgNGLvw+D8vBV4yJUYQRHkgA0IQAaYhe/m+p2GyPe+aNcY+6TTZnhcA++IxIO13daF7riILd9+KCc+NNbeTjqLnwjqWl8jUqYjefrvSnG6kBwawZeVK9HZ2GtGzgXWNwH80IkYQRFkhA0IQAWdZtiOW0fa8Xxpszxsras9b7QgtThVvv2IdI7r1ildXdquWa6zDFjmRjDoNG1fVcNIkxB94QNdUCrBtG3tefhntrUb+7ADAljjws0oy8gRBiEMGhCAqgCagNWSwPe8Jw+15a7za8zLCc+0LI0jOR9ezUZZXl/lQ3RnLxYh4jmfN6/Uwb06/fKNGIfHoo0BY0dFNH70jmzfj+O7darT8aY0BCxoAM1c2JAii7JABIYgK4UfV3J43HDbWnpd1aRswOyOP6uqHpGZJNcLEdUCK9FnHuo5XNF+/LFYshsSCBbBqapTo+em37diBveY+gOhCtt2usSsbEgRRfsiAEEQFsRR4w8oeTDfCzldfxYWjR50fVL1YjMVQ+8QT2hZZSglYtcV49Uew+5nrWFPz11EJ8UqhIp9lIT5vHkK8LbIF6Tp2DFtfecWIFoCMDSxtMnTGjSCI4EAGhCAqjEZguQ0sN6GVSaexde1aXOzoMCGH0KhRqH38cXXbTIJMGUyMUUXNB/6FO2XxXt/Eb6zq7WJFxO67D+HJk9VpeNB//jw+XbUKmfzr82jEAv5+qaEufwRBBAsyIARRgRhtz9vbi23PP4+URHteHsLjx6Nm7tzCOwNWcShG9bYunV2U3EXFt18JL+IVXA/E6zH3hIwmpMw/d9Hp0xGdNq3gPl3VrnR/Pz577jn0dxu78PjyRuC/mRIjCCJYkAEhiAqkAcj0GGzP+017O7a/8IK59rxTp6pvz6vxE/nAo/lTetYxUh2oGNvvMhsRwddElzkrHhe+5hrE7r2XU00M27axc80aXGhrM6JnAe/HgL8zIkYQRCAhA0IQFcozptvzHjuGLzdudH1c9bI9PmMGolOnKs5qiGo0MS4IP1PW64LwHE4vMiI8c5Cqgig2t6HRoxF/+GH9P0eD+Q+8+SZOtbTo1brEoSiwuAEwdmVDgiCCBxkQgqhgmrLmYx4Mtuc98u67JqQAqGnPSwQDnq1XBVUPITEOExIwrJoaxBcsgBWLGdFr/fRT7P/LX4xoAeiwsx2vukwJEgQRTMiAEESF0wTsMdmed//776PNYHvemsceQ2jUKDN6FQjrmQBj7YdVfWovm4fVhATpqvfhMOILFiA0YoQuhQI6WlrQvGmTES0AAxngqaXAIVOCBEEEFzIgBFEFmG7Pu+PVV3HhyBEjWlYlteetVAJ0PkapAud8y30YPT57NsLjxhnR6m1rw2dr1sC2bSN6FvDvlgHvGxEjCCLwkAEhiCqh6tvzLlw4PNrzEsoX/JWwFSt6xx2I3HCDEa1kTw8+XbECyT5jFx7/L43AClNiBEEEHzIgBFFFGG/Pu2IFUj09JuSc2/MSlUcALpoYNMLXX4/oXXcZ0cqkUti+ciW629uN6AF4Iwb8wpQYQRCVARkQgqgicu15bWC3CT3j7XlvvBHxWbO06wR/yRoMtF7/xGucZQ3dKp3QuHGIz5ljTO/LDRvQdvSoKbk9PcDTDYbOpxEEUTmQASGIKuMZoNcCFsBge969GzbAzE5yM+15TT0XQgxT5xZ0Y9XXI/7oo0AkYkTv2Icf4vDWrUa0AJwBMO8ZQx36CIKoLMiAEEQVYro970lqzzssYbUBqscBWRNS0UYkEsm2262rMyJ3bs8e7HrrLSNaAHozwKImQx+CEARReZABIYgqxXh73vfew+mdO01IAaEQaubPp/a8lYhp0xBEk2JZiD/0EEKjRxuR625txWfr1hnRGuQny4AtJgUJgqgsyIAQRBVjuj3vzldfRaep9rzxOLXnrVYUmwbpbIrnE/2bv0F4yhSlOd0YuHABn6xcifSAmQuPW8B/aAJeMSJGEETFQgaEIKqcxmxr3t+Y0Mqk09i6bh16qT1vZcG6wDZQTRhSUKHFkiNvjIlaSeQ730H0ttsMKAHpgQFsWbECFzs7jejZwLofAf/JiBhBEBUNGRCCGAbEgJ/DVHvenh5sXbECSWrPawTWcxA6zmE4J3DOYDOMKRkrY0IGY3WYCtGc4UmTELv/fqVzccO2bXzx8stoP3XKiB6ALaOBn1R+XzKCIExABoQghgGm2/N2t7ejee3aqmvPy0wQzx1oQtczlTIhrOZD1feJIY81ahRiDz8MhMy87R75059wfNcuI1oATsSABfMBM/u8CIKoeMiAEMQwwXR73nNHj2LPxo3CC1TeuPiMGYjeeKOgWpUTEEPEUwUpGG/b/uNzY2wbdrEW79yK80pgA7BiMSQWLICVSEjlYuXMtm3YY64rXReABQ3AOVOCBEFUPmRACGIYkdeet9uE3snmZhx57z0TUgCAhFd73gCcczC2DUonnOcqZMcVmIk8k1FyKx7Loc3V/pdjLAAgHEbs0UdhXXYZb6Szvs9r1nXkCLa9+qoSLQYyABqbgD2mBAmCqA7IgBDEMGOwPW8jTLXnffddnDa0FcQKh1Ezb57x9rxChiEAhshNR1n1QHJscZzfjT2ZwtfeZ0zsnnsQnjyZTU+Svo4OfLJ6NdKplBE9G/j3TYCxi4sQBFE9kAEhiGGI8fa869ej8+hRI1pWIjHs2vOqPojOICg1pmQrlsktYkVaOs1TePp0RG6+2VFXNem+Pnz+3HPo7zZS3IQNLF8K/MqIGEEQVQcZEIIYphhvz7t2rdH2vDWPPaavPW9AzlRwobklreN4VhPiM1YZPOZD0mSFr70WsXvuYZuXJHY6jR0vvIDOtjYjehbwfm+2sx5BEIQQ1DyfIIYxPwTeTgO3AdB+ejudTOJcSwsm3XorwtFo4YOWc/NO3paeVl6e0IgRCI0ahdThwyU6vnlZxhXNuWQsy3NyGcMz7tIQhlfLspife8kcfMZ6xrA+T5+xwjgYBV7zwWOPQqNHI75gARCJcET541bpannzTRxtblaq5YYFHIgCc34MXDQiSBBEVUIVEIIYxuTa88Jke94XXoBtsj3v3Xcb0SpBQfckVblc8wYAx0qIqm1ZDnl8z4uwmg+X+Vk1NVnzEYv5jlXBqU8+Qctf/qItfz42cC6T7XjVZUSQIIiqhQwIQQxzngF6UYb2vAVoXKDFZ87kb88rMB+hDlcqjYWq7lQ827AkF+v5Ma5xvGbEI0bk+XARDiM+bx6s+nq5PIycb2nB9k2bjGgBGLCBHywFDpkSJAiieiEDQhCE8fa8J5qbceT9933HqVqeD7XnrcSzGxpQevCax4SIGpH8eL8bb978/C6xrGNjs2cjNH68FpNZbDAvtrXh0zVrmBsQSOsDzywD/H9pCYIgGCADQhAEAPPtefdt3owzldye18DCj3chq6MKwgRPtYHj2h8yrzBXDgXmIzpjBiI33GBki1uytxefPPcckn19BtQAAL9cCqw0JUYQRPVDBoQgiCFMt+fdsX49Lhw7ZkQrvz2v0HYpEVgWtmWqyvBUBERnKGNC8nOI3NiSe1dNWOcd/ta3EL3zTubxMmRSKWx//nl0G+ooB+CNGPBPpsQIghgeUBcsgiAK2AhsWwKMAeCwolKLbds4s38/Jtx8M6K1tY5jZDphlTyWSCA8cSKSLS2w/BaHAp2wHMcHsRvWYC7eLlciXbF843R0vWKBx3h4jA+NG4f4o4/CCoeNnO/Zs349WvfuVZbbh909wLwfAwOmBAmCGB6QASEIooQfAn8qS3ve/M5Bg6g0IAAQqq9HaOTIwva87snkF+mSBoR3bHYIW0vektwe45jGFo0vuFswTjk81ybxibHq65FYtAhWImFk69WxDz7A/g8/NKAEAPgKwOyfAu2mBAmCGD6QASEIooT1gP1IduvFAgDjdesNXLyIC62tmHTrrbBCpTtDeZamLIvv8JgxsEIhpFt9Gn+puB6IwxjHsUGtghRpMn8vZK7totqMMJ474YqNRpFYtAihUaO0XlQxV/04t3s3tr76qrK8PvRmgHlLgX2mBAmCGF7QGRCCIBwZbM+7EKba8x45gj0bNpiQAgDERNrzMqDjk3Ath9EHc/Ee0uY6X+F0N0sO2WuBMHTGYpqPW6xlIT53LkKjRxu5ont3ays+e+kl5XndsIAfLwO2GBMkCGLYQQaEIAhXytKe9733pHLwtCVNzJ2L8OTJXslYBJn1TMLzOvA+A1kTksvBbH54byxpvfR98kTvvhvhKVO0mw/btjHQ1YVPVqxAesDMMQwb+KdGwFiphSCI4QkZEIIgPClHe97TO3eakAJCIfXteZ1Q0A1LW+eswVw8XbGYxufHqTAiCmDqkuXz2ka++11Eb73ViPlIDwxgy3PP4WKXmQuP28C6JuA/GxEjCGJYQwaEIAhfTLfn3bl+PS4cPTr0f50LVCuRQM2iRbBqalzHaKsQaIZnK5bIOK7nybgVSvVrx5yXoXoSnjQJ0fvuM7LtyrZt7H75ZbSfOqU8twufxYGflKknGUEQwww6hE4QBBMbgW1Pmm7PO20aooPGQPVB9ILxiQTCEyYg2dLivJhU1bI2qB2x8vKJHjLnXrgKHDT3ihC2AIzmwRo1CvGFC4HiTm2azMfht9/GoU8/VZ7bhWMxYHYD8I0pQYIghjdkQAiCYMZ0e96v9+8fas+ruh1vMaERI9zb8wbkmiC8Yy8NY++KVaLBMH7ov6xxHjmMwWEcrHgc8SeegFVfL5yDFdu2cWbrVux4803luV3oAjD3aeCYKUGCIAgyIARBMJNrzxsFFlgG2vMmL15E16lTmOjSntcLXgMCeLTnFbhmhut4MiHMuZQjYhjCYcTmzUPoyivlczHQdeQIPlmzhquJgAQZC1jSBPzVhBhBEEQOOgNCEAQXzwC9lsH2vF8fPowvNmwwdq7CsT2v4GLQyJxZuz5xnvMQ7XQldY5DoJsVcy7BfNF77y3slKZibi70tbfjk1WrkEmnteR34O8agT+YEiMIgshBFRCCILjZCHQ9CWwG0AQgrluv6/RpREIhXDFlClecSBUEACJTpiB9+jTs/O5DqrZhuYwrGauhCpIdqqkS4jKPSj3UbAOI3nILonfckXenPkuZ6u3FX5cvR09npzaNfGxg+VLgn42IEQRBFEEVEIIghBhsz7sUptrzvvNOedvzCl4ThGfJGoi2vEU5ZTtdmWyzq4LcfMNTpiA6a9bgnfqqHgCQSaXQ/MILuHD2rDaNfCzg/bjBrnYEQRDFUAWEIAhhNgEtS4CzAB4zode2bx+uvP56JC67jDlGtApiRSKIXHstUgcOAKlULln2i7dg6V2M40rGsnS54hyfHcb5miiqhnDnMEi+vQiNHo3E/PlAWP9bpG3b2P/GGzi2Y4d2rUH2x4C5DUCfKUGCIIhiyIAQBCHFYHveKwDcpVvLtm2c2bevoD2vH6IGBBhszzt+PJIHDlz6BFygJS/A3hGrZCzPViyG8ZeGGTAhPvMptxlxqmlYNTVI+FwXRpm+baP144+x5513tGsBgA2cAzDnR8BpI4IEQRAukAEhCEKaHwLvmGzPe3b/fkwebM/rh4wBARza85qugniMcxyv4zxIUW7hV7TMZsR3E1U4jMRjjyF0xRX652LbOL9/Pz5/8UXtWoMMhIHHmgBjpRaCIAg3yIAQBCFNrj1vDJgHYIJuPd72vLImJDxmDCzLQjp3VWpVVRCXcSVjNW3Fyg4VeG00GpGCYaL5IdbFKz5nDsJXXy2hyippo7etDR//7ndI57b36eenjcAbpsQIgiC8IANCEIQS3gKST2ZbejYAGKlbr/f8efR1dmLcTTf5LlRlDQgAhCdNgn3hAjLt7UauC1IyPqAmpERXIo8xHA6UR2fORGTaNAPSNpLd3fjr8uXo+8bYhcd/2QT8iykxgiAIP6gLFkEQymjKXhtkHrJXV9bOyeZmHHn/fd9xqi7qlpg7N3tNCJXXBfHIxdvpSrQzlm3b/K9RXmcopdf+0NXRyyN/5IYbEJ05U71uyTRsZJJJbFu1Ct0dHdr1BnmjEfiFKTGCIAgWyIAQBKGUsrTn3bXLhFRJe17fpTJrW17OiwR6DhHJOzRcYPGvyog45VR18yA0bhxiDzygYtY+Tyk7j70bNuDs0aPa9QDABnb2AE+X+7A/QRBEMbQFiyAI5ZSlPe+3vuXbnlfFVqzi9ry6z4I4jte4HSs7XOJ1UrU1ywBWfT0STzwBK67vWpr5pu7oe+9h/5//rE2riFYLmPNToN2UIEEQBCtkQAiC0EIQ2/OqMCBAaXte4yZE5BC3wHOvZiNixWKIP/44QiP1HVfKNx/ndu3Ctg0btGkV0WsB85uAfaYECYIgeCADQhCENsrSnve22xCORl3HqTIhQ+15jxzJ5vULGI4mxEEzEGbEshB/+GGEJ07Ukr54K1t3ays+XrkSdjqtRa9EH/hhE/CuETGCIAgByIAQBKGNsrXnveUW1/a8qgwIMNieF0D61Cm2hXUQTAhHXGGIgteN9flrJnbPPYhMnaold7H5GLhwAX/+t39D8uJFLXoO/GIp8FtTYgRBECLQIXSCILTyDNALYBGyHbK08/WhQ/hiwwbXw9CqOmLliN15J6I33qjm8HUOhZ2xSmI44gpDFDxDh8PhtsNNNfm5wzfdhMgtt6jXcOgklu7vx5YVK4y127WBdY3AL42IEQRBSEAGhCAI7ZSlPe9WkRlbAAAgAElEQVQHH5iQAgAk5szJXifEbyBrVyy/ND45fWM44gpDBNr1eidkNiUyt5xWeNIkxO69V9384f6a2LaNL15+Ge25i1fq55M48JNAbHEjCILwgbZgEQRhhI3A2e9nW/T+EAZ23pw7fBgjxo7FiPHjHR9XuRULloXIlClIHT4M9PczjS+5i3Gca4zM1cUFXwulr6FmrFGjkFi0CJbH+SAe/IzYoT/+EYc++0yJlu9cgCM28NCPDBl8giAIWciAEARhjA3AgSeBcwAWmNA7s28fxrm051W9eM61500ePAikUgwB5TMhjloSr0fQjYiVSCCxeDFCdXXSuVgqQGe2bsXOt96S1mKkKwM88mPgiClBgiAIWciAEARhlI3A1iWG2vPCpz2vchOS157XYtmqpMOEMIyX0fLNGTQzEg4jMX8+wldeKZWGdetZ15Ej+GTNGuVnjVzIpIHFPwY+RfbbyXMzMkGCIAgnyIAQBKGaEHwWP2OAzVcDt1vADbon49eeV/WCOTRiBEKjRiF1+LBQa17ArAmRjfXMGwAzEnvgAUSuv14oltdE9HV04C/LlyM1MCCkx4sN/J/LgJcEw8mwEARRNsiAEATBgq+pyLv5sh2wbwHeGA08DEDPxRjy8GrPq2ORHB49GgBje96gmhDOeN/8ZTAj0dtuQ+z227liRCsX6YsX8cny5ejp7BSK5yUDLF8G/D9GxLKQWSEIQhlkQAhieMNqLJTzIZB8EHg7ATwFQN/lqAfp7ehAX2cnxt10U8kT0rE4jkyaBPvCBWTa2/0HB8SEiGryYsKMhKdMQXz2bN+5q9gqZafT2LZqFc6dOCGdi0kPeP9NoOlLIGNEkB8yKgRBeEIGhCCqFxZzUVb+AHQtAN6NAI0A4rr1uk6fRjQSweXXXlvymBYTMmUKUl99BZvlOhA6TQhDjG88Zw5eVL7+odGjkXjsMVjhwrc4Xecy9r/2Go7v3KkldzE2sP8k8OivgT5UflWiUudNEIQkZEAIonLxMxhBwXOebwBfPwb8/+2de5TdZXnvP3tmMplJwh1C5GZCQARBblYRBBUKItdEba09pz3WRbu0HmoPWo899djV6ml7ek6PuuxqJUBAEGiq4tHDTSMJEC5JEEwgIRcSLrlBSCaXSTKZMDN7nz8mEyZ79v33Xp7n/T2ftVylybzf5/v77Zns5zvv+3v2snb4NAF8b1mzpuJ4Xi+/lXcwnhdaDwRedkNa0HFN+Ws1OlgUJkyga8YMCl1dQbysf+IJls2dG6RWCbbugstvgjdaWN5MWJHU+GvxaRhGE1gAMQy5SA4YTp8J+Rm8NAPeLIQcz3vqqXQddthBf+4jhBQ6OuiYNo2B1atbHs8LDkNIA2tc1Q5ORwfd115L25FHBim3feVKFt57b5BawFt9cN0XYGmgelrCimRvhmFUwQKIYcRDYsCI9kzIT+HZGXB4IdR43hdfrDie10sIGT8+83heyBYEsu6G1Kzfop5rxl9+Oe0nnRSkVt/mzTwxaxbFoaEg9Qbghhsg2IeLNInkoCLRk2HkHgsghuGXWg29JC8SdlXYDvPOgXMKIcfznnfemPG8PkJIU+N5h01U/uMmv77u2lY/Bb3mX4b/Vur8wAcYd+aZQWoN7NrFk9//Pv27dwepNwT/+7PwXZrblZDYXEv0LMmLYeQGCyCGkR0pIUPijkolqvp8FUqHwf0nD4/nfYdvI9XG8/qa0tR+1FFQKjG0aZOfEFJjTd31PoJIBt1m6HjXu+i8+GLvdQCKAwM8M3s2219/PUi9Evz8b+Hz21pbrjGsSPIpxYdhJIcFEMNonGqNc+z6EgKGs2dClsDAB+GhSfC7BTjEn+Vhqo3n9RVCOk44gdLOnQz19DT+ooXaDWlwbdOajvQr0TZlCl0f/ziUfb6LL16YM4eNK1YEqVWC5x6CmY/BQIByWsKKFG+x6xuGaiyAGMbBxN7NiF2/WU9evM2FXR+BRybAZ4g4ntdbCJk2jaGNGynu2uUvhNRY09D6jNfe1OpWd18mTaJ7xgwKnZ0trW+WV+bOZdUTTwSpVYJNG+Dj34EGPkgmOJJDSmxPsesbhgosgBh5JeZuhqSQIfa5kIfhzY/B8k743RA+Yo3nLe3bFz2E1NRwdP1OVEZ5KXR20nX99bQd6v0zLAHYsnQpv77vviC1gL5tcO1XYDV6dibKkeg3thcp98EwomMBxMgDlZrsGDVDN/Riw0UZVX3eD2uuga3t8PEQRt5YsYLJIcfzTp3K4EsvURoczBxCQEcQaahW3YUFuj72MdqPO86lnarsXr+eJ26/nVIxzAeP98F//CI82sLSZsKKhMZXkseYHiS+NobhFQsgRkrE2NWQ/FxITJw9E/IzePZaOLwd3u/P7n6qjOf1dRSr0NVF++TJDLz0EpRKzb1oHndDauoEmnBVq0rnhz5Ex+mnB/Gxb8cOFnz/+wzs3RumHvz3P4bbgxTTEVQk+IpRP/Y1G4ZXLIAYWgm5qxGzyZf44HnwnZU1MP+i4fG8p7rWLufAeN7zz6e9o+PAn/sKIW2HHkrboYcOf1r6/hoNV/K8G+JSxxXjzjqLzgsuCFJrqL+fRbfcwq6tW8PUg3/7I/ivQYo1h9SQEttTjNpS7r1hZMICiKGB2GEjBLF3Uur5iBp6tkARuP90uLwQajzvhg3hxvMeffTweN6NG8OFkDprm9YLEEbaTziB8Vdc4e11GE2pVGLJPffwxpo13msBFOGp2+H3Xx3+XtewM1GORL/SwknIUCLt+8MwDsICiCGNUAFA0nGtkE29xB2V0VT1txIG3wO/OAo+VUh4PG9x69bmQ8iwsep/lWFtSM1atB1+ON3XX0+h7EMjffHSAw+wdvHiILVK8PJyuPZu2NXk0kaDipSGVJK/GB5C14x9jw2jKhZAjJjEDBs+kTphK2bAaPSZkJo8Drsugkcmwu8VQo3nHTcu+Hje0q5drYUQCB5EGtLNoA1Q6O6me+ZM2iZObFmjYUolXl+8mKUPPui/FlCC3g1w7d/AawHKSQ8qEnxJCSahQokFEiMKFkCMUIQIAaEb/1hBQ8JOSqN+nPv6JWy5FJZ3w++41q5E8PG8J588PJ63v//An0GTF1rHm68g0pB2s3Xa2+m+6iraJ09u1VJ1SmN7r50vv8zTd91FqcLfeaC4Az79ZVgUolgTSA0pMf2ErhuqnpTX1sgZFkAMX5Q3pb71UwsaUkKGyGdCHoI1V8GWjpDjed/1rrDjeVetgsHBkULD/6dpsYxBpAGNusszLS4w/qMfpWP69NbWNxki9vb0sODmmxkcCPHB47AXbvoC/ITGGn5pjaE0v7F8SAgmFkoMdVgAMVzgOwzEDhs+if3wudQjWyNU9fdz+M21cGjM8bzgKYR0ddF+7LEHxvPuL/T23zctGD+INF0PGHfeeXSed56zutUoAYN9fTx188307dzpvR7AW3DrDfD3TS5rNKhIaRql+Es9mMQIJbG/twzlWAAxWiH07oYP8nJcq1btmAHDyTMhS+GxD8N72yKO5wU/IeSg8bwHFxv+P62IuggiDei0ymjVjmnTGH/ppc7uba1uqTQ0xHN33knP+vVOatVjCOb9DdywY3jilU+kB5XYnqQEkxChxAKJIQoLIEYj+AwEsZ4N8YU9FxLw2NYOKPbBg2fCZW0Rx/OCnxByYDzvpk0H/0WW3ZCy9VW/xKFWs7QddRTd110H7WHeolb89KesW7o0SK0ivPhL+OQC6EdO8yYxpMT0ErpuiFq+a8T+fjGUYQHEqETIwOEaG+PrH1HHttbCwHT41RT4RCHieF7wE0IOjOft6Rn7l1l2Q0atr/klHjRrLp84kQkzZ1Lo6sqk0yjrFyzgxUceCVKrBFtXwox/gTfK/qqRABC7uZPkKZaPkDVjhBILJEYwLIAYkFbg8IE9FyI37BSAwtOw61yYfzj8biHieN4RXAeRjmnTGNqwgdLu3ZW/IEAQaVm/mXvR0UH3tdfSduSRrVRqmm0rV7J4zpwgtYC3NsKn/hpecKAlMahI8SIlmGgMJVq1DYVYAMknvpr2FB5Gz8NxrVq1JdRvyct82PJhWD4BPtXs2laoNp53BKchZPR43n37qn7Ngf/MUKfhL221Ro1aXVdcQcdJJ2VVbog9mzfz1C23UBwaClJvJ3z+JvhFkGJvIymoSK2v+VhVpTo+Q4NLfQskOccCSD4IFThcY8e1/NSNXdtb/Ydh7RXQ0wkf81VjNNXG847gMoRUHM9buejb/5mpYMAwAnRecAHjzjrLgVJ9Bnp7eermm+nfsydIvb3wnc/DvyK32YodUCTW1riDEaKGBRLDCRZA0mV0A6hNV6N+6Dq16sWuGyLgVOV+eO4qOKQj8njeEZyGkErjeat+saMgUqbV0Jc3Kd9x2mmMv+SSJle1RnFggGduv50db5Q/huGHAbj/JvhS2b5VvYZfWjMW05+kuqmEEm2BJPb3v+EBCyDpoG2XQ/vuSaUaPhtvKWODYweMho5uPQuPfRTOboNTfBs6MJ73fe8bM553BJchpOp43mq4DCJlek0tq/Ln7VOm0H311VA2VcwXz8+Zw6aVK4PUGoIlt8BnXoKsn2woPajE8iWhnrZjVb71fYcRCySJYAFENz52IzQGjjw8GxKqTqyA4fSZkF1Q6oEHzoVLY4/nHY2rIFJ1PG8tXAeRMs1WaDv0ULpnzqTQ2enIUG1emTuX1U8+GaRWCTYtghk/gW1BCg4jNaiE9hK7lh2rCqdrYUQpFkD04Tp0pBA4XBM7AGit04oHb17WweDx8KsTYGYh8nje0bgKITXH89bCRxCpoF33Szs76b7+etqqPD/jmjeXLuW5n/40SC2gfy184n/BWmQ2SZICSmphIVQdCyT+NI0AWACRj49mW9POSWjtkGEjRI1QQUPkka1nYNeZ8OhR8DsFAeN5R+MiiHRMm8bQ+vXVx/PWN/H2f2Z2U1u//M+7r7qKjuOO81F1DLvWr+ep22+nVPT9wePDbIH/9JcwequlXsMvrYmS4C9U7VRCiUZtLZqGByyAyMR3QJCsWa6rSbtajRChKUSTL+nIViOeCkDhcdh6ISw/BD5JAK/1xvOOJnMIKRTomD699njeBnUO+n+zuarL+EsuYdy73+25yjD7tm/nie9/n4H+/iD1dsG3boQfZpSRHlRiegpRN1Yo0RAayrUlBwcJPytGFSyAyEHD0So7rlVf3+d9CdHsSwoZjTwX0hBz4eXLoKcLrvBhtJx643lHkzWEHBjPu3IluPhMC8+7IuPOOovxH/hAwx6yMNTfz6LbbmNXs8fUWuQt+Pc/ga8HKTaMxJASy4vvmiGuR2Mg8aHrW9PCiAAsgMTFZ+hwhabjWppH+UoZ3xsKZ+GiUR6E31wJh4yD33KtPYYGxvOWkyWIFLq6aNs/nrdQbzxvU8IHe8r6orSfcAJdV17p/JPiK1EqlfjN3XfzZqPTwjIyCAv/AT7XA0VkNTiSQoqUYKIllIT0LnnXwcJIglgACY/00BEiHPjQ9NHRaA1K9WqFChqSdlMAWAwLLoWz2kON5121ihPOP7/qeN5KtNqcj4znHdjfcDu/yRnDSNsRRzBh5kwKTdyLLLz04IO88swzQWoV4dW58Mn5MPIwTiNNv6QmKLa30LU1Nva+9X3o+taUqGc0iAWQMGgKHa7QFGTKdX0GOl/Ntz0XUt9PYQ+UNsFDvwUfCTKet6+vofG85bQaQtqPPprS0BBDr7/+tlZLSnWo4K9WnUJ3NxNmzqRt4kQfbsbw+uLFPP/QQ0FqlaB3KXzqZlifQUZyUInpJ2RdX3V8+9ekKz08xP5ZyxUWQPwy0gy51JKqF0JTum5KE7Xq1YsRMpwc29oEg4fDr6bBjEKo8bw7d9Ydz1uJVoJIx4knUtyxg+LWrXifcnVAvLJ6AaC9ne5rrqH9mGN8OjjAjldeYeFddwWpBRQ3wH/4JjwbqJ60kBLLR2qhRPIuhi9dLXoWRDxhAcQ9Lptw6aEj7w+6pzBRq16tkCEj2CjfJbD7XfD4ZPhkQdh43ko0G0TGjOcNPOVqdM2uyy6j4+STg9Tfu3UrT8yaxdBA1g8eb4zt8LUvw8+R1ahICSih68cKJXkPJJLDgwu9WOE+eSyAuCGvocMVWnZONE/UqlcnRE8q6rNCnoQt74dlh4Ucz3v00Q2N561EMyGk0NZGx8knVx7PG2pXBOh83/voPPfcirXr0ay3wb4+np41i707dza5sjX6YPafwj+N+qN6jb+URia2t5B1Q9TRGkikakrWk/IznAQWQLLh44iVSy0NepKDjH0AoruawQNGHS8FoPAIvPpR6OmGy0OYeWPlSiafempD43mr0WgQKYwbR8e0aQxUG8/reVek4+ST6br00uYXtnDsrDQ0xLN33knP+iyPYTTOAMz7GtzYNzzxqhUkBxVJwURjKPEdSCTvjmjRk6aVSyyANI/U3Q5NocMVrgOC5s8jqVTDZ9Mv4bkQJ8+EPARLroCJnSHG8xaLTY/nrUYjQaTQ1UX7/vG81BrP63rc7jHH0H3ddU09eJ+FF++7j/UvvBCk1hCsvBt+fxnsDVBOUkiJ4SFUPU2BxJdXLeHB9T2UpJUrLIA0jqsdCgsdbvQkB44QQSD141q1ajv3sBCe3D+ed7pL3UocGM973nlNjeetRr0g0nbYYbQddhiDjX4eRsYwUpg0aXjcbldXkytbY8OCBayYPz9IrSJsexI+9SPYgpxmQ0JAiR1MfAcSX42+1ECSJz0fWlL+bRCNBZDa+AgLLsjrcS2XWj4Dh2vyeFwrVMgBoA+Kr8Ev3g+XBBvPu349x51zjtNdgmph5MB43k2bmhUc+0e1vryjg+7rrqPtyCObq9Mi21atYvGcOUFqlWBwNfzet2HF/j+q1/hL+c1oTF+haoaoozGQSGv2fepJ0pLysy8aCyCVSX23Q3JIcK2n4ehXLe1QgcZ3wy/luZCqgecNGJwA86YPj+ed5NtI3/bt9O/YwbFnnOH8k8Er6R0Yz9vTk0V47B+N+u/uK6+k48QTW9dvgj2vv87Tt91GsdLzLR54E278OjzS4nKpQSWGj1A1fdcIEUikNcKS9aRrWRApwwLIwbgOHi6QGIYk62l5wL2Sbqiw4QsJuxmZjm29ALunwWNT4BOFQON5O8aN48ipU73olweRMeN5sxc48J/jL7yQzve8x41uHQZ6e3n61lvp37MnSL1e+OcvwawApaQElBgeYoQS6YHEpabk8OBaz4cvSZ6SwALIMNKCh/SjX9L0NO1yhA4cvohxXKtaXacenoat58Oyw+ETrjRrsXXNGiYdfTSTpkzxWqxQKNQez5uBcaedRtfFFzvTq0VxcJBnZs9mx+bNQer1w4N/Dl8djBsIRpAQUGKGEq2BRNruiOTwMFovxZ0MCyL7yXsAcdGcSwwLko8wSQ0dGgNH3o5rBQs58+C1D0PPBPjtEAVHxvOOP+ww/zd3ZDzvihWVx/M2Sfs73kH31VcHm3j1wpw5vL5qVZBag7Dk/8BnN8FglS+pFwgkhIMQ9UPV9F3Dl7YP3TyEEckBQtp9V0ceA4jrBjgrEgOMLy3JocMVmkf5ht7VkBZuDqr/MCy9HCaOh/d59lRxPK/PG1EYP562KVMYrDeetw5thx3GhJkzaevsdOiuOq/MnctLTz0VpFYR3ngIPjMPtjuSjB1SpNTUuovhK5BIOqrly5ckLcmhJldBJE8BROoxK1c6qWppCx0u0b57UqtWjHpN13wKnroM3tMRaDzvltWrOb5sPK+vG9V26KG0HXooA2vWDNdp8kH4QmcnE2bMoD3Dhyo2w5bnn+e5n/0sSC2g/zn49K3Q4OxiZ8QIKKGDie9aobSlhpHRmlJ+Qy9dKzUdFeQhgEgNDFJ0XGpJDB0+mvgUjmv5IFTQCPb5IP1QXAtzPzg8nneKS+1K1BrP6+NGth99NFQZz1szkBQKTLjmGjqOO86Dq7H0rl/P0z/4AaViqx883hTFV+BP/g4WEbYxb4SQ4SRmCNIQSHzoutZ0pSXR02gt01FI6gHExaFkaYFBWlgYreVCQ9q1hdL0qRsqBISo4Ss8VWULDI2DR94F1xcCjefdt3Mnx55xBpXG3oLbm9Bx4okUd+6kuHVr1a8pDyNdH/4w4047zaGL6vRv28ZTt9zCQH9/kHo98D+/CrU+XKRWCIgZVGIGE001QuhK1HQdRiQeqzIdRaQaQFw2xBK8SNbJouXreJVLLR/+tASZavqua8QOGnV3VF6EPSfAguOGx/N6f+Bh5/7xvEdMnVrz61zdpHHTpjG4bl1D43k73/teui64wFHl2gzt28fi2bPZneWzS5pgD/z4i/BNR3JSAkqI+jFCieRA4ltTQhjx4cd0quskF0JSCyCpBQ/JR5pia5RrSQlVoTVDBA5fuqGChpMjW4th61nwwlEws5l1rbJ1zRoOOfpoDplS/+RXZjOFAuMaGM/bcdJJdF95ZRUJt7ekVCqx5Ic/5M1XXnGqW423YOE34Qs7IcwnG8YPKL7rhg49EncdfGlK05IUjHzoSAgioX9x4Z1UAoikpjg1L6N1smhJDQoaQ4dLfO1uSJmo5bTuY/Dah2DbRLjMpW41Nq9axeRTT6WriQe9W73gwrhxdEydWnU8b9uRRzJhxgwK7c29bbQaTFY/8ACvPvtsS2ubZQhe/Xf4g2dhD+GDQDVihZOQoUTTA+KuG35JDbsrLR9+JOik6CU62gOIywbbhUaqwSO2xmgdaVrlepI1femmPFFrDL+ApZfBhK4A43lLI+N5zzyTcRMmNLW2lZtS6OqifcoUBlavPmg8b6G7m4mf+ARtEye2oFqnZoWA8vrixbzw8MPOa1WiCLufhE/PgbFP4g9TKwjEagZC+/BVS1vQyVsYkdAoS9JJ0Us0NAeQlEKDpMDgQkfakS+fWr7CgQ9N6eGoVo2QQaPuZ4U8OTye98wOONm3maGBAbauWcPx55wzPJ63hR2FZlaMjOcdXLt/Am17OxOvu472Y45pum4r7Hz5ZRbdfXeQWkBxOXz2u/B8Rh0pISVkba2BRKqmRC0X1yipaXel49KLBI0oaAwgUhr+1HZfXOikvtuR150T7Q+5N1qz4dr7oLQKfnkhXNweYDzvW3v20LthA8edffbbOwYtHm1qZNXo8bzdl19Ox7RpLdVqlr1btvDkbbcxNDAQpN5m+Po34IEgxeKGkxA1fdTQEnJ8XbNELQsiaWoER1sAydqsSwseqXiR4qNcx3UD7lLLZZPt83NTXIcBCce1nNTsgcEizDsDriuEHs9bjocw0nHiiYw75RQ6TjqpJe1mGezrY9Gtt7K3tzdIvV6480vwPcKHgUrECCcxQomkhtqXptTrlaIjxcdoHQlepGgEQ0sAcdWsu/DhQsOCh2yd0VqSA5FUf9W0fYWNaMe1VsOeY+GJE2BmQcJ43gyTqCqtLDT53EmrlIaGeO4HP2Dbxo1B6vXDo1+Fm/ZVfqOuFQZivMGH9OC7jq/mXGJ4GK0nSUuKjhQfrr2kouEdDQEklV0PKRoudCSNGB6t5UpHmpZrvZBjdl0T47hWtboFoPBr6DkdXjgGZoTws3XNGg6dPJlJxx5b+wszjsUNdWMBVtx3HxuWLw9SawBWz4LPrYUsn2woIaDECiVSHxSXHEZ8aEnxZEEkXQ2vSA4gqe16SNGQEjyyIjHA+NJyGfZ8Bg7XqBnluwDWXQjbJsGlfi0Os3nVKo455ZTGx/M6+IwOXzd//YIFrHzsMU/qBzME2x6Gz/wCtnguFSuchKinIZBoCCNSAoQrT5KCiJT7IeVaRIYQqQHEdj1kaUjw4EsnVS0tE7WqafsMG16ObP0Snv8odHUHGs+7eWQ8b3d3c4sdfmBgVqWeFSv49Y9+5MRLPUow+Az84Wx4iXCBoBKhw4nvOiECicQwklqAcKUjIYhICTNSrkVkCJEWQFLZ9ZDSsFvw8K8jSUv6A+7VdH2FjeDPhjwJiy6FM8YFGs+7Zc0ajjv33OHxvK3g+NPLofEbvGfTJhbecQfFCh966IN18OW/h8cq/FWtQBA6pMQKJVKf83Ct6aPpl9L4S9NJJYhICQASrsMpkgJISsEhK7E1LHj413GlJf0Bd9+61fS9Bo0q9Qr7oLQCfnURXBRiPO/Anj3s2rCBd5x9NoW2jP9seAgjY0rs/79v9fay8Lbb6N+zx3tNgB74l7+AOzJIxAwoIer50veh6zqMSNwVSUnHRRCJ3by70EglyDhDSgBJIThIadqzaLhs0l1oSAoMknZOJD/gXknTdWcr+rjWNhjcC/POhGvbAo3nfau3l8lnnOH2RngKJMWBAX59xx3s3LzZi345ffDgTfDXQ+FDgs83et+1QgQSKWHEpSfT8aMRu75rDe0enCAhgLho/LOujx1eXGi4OG6VldgBypcXCX6kh46QgcMHTo9rrYW+o+Gpk+D6QojxvJs21R7P6woHoWTZnDm8sXq1AzP1eQue/zv4wlYYxH8oqETIYKItkEjUc92wS2g2XevE1JDSfEt4XWOvz0zMACKh8U8hOGT1ICU0SAwerry4CB4ukB5iyjV9BY4gOyjPwdZTYdmxcL2vGqPZumYNhx57bP3xvK5pIpS8MncuaxYu9GjmbYbgjR/DHy6GnWV/VS0U+A4IjXjwGRpc6ksMD5X0UtkVSc2Li9dHwjVICDKx70PLxAogUhr/rOtjB6isGlLuQarBI+t6KSHIp54vzUra3sJGtVpPwvoLYNsh8FGPdQ+weeXK5sbz+qQsmGxZupQlP/95qOr9C+AP/g1ea3F9rHDiu1bewogLrdSaf0leYr8u2u+Bi/WuNJomRgCR0vTGXO/KQ6v3QcI9dKmRWvBwgZadE19BxmfYaOq41lx44SPD43nP9+TnAJnG83pk17p1LLzrLkrFYohyxRXwZ9+BxZ70QwaTULsYEsPDaD0JWqk1/yM6sTUk7If85L0AAB27SURBVIZIuAexvx+Ch5DQASSVxj/r+pjNvxT/qWi40JF05MuHlg+9ck0fYcPZcyFPwOLLhsfzTnPoryJDAwNsWbuW4845p/XxvA7Zt307T992GwP9WT54vHE2wz99HX5CmB2L0YQKJiECibQw4kPLgog8jTwfyUohCDVFyAASu/GX4CHmNcQOPqlqSAoernSkhg61k7XeguIymPeh4fG83h/ScDqeNwPFt97imdmz2b1tW5B6vXDfl+Afy/64WjAIFVB819S0kyGlcXehk9IuhBSNLPc0hRCRwjU0TKgAorlxl7S+1aZIyv2TsGMhQUNq8HCB9BBTSdfH7smYOjtgcBfMfy9cHWw8765dTH73uykE+IyPckrA0jvvZMtrrwWp1w8LvwE37YFmP9kwRjgJFUikhYfRelJ2RSQEkdQ0Yk/K0t7Ax/YQJISECCCxG3cJHmKulxIcsiLlOmIHD1cNuR3XcktDx7Vegb4j4KmpcF0h0Hje9nHjOHLqVN+lxvDS/ffz2pIlQWoNwrofwA3LYbdj6VDBxJe+5DAibVfEgsjBGpo9SLh+CyF18B1AYjfuEjxoDx9ZkRIcspL1dYgdflzr+NLyoed796Qp/SXQMx2WTYHrPHgbw9Y1azhk8mQOCTied9Mzz7D8l78MUqsIu++HP3wQ3iDeDobPXQyJ4cG1niQdF0EkdvPpQiN2iMi6XrN3KR68hhDfASTrm2vsxlPzegneJbx+MRt/l6HBhYa03Q4NOyfluk60n4L1vwU7DoMPu9Crx+ZVqzhm+nTG7x/P6zP17Fi7lmfuucdjhYMYfBa+MBuWVfn7ajsYWkJDJW1p4WG0noQA4Uoni0bs+qM18twEa/Y+gvb1VfEZQCQ0wHldr9n7yPrY4SWrhpTQIG3nREPo8LV7cpDuI7DsEuiaAOc5rFGRUrHI5hUrqo7ndXWRe998k6dnz2ZocNCRYm3Wwbf+BzycQcJnKNGim+pOxoiO5ucRXGhICDKxw2Bs73leXxVfAURCA5vX9Zq9u1jvykPMXQ8pGhJ1Rmv50HMdsmrqzoNFl8PpIcfzHt/AeN5WbsJQXx8Lb7uNvb29rRlskm3ww6/Av3iQ9rVb4juQ2E6GTA0JAcCFRuz1WTRie8/7+or4CCCxG9A8r9fs3dX6mDsn2sOTBh2JIablADMEpeeHx/Ne2BFoPG9vi+N5a11YaWiIZ++4g+2bNmUz2CC74dGvwl8NvG3NdVNfCemBRKJWikEk5nGg2I1k7PVkWB/be97Xj8FHAMn6hp5lvYQGONZ6zd4lrM+iIWXHQtqxLyk65VoufWX2thMGt8O8c+DaNpiYVa8eo8fzknE878jqFffdx8YVK7Kba4ABWP09+NMNsK+KJR+7F5XIQ4AYrRW7eR7Ria2RdTdEgv+8rtfsXcJ60QEkdhMZM/xkXW/hI+76Vl+7VHY9pGi41HGp5fUB93XQPwmePhmuKYQaz9vRwRHvfOfbf9hiGNmwYAGrHn/ckbPaDMGOe+GzT0FPk0tDBBOX2i79pRZEJOwEZNGQ4D/P62N7j/1QeOyfmwO4DCASmkjN62M1wLY+bm0pux5SNKSEhSAPoo/+i+eh552w7Di41nHNimxdu5ZDjj2WSZMnV/+iOqFk24sv8uxPfuLYWWVK8NbjcMOPYI1D2VCBJEuzJClAjOikoBE7CMRuhPO8XnMTr339AVwGEK27B5rXa/WdwvrY3l15kLDrIWnnxOXuy2i9hoLMQthwPuw4HC5x6KEqm1eu5JhTTqFr/3jehtgfSvZs3MjiO++kONTsB4+3xkvw374NT6LrWFUl3axhREIQkaQhIchYCNG1XqtvV+tj78IA7gJI7GYsr0evLLTFWS/Be+ydE0nNflYdUc+azINlF8P4iQLG81ZjoLeXRbNn079nj0d3b7MZZv0V3F32x9qOVZVrWhB5WyMFDxZC4qzXet/zvAsDuAsgWht4CetbvfY8h7as67WHj6yk4GFEw0XwcOXD2c7JfPj1b8PpnTDVlWY1hgYG2Pryyxx39tl1x/MCFAcG+PUdd9D75pu+rQGwEx7+C/i7ocbf8HyGEklHolI6UqU9RGRdH9t77N+I21Gs8Otjv+ZOAkjsZkZrI5tlfex7rn19rNAnYb3tnMjZeamkVQAKQ1BaCvMvhgtCjOd9a/fuhsfzLpszh81rXD6GUZ19sOxb8KXtMJBRSuJOhiudVHYyXGhoXp/nZjivR7Hy/Jo7CSB5DAAjxLr2PN9zC31x1qfgwWX48b5z0guDPTDvXLimLdR43t27mXz66VW/5tVf/Yq1ixb5tgLAILx5K9ywHHbh/nkPHzsZsUOAhBAhxYPG9Vp9u1ofqxnPcwiIugsSO4BoDQCQ30Y4j/cc9Pp2tV7zzomEXZdynYa01kP/BFg4Ha4uhBzPO3XqmL/bsmQJS++/37cFAErQ/zB87iHYsP+P8nKsyoVG7KZGgget62P7zmMzbvc8Tu3MASTPzaztfoRfH+vatfqWsl77wICox7VegJ7j4YXj4dqCuyNfVdm6di2HTJ7MpGPfPvm167XXWHTPPZSKRd/lKUFxCXxlFjxX50tTPlY1omEhpHVin3G338g3j93zsLWzrs/kPWsA0dwMa/Vu9yzs+tihy9a3vi52cHLlg8Xw+nmw4wi42IGnumxetYqj94/n3bd9Owtnz2agvz9EaTbAd78J/7eFpdJ2MkZ0Yu2GxG4mibw+9vVrfd00v2axAnse71nm9TEDSJ6b4Tz+Jl6rd833LK/rYz9rMrLe6c7JfFh+EYyfBOc60K3JyHjeY6ZP5zf33sue7dt9lwRgO9z3ZfiOAylJQSRmkIntXft6+4182NpZ12fxbvcscO2YvyHU2tzErJ3Ha3axXuP9jr1eq3cp4cOLh3HA9+C7k+AjDmrUpdDWFuTYFcBeWPw1+GIPDI76Y1fFXehI0Gh1fay6LtZr9p5lfV7vmcb7HXu9ytpZdkC0/kYb9HrP4zVDPO+arzmvr3fsY1ded06KwBJ49GL4YAdMzlirPiXXw6cqMwAb/hk+/zLsLfsrV8eqpOxkxFqf59/Qar32PF4zxPOu9Wc7du2WXy8Xv6kzmiOP99yuOV/EunYJ4cH7+g3QfwvcOAhhPgnQM0XY/WP44m+gt86XtqHkNRK8PlZdzf8eavbeKpqvOebueSxUeldpGr2+s5DHazbikMfvtdgNVlPrF8K2h+GLRdidsW5USjD4NHz5AVjXxDJVr5WH9drqGoZhjMH+QTJSJ4/f45qv2X571SD/BqsXwn8puXtOIjhr4R//FRa3sFRrCHCBZu+tovma7d80w6hAlmdAYp4Rj/25BjG85/GaY9bW/AxFHr9X8njNPAMbzw04ntclm+Ge/wa3ZJBQee7ZQe0s6zV6drFeq/c8XnPM2ho9u1gfpbYFkPDrrcHSUdvud5z19no1yXxYcSF0TYJzsuiEZBc8/jX46wGFb5r7ybrrZA1W2PVavefxmmPW1ujZxfootW2bzDAqo/ZYS07R/Hpl9v6X8N1d8KgDL97ZB2u+DX/VF/c10/z9Yugij99rebxmo0ksgBipk8d/CDVfcyzvqu/ZABS/BX+5D5bFNlOLIdhxF9y4OvvD86pfr0jr83zPNJLHazZyhNYAovkH09488oHma9bsPRaxP8SKjdA3a3g87xtZtXxQgv75cOOj2fwViX+v7eejeTTfM83e80geXy+V16w1gBhG6qj8B2U/Wn/DK2F9Jo1Fw+N5b5Q4nncFfPOO1ndoXAUPCa9xjPWxfcdEs/dY5PGe5fGao5LlIfQSeh+U1eo9j9cM8bzn+Z7FXh/rNYu9fkSjZZ1l0PMOWHYiXIWQXzJtglnfgHubWFLk7fvg4uPYXTQXsZv4LOs1P7Cv9YF/iPea5fWeZamdx2t2sb5l71kCCOhsUFysj+U9j9fsYn0W75qbWc2TobJce+z7nilAuNB5BjaeAzsljOfdCQ9/Ff6hzruU68BRrulCJ6tGrPUWAOKtb9V7nu+5xglYWq8ZInqPGUCyrtfcnLXqPY/X7Gq97YLka72EEOE6iDSlNR+WXwTjJ8G5Geu3zD5Y9rfw5R0wyNiQ4TpwjOAiMLjSiR1eYjfgsddrbezyGLpcrI91RNFG8LaA5gCSdb3WxlJrQ0jGtVnX53UXJM/rXTX/UY9UVdFqSG8+LPptOK0Tpjmo3RSD8ObN8LkV0Iv7kDEaH8e1Ujj2FbsRzft62/0Ivz6Px6/Ufr9kDSCxmxOtDW2W2nm+Z7HWa/Wd0vosr53qnYwG9SpqFoEl8NjF8MEOmOygZqPG+h6CP/4FbPAgL/m41mitWBqxd11svd5hAWqbWfTuOGnePcl07VkDCOhuaLV6j90M5vE1i33dKayPvRsi4RrKtVzplWse+F8vDG2BeefDx9tgkqNatUwUl8JfzIJnM0pVO7LlCpehY7ReTI3Yuy62Xu+wgKzrY99323EKvz7TtbsIIFobSojflOVxFyTr+pivWezjPNrXu/IgJYhIDiMH6W+AvRNg0XS4ugCdHmocYAN8+5vwszpfVut5ENdBo1pdaXpZj1vFDj8jGprXQ7yGMva157URz20AyLg+88+aiwACupsirc205nuudb2LBlFCAx97F8DlcaaYQWS0TrBjVa3yAvQcDy+cAFfjaTzvNvjxV+A7xAkXldByXCtL0xo7/LjyEbuZi+kh9rVrX2+7H+HXZ/53x1UAyWsIiLleq2/t61No4FPYyXClI30no1oD35L+Yth4Huw4HC5x5O8Ae2HxN+BrfTDkWrsB8nZcS9qkLxc+8uoh9rXndb1W3yNoDj+AuwACuhsqrQEq9nXndb2UBj52AJCi4UJHzU5GFf2G68yD5R+CrokOx/MOwrrvwR+/DH2uNKvgO2hUqyVFT1rwkKKh1UPsJjb2kbW8Pm8T+3WLHX4AtwEkdkOV112U2EeCYq+PGUJif89L8OBSQ4pOiJ0MH896VKpT8X/zYdFl8G4X43mL0Hsf/NFj8GY2mYa8+6JSfde6LnSyIuXIlhSNmB4keI8d/mKFgNj3Pmb4ybreye4HuA0gkN8QEHO9Vt+u1sf2kMr1S9DwoSMxjJTr+g4lYxiC0vMw/0PD43mPbVWnBIPPwH++E5bRYPip8r+Q+AoblfQl6IzWkqAjSSOWh9gNsAQPdvRK53pn/166DiCxm7G8rtfqe/R6CR5ihhDTqKwjSct3YAgaSnbC4DaYfzZ8pB2OaHZ9CfqWwJ9/B5704c8RvsNGpRqutLIiLcCkphFjrYv1EjxY+Mjn+oNwHUBAdyNJxrUu1uc1hEjwEDOESNOQtHPgshn3FWx8hYV6OweZaq6DvWvg/50D7xwP0xtdNwQbHobPzYLfZKnvgHpHt0LUdKnnAte7HRIa/hEd7RqxG8DY4Sv2+qzXrnl97NdtDL5+u5Z1xKOt11nbxfoUPMSu71JDoo5rLW2arVDXx9/AjBPhjzrhlGpfU4S+nXD/HPjeE7DNrcXyUiLw4UO6pistSTqxNWLXT8WD9vCX5/Vj8HnmOHYTmef1sb2bB1lNuyQvLnV86fnSDKGdmT+D90+Di7rguE44YQh29MOmXlh1Lzy4HHbH9ugJn6FHeuhwqSdJR4IXCY1f3j3Evv68r6+I74ceYzeheV4f23sqHrJqxK4vWce1lg+9UNoha+SZEDsrmoKM7Zz404hd35WGdg+xrz/v66sSYupK7CZU+/osGhKaXwkeXGjEXu9Kw6WOZC2fmiH1Y9fTRoyjW5oCh2tNiVraG2bz4EYjhevXvr4mocY+xm7etK/PoiGh8ZXgQYqGBA8+tLTsZORlF0OCB5dIeCZE8+6J7ZyE0ZDgQYqGhY98r69LsLnzxG/cYq+P7SGF609JQ1rjLzHU+Nb0qRu7ltE6IcOOpt2TVEOHCx0JDW9KGtqPvuV9fUOEDCAQv2mLvT62B+3+pWm40JHiQ4OWT82Q+tLq5o1Yuym+69pxrfA6UnxI0YjtQbv/FNY3TOgAAvEbNgnNa95DSGoaLnSk+PCl5UPPt27oGo0gxYdUJBzVAjuu5UtPSsMvxYdpuKsf238K65siRgCB+M2ahMY1tofY9VPUcKEjNUBo2smwY1UHo8FjJaSEiVqkcFzLdk7CrXepYxoy6qfiIfi/t7ECCMho1PLuQYJ/VxqudFL0IlnLp2ZI/dj1DL+EfnPO+3Etl3oSmkOXOql5sfAR30OUX/bEDCBgAUCKRuz6LjVc6aToxbWWNs0YNSTWNsYSc7dF63Et6ZoSGkOJOiloxK7vSiMVDy0RO4CAjAbNPKTZcEvy4kpLmp8QmiG0Y9RpBEleNCLtGJfWsOFTO9XQ4VJLynVJuB4J12EeHCAhgICMxkyCBwkaseubTngd11ohdH1rS6iXBU1eG0FakKhFSse1tDx3IqkZMx0/GrHrS9KQ4CEzUgLICBYizEOedFxpadrJSO1Zj9h1jTjEevPW+GyIL11pTZikRl+aTgoNtwQPLjSiB48RpAUQkNGQSfAgRUOCB6k6ErU0hRHf2iFr1EOCB6NxJLxJ23EtP5oSd19S1ZHQLKeiIcGDUyQGEJDTiJmGLA9SdVxrudSzQCKjVqNI9JQSot6A95PCKF9f2hJ3KKRqSdJJpdk2DY9IDSAjpNI0S9FwoZPStWjQcqlnx6pk18yCNr9ZEfdmWocYfu24lmlp05HgITUNsf9WSg8gIKfhTUnDhY6ka3GpJTU8+NDTGkhC1ZBY25CLjfKNryv1eJVrPYn3zIJHmhre0BBARpDS8Kak4UJHig/XOq61pOulsoshJRxI8WG4QcobeSgfmnZPpIYEH3qSGnUXOlJ8mEYENAUQkNO4S2qWpXiR4kODVh71QuvHrtcoUn3lBalv1CmN8vWhnyc9iVopBQ9XOilpBEFbABlBSuMuRUOSjhQfvrQ06PnQTHkHQ2MI0OjZJ2redEeR6ihfHzWkP+AuXU9Koy7Fh0udlDSCojWAgKxGV4qGJB2pAUJ6Y67puYyUQ4mk+oZOYjcEmo9raXjeRLqeJC1JgcGVjhQNlzpB0RxARkit+ZfkxZWO1AChITxoCiQ+dWPXqockL4Z/JL3hpzDGV5Ou5NDhUi/FBju1a5L071DTpBBARpDUKKfmxZWWJC/a9HxpateWUK9ZpPvLK9LfzFN6LkSbttSQ4ENPUmMsSSdFL1FJKYCMkFrzL7FpT/W6tOj51g2hb2N0m0er79BofXNOdYyvtgfcfelK1pPWFKfY7EvyIoIUA8gIkppk0/GroUnPl6ZP3VD6oWrUQ4KH2Pi4B0m9ebaAhOvX+AB6KH3bOYmnYTrhdMSQcgABWY12yjqutKSHB23BIaXAIC0USPNjxEVac6D5AfRQNbToStRLdbcjZR1xpB5ARpDWsEvTkailITxoDA4pBgbpYUC6P6My0t/4U3j4PHQdDbscPjRTDR0utVLVEUteAsgI0hp/aU2/Sx2XWnkOI761Q+iHrhO7pis0e5eE5jfyGN5TCRs+a+QldLjUkaqVqo548hZARpDWGEts+qVqaQkPmgNJqBox68WuKwEp156bN9wKxLr2FIONxgfpLXTo15Kmo4a8BpDRSGuMpen40JN6jb40fer61o5RJ3bNSkjxYehASjORYtAIUUdL4HCpKTUMudRK3ZMqLIC8jbSmWGLD71rLpZ624GDHqnTXroVUX0Y2pDYKqY7vDVlHW5iR2vxKbPBdaknTUY0FkLFIbIjzoOVaT9PuiG/tkDVi1KqGBA/NotGzNrS9+Uvwm9oD73kNHK61XOulriXhZ1kMFkCqI7EZluhJg57GXYyUdzAkNdmSvPhE23Xm5Y1a0nXacS1Z2hIbaA16EsOCpJ9zMVgAaYzUA4Tk8OBDU2MgCaEfuo6Uuo0i3Z8hA+nNRuoPvms9riW94c1D6JCslRwWQJpDahMsVcuHng9NrYEkVI0YtSTWbxZtfo3KaGsiYvu141pxdC10pKeVNBZAWkNqw6+hMZeumcIuRl5G6JYjxYdLUrym0KTWEEi5ntA+NIcNH/p5DUZS76GUn0s1WADJjtTm18KITL3Q+qHrSKlbDWl+tFHv/tmbcDak3T87riVLX8Muhw9NqUFB2s+rKiyAuENy4yvZm09NX7qphJLQtSTVbgTp/gwdSG9S8jDGN0QtDY28T928hA4fernEAogfJDf8WhpyCyTha8SsJ61+K2j0bDSPxuYjtmc7rhVP05euBk3JISb3WADxj+TwoKkZN904NSTUrIYkL65I8ZokkWITIemaUh3lqykYaNO10JFTLICERXIYybumb+08HKuS2DxL9CSNWPfI3tzrI/Eepf5ciM9a2j6PJI+aEn/mksQCSDwsjMjX9a2fp2NVGoKABo+GfjQ0OHl5LsRnPY3PnPjS1aCp4ecyKSyAxEdDo6+tAdcaSHxrS6pZjgQPraDVt+EGrU2LBN+pHdeywOFXV0OIMZrAAog8NIQHjcFBcygJoS+lZi2k+XFBitekiRQbEGnXlFrQ0K6vJXBo0jRawAKIbPIcRjRrh6phR6rGItWXBLTcG2sQqiP13qR8ZEvzQ+4atTXsnBgOsACiBy3hQXNoSCGUhKpRDwke6qHBo5E+GhokCR61B4FQdbRpa9E0HGMBRCeagoMFElm1pDTdUnw0i1bfRhi0Nj5SfKcw6Sp0HW2Bw5eulO9ho0EsgOhHW3DQHEhC1Ui9VqNI9JSVFK8pJVJsYiReU4pBI1QtCxz+dY0AWABJD027I761Q+iHqhGzXqyajSDVV2xSuy/WaFRG6n1J8cHzGPVs98S/phEJCyBpY7sY4fVj1YpRL3bdVtDk1cgnWpqsPHwgYeh6FjjC6RqRsQCSLzQGkhT0Y9WSUFdK/Sxo9m7ERXPzlPJkKwl1NYcNn/qaf2aMJrAAkm8skMStEbOelNqjkeLDNaleV+qk3AhJuLY8BRw7rhVe1xCOBRBjNHa0Sk6dWPUqIcHDaKT5iU1e74c1LmORdk9i+0kxaISqY4HD8IoFEKMWmgNJqBoh68SuWQ1JXsqR7M0w6iG5WZPkLfWH3rXubvjWNhRjAcRoBu2BJGSd0LUk1K2GND/10ObX0IG2Rkya3zw8FxKqngUOIzoWQIws2LEqHfWk1K6HZG/NkMp1GAeTSmMl+TrsuRB9dSR/PxmCsQBiuMSOVemrWY4ED/XQ4NEXeb72RshzM6Th2iV4TPm4lvbdEyNHWAAxfJNSKAldS0LdcqT4aAaNng1DY6MnyXPKQSNULUmvp5EYFkCM0KS6g5H3YDIaiZ5aJaVrMcKTUgMn8VrycmQrpR0UwwAsgBgySDWUxKopqX4tJHtzTZ6uNQXy1IhJvtbY3lLeRYl9b42cYwHEkErqx6qkNKRSfNRDi09JpHLPrFFqHi33TIrPlING6FqG0RAWQAxNpB5KJNQuR5KXZtDq2zAqobWBlOTbjmsZhiAsgBjaycuzHlLqV0Kip1ZJ6VoMeaTUHEq8ltieUh3laxjOsQBipEoej1XFrl8P6f5ckqdrzQN5avSkX2tsf6kf1zKMIFgAMfJE3idVSfHRCJq8xiav98qassbRdK+keM3LJ68bRhQsgBiGPe8xGml+GkWrb8NoBa1NqjTfeXkuxDDEYQHEMKoTu6mNXb8aUn21QkrXYugjpSZU6rXE9hW7vmGIxAKIYbSGhMZVgodaSPfnkjxdq5GvplL6tUrwJ8GDYajCAohhuEVSIyrJSz00eY2J3afaWCPYGJrukySvkrwYhmosgBhGOCQ2jxI9NYJW34bhA62NsUTfEj0ZRnJYADEMOUhtqqX6apXUrsdIg9QaX6nXI9WXYeQKCyCGoQMNTbMGjy7J2/Ua1clTU6vhWjV4NIxcYwHEMNJBU0OsyWtM7D5lwxrRxtB0nzR5NQyjChZADCM/aG9mtfs3jBBob9C1+zcMowEsgBiGUU5qjX5q12Pkg9Qa8dSuxzCMDFgAMQyjVfLW2Ofteo3WyFujnbfrNQzDARZADMMIgTXv9bF7FAZrmOtj98gwDK9YADEMQyrWkBtGdixMGIYhDgsghmGkiIUXIzUsSBiGkQwWQAzDMCpjIcZwgQUHwzCMMiyAGIZhxMECjgwsIBiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRhGGf8fmDxmdD7ah70AAAAASUVORK5CYII=";

//Picture of arow "Down" for variation is negative
var sampleImgReeg = "data:image/png;base64,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AABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAEV1ewAACe5JREFUAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlCRqAAAAACWJGgAAAEBJogYAAABQkqgBAAAAlPR/0Uz7nAJ7mJoAAAAASUVORK5CYII=";

}


/*!
 * I us Liquid Fill Gauge v1.1 and I update this to have an Update Mode of colors and parameters.
 *
 * @license Open source under BSD 2-clause (http://choosealicense.com/licenses/bsd-2-clause/)
 * Copyright (c) 2015, Curtis Bratton
 * All rights reserved.
 *
 * Liquid Fill Gauge v1.1
 */
 function liquidFillGaugeDefaultSettings(){
    return {
        minValue: 0, // The gauge minimum value.
        maxValue: 100, // The gauge maximum value.
        circleThickness: 0.05, // The outer circle thickness as a percentage of it's radius.
        circleFillGap: 0.05, // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
        circleColor: "#178BCA", // The color of the outer circle.
        waveHeight: 0.05, // The wave height as a percentage of the radius of the wave circle.
        waveCount: 1, // The number of full waves per width of the wave circle.
        waveRiseTime: 1000, // The amount of time in milliseconds for the wave to rise from 0 to it's final height.
        waveAnimateTime: 1800, // The amount of time in milliseconds for a full wave to enter the wave circle.
        waveRise: true, // Control if the wave should rise from 0 to it's full height, or start at it's full height.
        waveHeightScaling: true, // Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill.
        waveAnimate: true, // Controls if the wave scrolls or is static.
        waveColor: "#178BCA", // The color of the fill wave.
        waveOffset: 0, // The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave.
        textVertPosition: .5, // The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top.
        textSize: 1, // The relative height of the text to display in the wave circle. this value is / by 10 
        valueCountUp: true, // If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed.
        displayPercent: true, // If true, a % symbol is displayed after the value.
        displayPercentforevo: true, // If true, a % symbol is displayed after the value of evoution.
        textColor: "#045681", // The color of the value text when the wave does not overlap it.
        waveTextColor: "#A4DBf8", // The color of the value text when the wave overlaps it.
		width: 150,//the width of Gauge.
	    height: 150//the height of Gauge.
    };
}

function loadLiquidFillGauge(elementId, value,config) {
    if(config == null) config = liquidFillGaugeDefaultSettings();

    var gauge = d3.select("#" + elementId);
    var radius = Math.min(parseInt(gauge.style("width")), parseInt(gauge.style("height")))/2;
    var locationX = parseInt(gauge.style("width"))/2 - radius;
    var locationY = parseInt(gauge.style("height"))/2 - radius;
    var fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value))/config.maxValue;

    var waveHeightScale;
    if(config.waveHeightScaling){
        waveHeightScale = d3.scale.linear()
        .range([0,config.waveHeight,0])
        .domain([0,50,100]);
    } else {
        waveHeightScale = d3.scale.linear()
        .range([config.waveHeight,config.waveHeight])
        .domain([0,100]);
    }

    var textPixels = (config.textSize*radius/2);
    var textFinalValue = parseFloat(value).toFixed(2);
    var textStartValue = config.valueCountUp?config.minValue:textFinalValue;
    var percentText = config.displayPercent?"%":"";
    var circleThickness = config.circleThickness * radius;
    var circleFillGap = config.circleFillGap * radius;
    var fillCircleMargin = circleThickness + circleFillGap;
    var fillCircleRadius = radius - fillCircleMargin;
    var waveHeight = fillCircleRadius*waveHeightScale(fillPercent*100);

    var waveLength = fillCircleRadius*2/config.waveCount;
    var waveClipCount = 1+config.waveCount;
    var waveClipWidth = waveLength*waveClipCount;

    // Rounding functions so that the correct number of decimal places is always displayed as the value counts up.
    var textRounder = function(value){ return Math.round(value); };
    if(parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))){
        textRounder = function(value){ return parseFloat(value).toFixed(1); };
    }
    if(parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))){
        textRounder = function(value){ return parseFloat(value).toFixed(2); };
    }

    // Data for building the clip wave area.
    var data = [];
    for(var i = 0; i <= 40*waveClipCount; i++){
        data.push({x: i/(40*waveClipCount), y: (i/(40))});
    }

    // Scales for drawing the outer circle.
    var gaugeCircleX = d3.scale.linear().range([0,2*Math.PI]).domain([0,1]);
    var gaugeCircleY = d3.scale.linear().range([0,radius]).domain([0,radius]);

    // Scales for controlling the size of the clipping path.
    var waveScaleX = d3.scale.linear().range([0,waveClipWidth]).domain([0,1]);
    var waveScaleY = d3.scale.linear().range([0,waveHeight]).domain([0,1]);

    // Scales for controlling the position of the clipping path.
    var waveRiseScale = d3.scale.linear()
        // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
        // such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
        // circle at 100%.
        .range([(fillCircleMargin+fillCircleRadius*2+waveHeight),(fillCircleMargin-waveHeight)])
        .domain([0,1]);
        var waveAnimateScale = d3.scale.linear()
        .range([0, waveClipWidth-fillCircleRadius*2]) // Push the clip area one full wave then snap back.
        .domain([0,1]);

    // Scale for controlling the position of the text within the gauge.
    var textRiseScaleY = d3.scale.linear()
    .range([fillCircleMargin+fillCircleRadius*2,(fillCircleMargin+textPixels*0.7)])
    .domain([0,1]);

    // Center the gauge within the parent SVG.
    var gaugeGroup = gauge.append("g")
    .attr('transform','translate('+locationX+','+locationY+')');

    // Draw the outer circle.
    var gaugeCircleArc = d3.svg.arc()
    .startAngle(gaugeCircleX(0))
    .endAngle(gaugeCircleX(1))
    .outerRadius(gaugeCircleY(radius))
    .innerRadius(gaugeCircleY(radius-circleThickness));
    var gaugeGrouppath =  gaugeGroup.append("path")
    .attr("d", gaugeCircleArc)
    .style("fill", config.circleColor)
    .attr('transform','translate('+radius+','+radius+')');

    // Text where the wave does not overlap.
    var text1 = gaugeGroup.append("text")
    .text(textRounder(textStartValue) + percentText)
    .attr("class", "liquidFillGaugeText")
    .attr("text-anchor", "middle")
    .attr("font-size", textPixels + "px")
    .style("fill", config.textColor)
    .attr('transform','translate('+radius+','+textRiseScaleY(config.textVertPosition)+')');

    // The clipping wave area.
    var clipArea = d3.svg.area()
    .x(function(d) { return waveScaleX(d.x); } )
    .y0(function(d) { return waveScaleY(Math.sin(Math.PI*2*config.waveOffset*-1 + Math.PI*2*(1-config.waveCount) + d.y*2*Math.PI));} )
    .y1(function(d) { return (fillCircleRadius*2 + waveHeight); } );
    var waveGroup = gaugeGroup.append("defs")
    .append("clipPath")
    .attr("id", "clipWave" + elementId);
    var wave = waveGroup.append("path")
    .datum(data)
    .attr("d", clipArea)
    .attr("T", 0);

    // The inner circle with the clipping wave attached.
    var fillCircleGroup = gaugeGroup.append("g")
    .attr("clip-path", "url(#clipWave" + elementId + ")");
    var fillCircleGroupcircle = fillCircleGroup.append("circle")
    .attr("cx", radius)
    .attr("cy", radius)
    .attr("r", fillCircleRadius)
    .style("fill", config.waveColor);

    // Text where the wave does overlap.
    var text2 = fillCircleGroup.append("text")
    .text(textRounder(textStartValue) + percentText)
    .attr("class", "liquidFillGaugeText")
    .attr("text-anchor", "middle")
    .attr("font-size", textPixels + "px")
    .style("fill", config.waveTextColor)
    .attr('transform','translate('+radius+','+textRiseScaleY(config.textVertPosition)+')');

    // Make the value count up.
    if(config.valueCountUp){
        var textTween = function(){
            var i = d3.interpolate(this.textContent, textFinalValue);
            return function(t) { this.textContent = textRounder(i(t)) + percentText; }
        };
        text1.transition()
        .duration(config.waveRiseTime)
        .tween("text", textTween);
        text2.transition()
        .duration(config.waveRiseTime)
        .tween("text", textTween);
    }

    // Make the wave rise. wave and waveGroup are separate so that horizontal and vertical movement can be controlled independently.
    var waveGroupXPosition = fillCircleMargin+fillCircleRadius*2-waveClipWidth;
    if(config.waveRise){
        waveGroup.attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(0)+')')
        .transition()
        .duration(config.waveRiseTime)
        .attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(fillPercent)+')')
            .each("start", function(){ wave.attr('transform','translate(1,0)'); }); // This transform is necessary to get the clip wave positioned correctly when waveRise=true and waveAnimate=false. The wave will not position correctly without this, but it's not clear why this is actually necessary.
        } else {
            waveGroup.attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(fillPercent)+')');
        }

        if(config.waveAnimate) animateWave();

        function animateWave() {
            wave.attr('transform','translate('+waveAnimateScale(wave.attr('T'))+',0)');
            wave.transition()
            .duration(config.waveAnimateTime * (1-wave.attr('T')))
            .ease('linear')
            .attr('transform','translate('+waveAnimateScale(1)+',0)')
            .attr('T', 1)
            .each('end', function(){
                wave.attr('T', 0);
                animateWave(config.waveAnimateTime);
            });
        }


        //Update Value and aspect
        function GaugeUpdater(){
            this.update = function(value,conf,width,height){

                config = conf;

                radius = Math.min(parseInt(width), parseInt(height))/2;
                locationX = parseInt(width)/2 - radius;
                locationY = parseInt(height)/2 - radius;
                fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value))/config.maxValue;

                if(config.waveHeightScaling){
                    waveHeightScale = d3.scale.linear()
                    .range([0,config.waveHeight,0])
                    .domain([0,50,100]);
                } else {
                    waveHeightScale = d3.scale.linear()
                    .range([config.waveHeight,config.waveHeight])
                    .domain([0,100]);
                }

                textPixels = (config.textSize*radius/2);
                textFinalValue = parseFloat(value).toFixed(2);
                textStartValue = config.valueCountUp?config.minValue:textFinalValue;
                percentText = config.displayPercent?"%":"";
                circleThickness = config.circleThickness * radius;
                circleFillGap = config.circleFillGap * radius;
                fillCircleMargin = circleThickness + circleFillGap;
                fillCircleRadius = radius - fillCircleMargin;
                waveHeight = fillCircleRadius*waveHeightScale(fillPercent*100);
                waveLength = fillCircleRadius*2/config.waveCount;
                waveClipCount = 1+config.waveCount;
                waveClipWidth = waveLength*waveClipCount;

    // Rounding functions so that the correct number of decimal places is always displayed as the value counts up.
    textRounder = function(value){ return Math.round(value); };
    if(parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))){
        textRounder = function(value){ return parseFloat(value).toFixed(1); };
    }
    if(parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))){
        textRounder = function(value){ return parseFloat(value).toFixed(2); };
    }

    // Data for building the clip wave area.
    data = [];
    for(var i = 0; i <= 40*waveClipCount; i++){
        data.push({x: i/(40*waveClipCount), y: (i/(40))});
    }

    // Scales for drawing the outer circle.
    gaugeCircleX = d3.scale.linear().range([0,2*Math.PI]).domain([0,1]);
    gaugeCircleY = d3.scale.linear().range([0,radius]).domain([0,radius]);

    // Scales for controlling the size of the clipping path.
    waveScaleX = d3.scale.linear().range([0,waveClipWidth]).domain([0,1]);
    waveScaleY = d3.scale.linear().range([0,waveHeight]).domain([0,1]);

    // Scales for controlling the position of the clipping path.
    waveRiseScale = d3.scale.linear()
        // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
        // such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
        // circle at 100%.
        .range([(fillCircleMargin+fillCircleRadius*2+waveHeight),(fillCircleMargin-waveHeight)])
        .domain([0,1]);
        waveAnimateScale = d3.scale.linear()
        .range([0, waveClipWidth-fillCircleRadius*2]) // Push the clip area one full wave then snap back.
        .domain([0,1]);

    // Scale for controlling the position of the text within the gauge.
    textRiseScaleY = d3.scale.linear()
    .range([fillCircleMargin+fillCircleRadius*2,(fillCircleMargin+textPixels*0.7)])
    .domain([0,1]);

    // Center the gauge within the parent SVG.
    gaugeGroup.attr('transform','translate('+locationX+','+locationY+')');

    // Draw the outer circle.
    gaugeCircleArc = d3.svg.arc()
    .startAngle(gaugeCircleX(0))
    .endAngle(gaugeCircleX(1))
    .outerRadius(gaugeCircleY(radius))
    .innerRadius(gaugeCircleY(radius-circleThickness));
    gaugeGrouppath.attr("d", gaugeCircleArc)
    .style("fill", config.circleColor)
    .attr('transform','translate('+radius+','+radius+')');

    // Text where the wave does not overlap.
    text1.text(textRounder(textStartValue) + percentText)
    .attr("class", "liquidFillGaugeText")
    .attr("text-anchor", "middle")
    .attr("font-size", textPixels + "px")
    .style("fill", config.textColor)
    .attr('transform','translate('+radius+','+textRiseScaleY(config.textVertPosition)+')');

    // The clipping wave area.
    clipArea = d3.svg.area()
    .x(function(d) { return waveScaleX(d.x); } )
    .y0(function(d) { return waveScaleY(Math.sin(Math.PI*2*config.waveOffset*-1 + Math.PI*2*(1-config.waveCount) + d.y*2*Math.PI));} )
    .y1(function(d) { return (fillCircleRadius*2 + waveHeight); } );

    fillCircleGroupcircle.attr("cx", radius)
    .attr("cy", radius)
    .attr("r", fillCircleRadius)
    .style("fill", config.waveColor);

    // Text where the wave does overlap.
    text2.text(textRounder(textStartValue) + percentText)
    .attr("class", "liquidFillGaugeText")
    .attr("text-anchor", "middle")
    .attr("font-size", textPixels + "px")
    .style("fill", config.waveTextColor)
    .attr('transform','translate('+radius+','+textRiseScaleY(config.textVertPosition)+')');

    // Make the value count up.
    if(config.valueCountUp){
        var textTween = function(){
            var i = d3.interpolate(this.textContent, textFinalValue);
            return function(t) { this.textContent = textRounder(i(t)) + percentText; }
        };
        
        text1.transition()
        .duration(config.waveRiseTime)
        .tween("text", textTween);
        text2.transition()
        .duration(config.waveRiseTime)
        .tween("text", textTween);
    }
    
    wave.datum(data)
    .attr("d", clipArea)
    .attr("T", 0);

    // Make the wave rise. wave and waveGroup are separate so that horizontal and vertical movement can be controlled independently.
    waveGroupXPosition = fillCircleMargin+fillCircleRadius*2-waveClipWidth;
    if(config.waveRise){
        waveGroup.attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(0)+')')
        .transition()
        .duration(config.waveRiseTime)
        .attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(fillPercent)+')')
            .each("start", function(){ wave.attr('transform','translate(1,0)'); }); // This transform is necessary to get the clip wave positioned correctly when waveRise=true and waveAnimate=false. The wave will not position correctly without this, but it's not clear why this is actually necessary.
        } else {
            waveGroup.attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(fillPercent)+')');
        }



        var newFinalValue = parseFloat(value).toFixed(2);
        var textRounderUpdater = function(value){ return Math.round(value); };
        if(parseFloat(newFinalValue) != parseFloat(textRounderUpdater(newFinalValue))){
            textRounderUpdater = function(value){ return parseFloat(value).toFixed(1); };
        }
        if(parseFloat(newFinalValue) != parseFloat(textRounderUpdater(newFinalValue))){
            textRounderUpdater = function(value){ return parseFloat(value).toFixed(2); };
        }

        var textTween = function(){
            var i = d3.interpolate(this.textContent, parseFloat(value).toFixed(2));
            return function(t) { this.textContent = textRounderUpdater(i(t)) + percentText; }
        };

        text1.transition()
        .duration(config.waveRiseTime)
        .tween("text", textTween);
        text2.transition()
        .duration(config.waveRiseTime)
        .tween("text", textTween);

        var fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value))/config.maxValue;
        var waveHeight = fillCircleRadius*waveHeightScale(fillPercent*100);
        var waveRiseScale = d3.scale.linear()
                // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
                // such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
                // circle at 100%.
                .range([(fillCircleMargin+fillCircleRadius*2+waveHeight),(fillCircleMargin-waveHeight)])
                .domain([0,1]);
                var newHeight = waveRiseScale(fillPercent);
                var waveScaleX = d3.scale.linear().range([0,waveClipWidth]).domain([0,1]);
                var waveScaleY = d3.scale.linear().range([0,waveHeight]).domain([0,1]);
                var newClipArea;
                if(config.waveHeightScaling){
                    newClipArea = d3.svg.area()
                    .x(function(d) { return waveScaleX(d.x); } )
                    .y0(function(d) { return waveScaleY(Math.sin(Math.PI*2*config.waveOffset*-1 + Math.PI*2*(1-config.waveCount) + d.y*2*Math.PI));} )
                    .y1(function(d) { return (fillCircleRadius*2 + waveHeight); } );
                } else {
                    newClipArea = clipArea;
                }

                var newWavePosition = config.waveAnimate?waveAnimateScale(1):0;
                wave.transition()
                .duration(0)
                .transition()
                .duration(config.waveAnimate?(config.waveAnimateTime * (1-wave.attr('T'))):(config.waveRiseTime))
                .ease('linear')
                .attr('d', newClipArea)
                .attr('transform','translate('+newWavePosition+',0)')
                .attr('T','1')
                .each("end", function(){
                    if(config.waveAnimate){
                        wave.attr('transform','translate('+waveAnimateScale(0)+',0)');
                        animateWave(config.waveAnimateTime);
                    }
                });
                waveGroup.transition()
                .duration(config.waveRiseTime)
                .attr('transform','translate('+waveGroupXPosition+','+newHeight+')')
            }
        }

        return new GaugeUpdater();
    }
