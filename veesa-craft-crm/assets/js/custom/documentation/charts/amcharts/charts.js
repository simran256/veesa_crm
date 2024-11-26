"use strict";var KTGeneralAmCharts=function(){const e=getComputedStyle(document.documentElement).getPropertyValue("--bs-body-color"),a=getComputedStyle(document.documentElement).getPropertyValue("--bs-body-bg");var t=function(){am5.ready((function(){var a=am5.Root.new("kt_amcharts_4");const t=am5.Theme.new(a);t.rule("Label").set("fontSize",10),t.rule("Grid").set("strokeOpacity",.06),a.setThemes([am5themes_Animated.new(a),t]);var r={EUROPE:[["Albania",3.89,3.61,1.61,1.61,1.11,3.36,3.36,-.36,-2.26,-2.32,-2.36,-2.41,-2.55,-2.05,-1.49,-1.91,-2.52,-2.03,-1.05,-1.23,-1.23,-1.23,-1.23,-1.23,-1.23,-1.23,-1.23,-1.59,-1.59,-1.59,-1.59,-1.59,-1.59,-1.59,1.11,.96,.96,.96,.96,.96,1.48,-1.71,-1.14,-.57,-.84],["Austria",6.9,-.33,.18,.36,-.05,.42,-.55,-.13,-.84,-.14,.38,.72,-.47,-.27,.03,-.17,.57,.94,.88,-.02,1.49,.82,2.08,.75,-.26,.95,1.03,1.05,1.85,-.87,.43,.26,-.62,-.83,-.08,-.1,.62,.58,-.39,.53,.22,.27,.86,.89,.75],["Belgium",10.32,-.07,.23,.15,.73,.11,-.5,-.88,-.64,-.29,.67,.49,-.27,-.82,-.62,-.82,.49,1.08,.99,-.15,.56,-.07,.91,.98,-.92,.65,.38,.94,1.72,1.53,1.93,2.29,1.94,2.53,1.74,2.07,1.78,1.76,1.18,2.93,2.29,.92,2.63,-5.37,-4.61],["Bulgaria",12.03,.06,-.12,.48,-.58,.07,-.65,.41,-.46,.29,.45,.06,.28,.24,-2.82,.31,.23,.78,1.49,-3.23,-.55,-4.72,-.57,-1.77,-1.77,-1.77,-3.13,.55,.57,1.21,-.43,-2.21,-1.56,-1.45,-1.08,-.05,-1.34,.13,-.81,-.93,-1.67,-.77,-1.06,-.51,.14],["Croatia",13.8,-.07,.21,.34,-.54,.45,-.87,.22,-.82,.03,.52,.52,-.39,-.12,.06,.03,.48,.48,.87,-.12,1.07,.61,1.73,.32,-3.32,-3.18,-3.32,-.28,.84,-.39,.58,.68,-.33,-.62,.41,1.01,.77,.89,-.13,.79,1.12,.51,1.13,-.22,-2.08],["Czech Republic",8.12,-.46,.11,.36,-.32,.44,.01,-.42,-1.58,-.24,.96,1.1,-.68,-.81,-.2,-1.09,.97,1.34,1.34,-.18,1.17,.26,1.47,.54,-1.14,.41,.86,1.32,2.06,.52,1.41,1.68,1.46,.61,2.04,1.96,1.84,1.95,.62,1.54,1.77,1.11,2.63,-3.79,2.48],["Denmark",7.89,.48,.31,.68,.06,-.47,-.04,-.97,-.21,-.19,.36,-.01,.31,-.82,-.49,-.97,.36,.92,1.38,.5,.96,-.43,.19,-.13,-.83,.61,-.09,.31,.78,.62,1.59,.41,.83,1.39,1.49,1.18,1.27,.83,-.84,1.14,.46,.56,1.95,1.49,1.33],["Estonia",3.85,-1.07,1.77,.14,-3.82,-2.64,1.71,1.66,1.31,2.01,2.64,3.27,2.67,.26,1.68,2.24,2.5,3.49,.74,-2.3,2.78,-1.96,2.73,3.14,1.64,2.57,2.41,3.07,4.03,4.33,3.74,3.27,3.51,3.15,4.32,3.41,3.65,2.55,1.72,3.51,2.08,3.13,3.5,3.78,3.06],["Finland",2.29,.24,1.87,1.67,-1.16,-.27,-1.27,.02,-.67,-.96,.15,.45,.74,-2.04,-.4,-1.84,.22,2.05,1.31,.16,1.17,.14,-.02,.57,-.11,.37,-.22,.62,1.77,.19,.32,.55,.69,1.33,1.06,1.38,1.57,.74,-.31,2.03,.14,1.84,2.01,2.43,1.63],["France",11.96,-.44,-.22,-.02,.04,-.32,.05,-.43,-.79,-.09,.92,.28,-.27,-.29,-.24,.16,.58,.79,1.21,.4,.68,.03,1.33,.78,-.22,.92,.44,.91,.82,.63,.64,1.56,.38,.48,1.17,.72,.31,.92,.02,1.44,.69,-.01,1.33,1.06,.64],["Greece",16.38,-.06,-.19,-.03,-.38,.69,.01,.41,-.06,.18,-.24,-.32,.03,.45,.14,-.07,1.72,-.04,.62,-.38,-.06,.57,1.21,.53,.75,.17,1.53,1.49,1.03,1.88,.92,.86,.53,.48,1.13,1.56,1.53,2.76,2.05,.91,1.99,-4.31,3.41,2.5,.07],["Hungary",10.73,.01,.32,.55,-.36,-.43,-.86,.25,-1.2,.32,.52,.89,-.26,-.36,.34,.14,.34,.79,.76,-.26,1.31,.31,1.73,1.5,1.12,1.47,1.29,1.73,2.57,1.35,2.63,1.49,1.01,-.04,1.92,2.99,2.51,2.41,1.79,2.25,2.69,2.59,2.66,2.69,2.43],["Iceland",3.93,-.29,.96,.24,.52,.05,.22,-1.3,-.35,.62,-.27,-.37,.47,.49,.18,1.26,.01,.06,.43,1.22,.44,.31,.13,-.16,.83,.83,.32,.32,.53,1.03,1.23,2.01,1.59,.83,1.07,1.82,1.18,1.54,2.03,.9,1.8,1.17,2.31,.82,2.37],["Ireland",10.13,-.13,-.49,.06,-.1,.45,.28,-.82,-.16,.03,.24,.32,.27,-.4,-1.04,-.16,.23,.73,.71,.41,.37,.57,.34,1.02,.06,.84,.67,.58,.36,.28,.46,.93,.64,.52,.84,1.23,.43,.45,-.33,.55,.26,.29,.82,.04,.65],["Italy",13.05,.19,-.27,.19,-.63,.19,-.1,-.08,-.39,-.14,.53,.55,.17,.29,.28,1.19,1.04,.51,1.39,.62,-.33,.42,1.34,.24,-2.41,.47,.25,-1.22,2.13,2.22,1.87,1.93,1.14,-.64,1.51,1.66,1.96,2.14,1.63,2.24,2.47,1.83,2.09,2.22,2.3],["Latvia",5.22,-1.89,.41,.26,-1.89,-2.57,1.78,.89,.67,1.73,2.54,2.74,3.53,-.72,1.12,-.42,2.13,1.76,1.71,.07,1.68,1.4,-3.59,.41,.88,3.05,1.93,2.74,3.23,3.45,3.16,3.53,2.41,2.28,3.13,2.99,-.27,1.96,1.44,2.77,1.44,2.67,2.71,3.09,2.32],["Lithuania",6.53,.39,.7,1.74,-1.34,-.22,-.91,-.73,-1.28,.09,.37,1.19,.42,-1.31,-.23,-1.74,.45,1.82,1.75,.92,1.25,.07,1.15,1.16,-.61,.82,.63,1.49,1.95,1.51,2.23,.89,.61,.68,1.37,1.86,2,.88,1.11,1.78,.89,-1.37,1.08,3.27,2.36],["Luxembourg",8.61,.14,.27,.44,.68,.09,-.87,-.77,-.89,-.17,.51,.57,-.26,-1.06,-.55,-.86,.58,1.17,1.3,.44,1.08,.46,1.69,1.19,-.52,1.17,.75,1.39,1.58,1.09,1.49,1.89,.84,1.24,1.76,2.02,1.23,1.48,.2,2.17,1.19,.57,2.36,1.88,-.59],["Macedonia",9.52,3.13,-1.49,3.38,-1.99,2.12,.52,1.01,.41,0,-2.85,-7.12,-7.12,-8.64,-3.89,-.35,3.15,1.01,1.82,4.11,1.92,1.94,3.92,-2.4,5.58,1.5,.99,5.07,3.43,3.22,2.09,1.69,2.42,-1.58,2.67,2.98,3.15,2.82,2.51,2.58,3.47,2.01,2.9,3.17,3.64],["Malta",18.86,.04,.05,.11,-.7,.58,-.13,.15,-.9,-.22,.83,.18,-.67,.53,1.02,1.82,1.27,.3,1.04,.53,.62,1.27,1.52,1.01,.41,.61,1.37,1.37,.83,1.24,.29,1.56,.41,.86,1.38,1.16,1.48,1.17,1.52,.36,1.61,.84,.78,1.06,1.07],["Montenegro",11.64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7.87,3.81,5.06,3.64,3.76,3.07,.81,-.96,2.31,-.12,6.41,4.34,5.31,5.88,6.6,5.88,6.04,5.98,6.42,5.89,7.04,6.56,6.37,6.68,-1.12,9.91],["Netherlands",9.49,-.24,.06,-.03,.31,.02,-.27,-.98,-.44,-.09,.79,.87,-.02,-.46,-.65,-.49,1.02,1.43,1.17,.01,.89,.18,1.29,1.11,-.88,.8,.89,1.81,1.36,1.25,1.42,1.27,.99,1.58,2.42,1.82,1.2,1.21,-.16,1.42,.84,.52,2.31,1.43,1.34],["Norway",3.73,.82,1.53,.01,.16,-.23,-.53,-.72,-.7,.04,.33,-.67,.96,-1.09,-.43,-.71,-.01,.98,1.48,.76,.86,.09,.13,.08,-.22,-.16,.56,1.16,1.47,.69,1.38,.77,1.38,1.19,1.42,1.17,1.11,1.01,-.53,1.8,.59,1.09,2.02,1.65,1.53],["Poland",8.64,.89,.77,1.59,-.71,-.42,-.37,-.89,-1.73,.14,-.06,.49,-.18,-.63,.34,-1.34,.82,1.9,1.4,.42,-.89,.21,1.07,.76,-1.04,.33,.42,1.22,1.52,.42,1.67,.82,.41,.73,.93,1.74,1.54,.46,-1.14,.64,.22,-.07,1.16,.87,1.39],["Russia",.51,.51,-.63,1.69,-1.09,-.62,-.16,-.33,-.8,.69,.06,.7,-.47,-.67,-.14,-.92,.5,.53,1.01,.45,.26,.13,-.03,1.58,-.29,.5,.02,.17,.01,.48,.74,.81,.46,.77,-.14,1.57,1.27,.27,.33,.89,1.51,-2.22,-2.98,2.25,.13],["Serbia",11.68,-.24,.31,.48,-.64,.54,-.72,.39,-1.03,.09,.29,.52,-.28,-.59,-.06,-.11,.34,.57,1.07,-.49,.95,.31,1.76,.52,-.26,-.18,.67,.88,2.08,.97,1.7,.88,.63,-.07,.84,1.97,2.05,1.59,2.09,1.91,2.24,2.45,2.39,2.69,2.16],["Slovakia",9.7,-.11,.61,.93,.04,-.31,-1.03,-.02,-1.34,-.14,.61,.76,-.22,-.78,-.34,-.64,-.08,.73,.82,-.45,.98,.04,1.67,.68,-.57,.01,.82,.93,1.73,.61,1.36,.72,.4,.13,.92,1.71,1.83,1.39,.81,1.43,1.71,1.62,3.01,2.31,2.74],["Spain",17.29,-1.64,-1.48,-.84,-.82,.54,.69,.78,.34,.78,.43,.18,-.78,.17,-.61,.02,-.27,1.15,.42,-.21,-.16,-1.08,.55,.64,-.39,1.33,.22,.07,.11,.46,.38,1.07,.64,1.36,1.51,-.62,-.89,.75,.57,.73,.34,.38,1.37,.64,1.74],["Sweden",5.67,.84,1.23,1.9,-.27,.33,-.72,-1.16,-1.03,-.88,.01,.36,.41,-1.97,-.76,-1.9,.09,1.21,1.43,.27,1.01,-.27,.06,-1.02,-.46,1.06,.29,1.09,1.73,.59,1.48,.82,.86,1.22,1.43,1.2,.38,.13,-1.55,.85,.11,.42,1.59,1.42,-.29],["Switzerland",9.73,-.3,.37,.16,.27,.45,-.75,-.15,-.68,-.25,.46,.43,-.44,-.74,-.46,-.5,.55,.73,1.02,.01,.64,.26,1.59,.44,-.64,.67,.73,.85,1.63,.74,1.33,1.41,.54,.39,.96,1.24,.76,1.08,-.13,1.65,.86,.21,1.81,1.7,.34],["Ukraine",9.15,-.48,-.05,1.22,-1.58,-.08,.13,.24,-1.24,.78,.19,.9,-.18,-1.37,-.15,-1.77,-.3,1.33,1.12,.24,.55,-.83,.64,.54,-.48,-.33,.51,1.61,.91,.51,1.9,-.04,.48,-.94,.47,1.08,4.14,2.33,2.07,.89,1.51,2.09,1.56,2.09,2.31]],AFRICA:[["Algeria",16.99,.55,.09,.44,-4.27,.58,.28,.93,.58,-.5,2.37,-1.47,1.45,1.74,1.34,2.07,.91,.61,1.84,.71,.54,.36,2.18,2.28,1.93,4.09,1.03,1.77,1.32,2.72,1.51,2.68,1.43,1.82,2.62,1.64,1.72,3.03,1.88,2.16,2.45,-.54,3.03,1.52,3.32],["Angola",23.86,1.64,.58,-.54,.37,.96,.56,.56,.56,-1.61,-1.94,-1.94,-1.94,-2.46,-2.46,-2.46,-2.46,-2.46,-2.46,-2.46,-2.46,-2.46,-2.46,-2.46,-2.46,-2.46,-2.46,-2.46,-2.46,.86,1.81,.79,.18,.64,1.38,1.98,.65,.65,.09,3.67,5.14,5.14,2.62,1.91,2.57],["Botswana",21.64,.33,-1.11,-.36,-.7,-.1,-.26,.24,-.92,-.77,.58,.88,.68,.33,-1.9,1.8,1.41,.3,2.82,.84,.3,.98,1.19,2.32,1.36,1.64,1.68,2.41,.34,1.46,2.44,1.63,.87,2.18,.41,.84,.64,.58,1.6,.89,.87,.83,.24,1.09,2.2],["Cameroon",24.36,.16,-.32,-.6,-.31,.01,.09,.22,.18,.27,-.07,.36,.03,.18,.33,.76,.43,.11,.96,1.1,-.1,.38,.14,.46,.32,.98,1.14,.5,.42,.33,1.02,.57,1.56,1.14,-1.78,.84,.47,.71,3.01,-.46,.62,.93,.3,.55,.96],["Chad",27.71,1.17,.16,.16,.36,.18,.12,-2.14,-2.14,-2.14,-2.14,-2.14,-2.14,-2.14,-2.14,-.52,.86,-.09,1.26,1.18,-.27,.74,1.43,.42,.04,.97,-.09,-1.44,.37,.95,1.15,1.21,1.41,.42,1.9,1.14,.13,1.52,1.98,1.16,.87,1.77,1.53,.86,1.33],["Congo",25.22,.17,-.28,-.45,-.31,.13,.07,.21,.12,.14,-.31,.5,.54,.11,.24,.66,.63,.51,-.1,.26,-.64,-.14,.56,.81,.32,1.27,1.34,.74,.16,.49,1.54,1.67,.73,1.14,.57,.95,.96,1.13,1.28,.91,1.2,.89,.79,1.12,1.37],["Egypt",22.71,-.54,-.06,-.88,.35,-.27,2.35,.56,-.34,.74,-.34,-.55,-.19,1.07,-1.12,-.37,-.2,-.16,-.59,-.19,-.85,-.44,.79,-.03,.46,-.87,.68,1.25,-1.59,.1,.23,.72,.71,-.01,.91,.68,.93,.79,2.17,.14,.57,-.01,1.56,1.43,1.1],["Ethiopia",19.63,.43,-.53,-.37,-.21,-.04,-.12,-.07,.41,-.18,.28,.42,-.16,-.72,.11,.59,.45,-1.68,.52,.86,.96,1.11,-.24,.79,.31,.8,.73,.86,1.22,.17,4.5,4.5,4.5,-5.07,.97,-1.89,-2.05,1.61,1.18,2.43,1.51,1.88,1.49,1.84,1.54],["Ghana",26.71,-.01,-1.01,-.19,-.91,.42,.07,.22,1.24,.74,-2.58,-2.58,-2.58,-2.58,.01,1.98,-.77,-.39,.21,.54,.48,.11,.94,1.69,-.23,.44,1.02,.97,.15,2.47,1.91,.78,1.11,.8,1.92,1.58,.65,.87,1.23,.7,.88,1.52,.19,.84,1.36],["Kenya",23.06,-2.26,-.79,-.14,.35,.21,.08,.27,.46,.28,.5,.48,.23,.14,.27,.77,.74,.13,.31,.39,.44,.06,.43,.47,.36,.63,1.03,.38,.67,.54,.87,.83,.92,.98,.99,.91,.83,1.23,1.19,1.18,.93,.94,1.07,1.44,1.24],["Libya",21.54,-.77,.08,1.01,-.04,-.41,.47,1.54,-.86,.23,.2,-1.32,-.53,.28,-1.55,-.13,.63,.08,.32,-.83,-.55,.52,-.47,.26,1.73,.42,.98,.55,-.17,.49,-1.42,.04,2.46,1.01,.23,.75,.72,.57,1.13,-7.21,3.03,1.2,-1.33,1.39,-.68],["Madagascar",24.01,.71,-.82,-.57,.35,.91,-.26,-.07,-.72,.14,-.01,.51,-.28,.37,.04,.6,.46,.12,.51,.04,-.72,-.28,.37,.7,.26,.66,.87,.59,.62,.53,.75,.81,.97,.48,.88,.73,.33,.07,1.13,1.34,.73,.78,.76,.69,.68],["Mali",28.39,-.03,-.84,-.41,-.39,.07,.01,.14,1.04,.33,-.34,.22,.78,-.44,-.98,.7,-.48,.5,.83,1.09,.19,.55,-.06,.56,.36,.91,1.13,.83,.37,.82,1.89,.88,1.33,1.09,.76,1.44,.48,.73,1.58,1.43,.86,.37,.56,1.22,1.26],["Mauritania",27.57,-.18,-1.05,-.61,-1.07,.14,-.21,.44,0,.72,.07,1.24,.17,.32,-.48,1.36,.54,.31,.58,-.08,.56,.26,-.91,.17,.84,-.02,1.15,-1.02,.4,.44,.48,.86,.78,.22,1.12,-1.03,1.56,1.13,2.14,1.52,.51,1.93,.71,1.43,1.63],["Morocco",17.58,-.47,-.62,-.29,-.57,-.4,-.08,.72,.55,.29,.22,.64,.21,.58,.55,1.36,.45,.62,.89,-.09,.11,-.12,.63,1.44,.93,1.54,1.39,.87,1.17,1.57,1.21,1.47,1.36,1.41,1.99,1.03,1.02,2.15,2.06,1.76,1.55,1.08,1.42,1.35,1.97],["Mozambique",23.62,.02,-.46,-.59,.22,.17,.22,.22,.07,-.29,-.17,.64,.25,0,-.08,.38,.16,.56,.31,.46,.86,.41,-.3,.95,.63,-.31,.49,-.23,1.36,.33,.49,.92,.94,1.18,.65,1.53,.97,.79,1.86,3.11,.17,-.58,.23,1.09,1.44],["Namibia",20.84,-.18,-1.9,-.91,-1.88,-.71,-1.07,-.24,.61,-.33,1.13,.71,1.62,.12,-.29,.68,.63,-.36,.41,-1.41,.67,.4,.44,.28,.43,.24,1.04,.64,.56,.01,1.26,1.96,1.12,1.05,-.09,-.25,1.42,.59,1.02,-.66,.66,1.24,.87,2.64,1.88],["Niger",28.41,.65,-.49,-.29,0,-.57,.04,.36,-.38,-.07,.53,.19,-.16,.28,.37,.46,-.12,-.73,.78,-.48,-.09,.5,-.7,.21,.33,-.44,1.65,-1.01,-.82,.14,.97,.48,.77,1.44,1.45,.61,.17,1.22,1.31,1.02,.66,1.23,.94,.71,1.27],["Nigeria",26.35,0,-.73,-.05,1.29,.65,-1.35,-.55,.22,.15,.15,.15,.15,.15,2.4,2.4,2.4,2.4,2.4,2.4,2.4,2.4,2.4,2.4,2.4,2.4,1.52,.73,1.87,.66,.19,.51,.37,1.01,-.05,1.91,.23,1.36,1.59,1.55,.74,1.38,1.72,1.46,1.53],["South Africa",17.03,-.29,-.54,.45,-.05,.03,-.53,-.21,.31,-.73,-.19,.74,.79,1.51,.36,.96,.35,.44,2.13,-.26,1.02,1.31,.47,1.36,.42,.02,.5,1.83,.71,.31,1.28,1.45,1.57,1.11,1.08,.51,.58,.86,1.29,.56,1.16,1.59,.97,1.63,1.73],["Tanzania",24.09,-.58,-.93,.12,.28,.41,-.58,-.18,.26,.21,.56,.19,-.41,-.59,-.18,.25,.34,.16,-.52,.19,-.39,-.39,1.93,1.99,2.96,1.89,1.93,2.42,-.16,-.79,.53,1.06,.57,1.11,1.01,.79,.12,.72,1.02,.57,.62,.44,.38,.43,.51],["Tunisia",18.81,.07,-.68,-.31,-.92,.28,-.22,.15,-.46,.21,1.46,.41,-.21,.51,.76,1.13,1.01,.34,1.02,-.38,0,.53,1.86,1.1,.74,1.48,1.14,2.43,1.64,2.48,1.56,2.47,.9,2.38,2.1,1.86,2.04,2.08,1.82,1.6,2.61,1.71,2.36,2.29,2.36],["Zambia",21.76,3.24,-3.41,1.78,-.2,-.06,-3.73,1.24,-1.18,-1.47,1.4,2.4,.78,.65,-.65,1.28,.35,-.7,.44,-.51,-.28,-3.03,.08,.25,1.94,-2.09,4.19,1.19,-1.39,2.88,1.77,.54,-.14,3.77,-1.06,1.69,.24,.72,2.36,3.51,.63,1.03,1.08,1.81,4.54],["Zimbabwe",19.03,.15,-.56,-.41,-.39,.21,-.18,.06,-.16,-.31,.27,1.32,.43,-.03,.14,1.04,.21,.07,.68,.45,.91,-.18,.3,.87,.12,-.25,.61,-.42,-.36,.39,.77,.48,.37,1.07,.32,.42,.94,.47,.61,1.61,.34,.2,.56,.7,1.42]],AMERICA:[["Argentina",17.19,-1.68,-.6,-.49,.73,-.41,1.13,-.53,-.19,-.29,2.62,-.62,-1.66,-1.17,-.91,-.73,-.47,-.09,-.35,-.64,-.86,-.61,-.07,-.58,-.39,-.38,.16,-.42,-.87,.25,-.21,-.17,.33,-.01,.19,-.3,-.05,.65,.06,.22,.66,.29,.31,.27,-.53],["Belize",26.31,-.53,-.4,-1.28,.14,-.47,-.68,.87,.77,.36,.42,.79,-.91,.84,.56,.09,.58,.11,.38,.38,.34,.21,.61,-1.36,.67,1.13,1.12,-.09,.11,.58,.94,.92,.5,1.14,.84,.98,.68,.78,.75,.68,.47,.95,.66,1.19,1.23],["Bolivia",21.84,-2.32,-1.07,-1.07,2.28,-.61,-.92,-.14,-.33,.57,1.18,-.22,.23,-.44,.34,1.07,.34,.12,.38,.59,-.09,.57,1.07,1.14,.43,.42,-.82,-.23,.39,.92,1.49,1.04,.86,1.04,1.27,.69,.81,1.79,.84,.53,2.75,2.11,1.52,1.68,2.01],["Brazil",25.75,.43,-1.64,-.21,.72,.73,.14,-1.11,.01,-.41,1.15,.39,.25,.32,.75,.36,.23,.35,.55,.37,.59,.57,.58,.99,.53,.29,.46,.64,.68,.73,.37,.23,-1.12,.39,-.63,.44,-.03,-.18,.34,.26,.16,.68,-1.71,-2.25,-.23],["Canada",3.37,.29,-.05,-.65,.04,.34,-.82,-.21,-.02,1.24,-.92,.62,.31,-.33,.53,1.84,1.11,.46,.9,1.21,-1.33,.51,.06,.03,-.78,.31,1.57,.73,-.14,.72,-.45,.08,-.28,.54,1.04,.12,-.32,-.44,1.03,.04,.63,-.19,-.31,.67,1.03],["Chile",13.37,-.54,-.44,-.69,-.35,.34,.05,.03,.25,.26,.32,1.14,.56,1.92,.5,1,.74,.94,.98,.66,1.19,.61,.67,.29,.42,1.16,1.33,.04,-.37,1.08,.61,1.05,1.53,2.13,2.56,1.22,2.06,2.06,1.2,1.04,1.56,1.28,1,1.74,1.76],["Colombia",25.89,1.04,-.03,-.28,.24,-.21,-.36,-.21,-.1,-.25,-.35,.51,-.73,-.62,-.81,-.47,-.56,-2.44,-.48,-.48,-.32,-.31,-.43,-.36,-.51,.08,.26,-1.09,-1.03,-.31,-.26,-.03,-.45,.01,-.58,-.48,-.66,-3.99,.06,-.17,.12,.27,.42,.83,.62],["Costa Rica",24.8,1.47,.89,.9,-.58,-.42,-.34,-.36,-.12,-.33,.05,.49,.22,.3,.32,1.06,.5,.24,.61,.83,.6,.6,.67,.72,.41,1.18,1.19,.17,.59,.98,1.02,1.07,.72,.55,.73,.86,.63,1.16,1.12,.46,.79,1.07,1.21,1.51,1.16],["Cuba",26.64,-.24,-.6,-.09,-.64,-.15,-.45,.06,.28,.23,.38,1.22,.84,.93,.91,1.6,1.46,1.12,1.52,1.54,1.16,.77,1.41,.83,.06,.37,.42,-.55,-.65,-.02,.12,.44,-.29,-.22,.02,0,-.28,.12,.07,-.27,-.12,-.73,.67,1.81,1.19],["Greenland",-5.08,-1.37,-2.73,-3.02,1.58,1.73,1.53,2.04,2.67,.01,.05,-1.31,-.49,1.59,.69,.12,1.03,-.87,.25,.48,.34,0,.62,1.76,2.58,2.03,1.88,.06,1.74,1.63,1.44,2.53,1.86,2.32,1.66,1.71,1.52,1.59,2.81,1.11,.68,.88,1.44,1.14,2.75],["Jamaica",26.98,.33,-.43,-.37,-.11,.34,.04,-.25,.12,-.02,-.08,.42,-.17,-.21,-.06,.55,.44,.24,.43,.49,.64,.75,.85,.94,.62,1.11,1.19,.59,.57,.86,.97,1.02,.93,1.04,.94,.91,.21,1.16,.84,.31,.97,1.14,1.31,1.41,1.32],["Mexico",21.24,-.5,1.04,.06,-1.08,-.12,.12,-.27,.08,.27,-.02,.03,-.63,-.54,-.48,-.49,-.14,.78,.71,.8,.58,.75,1.27,.88,1.04,.29,1.94,-1.11,1.34,1.16,1.17,1.67,1.24,1.29,1.76,1.39,1.08,1.79,1.17,1.95,1.63,1.6,1.64,1.96,2.07],["Paraguay",22.78,1.06,-.46,-2.44,.09,1.63,-1.56,-1.71,-1.65,3.02,1.26,.24,-1.73,2.62,3.78,-.06,1.05,.57,.31,1.39,-.05,1.49,1.8,1.77,.87,2.48,.23,.5,.9,1.33,2.05,1.98,.79,1.88,2.24,1.49,1.16,1.46,.94,2.02,2.04,1.34,2.11,1.68,.82],["Peru",20.42,-.07,-.42,-.68,.01,-.09,-.12,.06,.16,-.52,.07,1.72,.09,-.17,.18,.73,-.11,.22,.21,.78,2.39,.96,.96,.88,.34,1.9,1.99,.08,.43,.25,.63,.16,1.17,.32,.88,-.21,.19,.43,.48,-.02,.42,.49,1.06,1.32,1.43],["Uruguay",18,-.42,-.45,-2.36,-2.33,3.59,-1.29,-.57,-.39,.41,1.18,-.13,4.28,-1.37,1.24,-.15,-.38,.67,.29,.54,.36,.31,.56,.39,.16,1.86,-.26,-.22,0,.49,.48,.06,.64,.88,1.11,-.77,1.11,1.46,.19,.09,1.2,.59,.59,.6,-.76]],ASIA:[["Armenia",9.14,-2.47,-5.54,2.91,-9.13,-3.98,1.3,1.79,4.56,2.72,-.64,-6.61,-2.99,-.93,-1.88,-1.64,-2.48,.19,-.03,.23,-5.73,-5.01,-3.64,-3.24,-3.11,-3.73,-3.69,-4.82,-7.09,-6.27,-6.48,-3.68,-.06,-7.24,-1.48,-1.65,-3.22,-3.04,-.34,-3.41,-1.92,-2.47,-4.29,.52,.26],["Bangladesh",24.84,0,0,0,0,-.34,2.28,.68,-.08,-1.43,-.16,.02,.08,.75,.44,.3,.23,.57,.71,.72,1.05,.69,.39,.72,-.07,-4.22,2.03,2.57,.93,3.94,1.04,4.21,2.68,.63,1.08,2.64,1.63,-.26,2.41,2.42,3.28,-4.2,1.99,1.44,1.65],["Burma",25.69,-.13,.29,-.57,-.67,.08,-.53,-.38,.47,-.58,.03,1.46,.12,.46,2.83,-.25,-1.51,-1.79,.1,.49,-.76,.63,1.2,.84,1.38,-.34,2.09,1.39,.89,1.02,1.14,.22,.67,1.26,1.56,.99,.73,1.33,1.45,.62,.64,.94,1.16,.9,.44],["China",9.47,.16,-.31,.38,-.59,-.11,.13,.04,-.24,.04,.34,.18,-.5,-.34,-.13,.29,.29,.42,.65,.42,.18,.17,.78,.59,.21,.67,1.46,1.07,.51,.88,1.11,.91,1.01,.73,1.34,1.47,.96,1.09,.88,.68,.52,.01,1.06,.81,-.18],["Georgia",12.99,-1.18,-3.01,.21,-.1,.41,.09,.84,1.76,-.25,.63,-.78,-5.57,.06,-3.45,1.1,-1.41,-4.07,0,1.69,1.23,-.86,5.93,-.06,3.27,-1.46,-3.82,.44,.44,2.17,2.08,.88,1.77,.89,.57,-1.65,-1.06,.08,1.46,-.01,.46,-.38,.72,-.58,-.94],["India",25.69,-.61,-.42,-.46,-.24,.16,.42,1.16,.36,.06,.14,-.48,.33,.37,-.54,.39,.64,-.32,-.61,.21,-.05,.23,.27,.27,.35,-.18,.87,.46,.27,.53,.75,.59,.59,-.07,1.03,.48,.47,.56,.86,.7,.94,.81,.86,-1.73,-.16],["Indonesia",26.99,0,0,0,-.58,-.58,-.58,.09,.08,-.07,-1.54,-.33,-.17,-.23,-.04,.36,.18,-.09,.01,.06,.08,-.01,-.07,-.04,-.04,-.03,.54,-.12,-.05,.07,.34,.4,.36,.48,.24,.27,.11,.44,.55,.21,.34,.66,.56,.58,.98],["Iran",18.84,.63,-1.68,.51,.62,-.42,2.31,-1.14,1.49,-2.98,-4.29,-3.54,-3.54,-3.43,-3.66,-2.66,-2.81,-7.02,2.66,.42,-5.14,-1.31,-3.86,-.69,-1.86,-3.81,-.93,-3.07,.84,.64,.53,-5.54,1.75,-.71,.84,.03,.79,-.36,.93,.11,.81,.42,.77,1.73,1.46],["Iraq",24.27,.66,-1.69,-1.54,-.46,-1.32,.49,1.84,2.03,2.03,2.03,2.03,2.03,2.03,2.03,2.03,-10.73,-.43,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,.4,-7.47,2.85,2.85,2.85,-13.1,1.82,2.41,2.29],["Israel",19.88,.09,-.09,-.17,-.19,-.01,.17,.72,.22,.14,-.43,-.46,-.12,.36,.03,.07,.11,-.02,.46,.63,-.05,1.22,1.53,1.05,1.52,.76,1.9,1.6,.72,1.45,1.38,1.32,1.11,1.01,.93,1.25,2.14,1.68,3.17,1.06,1.88,2.01,1.67,1.76,2.42],["Japan",13.93,.16,-.48,.1,-.41,.17,.36,.68,-.27,-.48,.11,.07,-.45,.18,-.39,.46,-.11,.71,4.79,3.9,2.53,1.51,1.77,.71,.47,1.06,1.86,1.51,1.3,-.01,1.23,.91,1.5,.63,1.39,1.51,1.34,1.4,2.04,1.19,1.19,1.37,1.22,1.67,1.97],["Kazakhstan",6.55,1.08,-2.06,1.07,-.53,.33,.97,.25,-1.56,.95,-.45,-.04,-2.54,-.24,.18,-.83,1.68,1.71,1.96,.79,.51,-1.71,-.03,1.37,-1.89,1.54,.41,1.81,.36,1.8,2.04,.49,2.14,2.62,2.18,2.08,2.01,1.14,1.97,.26,1.11,2.77,.63,2.2,2.41],["Korea, South",9.08,.27,-.55,.25,-.49,.42,.36,.7,-.72,-.44,.21,-.01,-1.59,-.49,-.76,-.15,-.27,.51,.32,-.03,.39,-.15,.59,-.21,-.48,.08,1.37,1.92,.78,.65,-.07,.07,.79,.53,.32,3.63,.76,.69,.42,-.04,-.27,.02,1.36,-.72,.59],["Kyrgyzstan",5.98,2.12,-3.32,-.95,-.74,.2,-.36,.72,.54,.48,.13,-.15,-.32,.49,-.29,-.99,.03,-.17,1.56,1.09,.26,.1,.88,.88,-.11,1.8,3.54,2.82,2.64,1.01,2.86,1.84,2.84,3.44,3.84,3.31,2.43,2.25,2.94,2.64,2.29,2.97,1.86,2.92,3.66],["Laos",25.89,.68,-1.89,.11,.11,7.11,7.11,-1.86,.95,.56,-.94,.96,1.01,1.01,1.01,1.01,1.01,1.01,1.01,1.01,1.01,2.93,2.93,.61,.61,.61,.61,.61,.61,.61,.61,1.54,1.18,.69,1.29,1,.29,.86,1.26,.28,1.56,1.27,1.23,1.59,1.76],["Lebanon",18.93,.52,-.37,-.26,-3.99,.69,1.78,1.37,-.04,-1.32,-2.48,1.7,1.34,2.04,6.72,8.87,8.87,8.87,8.87,4.92,4.38,2.46,3.64,.26,.72,-.1,1.33,.92,.67,1.16,.46,1.16,-3.93,.02,.21,.28,1.6,.99,1.74,.63,1.3,1.32,1.04,1.84,2.37],["Malaysia",27.4,-.19,-.53,-.49,-.47,-.19,.04,.02,.29,.03,.24,.39,-.34,-.02,.02,.28,.14,-.1,.26,.21,.14,.07,.14,.22,.14,.46,1.02,.17,.33,.41,.64,.41,.4,.39,.38,.31,.13,.39,.58,.35,.47,.86,-.42,.94,1.07],["Mongolia",-.23,1.04,-1.12,1.12,-1.46,-1.56,1.74,1.64,.31,.17,2,-2.59,-1.07,-1.11,-.17,-.34,-.3,.68,.79,-.14,-3.86,-.03,-.01,.48,-.78,1.16,1.52,1.68,.52,1.12,1.18,.24,1.14,-.86,.8,2.32,1.18,.44,.2,-.26,-.86,.41,.96,1.51,.51],["Nepal",17.82,.06,.08,-.06,-1.51,-.32,-.13,.81,.04,-.04,.33,.78,.01,.47,.12,.26,.2,.43,.39,-.29,.16,1.69,.39,.39,2.21,-1.18,2.93,2.59,-.13,-1.07,-.02,6.07,4.28,.43,.43,4.98,5.73,5.73,5.73,5.73,3.63,-4.62,2.22,2.13,2.67],["Oman",25.27,4.23,4.23,4.23,4.23,4.23,.56,3.73,-4.27,2.48,.6,-.91,.46,-1.18,-1.01,3.12,2.73,1.04,1.77,.44,-1.57,2.23,1.92,1.34,.2,1.29,2.28,.01,1.42,.63,-1.12,2.27,1.88,1.91,2.68,2.18,1.68,3.67,3.64,2.48,2.82,3.09,2.02,2.81,2.74],["Pakistan",22.13,-3.44,2.88,1.14,.08,.15,-.63,.64,.38,.64,-1.41,-.18,.97,1.24,-.38,-1.08,-2.81,.51,1.68,.6,-.94,1.14,.26,1.24,.31,.06,2.53,3.18,-.65,.92,.02,5.79,3.63,-.4,1.08,.98,.98,.94,1.69,1.4,.58,-4.67,1.16,.94,-2.29],["Philippines",27.06,.3,-.04,.11,-.04,.31,.26,-.02,-.3,-.25,-.06,.22,-.03,-.25,-.24,.34,.26,.03,.24,-.02,.06,.14,.02,-.23,-.08,-.09,.72,-.16,.15,.15,.16,.01,-.22,-.09,.29,.14,-.08,-.04,.33,-.31,.04,.08,-.07,.06,.53],["Saudi Arabia",23.51,-.09,.42,-.72,.48,-1.51,.21,1.17,.57,.49,-1.05,-.01,.54,1.22,.99,1.12,1.26,.64,.96,1.19,-.49,1.34,1.54,1.13,1.61,.99,2.15,1.94,1.59,1.86,1.81,2.07,1.7,1.52,2.11,2.05,1.92,2.03,2.83,1.97,2.36,-1.03,5.43,3.82,2.27],["Syria",18.33,.93,-1.56,-.47,-.18,.12,.38,.63,-1.04,.63,.26,.31,.16,-.09,.21,.02,.65,1.54,-.39,-.09,-1.18,-.42,.89,.23,.62,.27,1.86,.56,.58,.69,.68,1.87,.09,1.46,1.84,-.73,.88,-.11,3.17,.68,1.51,3.43,-.6,3.13,1.96],["Thailand",27.27,.03,-.43,-.27,-.44,.01,.19,.5,.4,-.16,.01,.21,-.74,.04,.01,.57,.28,.32,.63,.68,.47,.37,.44,.58,.29,.72,1.37,.27,.38,.73,.84,.67,.67,.72,.79,.65,.39,.72,1.38,.34,1.22,.98,1.01,1.4,1.58],["Turkey",13.63,-.26,-.89,-2.68,.54,1.04,.79,.99,.63,1.4,.29,-.52,-.06,.14,.09,-.4,.04,.33,.47,.24,-.87,-.33,1.29,.48,.77,-.2,1.19,1.27,.31,1.7,.68,1.49,.59,.38,.91,1.87,1.12,1.49,2.94,.57,1.61,2.14,2.77,2.43,-3.67],["Turkmenistan",16.18,1.9,-2.76,.29,-.89,.08,-.49,.56,1.3,.68,-.73,.08,-.57,.99,.43,-.29,-.23,.8,1.74,.88,.38,.11,.9,1.53,.54,1.31,1.78,2.12,2.05,2.49,2.33,2.06,2.53,3.4,2.97,1.17,1.55,2.25,2.82,1.82,2.37,2.61,1.69,3.1,3.21],["United Arab Emirates",27.37,0,0,0,0,-4.97,.22,5.47,-.12,1.13,-.57,-.39,-.66,-.07,.18,-.23,.26,-.56,.42,-.54,-.13,.44,1.15,.02,.89,.13,2.84,2.95,-1,.54,1.23,1.16,2.54,2.19,1.71,-.89,1.11,1.92,1.25,1.82,2.08,.71,1.69,1.51,2.39],["Vietnam",25.36,1.97,-.97,.52,-.05,.17,.38,-2.68,-2.68,-2.68,1.51,.83,1.3,.97,.99,1.99,1.77,.93,1.23,1.28,.19,.54,.48,.26,.08,.12,1.03,.22,.12,.24,.42,.73,.05,.11,.53,.24,-.14,.41,.76,-.47,.45,.29,.31,-1.95,1.08]],OCEANIA:[["Australia",18.38,.36,-.34,-.14,-.48,-.08,-.34,.3,.57,.12,-.11,.1,-.62,-.21,-.44,-.13,.56,-.31,-.26,-.18,-.66,-.38,-.44,-.61,-.59,-.35,-.11,-.29,-.29,-.21,.19,.11,-.02,.28,-.06,.26,-.21,.41,.01,-.18,-.18,.56,.48,.27,.41],["Fiji",26.11,0,0,0,1.39,1.39,1.39,-1.22,.79,-.77,-.77,-.77,1.39,1.39,1.39,-1.72,1.27,-.96,-.66,-.39,.97,-1.45,-1.12,-.58,-.54,-.82,.27,.12,.58,.17,.71,.07,.19,.21,.11,.51,.04,-.41,.42,.42,.18,.38,.19,-.02,.45],["French Polynesia",25.11,0,0,0,1.14,1.14,1.14,-.19,.03,-.3,-.33,-.19,-.15,-.01,-.06,-.08,.13,-.04,.11,-.06,.26,.09,-.02,.27,-.05,.06,.23,.34,.24,.22,.55,.36,.28,.19,.48,.32,.07,.51,.29,.22,-.09,.01,-.05,.37,.45],["New Zealand",12.39,.27,.47,.43,-.27,-.31,.44,-.16,-.18,.08,-.28,-.36,.32,.29,.27,.35,.41,.63,.57,-.2,-.59,-.37,-.71,.26,.28,-.06,.96,.91,.52,.65,.69,.47,.04,.84,.01,.26,.34,-.26,.53,.21,.62,1.62,.79,.37,.64],["Tuvalu",26.37,0,0,0,0,0,0,-.92,-1.87,-.87,1.73,1.49,1.63,1.85,2.03,1.65,1.62,1.57,1.94,2.03,1.86,1.77,2.3,1.86,1.52,1.52,1.54,1.73,2.09,2.23,2.33,2.38,2.21,2.32,2.35,2.23,1.86,2.23,2.03,2.12,1.77,2.38,2.34,2.36,2.64]]};a.numberFormatter.set("numberFormat","+#.0°C|#.0°C|0.0°C");var l=1973,n=1995,i=(document.getElementById("chartdiv"),am5.ColorSet.new(a,{})),o=a.container.children.push(am5radar.RadarChart.new(a,{panX:!1,panY:!1,wheelX:"panX",wheelY:"zoomX",innerRadius:am5.percent(40),radius:am5.percent(65),startAngle:100,endAngle:440}));o.set("cursor",am5radar.RadarCursor.new(a,{behavior:"zoomX",radius:am5.percent(40),innerRadius:-25})).lineY.set("visible",!1);var s=am5radar.AxisRendererCircular.new(a,{minGridDistance:10});s.labels.template.setAll({radius:10,textType:"radial",centerY:am5.p50,fill:e});var m=am5radar.AxisRendererRadial.new(a,{axisAngle:90});m.labels.template.setAll({centerX:am5.p50,fill:e});var c=o.xAxes.push(am5xy.CategoryAxis.new(a,{maxDeviation:0,categoryField:"country",renderer:s})),u=o.yAxes.push(am5xy.ValueAxis.new(a,{min:-3,max:6,extraMax:.1,renderer:m})),d=o.series.push(am5radar.RadarColumnSeries.new(a,{calculateAggregates:!0,name:"Series",xAxis:c,yAxis:u,valueYField:"value"+n,categoryXField:"country",tooltip:am5.Tooltip.new(a,{labelText:"{categoryX}: {valueY}"})}));d.columns.template.set("strokeOpacity",0),d.set("heatRules",[{target:d.columns.template,key:"fill",min:am5.color(6765239),max:am5.color(16007990),dataField:"valueY"}]),o.set("scrollbarX",am5.Scrollbar.new(a,{orientation:"horizontal"})),o.set("scrollbarY",am5.Scrollbar.new(a,{orientation:"vertical"}));var p=o.radarContainer.children.push(am5.Label.new(a,{fontSize:"2em",text:n.toString(),centerX:am5.p50,centerY:am5.p50,fill:am5.color(6765239)})),g=function(){var e=[],a=0;for(var t in r){var n=r[t];n.forEach((function(a){for(var t={country:a[0]},r=2;r<a.length;r++)t["value"+(l+r-2)]=a[r];e.push(t)})),y(t,n,a),a++}return e}();function y(e,a,t){var r=c.createAxisRange(c.makeDataItem({above:!0}));r.get("label").setAll({text:e}),r.set("category",a[0][0]),r.set("endCategory",a[a.length-1][0]);var l=r.get("axisFill");l.setAll({toggleKey:"active",cursorOverStyle:"pointer",fill:i.getIndex(3*t),visible:!0,innerRadius:-25}),r.get("grid").set("visible",!1),r.get("label").setAll({fill:am5.color(16777215),textType:"circular",radius:-16}),l.events.on("click",(function(e){var a=e.target.dataItem;e.target.get("active")?c.zoom(0,1):c.zoomToCategories(a.get("category"),a.get("endCategory"))}))}d.data.setAll(g),c.data.setAll(g),d.appear(1e3),o.appear(1e3,100);var h=o.children.push(am5.Container.new(a,{y:am5.percent(95),centerX:am5.p50,x:am5.p50,width:am5.percent(80),layout:a.horizontalLayout})),x=h.children.push(am5.Button.new(a,{themeTags:["play"],centerY:am5.p50,marginRight:15,icon:am5.Graphics.new(a,{themeTags:["icon"]})}));x.events.on("click",(function(){x.get("active")?A.set("start",A.get("start")+1e-4):A.animate({key:"start",to:1,duration:15e3*(1-A.get("start"))})}));var A=h.children.push(am5.Slider.new(a,{orientation:"horizontal",start:.5,centerY:am5.p50}));A.on("start",(function(e){1===e&&x.set("active",!1)})),A.events.on("rangechanged",(function(){var e;e=l+Math.round(43*A.get("start",0)),n!=e&&(n=e,p.set("text",n.toString()),am5.array.each(d.dataItems,(function(a){var t=a.dataContext["value"+e];a.set("valueY",t),a.animate({key:"valueYWorking",to:t,duration:500})})))}))}))};return{init:function(){am5.ready((function(){var a=am5.Root.new("kt_amcharts_1");a.setThemes([am5themes_Animated.new(a)]);var t=a.container.children.push(am5xy.XYChart.new(a,{panX:!1,panY:!1,wheelX:"panX",wheelY:"zoomX",layout:a.verticalLayout})),r=t.children.push(am5.Legend.new(a,{centerX:am5.p50,x:am5.p50}));r.labels.template.setAll({fill:e});var l=[{year:"2021",europe:2.5,namerica:2.5,asia:2.1,lamerica:1,meast:.8,africa:.4},{year:"2022",europe:2.6,namerica:2.7,asia:2.2,lamerica:.5,meast:.4,africa:.3},{year:"2023",europe:2.8,namerica:2.9,asia:2.4,lamerica:.3,meast:.9,africa:.5}],n=t.xAxes.push(am5xy.CategoryAxis.new(a,{categoryField:"year",renderer:am5xy.AxisRendererX.new(a,{cellStartLocation:.1,cellEndLocation:.9}),tooltip:am5.Tooltip.new(a,{})}));n.get("renderer").labels.template.setAll({fill:e}),n.data.setAll(l);var i=t.yAxes.push(am5xy.ValueAxis.new(a,{renderer:am5xy.AxisRendererY.new(a,{})}));function o(e,o){var s=t.series.push(am5xy.ColumnSeries.new(a,{name:e,xAxis:n,yAxis:i,valueYField:o,categoryXField:"year"}));s.columns.template.setAll({tooltipText:"{name}, {categoryX}:{valueY}",width:am5.percent(90),tooltipY:0}),s.data.setAll(l),s.appear(),s.bullets.push((function(){return am5.Bullet.new(a,{locationY:0,sprite:am5.Label.new(a,{text:"{valueY}",fill:a.interfaceColors.get("alternativeText"),centerY:0,centerX:am5.p50,populateText:!0})})})),r.data.push(s)}i.get("renderer").labels.template.setAll({fill:e}),o("Europe","europe"),o("North America","namerica"),o("Asia","asia"),o("Latin America","lamerica"),o("Middle East","meast"),o("Africa","africa"),t.appear(1e3,100)})),am5.ready((function(){for(var a=[],t=1e3,r=1200,l=0;l<360;l++)t+=Math.round((Math.random()<.5?1:-1)*Math.random()*100),a.push({date0:new Date(2015,0,l).getTime(),price0:t});for(l=0;l<360;l++)r+=Math.round((Math.random()<.5?1:-1)*Math.random()*100),a.push({date1:new Date(2017,0,l).getTime(),price1:r});var n=am5.Root.new("kt_amcharts_2");n.setThemes([am5themes_Animated.new(n)]);var i=n.container.children.push(am5xy.XYChart.new(n,{panX:!0,panY:!0,wheelX:"panX",wheelY:"zoomX"}));i.set("cursor",am5xy.XYCursor.new(n,{behavior:"none"})).lineY.set("visible",!1);var o=i.xAxes.push(am5xy.DateAxis.new(n,{baseInterval:{timeUnit:"day",count:1},renderer:am5xy.AxisRendererX.new(n,{}),tooltip:am5.Tooltip.new(n,{}),tooltipDateFormat:"yyyy-MM-dd"}));o.get("renderer").labels.template.setAll({fill:e});var s=i.xAxes.push(am5xy.DateAxis.new(n,{marginTop:10,baseInterval:{timeUnit:"day",count:1},renderer:am5xy.AxisRendererX.new(n,{}),tooltip:am5.Tooltip.new(n,{}),tooltipDateFormat:"yyyy-MM-dd"}));s.get("renderer").labels.template.setAll({fill:e});var m=i.yAxes.push(am5xy.ValueAxis.new(n,{maxDeviation:1,renderer:am5xy.AxisRendererY.new(n,{pan:"zoom"})}));m.get("renderer").labels.template.setAll({fill:e});var c=i.series.push(am5xy.LineSeries.new(n,{name:"Series",xAxis:o,yAxis:m,valueYField:"price0",valueXField:"date0",tooltip:am5.Tooltip.new(n,{labelText:"{valueY}"})})),u=i.series.push(am5xy.LineSeries.new(n,{name:"Series",xAxis:s,yAxis:m,valueYField:"price1",valueXField:"date1",tooltip:am5.Tooltip.new(n,{labelText:"{valueY}"})})),d=i.set("scrollbarX",am5xy.XYChartScrollbar.new(n,{orientation:"horizontal",height:60})),p=d.chart.xAxes.push(am5xy.DateAxis.new(n,{baseInterval:{timeUnit:"day",count:1},renderer:am5xy.AxisRendererX.new(n,{})})),g=d.chart.yAxes.push(am5xy.ValueAxis.new(n,{renderer:am5xy.AxisRendererY.new(n,{})})),y=d.chart.series.push(am5xy.LineSeries.new(n,{valueYField:"price0",valueXField:"date0",xAxis:p,yAxis:g}));c.data.setAll(a),u.data.setAll(a),y.data.setAll(a),c.appear(1e3),u.appear(1e3),i.appear(1e3,100)})),am5.ready((function(){var t=am5.Root.new("kt_amcharts_3");t.setThemes([am5themes_Animated.new(t)]);var r=t.container.children.push(am5percent.PieChart.new(t,{layout:t.verticalLayout})),l=r.series.push(am5percent.PieSeries.new(t,{alignLabels:!0,calculateAggregates:!0,valueField:"value",categoryField:"category"}));l.labels.template.setAll({fill:e}),l.ticks.template.setAll({fill:e,stroke:e}),l.slices.template.setAll({strokeWidth:3,stroke:a}),l.labelsContainer.set("paddingTop",30),l.slices.template.adapters.add("radius",(function(e,a){var t=a.dataItem,r=l.getPrivate("valueHigh");return t?e*a.dataItem.get("valueWorking",0)/r:e})),l.data.setAll([{value:10,category:"One"},{value:9,category:"Two"},{value:6,category:"Three"},{value:5,category:"Four"},{value:4,category:"Five"},{value:3,category:"Six"}]);var n=r.children.push(am5.Legend.new(t,{centerX:am5.p50,x:am5.p50,marginTop:15,marginBottom:15}));n.labels.template.setAll({fill:e}),n.valueLabels.template.setAll({fill:e}),n.data.setAll(l.dataItems),l.appear(1e3,100)})),t(),am5.ready((function(){var a=am5.Root.new("kt_amcharts_5");a.setThemes([am5themes_Animated.new(a)]);var t=a.container.children.push(am5radar.RadarChart.new(a,{panX:!1,panY:!1,wheelX:"panX",wheelY:"zoomX",innerRadius:am5.percent(20),startAngle:-90,endAngle:180})),r=[{category:"Research",value:80,full:100,columnSettings:{fill:t.get("colors").getIndex(0)}},{category:"Marketing",value:35,full:100,columnSettings:{fill:t.get("colors").getIndex(1)}},{category:"Distribution",value:92,full:100,columnSettings:{fill:t.get("colors").getIndex(2)}},{category:"Human Resources",value:68,full:100,columnSettings:{fill:t.get("colors").getIndex(3)}}];t.set("cursor",am5radar.RadarCursor.new(a,{behavior:"zoomX"})).lineY.set("visible",!1);var l=am5radar.AxisRendererCircular.new(a,{});l.labels.template.setAll({radius:10,fill:e}),l.grid.template.setAll({forceHidden:!0});var n=t.xAxes.push(am5xy.ValueAxis.new(a,{renderer:l,min:0,max:100,strictMinMax:!0,numberFormat:"#'%'",tooltip:am5.Tooltip.new(a,{})})),i=am5radar.AxisRendererRadial.new(a,{minGridDistance:20});i.labels.template.setAll({centerX:am5.p100,fontWeight:"500",fontSize:18,templateField:"columnSettings"}),i.grid.template.setAll({forceHidden:!0});var o=t.yAxes.push(am5xy.CategoryAxis.new(a,{categoryField:"category",renderer:i}));o.data.setAll(r);var s=t.series.push(am5radar.RadarColumnSeries.new(a,{xAxis:n,yAxis:o,clustered:!1,valueXField:"full",categoryYField:"category",fill:a.interfaceColors.get("alternativeBackground")}));s.columns.template.setAll({width:am5.p100,fillOpacity:.08,strokeOpacity:0,cornerRadius:20}),s.data.setAll(r);var m=t.series.push(am5radar.RadarColumnSeries.new(a,{xAxis:n,yAxis:o,clustered:!1,valueXField:"value",categoryYField:"category"}));m.columns.template.setAll({width:am5.p100,strokeOpacity:0,tooltipText:"{category}: {valueX}%",cornerRadius:20,templateField:"columnSettings"}),m.data.setAll(r),s.appear(1e3),m.appear(1e3),t.appear(1e3,100)}))}}}();KTUtil.onDOMContentLoaded((function(){KTGeneralAmCharts.init()}));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ;