// Buttons  
        const natureOfJobBtn = document.getElementById('natureOfJobBtn');
        const equipment1Btn = document.getElementById('equipment1Btn');
        const equipment2Btn = document.getElementById('equipment2Btn');
        const equipment3Btn = document.getElementById('equipment3Btn');
        const protectionActuation1Btn = document.getElementById('protectionActuation1Btn');
        const protectionActuation2Btn = document.getElementById('protectionActuation2Btn');
        const protectionActuation3Btn = document.getElementById('protectionActuation3Btn');
        const observationBtn = document.getElementById('observationBtn');
        const repairProcedureBtn = document.getElementById('repairProcedureBtn');
        const meterSealBtn = document.getElementById('meterSealBtn');
        const reportBtn = document.getElementById('reportBtn');
        const PreliminaryBtn = document.getElementById('PreliminaryBtn');
        const ResponsibilityBtn = document.getElementById('ResponsibilityBtn');
        const RemarkBtn = document.getElementById('RemarkBtn');
        const MaterialsBtn = document.getElementById('MaterialsBtn');
        const LabourBtn = document.getElementById('LabourBtn');
        const DebitBtn = document.getElementById('DebitBtn');
        const cem_respBtn = document.getElementById('cem_respBtn');
        // sections
        const jobOptions = document.getElementById('jobOptions');
        const equipmentI = document.getElementById('equipmentI');
        const equipmentII = document.getElementById('equipmentII');
        const equipmentIII = document.getElementById('equipmentIII');
        const protectionActuationI = document.getElementById('protectionActuationI');
        const protectionActuationII = document.getElementById('protectionActuationII');
        const protectionActuationIII = document.getElementById('protectionActuationIII');
        const observationSection = document.getElementById('observationSection');
        const repairProcedureSection = document.getElementById('repairProcedureSection');
        const meterSealSection = document.getElementById('meterSealSection');
        const ReportSection = document.getElementById('ReportSection');
        const PreliminarySection = document.getElementById('PreliminarySection');
        const ResponsibilitySection = document.getElementById('ResponsibilitySection');
        const RemarkSection = document.getElementById('RemarkSection');
        const MaterialSection = document.getElementById('MaterialSection');
        const LabourSection = document.getElementById('LabourSection');
        const DebitSection = document.getElementById('DebitSection');
        const CEMSection = document.getElementById('CEMSection');
        // Radio buttons for job types
        const customerInstallationRadio = document.getElementById('customerInstallation');
        const CEMNetworkRadio = document.querySelector('input[name="jobType"][value="CEMNetwork"]');
        const CEMNetworkClaimRadio = document.querySelector('input[name="jobType"][value="CEMNetworkClaim"]');
        //  for equipment options
        const customerInstallationEqI = document.getElementById('customerInstallationEqI');
        const CEMNetworkEqI = document.getElementById('CEMNetworkEqI');
        const CEMNetworkClaimEqI = document.getElementById('CEMNetworkClaimEqI');
        const customerInstallationEqII = document.getElementById('customerInstallationEqII');
        const CEMNetworkEqII = document.getElementById('CEMNetworkEqII');
        const CEMNetworkClaimEqII = document.getElementById('CEMNetworkClaimEqII');
        const customerInstallationEqIII = document.getElementById('customerInstallationEqIII');
        const CEMNetworkEqIII = document.getElementById('CEMNetworkEqIII');
        const CEMNetworkClaimEqIII = document.getElementById('CEMNetworkClaimEqIII'); 
        // for actuation options
        const commonProtectionActuationI = document.getElementById('commonProtectionActuationI');
        const commonProtectionActuationII = document.getElementById('commonProtectionActuationII');
        const commonProtectionActuationIII = document.getElementById('commonProtectionActuationIII');  
        // for another Options
        const commonObservation = document.getElementById('commonObservation');
        const commonRepair = document.getElementById('commonRepair');
        const commonmeterSeal = document.getElementById('commonmeterSeal');
        const commonreport = document.getElementById('commonreport');
        const commonPreliminary = document.getElementById('commonPreliminary');
        const commonResponsibility = document.getElementById('commonResponsibility');
        const commonRemark = document.getElementById('commonRemark');
        const commonMaterials = document.getElementById('commonMaterials');
        const commonLabour = document.getElementById('commonLabour');
        const commonDebit = document.getElementById('commonDebit');
        const commoncem_resp = document.getElementById('commoncem_resp');
        // Function to show a section and hide others
        function showSection(section) {
            jobOptions.style.display = 'none';
            equipmentI.style.display = 'none';
            equipmentII.style.display = 'none';
            equipmentIII.style.display = 'none';
            protectionActuationI.style.display = 'none';
            protectionActuationII.style.display = 'none';
            protectionActuationIII.style.display = 'none';
            observationSection.style.display = 'none';
            repairProcedureSection.style.display = 'none';
            meterSealSection.style.display = 'none';
            ReportSection.style.display = 'none';
            PreliminarySection.style.display = 'none';
            ResponsibilitySection.style.display='none';
            RemarkSection.style.display='none';
            MaterialSection.style.display='none';
            LabourSection.style.display='none';
            DebitSection.style.display='none';
            CEMSection.style.display='none';
            section.style.display = 'block';
        }
        // button clickable 
        natureOfJobBtn.addEventListener('click', () => showSection(jobOptions));
        equipment1Btn.addEventListener('click', () => showSection(equipmentI));
        equipment2Btn.addEventListener('click', () => showSection(equipmentII));
        equipment3Btn.addEventListener('click', () => showSection(equipmentIII));
        protectionActuation1Btn.addEventListener('click', () => showSection(protectionActuationI));
        protectionActuation2Btn.addEventListener('click', () => showSection(protectionActuationII));
        protectionActuation3Btn.addEventListener('click', () => showSection(protectionActuationIII));
        observationBtn.addEventListener('click', () => showSection(observationSection));
        repairProcedureBtn.addEventListener('click', () => showSection(repairProcedureSection));
        meterSealBtn.addEventListener('click', () => showSection(meterSealSection));
        reportBtn.addEventListener('click', () => showSection(ReportSection));
        PreliminaryBtn.addEventListener('click', () => showSection(PreliminarySection));
        ResponsibilityBtn.addEventListener('click', () => showSection(ResponsibilitySection));
        RemarkBtn.addEventListener('click', () => showSection(RemarkSection));
        MaterialsBtn.addEventListener('click', () => showSection(MaterialSection));
        LabourBtn.addEventListener('click', () => showSection(LabourSection));
        DebitBtn.addEventListener('click', () => showSection(DebitSection));
        cem_respBtn.addEventListener('click', () => showSection(CEMSection));
        // Event listeners for radio buttons
        customerInstallationRadio.addEventListener('change', () => {
            if (customerInstallationRadio.checked) {
                customerInstallationEqI.style.display = 'block';
                CEMNetworkEqI.style.display = 'none';
                CEMNetworkClaimEqI.style.display = 'none';
                customerInstallationEqII.style.display = 'block';
                CEMNetworkEqII.style.display = 'none';
                CEMNetworkClaimEqII.style.display = 'none';
                customerInstallationEqIII.style.display = 'block';
                CEMNetworkEqIII.style.display = 'none';
                CEMNetworkClaimEqIII.style.display = 'none';
                commonProtectionActuationI.style.display = 'block';
                commonProtectionActuationII.style.display = 'block';
                commonProtectionActuationIII.style.display = 'block';
                commonObservation.style.display = 'block';
			    commonRepair.style.display = 'block';
		        commonmeterSeal.style.display = 'block';
		        commonreport.style.display = 'block';
		        commonPreliminary.style.display = 'block';
		        commonResponsibility.style.display = 'block';
		        commonRemark.style.display = 'block';
		        commonMaterials.style.display = 'block';
		        commonLabour.style.display = 'block';
		        commonDebit.style.display = 'block';
		        commoncem_resp.style.display = 'block';
            }
        });
        CEMNetworkRadio.addEventListener('change', () => {
            if (CEMNetworkRadio.checked) {
                customerInstallationEqI.style.display = 'none';
                CEMNetworkEqI.style.display = 'block';
                CEMNetworkClaimEqI.style.display = 'none';
                customerInstallationEqII.style.display = 'none';
                CEMNetworkEqII.style.display = 'block';
                CEMNetworkClaimEqII.style.display = 'none';
                customerInstallationEqIII.style.display = 'none';
                CEMNetworkEqIII.style.display = 'block';
                CEMNetworkClaimEqIII.style.display = 'none';
                commonProtectionActuationI.style.display = 'block';
                commonProtectionActuationII.style.display = 'block';
                commonProtectionActuationIII.style.display = 'block';
                commonObservation.style.display = 'block';
			    commonRepair.style.display = 'block';
		        commonmeterSeal.style.display = 'block';
		        commonreport.style.display = 'block';
		        commonPreliminary.style.display = 'block';
		        commonResponsibility.style.display = 'block';
		        commonRemark.style.display = 'block';
		        commonMaterials.style.display = 'block';
		        commonLabour.style.display = 'block';
		        commonDebit.style.display = 'block';
		        commoncem_resp.style.display = 'block';
            }
        });
        CEMNetworkClaimRadio.addEventListener('change', () => {
            if (CEMNetworkClaimRadio.checked) {
                customerInstallationEqI.style.display = 'none';
                CEMNetworkEqI.style.display = 'none';
                CEMNetworkClaimEqI.style.display = 'block';
                customerInstallationEqII.style.display = 'none';
                CEMNetworkEqII.style.display = 'none';
                CEMNetworkClaimEqII.style.display = 'block';
                customerInstallationEqIII.style.display = 'none';
                CEMNetworkEqIII.style.display = 'none';
                CEMNetworkClaimEqIII.style.display = 'block';
                commonProtectionActuationI.style.display = 'block';
                commonProtectionActuationII.style.display = 'block';
                commonProtectionActuationIII.style.display = 'block';
                commonObservation.style.display = 'block';
			    commonRepair.style.display = 'block';
		        commonmeterSeal.style.display = 'block';
		        commonreport.style.display = 'block';
		        commonPreliminary.style.display = 'block';
		        commonResponsibility.style.display = 'block';
		        commonRemark.style.display = 'block';
		        commonMaterials.style.display = 'block';
		        commonLabour.style.display = 'block';
		        commonDebit.style.display = 'block';
		        commoncem_resp.style.display = 'block';
            }
        }); 
            const hidden1 = () => {
            var h = document.getElementById("isolatorEquipment2"); 
            if(h.checked)
           {
               h.classList.add("hidden");
           } 
        }
                 observationBtn.addEventListener('click', ()=> {
                  
			      document.getElementById('obheading').style.display = 'none';			
				  document.getElementById('Trip_ob1').classList.add('hidden');
				  document.getElementById('Brunt_ob1').classList.add('hidden');
				  document.getElementById('Short_circuit_ob1').classList.add('hidden');
				  document.getElementById('Smoke_ob1').classList.add('hidden');
				  document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
				  document.getElementById('Water_leakage_ob1').classList.add('hidden');
				  document.getElementById('High/low_voltage_ob1').classList.add('hidden');
				  document.getElementById('Customer_no_present_ob1').classList.add('hidden');
				  document.getElementById('Planned_Outage_ob1').classList.add('hidden');
				  document.getElementById('Spark_ob1').classList.add('hidden');  
				  document.getElementById('Unsealed_ob1').classList.add('hidden');
				  document.getElementById('Fused_ob1').classList.add('hidden');
				  document.getElementById('Out_of_order_ob1').classList.add('hidden');
				  document.getElementById('Disappeared_ob1').classList.add('hidden');
				  document.getElementById('Damage_ob1').classList.add('hidden');
				  document.getElementById('Open_circuit_ob1').classList.add('hidden');
				  document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
				  document.getElementById('Oil_leakage_ob1').classList.add('hidden');
				  document.getElementById('Standing_water_ob1').classList.add('hidden'); 
				  document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
				  document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
				  document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
				  document.getElementById('No_responsibility_ob1').classList.add('hidden');   
	        	  					
				 });
        function showEquipment2Options(QGType) {
    // Select all elements with the class 'hidden' and hide them
    var equipment2Options = document.querySelectorAll('.hidden');
    equipment2Options.forEach(function(option) {
        option.classList.add('hidden');
    });
    // If QGType is 'qg', show/hide specific elements
    if(QGType === "qg") {
	document.getElementById('numberEquipment2').classList.remove('hidden');
    document.getElementById('circuitBreakerEquipment2').classList.remove('hidden');
    document.getElementById('busbarEquipment2').classList.remove('hidden');
    document.getElementById('terminalEquipment2').classList.remove('hidden');
    document.getElementById('connectorEquipment2').classList.remove('hidden');
    document.getElementById('otherEquipment2').classList.remove('hidden');
    // Hide elements not related to "qg"
    document.getElementById('isolatorEquipment2').classList.add('hidden');
    document.getElementById('fuseEquipment2').classList.add('hidden');
    document.getElementById('fuseBaseEquipment2').classList.add('hidden');
    document.getElementById('hvmvEquipment2').classList.add('hidden');
    document.getElementById('secondaryEquipment2').classList.add('hidden');
    document.getElementById('lampPostEquipment2').classList.add('hidden');
    document.getElementById('lanternPLEquipment2').classList.add('hidden');
    document.getElementById('bulbEquipment2').classList.add('hidden');
    document.getElementById('currentContactorEquipment2').classList.add('hidden');
    document.getElementById('timePhotoSensorEquipment2').classList.add('hidden');
    document.getElementById('steelTypeCoverEquipment2').classList.add('hidden');
    document.getElementById('concreteTypeCoverEquipment2').classList.add('hidden');
    document.getElementById('rcdEquipment2').classList.add('hidden');
    document.getElementById('chargingPlugCableEquipment2').classList.add('hidden');
    document.getElementById('clientRequestMaintenanceEquipment2').classList.add('hidden');
    document.getElementById('handlingClientComplaintEquipment2').classList.add('hidden');
    document.getElementById('nonElectricityRelatedPropertiesEquipment2').classList.add('hidden');
    document.getElementById('powerRestoredByClientEquipment2').classList.add('hidden');
    document.getElementById('lockDoorEquipment2').classList.add('hidden');
    document.getElementById('mcbEquipment2').classList.add('hidden');
    document.getElementById('cableTrenchEquipment2').classList.add('hidden');
    document.getElementById('threadBodyEquipment2').classList.add('hidden');
    document.getElementById('ctEquipment2').classList.add('hidden');    
         // equipement 3  
		 //1 
 		 document.getElementById('busbarEquipment2').addEventListener('change' , function() {

                if(this.querySelector('input[type="checkbox"]').checked) 
				{
                    document.getElementById('ph1').classList.remove('hidden');
					document.getElementById('ph2').classList.remove('hidden');
					document.getElementById('ph3').classList.remove('hidden');
			        document.getElementById('phn').classList.remove('hidden');
				}
               else 
			   {
				    document.getElementById('ph1').classList.add('hidden');
					document.getElementById('ph2').classList.add('hidden');
					document.getElementById('ph3').classList.add('hidden');
			        document.getElementById('phn').classList.add('hidden');

			   }
		 }); 

         //2 
 		 document.getElementById('terminalEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
	document.getElementById('ph1').classList.remove('hidden');
	document.getElementById('ph2').classList.remove('hidden');
	document.getElementById('ph3').classList.remove('hidden');
	document.getElementById('phn').classList.remove('hidden');
}
else 
{
	document.getElementById('ph1').classList.add('hidden');
	document.getElementById('ph2').classList.add('hidden');
	document.getElementById('ph3').classList.add('hidden');
	document.getElementById('phn').classList.add('hidden');

}
}); 

  //3
  document.getElementById('connectorEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
	document.getElementById('ph1').classList.remove('hidden');
	document.getElementById('ph2').classList.remove('hidden');
	document.getElementById('ph3').classList.remove('hidden');
	document.getElementById('phn').classList.remove('hidden');
}
else 
{
	document.getElementById('ph1').classList.add('hidden');
	document.getElementById('ph2').classList.add('hidden');
	document.getElementById('ph3').classList.add('hidden');
	document.getElementById('phn').classList.add('hidden');

}
}); 
// 4 
document.getElementById('otherEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
	document.getElementById('ph1').classList.add('hidden');
	document.getElementById('ph2').classList.add('hidden');
	document.getElementById('ph3').classList.add('hidden');
	document.getElementById('phn').classList.add('hidden');
}
else 
{
	document.getElementById('ph1').classList.add('hidden');
	document.getElementById('ph2').classList.add('hidden');
	document.getElementById('ph3').classList.add('hidden');
	document.getElementById('phn').classList.add('hidden');

}
}); 
///      ----------------------------------------------------------------------             /////////////
         ///   protection      -----          
        document.getElementById('QGprotectionActuationI').classList.add('hidden');  
        document.getElementById('QCprotectionActuationI').classList.add('hidden');  
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');   
        document.getElementById('cclprotectionActuationI').classList.add('hidden');
        document.getElementById('cusprotectionActuationI').classList.add('hidden');
        document.getElementById('meterprotectionActuationI').classList.add('hidden');
        document.getElementById('seprotectionActuationI').classList.add('hidden');  
        document.getElementById('ptprotectionActuationI').classList.remove('hidden');   // ok 
        document.getElementById('transprotectionActuationI').classList.remove('hidden'); // ok 
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden'); // ok 
        document.getElementById('cdprotectionActuationI').classList.remove('hidden'); // ok 
        document.getElementById('phprotectionActuationI').classList.remove('hidden'); // ok 
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');   
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden'); // ok 
             //////     protection 1 to protection 2 link add here ..... .
              // 1 
     document.getElementById('ptprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked) {
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 
    }); 
	// protection 2 to 3
	document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  
    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  
    } 
    }); 
      // 2 
	document.getElementById('transprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked) {
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 
    });
	// protection actuation 2 to 3
	document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  
    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 
	document.getElementById('mvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 
    // 3 
	document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 
    }); 
	// protection actuation II to III
	document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  
    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 
    }); 
	 // 4
	 document.getElementById('cdprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  
// protection actuation II to III

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 
    }); 
	// 5
	document.getElementById('phprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 
    }); 
// protection actuation II to III
document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 
    }); 
	// 6
	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');  
		
		  document.getElementById('pah1').classList.add('hidden'); 
		  document.getElementById('pah2').classList.add('hidden');  
		  document.getElementById('pah3').classList.add('hidden'); 
		  document.getElementById('pah4').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 
    });
//////////////////////--------------------------------------------////////////////////////////////////////
        document.getElementById('numberEquipment2').addEventListener('change', function () {
            var textboxField = document.getElementById('textbox');
            if (this.checked) {
                textboxField.classList.remove('hidden');
            } else {
                textboxField.classList.add('hidden');
            }
        });

        // circuitBreakerEquipment2 change event
        document.getElementById('circuitBreakerEquipment2').addEventListener('change', function () {
            var textboxField = document.getElementById('textbox');
            if (this.checked) {
                textboxField.classList.remove('hidden');
            } else {
                textboxField.classList.add('hidden');
            }
        }); 
		observationBtn.addEventListener('click', ()=> { 
          				
		document.getElementById('obheading').style.display = 'block';			
        document.getElementById('Trip_ob1').classList.remove('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.remove('hidden');
		document.getElementById('Customer_no_present_ob1').classList.remove('hidden');
		document.getElementById('Planned_Outage_ob1').classList.remove('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');	
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.add('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden');         
		});
    }
            else if(QGType==="qc") {
			document.getElementById('numberEquipment2').classList.remove('hidden'); // ok 
			document.getElementById('circuitBreakerEquipment2').classList.add('hidden');
			document.getElementById('isolatorEquipment2').classList.remove('hidden'); // ok 
			document.getElementById('busbarEquipment2').classList.remove('hidden');  // ok 
			document.getElementById('fuseEquipment2').classList.add('hidden');
			document.getElementById('fuseBaseEquipment2').classList.add('hidden');
			document.getElementById('terminalEquipment2').classList.remove('hidden');  // ok 
			document.getElementById('connectorEquipment2').classList.remove('hidden'); // ok 
			document.getElementById('hvmvEquipment2').classList.add('hidden'); 
			document.getElementById('secondaryEquipment2').classList.add('hidden');
			document.getElementById('lampPostEquipment2').classList.add('hidden');
			document.getElementById('lanternPLEquipment2').classList.add('hidden');
			document.getElementById('bulbEquipment2').classList.add('hidden');
			document.getElementById('currentContactorEquipment2').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment2').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment2').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment2').classList.add('hidden');
			document.getElementById('rcdEquipment2').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment2').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment2').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment2').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment2').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment2').classList.add('hidden');
			document.getElementById('otherEquipment2').classList.remove('hidden'); // ok 
			document.getElementById('lockDoorEquipment2').classList.add('hidden');
			document.getElementById('mcbEquipment2').classList.add('hidden');
			document.getElementById('cableTrenchEquipment2').classList.add('hidden');
			document.getElementById('threadBodyEquipment2').classList.add('hidden');
			document.getElementById('ctEquipment2').classList.add('hidden');          
             // equipment 3 
                       //1 
 		 document.getElementById('busbarEquipment2').addEventListener('change' , function() {
if(this.querySelector('input[type="checkbox"]').checked) 
{
	document.getElementById('ph1').classList.remove('hidden');
	document.getElementById('ph2').classList.remove('hidden');
	document.getElementById('ph3').classList.remove('hidden');
	document.getElementById('phn').classList.remove('hidden');
}
else 
{
	document.getElementById('ph1').classList.add('hidden');
	document.getElementById('ph2').classList.add('hidden');
	document.getElementById('ph3').classList.add('hidden');
	document.getElementById('phn').classList.add('hidden');

}
}); 

//2 
document.getElementById('terminalEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.remove('hidden');
document.getElementById('ph2').classList.remove('hidden');
document.getElementById('ph3').classList.remove('hidden');
document.getElementById('phn').classList.remove('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 

//3
document.getElementById('connectorEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.remove('hidden');
document.getElementById('ph2').classList.remove('hidden');
document.getElementById('ph3').classList.remove('hidden');
document.getElementById('phn').classList.remove('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 
// 4 
document.getElementById('otherEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
});  
///////////////////////-------------------------------------//////////////////////////////////////////
			 // protection    
        document.getElementById('QGprotectionActuationI').classList.remove('hidden');   // ok 
        document.getElementById('QCprotectionActuationI').classList.remove('hidden');   // ok 
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');   
        document.getElementById('cclprotectionActuationI').classList.add('hidden');
        document.getElementById('cusprotectionActuationI').classList.add('hidden');
        document.getElementById('meterprotectionActuationI').classList.add('hidden');
        document.getElementById('seprotectionActuationI').classList.add('hidden');  
        document.getElementById('ptprotectionActuationI').classList.add('hidden');  
        document.getElementById('transprotectionActuationI').classList.remove('hidden');   // ok 
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden');   // ok 
        document.getElementById('cdprotectionActuationI').classList.remove('hidden');   // ok 
        document.getElementById('phprotectionActuationI').classList.remove('hidden');    // ok 
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');      
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');     
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');  // ok 
           // 1
	 document.getElementById('QGprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 
    });  

// PROTECTION 2 TO 3 LINK 
document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

    //2 

	document.getElementById('QCprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');   
		 
		 
            		 document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

		 
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  


    // 3 

	document.getElementById('transprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mvfuseprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');   
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  

// protection 2 to 3 

document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 

	document.getElementById('mvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
    } 
    }); 
	// 4 
	document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 
    });  

// protection 2 to 3 

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 
     // 5 

	document.getElementById('cdprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');    // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  

	// protection 2 to 3 

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 
    // 6

	document.getElementById('phprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); //ok
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

	// protection 2 to 3 

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 
    }); 
	// 7 
	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');   
		 document.getElementById('pah1').classList.add('hidden'); 
		document.getElementById('pah2').classList.add('hidden');  
		document.getElementById('pah3').classList.add('hidden'); 
		document.getElementById('pah4').classList.add('hidden'); 

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  
    

			document.getElementById('numberEquipment2').addEventListener('change', function () {
				var textboxField = document.getElementById('textbox');
				if (this.checked) {
					textboxField.classList.remove('hidden');
				}else {
					textboxField.classList.add('hidden');
				}
			});
			document.getElementById('isolatorEquipment2').addEventListener('change', function () {
				var textboxField = document.getElementById('textbox');
				if (this.checked) {
					textboxField.classList.remove('hidden');
				}else {
					textboxField.classList.add('hidden');
				}
			}); 



			observationBtn.addEventListener('click', ()=> {  


		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.remove('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.remove('hidden');
		document.getElementById('Customer_no_present_ob1').classList.remove('hidden');
		document.getElementById('Planned_Outage_ob1').classList.remove('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.add('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 


		}); 

			}else if(QGType==="cps"){
			document.getElementById('numberEquipment2').classList.add('hidden');
			document.getElementById('circuitBreakerEquipment2').classList.add('hidden');
			document.getElementById('isolatorEquipment2').classList.add('hidden');
			document.getElementById('busbarEquipment2').classList.add('hidden');
			document.getElementById('fuseEquipment2').classList.remove('hidden');  // ok 
			document.getElementById('fuseBaseEquipment2').classList.remove('hidden');   // ok 
			document.getElementById('terminalEquipment2').classList.remove('hidden');  // ok 
			document.getElementById('connectorEquipment2').classList.add('hidden');
			document.getElementById('hvmvEquipment2').classList.add('hidden');
			document.getElementById('secondaryEquipment2').classList.add('hidden');
			document.getElementById('lampPostEquipment2').classList.add('hidden');
			document.getElementById('lanternPLEquipment2').classList.add('hidden');
			document.getElementById('bulbEquipment2').classList.add('hidden');
			document.getElementById('currentContactorEquipment2').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment2').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment2').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment2').classList.add('hidden');
			document.getElementById('rcdEquipment2').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment2').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment2').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment2').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment2').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment2').classList.add('hidden');
			document.getElementById('otherEquipment2').classList.remove('hidden'); // ok 
			document.getElementById('lockDoorEquipment2').classList.add('hidden');
			document.getElementById('mcbEquipment2').classList.add('hidden');
			document.getElementById('cableTrenchEquipment2').classList.add('hidden');
			document.getElementById('threadBodyEquipment2').classList.add('hidden');
			document.getElementById('ctEquipment2').classList.add('hidden'); 

             // equipement 3  
      
			   //1 
 		 document.getElementById('fuseEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
	document.getElementById('ph1').classList.remove('hidden');
	document.getElementById('ph2').classList.remove('hidden');
	document.getElementById('ph3').classList.remove('hidden');
	document.getElementById('phn').classList.remove('hidden');
}
else 
{
	document.getElementById('ph1').classList.add('hidden');
	document.getElementById('ph2').classList.add('hidden');
	document.getElementById('ph3').classList.add('hidden');
	document.getElementById('phn').classList.add('hidden');

}
}); 

//2 
document.getElementById('fuseBaseEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.remove('hidden');
document.getElementById('ph2').classList.remove('hidden');
document.getElementById('ph3').classList.remove('hidden');
document.getElementById('phn').classList.remove('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 

//3
document.getElementById('terminalEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.remove('hidden');
document.getElementById('ph2').classList.remove('hidden');
document.getElementById('ph3').classList.remove('hidden');
document.getElementById('phn').classList.remove('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 


// 4 
document.getElementById('otherEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 
            

//////////////////////////-----------------------------------------------//////////////////////////////

              /// protection   


        document.getElementById('QGprotectionActuationI').classList.remove('hidden');   // ok  
        document.getElementById('QCprotectionActuationI').classList.add('hidden');   
		document.getElementById('CPSprotectionActuationI').classList.remove('hidden');    // ok 
        document.getElementById('cclprotectionActuationI').classList.add('hidden');
        document.getElementById('cusprotectionActuationI').classList.add('hidden');
        document.getElementById('meterprotectionActuationI').classList.add('hidden');
        document.getElementById('seprotectionActuationI').classList.add('hidden');  
        document.getElementById('ptprotectionActuationI').classList.add('hidden');  
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden');   // ok 
        document.getElementById('cdprotectionActuationI').classList.remove('hidden');    //  ok 
        document.getElementById('phprotectionActuationI').classList.remove('hidden');    // ok   
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');   // ok  
        



          ///   protection 1 to protection 2   


               // 1
	 document.getElementById('QGprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  
 // PROTECTION 2 TO 3 LINK 

 document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 
        // 2 
	 document.getElementById('CPSprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');     
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  
        
// PROTECTION 2 TO 3 

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

     // 3 
	 document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.remove('hidden');  // ok   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');       
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  
        
    // PROTECTION 2 TO 3 
	
	document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

	 // 4
	 document.getElementById('cdprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
       

        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.remove('hidden');  // ok   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');       

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  
        

 // PROTECTION 2 TO 3 

 document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  
       
	   // 5
	  document.getElementById('phprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   


    document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

                       // 6
	  document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');    
		
		
          
	            	 document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    }); 
 		observationBtn.addEventListener('click', ()=> {    

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');//ok
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.remove('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.remove('hidden'); // ok 
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.add('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.remove('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		
		});


	} else if(QGType==="ccl"){
			document.getElementById('numberEquipment2').classList.add('hidden');
			document.getElementById('circuitBreakerEquipment2').classList.add('hidden');
			document.getElementById('isolatorEquipment2').classList.add('hidden');
			document.getElementById('busbarEquipment2').classList.remove('hidden'); // ok 
			document.getElementById('fuseEquipment2').classList.remove('hidden');  // ok 
			document.getElementById('fuseBaseEquipment2').classList.remove('hidden'); // ok 
			document.getElementById('terminalEquipment2').classList.remove('hidden'); // ok 
			document.getElementById('connectorEquipment2').classList.remove('hidden');  // ok 
			document.getElementById('hvmvEquipment2').classList.add('hidden');
			document.getElementById('secondaryEquipment2').classList.add('hidden');
			document.getElementById('lampPostEquipment2').classList.add('hidden');
			document.getElementById('lanternPLEquipment2').classList.add('hidden');
			document.getElementById('bulbEquipment2').classList.add('hidden');
			document.getElementById('currentContactorEquipment2').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment2').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment2').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment2').classList.add('hidden');
			document.getElementById('rcdEquipment2').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment2').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment2').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment2').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment2').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment2').classList.add('hidden');
			document.getElementById('otherEquipment2').classList.remove('hidden'); // ok 
			document.getElementById('lockDoorEquipment2').classList.add('hidden');
			document.getElementById('mcbEquipment2').classList.add('hidden');
			document.getElementById('cableTrenchEquipment2').classList.add('hidden');
			document.getElementById('threadBodyEquipment2').classList.add('hidden');
			document.getElementById('ctEquipment2').classList.add('hidden');   


             // equipement 3 


               //1 
 		 document.getElementById('fuseEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
	document.getElementById('ph1').classList.remove('hidden');
	document.getElementById('ph2').classList.remove('hidden');
	document.getElementById('ph3').classList.remove('hidden');
	document.getElementById('phn').classList.remove('hidden');
}
else 
{
	document.getElementById('ph1').classList.add('hidden');
	document.getElementById('ph2').classList.add('hidden');
	document.getElementById('ph3').classList.add('hidden');
	document.getElementById('phn').classList.add('hidden');

}
}); 

//2 
document.getElementById('fuseBaseEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.remove('hidden');
document.getElementById('ph2').classList.remove('hidden');
document.getElementById('ph3').classList.remove('hidden');
document.getElementById('phn').classList.remove('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 

//3
document.getElementById('terminalEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.remove('hidden');
document.getElementById('ph2').classList.remove('hidden');
document.getElementById('ph3').classList.remove('hidden');
document.getElementById('phn').classList.remove('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 


// 4 
document.getElementById('otherEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 
// 5 
 document.getElementById('busbarEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
	document.getElementById('ph1').classList.remove('hidden');
	document.getElementById('ph2').classList.remove('hidden');
	document.getElementById('ph3').classList.remove('hidden');
	document.getElementById('phn').classList.remove('hidden');
}
else 
{
	document.getElementById('ph1').classList.add('hidden');
	document.getElementById('ph2').classList.add('hidden');
	document.getElementById('ph3').classList.add('hidden');
	document.getElementById('phn').classList.add('hidden');

}
}); 


// 6 
document.getElementById('connectorEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.remove('hidden');
document.getElementById('ph2').classList.remove('hidden');
document.getElementById('ph3').classList.remove('hidden');
document.getElementById('phn').classList.remove('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 
/////// ------------------------------------------------------------ /////////////////////////////


                   /// protection    

        document.getElementById('QGprotectionActuationI').classList.remove('hidden');  // ok  
        document.getElementById('QCprotectionActuationI').classList.remove('hidden');    // ok 
		document.getElementById('CPSprotectionActuationI').classList.remove('hidden');    // ok    
        document.getElementById('cclprotectionActuationI').classList.remove('hidden');   // ok 
        document.getElementById('cusprotectionActuationI').classList.add('hidden');
        document.getElementById('meterprotectionActuationI').classList.add('hidden');
        document.getElementById('seprotectionActuationI').classList.add('hidden');  
        document.getElementById('ptprotectionActuationI').classList.add('hidden');  
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');     
        document.getElementById('cdprotectionActuationI').classList.remove('hidden');      // ok  
        document.getElementById('phprotectionActuationI').classList.remove('hidden');     // ok    
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');    // ok 
        
          // protection 1 to protection 2  


		             // 1
	 document.getElementById('QGprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });      

 // PROTECTION 2 TO 3 


 document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 

	              // 2
	 document.getElementById('QCprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

  	              // 3
     document.getElementById('CPSprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');  
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

// 2 TO 3 PROTECTION 

	document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

     // 4 
	         
	document.getElementById('cclprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.add('hidden');  
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

// PROTECTION 2 TO 3

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

       // 5 	            
	document.getElementById('cdprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.remove('hidden');  // ok   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');       

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   


// PROTECTION 2 TO 3 


document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  


       // 6 

	   document.getElementById('phprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

// PROTECTION 2 TO 3

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  


      // 7 

	  document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');   
		
		
                	 document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  
   
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  
	///////////////////////////---------------------------------------------------///////////////////////////////
		observationBtn.addEventListener('click', ()=> {    

		document.getElementById('obheading').style.display = 'block';	   
        document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.remove('hidden');
		document.getElementById('Customer_no_present_ob1').classList.remove('hidden');
		document.getElementById('Planned_Outage_ob1').classList.remove('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.remove('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.add('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.remove('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		
		}); 

			
	 } else if(QGType==="cid"){
			document.getElementById('numberEquipment2').classList.add('hidden');
			document.getElementById('circuitBreakerEquipment2').classList.add('hidden');
			document.getElementById('isolatorEquipment2').classList.add('hidden');
			document.getElementById('busbarEquipment2').classList.add('hidden');
			document.getElementById('fuseEquipment2').classList.add('hidden');
			document.getElementById('fuseBaseEquipment2').classList.add('hidden');
			document.getElementById('terminalEquipment2').classList.add('hidden');
			document.getElementById('connectorEquipment2').classList.add('hidden');
			document.getElementById('hvmvEquipment2').classList.add('hidden');
			document.getElementById('secondaryEquipment2').classList.add('hidden');
			document.getElementById('lampPostEquipment2').classList.add('hidden');
			document.getElementById('lanternPLEquipment2').classList.add('hidden');
			document.getElementById('bulbEquipment2').classList.add('hidden');
			document.getElementById('currentContactorEquipment2').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment2').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment2').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment2').classList.add('hidden');
			document.getElementById('rcdEquipment2').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment2').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment2').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment2').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment2').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment2').classList.add('hidden');
			document.getElementById('otherEquipment2').classList.remove('hidden');
			document.getElementById('lockDoorEquipment2').classList.add('hidden');
			document.getElementById('mcbEquipment2').classList.add('hidden');
			document.getElementById('cableTrenchEquipment2').classList.add('hidden');
			document.getElementById('threadBodyEquipment2').classList.add('hidden');
			document.getElementById('ctEquipment2').classList.add('hidden');    

            // equipement 3  


			document.getElementById('otherEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 

///////////////////////// ------------------------------------------  ////////////////////////////////////////

                          /// protection    

        document.getElementById('QGprotectionActuationI').classList.remove('hidden');     // ok 
        document.getElementById('QCprotectionActuationI').classList.remove('hidden');       // ok 
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');        
        document.getElementById('cclprotectionActuationI').classList.remove('hidden');     // ok 
        document.getElementById('cusprotectionActuationI').classList.remove('hidden');      // ok 
        document.getElementById('meterprotectionActuationI').classList.add('hidden');
        document.getElementById('seprotectionActuationI').classList.remove('hidden');    // ok 
        document.getElementById('ptprotectionActuationI').classList.remove('hidden');    // ok 
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');     
        document.getElementById('cdprotectionActuationI').classList.add('hidden');         
        document.getElementById('phprotectionActuationI').classList.remove('hidden');   // ok       
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');   // ok         
          // protection 1 to protection 2  
		             // 1
	 document.getElementById('QGprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });      
// PROTECTION 2 TO 3 

document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 

     // 2
	 document.getElementById('QCprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

     // 3 

	  document.getElementById('cclprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.add('hidden');  
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

// PROTECTION 2 TO 3 

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

	   //4 

	  document.getElementById('cusprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.add('hidden');  
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.remove('hidden');   // ok 

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   


  // PROTECTION 2 TO 3 

  document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  



document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 

   document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  



document.getElementById('rcdprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  
                		document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 


      // 5 
	  
	  document.getElementById('seprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');   
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('sehvprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('FeederprotectionActuationII').classList.remove('hidden');    // ok 
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');    

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   


  // PROTECTION 2 TO 3 


  document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

	 // 6 

	 document.getElementById('ptprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');   
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');    
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');     
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');    

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   


// PROTECTION 2 TO 3


document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

      // 7 

	  document.getElementById('phprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

// PROTECTION 2 TO 3 
document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  


     // 8  

	 document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');   
		
		 
		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  


    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  

	///////////////////////////---------------------------------------------------///////////////////////////////

		observationBtn.addEventListener('click', ()=> {     

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.remove('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.remove('hidden');
		document.getElementById('Planned_Outage_ob1').classList.remove('hidden');
		document.getElementById('Spark_ob1').classList.add('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.remove('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.add('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.remove('hidden'); 
		

		}); 
    
			}else if(QGType==="riser"){
			document.getElementById('numberEquipment2').classList.add('hidden');
			document.getElementById('circuitBreakerEquipment2').classList.add('hidden');
			document.getElementById('isolatorEquipment2').classList.add('hidden');
			document.getElementById('busbarEquipment2').classList.add('hidden');
			document.getElementById('fuseEquipment2').classList.add('hidden');
			document.getElementById('fuseBaseEquipment2').classList.add('hidden');
			document.getElementById('terminalEquipment2').classList.remove('hidden');
			document.getElementById('connectorEquipment2').classList.remove('hidden');
			document.getElementById('hvmvEquipment2').classList.add('hidden');
			document.getElementById('secondaryEquipment2').classList.add('hidden');
			document.getElementById('lampPostEquipment2').classList.add('hidden');
			document.getElementById('lanternPLEquipment2').classList.add('hidden');
			document.getElementById('bulbEquipment2').classList.add('hidden');
			document.getElementById('currentContactorEquipment2').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment2').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment2').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment2').classList.add('hidden');
			document.getElementById('rcdEquipment2').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment2').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment2').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment2').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment2').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment2').classList.add('hidden');
			document.getElementById('otherEquipment2').classList.remove('hidden');
			document.getElementById('lockDoorEquipment2').classList.add('hidden');
			document.getElementById('mcbEquipment2').classList.add('hidden');
			document.getElementById('cableTrenchEquipment2').classList.add('hidden');
			document.getElementById('threadBodyEquipment2').classList.remove('hidden');
			document.getElementById('ctEquipment2').classList.add('hidden'); 


            // equipement 3 

			document.getElementById('connectorEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.remove('hidden');
document.getElementById('ph2').classList.remove('hidden');
document.getElementById('ph3').classList.remove('hidden');
document.getElementById('phn').classList.remove('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 

document.getElementById('terminalEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.remove('hidden');
document.getElementById('ph2').classList.remove('hidden');
document.getElementById('ph3').classList.remove('hidden');
document.getElementById('phn').classList.remove('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 

document.getElementById('otherEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 


document.getElementById('threadBodyEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.remove('hidden');
document.getElementById('ph2').classList.remove('hidden');
document.getElementById('ph3').classList.remove('hidden');
document.getElementById('phn').classList.remove('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 


////////////////////////////-------------------------------------------------//////////////////////////////			
             
                          /// protection    

        document.getElementById('QGprotectionActuationI').classList.remove('hidden');   // ok   
        document.getElementById('QCprotectionActuationI').classList.remove('hidden');     // ok      
		document.getElementById('CPSprotectionActuationI').classList.remove('hidden');        // ok  
        document.getElementById('cclprotectionActuationI').classList.remove('hidden');       // ok 
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');
        document.getElementById('seprotectionActuationI').classList.add('hidden');     
        document.getElementById('ptprotectionActuationI').classList.add('hidden');     
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');     
        document.getElementById('cdprotectionActuationI').classList.add('hidden');         
        document.getElementById('phprotectionActuationI').classList.remove('hidden');    // ok        
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');   // ok        
        




                  // protection 1 to protection 2 link 

    
		     
		             // 1
	 document.getElementById('QGprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });      		   
	     			  
// PROTECTION 2 TO 3 


document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 

                       // 2
	 document.getElementById('QCprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   


         
	              // 3
     document.getElementById('CPSprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');  
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   


// PROTECTION 2 TO 3


document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

           
	      // 4 
	            
	document.getElementById('cclprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.add('hidden');  
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

// PROTECTION 2 TO 3 

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

    // 5 
	document.getElementById('phprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

// PROTECTION 2 TO 3
document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

 

     // 6   

	 document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden'); 
		
		 
	              	document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });
	
	///////////////////////////---------------------------------------------------///////////////////////////////

		observationBtn.addEventListener('click', ()=> {    

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.remove('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.add('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.remove('hidden');
		document.getElementById('Planned_Outage_ob1').classList.remove('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.add('hidden');
		document.getElementById('Open_circuit_ob1').classList.remove('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.remove('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

		});

			}else if(QGType==="boxCT"){
			document.getElementById('numberEquipment2').classList.add('hidden');
			document.getElementById('circuitBreakerEquipment2').classList.add('hidden');
			document.getElementById('isolatorEquipment2').classList.add('hidden');
			document.getElementById('busbarEquipment2').classList.remove('hidden'); // ok 
			document.getElementById('fuseEquipment2').classList.add('hidden');
			document.getElementById('fuseBaseEquipment2').classList.add('hidden');
			document.getElementById('terminalEquipment2').classList.remove('hidden'); // ok 
			document.getElementById('connectorEquipment2').classList.add('hidden');
			document.getElementById('hvmvEquipment2').classList.add('hidden');
			document.getElementById('secondaryEquipment2').classList.add('hidden');
			document.getElementById('lampPostEquipment2').classList.add('hidden');
			document.getElementById('lanternPLEquipment2').classList.add('hidden');
			document.getElementById('bulbEquipment2').classList.add('hidden');
			document.getElementById('currentContactorEquipment2').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment2').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment2').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment2').classList.add('hidden');
			document.getElementById('rcdEquipment2').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment2').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment2').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment2').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment2').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment2').classList.add('hidden');
			document.getElementById('otherEquipment2').classList.remove('hidden'); // ok 
			document.getElementById('lockDoorEquipment2').classList.add('hidden');
			document.getElementById('mcbEquipment2').classList.add('hidden');
			document.getElementById('cableTrenchEquipment2').classList.add('hidden');
			document.getElementById('threadBodyEquipment2').classList.add('hidden');
			document.getElementById('ctEquipment2').classList.add('hidden');     




                // equipment 3 

				document.getElementById('terminalEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.remove('hidden');
document.getElementById('ph2').classList.remove('hidden');
document.getElementById('ph3').classList.remove('hidden');
document.getElementById('phn').classList.remove('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 


// 4 
document.getElementById('otherEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 


// 5 

document.getElementById('busbarEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
	document.getElementById('ph1').classList.remove('hidden');
	document.getElementById('ph2').classList.remove('hidden');
	document.getElementById('ph3').classList.remove('hidden');
	document.getElementById('phn').classList.remove('hidden');
}
else 
{
	document.getElementById('ph1').classList.add('hidden');
	document.getElementById('ph2').classList.add('hidden');
	document.getElementById('ph3').classList.add('hidden');
	document.getElementById('phn').classList.add('hidden');

}
});   


///////////////////////-----------------------------------------------------------///////////////////////////////

                             /// protection    

        document.getElementById('QGprotectionActuationI').classList.remove('hidden');   // ok     
        document.getElementById('QCprotectionActuationI').classList.remove('hidden');   // ok          
		document.getElementById('CPSprotectionActuationI').classList.remove('hidden');  // ok       
        document.getElementById('cclprotectionActuationI').classList.remove('hidden');   // ok    
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');
        document.getElementById('seprotectionActuationI').classList.add('hidden');     
        document.getElementById('ptprotectionActuationI').classList.add('hidden');     
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');     
        document.getElementById('cdprotectionActuationI').classList.add('hidden');         
        document.getElementById('phprotectionActuationI').classList.remove('hidden');     // ok         
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');  // ok          
        



                    // protection 1 to protection 2 link 

    
		     
		             // 1
	 document.getElementById('QGprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });      		   
	     			  
  // PROTECTION 2 TO 3 

  document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 

        // 2
	 document.getElementById('QCprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   


         
	              // 3
     document.getElementById('CPSprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');  
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

// PROTECTION 2 TO 3 
document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

	      // 4 	            
	document.getElementById('cclprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.add('hidden');  
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

 // PROTECTION 2 TO 3
 document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

   
    // 5 
	document.getElementById('phprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   


// PROTECTION 2 TO 3


document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  


     // 6   

	 document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');   
		
		            document.getElementById('pah1').classList.add('hidden'); 
		            document.getElementById('pah2').classList.add('hidden');  
				    document.getElementById('pah3').classList.add('hidden'); 
				    document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    }); 
	///////////////////////////---------------------------------------------------///////////////////////////////

		observationBtn.addEventListener('click', ()=> {  


		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.remove('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.add('hidden');
		
		document.getElementById('Unsealed_ob1').classList.remove('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.add('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

		});


			}else if(QGType==="meterBoardBox"){
			document.getElementById('numberEquipment2').classList.add('hidden');
			document.getElementById('circuitBreakerEquipment2').classList.add('hidden');
			document.getElementById('isolatorEquipment2').classList.add('hidden');
			document.getElementById('busbarEquipment2').classList.add('hidden');
			document.getElementById('fuseEquipment2').classList.add('hidden');
			document.getElementById('fuseBaseEquipment2').classList.add('hidden');
			document.getElementById('terminalEquipment2').classList.remove('hidden');
			document.getElementById('connectorEquipment2').classList.add('hidden');
			document.getElementById('hvmvEquipment2').classList.add('hidden');
			document.getElementById('secondaryEquipment2').classList.add('hidden');
			document.getElementById('lampPostEquipment2').classList.add('hidden');
			document.getElementById('lanternPLEquipment2').classList.add('hidden');
			document.getElementById('bulbEquipment2').classList.add('hidden');
			document.getElementById('currentContactorEquipment2').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment2').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment2').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment2').classList.add('hidden');
			document.getElementById('rcdEquipment2').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment2').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment2').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment2').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment2').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment2').classList.add('hidden');
			document.getElementById('otherEquipment2').classList.remove('hidden');
			document.getElementById('lockDoorEquipment2').classList.add('hidden');
			document.getElementById('mcbEquipment2').classList.add('hidden');
			document.getElementById('cableTrenchEquipment2').classList.add('hidden');
			document.getElementById('threadBodyEquipment2').classList.add('hidden');
			document.getElementById('ctEquipment2').classList.add('hidden');   


             // equipement 3 


			 document.getElementById('terminalEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.remove('hidden');
document.getElementById('ph2').classList.remove('hidden');
document.getElementById('ph3').classList.remove('hidden');
document.getElementById('phn').classList.remove('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 


// 4 
document.getElementById('otherEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 

///////////////////-----------------------------------------------------------------////////////////////////////

                                     /// protection    

        document.getElementById('QGprotectionActuationI').classList.remove('hidden');   // ok     
        document.getElementById('QCprotectionActuationI').classList.remove('hidden');   // ok          
		document.getElementById('CPSprotectionActuationI').classList.remove('hidden');  // ok       
        document.getElementById('cclprotectionActuationI').classList.remove('hidden');   // ok    
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');
        document.getElementById('seprotectionActuationI').classList.add('hidden');     
        document.getElementById('ptprotectionActuationI').classList.add('hidden');     
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');     
        document.getElementById('cdprotectionActuationI').classList.add('hidden');         
        document.getElementById('phprotectionActuationI').classList.remove('hidden');     // ok         
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');  // ok          
        


                          // protection 1 to protection 2 link 

    
		     
		             // 1
	 document.getElementById('QGprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });      		   
	     			  
// PROTECTION 2 TO 3 

document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 
    
                   // 2
	 document.getElementById('QCprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   


         
	              // 3
     document.getElementById('CPSprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');  
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

// PROTECTION 2 TO 3 
document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

           	      // 4 
	            
	document.getElementById('cclprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.add('hidden');  
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

// PROTECTION 2 TO 3
document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  


    // 5 
	document.getElementById('phprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   


// PROTECTION 2 TO 3


document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

     // 6   
	 document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');  
		
	 	 
	               	document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    }); 
	
	///////////////////////////---------------------------------------------------///////////////////////////////
		observationBtn.addEventListener('click', ()=> {   

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.remove('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.remove('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.add('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

		});


			}else if(QGType==="blackBox"){
			document.getElementById('numberEquipment2').classList.add('hidden');
			document.getElementById('circuitBreakerEquipment2').classList.add('hidden');
			document.getElementById('isolatorEquipment2').classList.add('hidden');
			document.getElementById('busbarEquipment2').classList.add('hidden');
			document.getElementById('fuseEquipment2').classList.add('hidden');
			document.getElementById('fuseBaseEquipment2').classList.add('hidden');
			document.getElementById('terminalEquipment2').classList.remove('hidden');
			document.getElementById('connectorEquipment2').classList.remove('hidden');
			document.getElementById('hvmvEquipment2').classList.add('hidden');
			document.getElementById('secondaryEquipment2').classList.add('hidden');
			document.getElementById('lampPostEquipment2').classList.add('hidden');
			document.getElementById('lanternPLEquipment2').classList.add('hidden');
			document.getElementById('bulbEquipment2').classList.add('hidden');
			document.getElementById('currentContactorEquipment2').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment2').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment2').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment2').classList.add('hidden');
			document.getElementById('rcdEquipment2').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment2').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment2').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment2').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment2').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment2').classList.add('hidden');
			document.getElementById('otherEquipment2').classList.remove('hidden');
			document.getElementById('lockDoorEquipment2').classList.add('hidden');
			document.getElementById('mcbEquipment2').classList.add('hidden');
			document.getElementById('cableTrenchEquipment2').classList.add('hidden');
			document.getElementById('threadBodyEquipment2').classList.add('hidden');
			document.getElementById('ctEquipment2').classList.add('hidden');  


            // equipement 3 


			 
document.getElementById('connectorEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.remove('hidden');
document.getElementById('ph2').classList.remove('hidden');
document.getElementById('ph3').classList.remove('hidden');
document.getElementById('phn').classList.remove('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 


document.getElementById('otherEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 



document.getElementById('terminalEquipment2').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('ph1').classList.remove('hidden');
document.getElementById('ph2').classList.remove('hidden');
document.getElementById('ph3').classList.remove('hidden');
document.getElementById('phn').classList.remove('hidden');
}
else 
{
document.getElementById('ph1').classList.add('hidden');
document.getElementById('ph2').classList.add('hidden');
document.getElementById('ph3').classList.add('hidden');
document.getElementById('phn').classList.add('hidden');

}
}); 
/////////////////////-------------------------------------------------------------------------/////////////////////
         
                                     /// protection ------------------------------------ 

        document.getElementById('QGprotectionActuationI').classList.remove('hidden');   // ok     
        document.getElementById('QCprotectionActuationI').classList.remove('hidden');   // ok          
		document.getElementById('CPSprotectionActuationI').classList.remove('hidden');  // ok       
        document.getElementById('cclprotectionActuationI').classList.remove('hidden');   // ok    
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');
        document.getElementById('seprotectionActuationI').classList.add('hidden');     
        document.getElementById('ptprotectionActuationI').classList.add('hidden');     
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');     
        document.getElementById('cdprotectionActuationI').classList.add('hidden');         
        document.getElementById('phprotectionActuationI').classList.add('hidden');           
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');  // ok          
 
                     // protection 1 to protection 2 link 

	 
         	             // 1
	 document.getElementById('QGprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });      		   
	     			  

     // PROTECTION 2 TO 3 
	  
	   
     document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 

	 // 2
	 document.getElementById('QCprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   


          
            
	              // 3
     document.getElementById('CPSprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');  
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   


 // PROTECTION 2 TO 3 

 document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

          // 4 
	            
	document.getElementById('cclprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.add('hidden');  
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   


// PROTECTION 2 TO 3


document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

    // 5   

	 document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');    
		
		
	                	document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  
	
	///////////////////////////---------------------------------------------------///////////////////////////////


// obervation 

        // document.getElementById('Trip_ob1').classList.remove('hidden');
		// document.getElementById('Brunt_ob1').classList.remove('hidden');
		// document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		// document.getElementById('Smoke_ob1').classList.remove('hidden');
		// document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		// document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		// document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		// document.getElementById('Customer_no_present_ob1').classList.remove('hidden');
		// document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		// document.getElementById('Spark_ob1').classList.remove('hidden');
		
		// document.getElementById('Unsealed_ob1').classList.add('hidden');
		// document.getElementById('Fused_ob1').classList.add('hidden');
		// document.getElementById('Out_of_order_ob1').classList.add('hidden');
		// document.getElementById('Disappeared_ob1').classList.add('hidden');
		// document.getElementById('Damage_ob1').classList.add('hidden');
		// document.getElementById('Open_circuit_ob1').classList.add('hidden');
		// document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		// document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		// document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		// document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		// document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		// document.getElementById('Bad_contact_ob1').classList.remove('hidden'); 
		// document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

        observationBtn.addEventListener('click', ()=> {     


		document.getElementById('obheading').style.display = 'block';			
		document.getElementById('Trip_ob1').classList.remove('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.remove('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.add('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.remove('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

		});


			}else if(QGType==="meter"){
			document.getElementById('numberEquipment3').classList.remove('hidden');
			document.getElementById('circuitBreakerEquipment3').classList.add('hidden');
			document.getElementById('isolatorEquipment3').classList.add('hidden');
			document.getElementById('busbarEquipment3').classList.add('hidden');
			document.getElementById('fuseEquipment3').classList.add('hidden');
			document.getElementById('fuseBaseEquipment3').classList.add('hidden');
			document.getElementById('terminalEquipment3').classList.remove('hidden');
			document.getElementById('connectorEquipment3').classList.add('hidden');
			document.getElementById('hvmvEquipment3').classList.add('hidden');
			document.getElementById('secondaryEquipment3').classList.add('hidden');
			document.getElementById('lampPostEquipment3').classList.add('hidden');
			document.getElementById('lanternPLEquipment3').classList.add('hidden');
			document.getElementById('bulbEquipment3').classList.add('hidden'); 
			document.getElementById('bracketEquipment3').classList.add('hidden');
			document.getElementById('currentContactorEquipment3').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment3').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('rcdEquipment3').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment3').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment3').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment3').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment3').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment3').classList.add('hidden');
			document.getElementById('otherEquipment3').classList.remove('hidden');
			document.getElementById('lockDoorEquipment3').classList.add('hidden');
			document.getElementById('mcbEquipment3').classList.remove('hidden');
			document.getElementById('cableTrenchEquipment3').classList.add('hidden');
			document.getElementById('threadBodyEquipment3').classList.add('hidden');
			document.getElementById('ctEquipment3').classList.remove('hidden');              


           // equipement 3             

		   document.getElementById('terminalEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('otherEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


/////  ------     ////////////////////-----------------------------------------------///////////////////////////            
                                     /// protection ------------------------------------ 

        document.getElementById('QGprotectionActuationI').classList.remove('hidden');   // ok      
        document.getElementById('QCprotectionActuationI').classList.remove('hidden');    // ok            
		document.getElementById('CPSprotectionActuationI').classList.remove('hidden');    // ok        
        document.getElementById('cclprotectionActuationI').classList.remove('hidden');     // ok     
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.remove('hidden');     // ok 
        document.getElementById('seprotectionActuationI').classList.add('hidden');     
        document.getElementById('ptprotectionActuationI').classList.add('hidden');     
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');     
        document.getElementById('cdprotectionActuationI').classList.add('hidden');         
        document.getElementById('phprotectionActuationI').classList.remove('hidden');      // ok           
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');   // ok            
        


         // protection 1 to protection 2 link 



          
      // 1
	 document.getElementById('QGprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });      		   
	     			        
   // PROTECTION 2 TO 3 


   document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 

            // 2
	 document.getElementById('QCprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   


     
    // 3
    document.getElementById('CPSprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');  
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

	// PROTECTION 2 TO 3 

	document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

           
    // 4             
	document.getElementById('cclprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.add('hidden');  
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

// PROTECTION 2 TO 3
document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

    // 5 
            
	 document.getElementById('meterprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

  // PROTECTION 2 TO 3 

  document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

        
     // 6 
 
	document.getElementById('phprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   


     // PROTECTION 2 TO 3 


	 document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

     // 7 

	 document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');   
		
		
		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   


			document.getElementById('numberEquipment3').addEventListener('change', function () {
				var textboxField = document.getElementById('textbox');
				if (this.checked) {
					textboxField.classList.remove('hidden');
				}else {
					textboxField.classList.add('hidden');
				}
			});
			document.getElementById('mcbEquipment3').addEventListener('change', function () {
				var textboxField = document.getElementById('textbox');
				if (this.checked) {
					textboxField.classList.remove('hidden');
				}else {
					textboxField.classList.add('hidden');
				}
			});
			document.getElementById('ctEquipment3').addEventListener('change', function () {
				var textboxField = document.getElementById('textbox');
				if (this.checked) {
					textboxField.classList.remove('hidden');
				}else {
					textboxField.classList.add('hidden');
				}
			});
	
        observationBtn.addEventListener('click', ()=> {  

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.remove('hidden');
		document.getElementById('Planned_Outage_ob1').classList.remove('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.remove('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.remove('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		
		 }); 


		}    else if(QGType==="se"){
			document.getElementById('numberEquipment3').classList.remove('hidden'); // ok 
			document.getElementById('circuitBreakerEquipment3').classList.add('hidden');
			document.getElementById('isolatorEquipment3').classList.add('hidden');
			document.getElementById('busbarEquipment3').classList.add('hidden');
			document.getElementById('fuseEquipment3').classList.add('hidden');
			document.getElementById('fuseBaseEquipment3').classList.add('hidden');
			document.getElementById('terminalEquipment3').classList.remove('hidden'); // ok 
			document.getElementById('connectorEquipment3').classList.add('hidden');
			document.getElementById('hvmvEquipment3').classList.add('hidden'); 
			document.getElementById('bracketEquipment3').classList.add('hidden');
			document.getElementById('secondaryEquipment3').classList.remove('hidden'); // ok 
			document.getElementById('lampPostEquipment3').classList.add('hidden');
			document.getElementById('lanternPLEquipment3').classList.add('hidden');
			document.getElementById('bulbEquipment3').classList.add('hidden');
			document.getElementById('currentContactorEquipment3').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment3').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('rcdEquipment3').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment3').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment3').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment3').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment3').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment3').classList.add('hidden');
			document.getElementById('otherEquipment3').classList.remove('hidden'); // ok 
			document.getElementById('lockDoorEquipment3').classList.remove('hidden'); // ok 
			document.getElementById('mcbEquipment3').classList.add('hidden');
			document.getElementById('cableTrenchEquipment3').classList.remove('hidden'); // ok  
			document.getElementById('threadBodyEquipment3').classList.add('hidden');
			document.getElementById('ctEquipment3').classList.add('hidden');    



             // equipement 3 

			 document.getElementById('terminalEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('otherEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


/////// ----------------------------------------------------------------///////////////////////////////////////

                              /// protection ------------------------------------ 

        document.getElementById('QGprotectionActuationI').classList.add('hidden');         
        document.getElementById('QCprotectionActuationI').classList.add('hidden');                 
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');            
        document.getElementById('cclprotectionActuationI').classList.add('hidden');         
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');     
        document.getElementById('seprotectionActuationI').classList.remove('hidden');    // ok      
        document.getElementById('ptprotectionActuationI').classList.remove('hidden');    // ok  
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');     
        document.getElementById('cdprotectionActuationI').classList.add('hidden');         
        document.getElementById('phprotectionActuationI').classList.add('hidden');                 
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');     // ok          
        


          // protection 1 to protection 2 link 

     // 1         
    document.getElementById('seprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');   
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('sehvprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('FeederprotectionActuationII').classList.remove('hidden');    // ok 
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');    

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

  // PROTECTION 2 TO 3

  document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  
	     
    // 2         

	document.getElementById('ptprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok    
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');   
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');    // ok    
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');   
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');     
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');     

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

// PROTECTION 2 TO 3 

document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

    
    // 3 

	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');   
		
		 
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   
			document.getElementById('numberEquipment3').addEventListener('change', function () {
				var textboxField = document.getElementById('textbox');
				if (this.checked) {
					textboxField.classList.remove('hidden');
				}else {
					textboxField.classList.add('hidden');
				}
			});
			document.getElementById('mcbEquipment3').addEventListener('change', function () {
				var textboxField = document.getElementById('textbox');
				if (this.checked) {
					textboxField.classList.remove('hidden');
				}else {
					textboxField.classList.add('hidden');
				}
			});
			document.getElementById('ctEquipment3').addEventListener('change', function () {
				var textboxField = document.getElementById('textbox');
				if (this.checked) {
					textboxField.classList.remove('hidden');
				}else {
					textboxField.classList.add('hidden');
				}
			});
			///////////////////////////---------------------------------------------------///////////////////////////////


// obervation 
		observationBtn.addEventListener('click', ()=> {    

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.remove('hidden');
		document.getElementById('Brunt_ob1').classList.add('hidden');
		document.getElementById('Short_circuit_ob1').classList.add('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.add('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.remove('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

		}); 


		} else if(QGType==="pt"){
			document.getElementById('numberEquipment3').classList.remove('hidden'); // ok 
			document.getElementById('circuitBreakerEquipment3').classList.add('hidden');
			document.getElementById('isolatorEquipment3').classList.add('hidden');
			document.getElementById('busbarEquipment3').classList.add('hidden');
			document.getElementById('fuseEquipment3').classList.add('hidden');
			document.getElementById('fuseBaseEquipment3').classList.add('hidden');
		    document.getElementById('terminalEquipment3').classList.add('hidden');
			document.getElementById('connectorEquipment3').classList.add('hidden');
			document.getElementById('hvmvEquipment3').classList.add('hidden');
			document.getElementById('secondaryEquipment3').classList.remove('hidden'); // ok 
			document.getElementById('lampPostEquipment3').classList.add('hidden');
			document.getElementById('lanternPLEquipment3').classList.add('hidden'); 
			document.getElementById('bulbEquipment3').classList.add('hidden');
			document.getElementById('currentContactorEquipment3').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment3').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('rcdEquipment3').classList.add('hidden');
			document.getElementById('bracketEquipment3').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment3').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment3').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment3').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment3').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment3').classList.add('hidden');
			document.getElementById('otherEquipment3').classList.remove('hidden'); // ok 
			document.getElementById('lockDoorEquipment3').classList.remove('hidden'); // ok 
			document.getElementById('mcbEquipment3').classList.add('hidden');
			document.getElementById('cableTrenchEquipment3').classList.remove('hidden'); // ok 
			document.getElementById('threadBodyEquipment3').classList.add('hidden');
			document.getElementById('ctEquipment3').classList.add('hidden');    


         // equipement 3 
          
document.getElementById('otherEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('secondaryEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('numberEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('lockDoorEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('cableTrenchEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

	
/////////////////////-------------------------------------------------////////////////////////////////			
                                  /// protection ------------------------------------ 

        document.getElementById('QGprotectionActuationI').classList.add('hidden');         
        document.getElementById('QCprotectionActuationI').classList.add('hidden');                 
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');            
        document.getElementById('cclprotectionActuationI').classList.add('hidden');         
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');     
        document.getElementById('seprotectionActuationI').classList.remove('hidden');    // ok      
        document.getElementById('ptprotectionActuationI').classList.remove('hidden');    // ok  
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');     
        document.getElementById('cdprotectionActuationI').classList.add('hidden');         
        document.getElementById('phprotectionActuationI').classList.add('hidden');                 
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');     // ok          
        



         // protection 1 to protection 2 link 


         
           // 1         
    document.getElementById('seprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');   
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('sehvprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('FeederprotectionActuationII').classList.remove('hidden');    // ok 
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');    

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

    // PROTECTION 2 TO 3  


	document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

    // 2         

	document.getElementById('ptprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok    
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');   
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');    // ok    
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');   
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');     
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');     

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

// PROTECTION 2 TO 3 


document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  


    // 3 

	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');   
				
		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    }); 
	///////////////////////////---------------------------------------------------///////////////////////////////

// obervation 	
		observationBtn.addEventListener('click', ()=> {   

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.remove('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.add('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.add('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.remove('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

		 }); 


			}else if(QGType==="rmu"){
			document.getElementById('numberEquipment3').classList.remove('hidden'); // ok 
			document.getElementById('circuitBreakerEquipment3').classList.add('hidden');
			document.getElementById('isolatorEquipment3').classList.add('hidden');
			document.getElementById('busbarEquipment3').classList.add('hidden');
			document.getElementById('fuseEquipment3').classList.add('hidden');
			document.getElementById('fuseBaseEquipment3').classList.add('hidden');
			document.getElementById('terminalEquipment3').classList.add('hidden');
			document.getElementById('connectorEquipment3').classList.add('hidden');
			document.getElementById('hvmvEquipment3').classList.add('hidden');
			document.getElementById('secondaryEquipment3').classList.remove('hidden'); // ok 
			document.getElementById('lampPostEquipment3').classList.add('hidden');
			document.getElementById('lanternPLEquipment3').classList.add('hidden');
			document.getElementById('bulbEquipment3').classList.add('hidden'); 
			document.getElementById('bracketEquipment3').classList.add('hidden');
			document.getElementById('currentContactorEquipment3').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment3').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('rcdEquipment3').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment3').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment3').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment3').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment3').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment3').classList.add('hidden');
			document.getElementById('otherEquipment3').classList.remove('hidden'); // ok 
			document.getElementById('lockDoorEquipment3').classList.add('hidden');
			document.getElementById('mcbEquipment3').classList.add('hidden');
			document.getElementById('cableTrenchEquipment3').classList.add('hidden');
			document.getElementById('threadBodyEquipment3').classList.add('hidden');
			document.getElementById('ctEquipment3').classList.add('hidden');   

             
               // equipement 3 
    

			   document.getElementById('numberEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('secondaryEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('otherEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


///////////////---------------------------------------------------------------/////////////////////////////////			
			              // protection ------------------------------------ 

		document.getElementById('QGprotectionActuationI').classList.add('hidden');         
        document.getElementById('QCprotectionActuationI').classList.add('hidden');                 
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');            
        document.getElementById('cclprotectionActuationI').classList.add('hidden');         
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');     
        document.getElementById('seprotectionActuationI').classList.remove('hidden');    // ok      
        document.getElementById('ptprotectionActuationI').classList.remove('hidden');    // ok  
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');     
        document.getElementById('cdprotectionActuationI').classList.add('hidden');         
        document.getElementById('phprotectionActuationI').classList.add('hidden');                 
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');     // ok          
        


           // protection 1 to protection 2 link  


	// 1         
	document.getElementById('seprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');   
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('sehvprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('FeederprotectionActuationII').classList.remove('hidden');    // ok 
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');    

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

  // PROTECTION 2 TO 3 


  document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  


        // 2         

	document.getElementById('ptprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok    
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');   
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');    // ok    
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');   
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');     
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');     

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

// PROTECTION 2 TO 3

document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

    // 3 

	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');   
		 
		 
		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  


    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

	///////////////////////////---------------------------------------------------///////////////////////////////

		observationBtn.addEventListener('click', ()=> {    

		document.getElementById('obheading').style.display = 'block';	 
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.add('hidden');
		document.getElementById('Short_circuit_ob1').classList.add('hidden');
		document.getElementById('Smoke_ob1').classList.add('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.add('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.add('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.remove('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.add('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.remove('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

		}); 


			}else if(QGType==="transformer"){
			document.getElementById('numberEquipment3').classList.remove('hidden');
			document.getElementById('circuitBreakerEquipment3').classList.add('hidden');
			document.getElementById('isolatorEquipment3').classList.add('hidden');
			document.getElementById('busbarEquipment3').classList.add('hidden');
			document.getElementById('fuseEquipment3').classList.remove('hidden');
			document.getElementById('fuseBaseEquipment3').classList.add('hidden');
			document.getElementById('terminalEquipment3').classList.add('hidden');
			document.getElementById('connectorEquipment3').classList.add('hidden');
			document.getElementById('hvmvEquipment3').classList.add('hidden');
			document.getElementById('secondaryEquipment3').classList.remove('hidden');
			document.getElementById('lampPostEquipment3').classList.add('hidden');
			document.getElementById('lanternPLEquipment3').classList.add('hidden');
			document.getElementById('bulbEquipment3').classList.add('hidden'); 
			document.getElementById('bracketEquipment3').classList.add('hidden');
			document.getElementById('currentContactorEquipment3').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment3').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('rcdEquipment3').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment3').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment3').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment3').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment3').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment3').classList.add('hidden');
			document.getElementById('otherEquipment3').classList.remove('hidden');
			document.getElementById('lockDoorEquipment3').classList.add('hidden');
			document.getElementById('mcbEquipment3').classList.add('hidden');
			document.getElementById('cableTrenchEquipment3').classList.add('hidden');
			document.getElementById('threadBodyEquipment3').classList.add('hidden');
			document.getElementById('ctEquipment3').classList.add('hidden');   



              // equipement 3 

            
			  document.getElementById('numberEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 



document.getElementById('fuseEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('secondaryEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('otherEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


/////////////////////----------------------------------------------------////////////////////////////////////			

                 // protection ------------------------------------ 

		document.getElementById('QGprotectionActuationI').classList.add('hidden');         
        document.getElementById('QCprotectionActuationI').classList.add('hidden');                 
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');            
        document.getElementById('cclprotectionActuationI').classList.add('hidden');         
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');     
        document.getElementById('seprotectionActuationI').classList.remove('hidden');  // ok          
        document.getElementById('ptprotectionActuationI').classList.remove('hidden');    // ok   
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.remove('hidden');    // ok 
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');     
        document.getElementById('cdprotectionActuationI').classList.add('hidden');         
        document.getElementById('phprotectionActuationI').classList.add('hidden');                 
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');   // ok            
        
            
        // protection 1 to protection 2 link 
           
         
		// 1         
	document.getElementById('seprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');   
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('sehvprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('FeederprotectionActuationII').classList.remove('hidden');    // ok 
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');    

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   
 
// PROTECTION 2 TO 3 

document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

         
     // 2 
	 
	 document.getElementById('ptprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok    
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');   
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');    // ok    
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');   
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');     
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');     

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   
     
  // PROTECTION 2 TO 3 
  document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  


     // 3 
	  
	 document.getElementById('rmuprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.remove('hidden');  // ok    
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mvfuseprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');   
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');        
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');   
		document.getElementById('FeederprotectionActuationII').classList.remove('hidden');  // ok     
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');     

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   


// PROTECTION 2 TO 3 

  document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 
	
	
	document.getElementById('mvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 

     
	// 4 

    document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');   
				
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   
///////////////////////////---------------------------------------------------///////////////////////////////

		observationBtn.addEventListener('click', ()=> {   

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.add('hidden');
		document.getElementById('Short_circuit_ob1').classList.add('hidden');
		document.getElementById('Smoke_ob1').classList.add('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		document.getElementById('Water_leakage_ob1').classList.add('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.add('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.remove('hidden');
		document.getElementById('Out_of_order_ob1').classList.remove('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.add('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.remove('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.remove('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

		 }); 


		}  else if(QGType==="qgbt"){
			document.getElementById('numberEquipment3').classList.remove('hidden');
			document.getElementById('circuitBreakerEquipment3').classList.add('hidden');
			document.getElementById('isolatorEquipment3').classList.remove('hidden');
			document.getElementById('busbarEquipment3').classList.remove('hidden');
			document.getElementById('fuseEquipment3').classList.remove('hidden');
			document.getElementById('fuseBaseEquipment3').classList.remove('hidden');
			document.getElementById('terminalEquipment3').classList.remove('hidden');
			document.getElementById('connectorEquipment3').classList.add('hidden');
			document.getElementById('hvmvEquipment3').classList.add('hidden');
			document.getElementById('secondaryEquipment3').classList.add('hidden');
			document.getElementById('lampPostEquipment3').classList.add('hidden');
			document.getElementById('lanternPLEquipment3').classList.add('hidden');
			document.getElementById('bulbEquipment3').classList.add('hidden'); 
			document.getElementById('bracketEquipment3').classList.add('hidden');
			document.getElementById('currentContactorEquipment3').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment3').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('rcdEquipment3').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment3').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment3').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment3').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment3').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment3').classList.add('hidden');
			document.getElementById('otherEquipment3').classList.remove('hidden');
			document.getElementById('lockDoorEquipment3').classList.add('hidden');
			document.getElementById('mcbEquipment3').classList.add('hidden');
			document.getElementById('cableTrenchEquipment3').classList.add('hidden');
			document.getElementById('threadBodyEquipment3').classList.add('hidden');
			document.getElementById('ctEquipment3').classList.add('hidden');     


               // equipement 3 


			   document.getElementById('busbarEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('fuseEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('fuseBaseEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('terminalEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('otherEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

			////////////////////----------------------------------------////////////////////////
             			
                 // protection ------------------------------------ 

		document.getElementById('QGprotectionActuationI').classList.add('hidden');         
        document.getElementById('QCprotectionActuationI').classList.add('hidden');                 
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');            
        document.getElementById('cclprotectionActuationI').classList.add('hidden');         
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');     
        document.getElementById('seprotectionActuationI').classList.add('hidden');           
        document.getElementById('ptprotectionActuationI').classList.add('hidden');       
        document.getElementById('transprotectionActuationI').classList.remove('hidden');   // ok  
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');   
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden');     // ok 
        document.getElementById('cdprotectionActuationI').classList.add('hidden');         
        document.getElementById('phprotectionActuationI').classList.add('hidden');                 
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');   // ok             
        
            
          // protection 1 to protection 2 link 

          //1 

	document.getElementById('transprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mvfuseprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');   
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  

   // PROTECTION 2 TO 3 
   
   document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 
	
	
	document.getElementById('mvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 
   
        // 2

	  document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    }); 

  // PROTECTION 2 TO 3 

  document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

     // 3 
   
     document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');  
		 
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   
	///////////////////////////---------------------------------------------------///////////////////////////////
		observationBtn.addEventListener('click', ()=> {   

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		document.getElementById('Water_leakage_ob1').classList.add('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.remove('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.add('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.remove('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

		 }); 


			}else if(QGType==="cd"){
			
			document.getElementById('numberEquipment3').classList.remove('hidden');
			document.getElementById('circuitBreakerEquipment3').classList.add('hidden');
			document.getElementById('isolatorEquipment3').classList.add('hidden');
			document.getElementById('busbarEquipment3').classList.remove('hidden');
			document.getElementById('fuseEquipment3').classList.remove('hidden');
			document.getElementById('fuseBaseEquipment3').classList.remove('hidden');
			document.getElementById('terminalEquipment3').classList.remove('hidden');
			document.getElementById('connectorEquipment3').classList.add('hidden');
			document.getElementById('hvmvEquipment3').classList.add('hidden');
			document.getElementById('secondaryEquipment3').classList.add('hidden');
			document.getElementById('lampPostEquipment3').classList.add('hidden');
			document.getElementById('lanternPLEquipment3').classList.add('hidden');
			document.getElementById('bulbEquipment3').classList.add('hidden'); 
			document.getElementById('bracketEquipment3').classList.add('hidden');
			document.getElementById('currentContactorEquipment3').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment3').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('rcdEquipment3').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment3').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment3').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment3').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment3').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment3').classList.add('hidden');
			document.getElementById('otherEquipment3').classList.remove('hidden');
			document.getElementById('lockDoorEquipment3').classList.remove('hidden');
			document.getElementById('mcbEquipment3').classList.add('hidden');
			document.getElementById('cableTrenchEquipment3').classList.add('hidden');
			document.getElementById('threadBodyEquipment3').classList.add('hidden');
			document.getElementById('ctEquipment3').classList.add('hidden');        


             // equipement 3 


			 document.getElementById('busbarEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('fuseEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('fuseBaseEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('terminalEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('otherEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


///////////////////////---------------------------------------------//////////////////////////////////////////

                 // protection ------------------------------------ 

		document.getElementById('QGprotectionActuationI').classList.add('hidden');         
        document.getElementById('QCprotectionActuationI').classList.add('hidden');                 
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');            
        document.getElementById('cclprotectionActuationI').classList.add('hidden');         
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');     
        document.getElementById('seprotectionActuationI').classList.add('hidden');           
        document.getElementById('ptprotectionActuationI').classList.add('hidden');       
        document.getElementById('transprotectionActuationI').classList.remove('hidden');    // ok 
        document.getElementById('rmuprotectionActuationI').classList.remove('hidden');    // ok 
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden');    // ok   
        document.getElementById('cdprotectionActuationI').classList.remove('hidden');    // ok       
        document.getElementById('phprotectionActuationI').classList.add('hidden');                 
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');  // ok               
        
             

        // protection 1 to protection 2 link 

 
            // 1 
	document.getElementById('transprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mvfuseprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');   
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  

   // PROTECTION 2 TO 3 

   document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 
    
	document.getElementById('mvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 


    // 2 
	document.getElementById('rmuprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');   // ok  
		document.getElementById('mvfuseprotectionActuationII').classList.remove('hidden');    // ok 
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');   
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');       
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  


// PROTECTION 2 TO 3 


document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 
    
	document.getElementById('mvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 


    // 3 
	document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    }); 


  // PROTECTION 2 TO 3 


  document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

    // 4 
	document.getElementById('cdprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');     // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');    // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    }); 

// PROTECTION 2 TO 3 

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

    // 5 
	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');    
		
                	 document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  
   
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    }); 
	///////////////////////////---------------------------------------------------///////////////////////////////
	
		observationBtn.addEventListener('click', ()=> {   

		document.getElementById('obheading').style.display = 'block';		
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.remove('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.remove('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.remove('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.remove('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 


		 }); 

        

			}else if(QGType==="ph") {
			document.getElementById('numberEquipment3').classList.remove('hidden');
			document.getElementById('circuitBreakerEquipment3').classList.add('hidden');
			document.getElementById('isolatorEquipment3').classList.add('hidden');
			document.getElementById('busbarEquipment3').classList.add('hidden');
			document.getElementById('fuseEquipment3').classList.remove('hidden');
			document.getElementById('fuseBaseEquipment3').classList.remove('hidden');
			document.getElementById('terminalEquipment3').classList.remove('hidden');
			document.getElementById('connectorEquipment3').classList.add('hidden');
			document.getElementById('hvmvEquipment3').classList.add('hidden');
			document.getElementById('secondaryEquipment3').classList.add('hidden');
			document.getElementById('lampPostEquipment3').classList.add('hidden');
			document.getElementById('lanternPLEquipment3').classList.add('hidden');
			document.getElementById('bulbEquipment3').classList.add('hidden'); 
			document.getElementById('bracketEquipment3').classList.add('hidden');
			document.getElementById('currentContactorEquipment3').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment3').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('rcdEquipment3').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment3').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment3').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment3').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment3').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment3').classList.add('hidden');
			document.getElementById('otherEquipment3').classList.remove('hidden');
			document.getElementById('lockDoorEquipment3').classList.remove('hidden');
			document.getElementById('mcbEquipment3').classList.add('hidden');
			document.getElementById('cableTrenchEquipment3').classList.add('hidden');
			document.getElementById('threadBodyEquipment3').classList.add('hidden');
			document.getElementById('ctEquipment3').classList.add('hidden');    


             // equipement 3 

 
			 document.getElementById('fuseEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('fuseBaseEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('terminalEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('otherEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

////////////////////////--------------------------------------------------/////////////////////////////////

                      // protection ------------------------------------ 

		document.getElementById('QGprotectionActuationI').classList.add('hidden');         
        document.getElementById('QCprotectionActuationI').classList.add('hidden');                 
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');            
        document.getElementById('cclprotectionActuationI').classList.add('hidden');         
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');     
        document.getElementById('seprotectionActuationI').classList.add('hidden');           
        document.getElementById('ptprotectionActuationI').classList.add('hidden');       
        document.getElementById('transprotectionActuationI').classList.add('hidden');     
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');    
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden');  // ok      
        document.getElementById('cdprotectionActuationI').classList.remove('hidden');     // ok       
        document.getElementById('phprotectionActuationI').classList.remove('hidden');       // ok           
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');     // ok              
        


          // protection 1 to protection 2 link 

     // 1      
	document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  

// PROTECTION 2 TO 3 


document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

         
    // 2 
	
	document.getElementById('cdprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    }); 

// PROTECTION 2 TO 3 


document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  


    // 3 

	document.getElementById('phprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

// PROTECTION 2 TO 3 

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

     // 4 

	 document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');    
		
		
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  


    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  
	///////////////////////////---------------------------------------------------///////////////////////////////
		observationBtn.addEventListener('click', ()=> {    

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		document.getElementById('Water_leakage_ob1').classList.add('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.add('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.remove('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.remove('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		
	
		}); 


			}else if(QGType==="cxd"){
				document.getElementById('numberEquipment3').classList.add('hidden');
			document.getElementById('circuitBreakerEquipment3').classList.add('hidden');
			document.getElementById('isolatorEquipment3').classList.add('hidden');
			document.getElementById('busbarEquipment3').classList.remove('hidden');
			document.getElementById('fuseEquipment3').classList.add('hidden');
			document.getElementById('fuseBaseEquipment3').classList.add('hidden');
			document.getElementById('terminalEquipment3').classList.remove('hidden');
			document.getElementById('connectorEquipment3').classList.add('hidden');
			document.getElementById('hvmvEquipment3').classList.add('hidden');
			document.getElementById('secondaryEquipment3').classList.add('hidden');
			document.getElementById('lampPostEquipment3').classList.add('hidden');
			document.getElementById('lanternPLEquipment3').classList.add('hidden');
			document.getElementById('bulbEquipment3').classList.add('hidden');
			document.getElementById('currentContactorEquipment3').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment3').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('rcdEquipment3').classList.add('hidden');
			document.getElementById('bracketEquipment3').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment3').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment3').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment3').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment3').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment3').classList.add('hidden');
			document.getElementById('otherEquipment3').classList.remove('hidden');
			document.getElementById('lockDoorEquipment3').classList.remove('hidden');
			document.getElementById('mcbEquipment3').classList.add('hidden');
			document.getElementById('cableTrenchEquipment3').classList.add('hidden');
			document.getElementById('threadBodyEquipment3').classList.add('hidden');
			document.getElementById('ctEquipment3').classList.add('hidden'); 


             // equipement 3 

			 document.getElementById('busbarEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

			 
document.getElementById('terminalEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('otherEquipment3').addEventListener('change' , function() {
if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 
    		 

///////////////////--------------------------------------------------------/////////////////////

                      // protection ------------------------------------ 

		document.getElementById('QGprotectionActuationI').classList.add('hidden');         
        document.getElementById('QCprotectionActuationI').classList.add('hidden');                 
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');            
        document.getElementById('cclprotectionActuationI').classList.add('hidden');         
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');     
        document.getElementById('seprotectionActuationI').classList.add('hidden');           
        document.getElementById('ptprotectionActuationI').classList.add('hidden');       
        document.getElementById('transprotectionActuationI').classList.add('hidden');     
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');    
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden');  // ok      
        document.getElementById('cdprotectionActuationI').classList.remove('hidden');     // ok       
        document.getElementById('phprotectionActuationI').classList.remove('hidden');       // ok           
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');     // ok              
    

          // protection 1 to protection 2 link 

		 document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

  // PROTECTION 2 TO 3 

  document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });   


	document.getElementById('cdprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

 // PROTECTION 2 TO 3 

 document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

	document.getElementById('phprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    }); 

  // PROTECTION 2 TO 3 

  document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  
        
	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
		 
		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  


    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });
     ///////////////////////////---------------------------------------------------///////////////////////////////

		observationBtn.addEventListener('click', ()=> {   
		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.remove('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.remove('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.remove('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

		 }); 

			}else if(QGType==="cdip"){
				document.getElementById('numberEquipment3').classList.remove('hidden');
			document.getElementById('circuitBreakerEquipment3').classList.add('hidden');
			document.getElementById('isolatorEquipment3').classList.add('hidden');
			document.getElementById('busbarEquipment3').classList.add('hidden');
			document.getElementById('fuseEquipment3').classList.remove('hidden');
			document.getElementById('fuseBaseEquipment3').classList.remove('hidden');
			document.getElementById('terminalEquipment3').classList.remove('hidden');
			document.getElementById('connectorEquipment3').classList.add('hidden');
			document.getElementById('hvmvEquipment3').classList.add('hidden');
			document.getElementById('secondaryEquipment3').classList.add('hidden');
			document.getElementById('lampPostEquipment3').classList.add('hidden');
			document.getElementById('lanternPLEquipment3').classList.add('hidden');
			document.getElementById('bulbEquipment3').classList.add('hidden'); 
			document.getElementById('bracketEquipment3').classList.add('hidden');
			document.getElementById('currentContactorEquipment3').classList.remove('hidden');
			document.getElementById('timePhotoSensorEquipment3').classList.remove('hidden');
			document.getElementById('steelTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('rcdEquipment3').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment3').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment3').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment3').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment3').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment3').classList.add('hidden');
			document.getElementById('otherEquipment3').classList.remove('hidden');
			document.getElementById('lockDoorEquipment3').classList.remove('hidden');
			document.getElementById('mcbEquipment3').classList.remove('hidden');
			document.getElementById('cableTrenchEquipment3').classList.add('hidden');
			document.getElementById('threadBodyEquipment3').classList.add('hidden');
			document.getElementById('ctEquipment3').classList.add('hidden');

                 // equipement 3 


				document.getElementById('fuseEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('fuseBaseEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('terminalEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('otherEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


//////////////////////----------------------------------------------------////////////////////////////////////			
                      // protection ------------------------------------ 

		document.getElementById('QGprotectionActuationI').classList.add('hidden');         
        document.getElementById('QCprotectionActuationI').classList.add('hidden');                 
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');            
        document.getElementById('cclprotectionActuationI').classList.add('hidden');         
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');     
        document.getElementById('seprotectionActuationI').classList.add('hidden');           
        document.getElementById('ptprotectionActuationI').classList.add('hidden');       
        document.getElementById('transprotectionActuationI').classList.add('hidden');     
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');    
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden');  // ok      
        document.getElementById('cdprotectionActuationI').classList.remove('hidden');     // ok       
        document.getElementById('phprotectionActuationI').classList.add('hidden');       // ok           
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');     // ok   
		
		document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    }); 
         

      // PROTECTION 2 TO 3 

	document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  


	document.getElementById('cdprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    }); 
   
  // PROTECTION 2 TO 3 
   
  document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');  
		 		 
		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
         document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

	///////////////////////////---------------------------------------------------///////////////////////////////
	
		observationBtn.addEventListener('click', ()=> {    
		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.remove('hidden');
		document.getElementById('Out_of_order_ob1').classList.remove('hidden');
		document.getElementById('Disappeared_ob1').classList.remove('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.remove('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 


		}); 


			}else if(QGType==="pole"){
				document.getElementById('numberEquipment3').classList.add('hidden');
			document.getElementById('circuitBreakerEquipment3').classList.add('hidden');
			document.getElementById('isolatorEquipment3').classList.add('hidden');
			document.getElementById('busbarEquipment3').classList.add('hidden');
			document.getElementById('fuseEquipment3').classList.add('hidden');
			document.getElementById('fuseBaseEquipment3').classList.add('hidden');
			document.getElementById('terminalEquipment3').classList.add('hidden');
			document.getElementById('connectorEquipment3').classList.add('hidden');
			document.getElementById('hvmvEquipment3').classList.add('hidden');
			document.getElementById('secondaryEquipment3').classList.add('hidden');
			document.getElementById('lampPostEquipment3').classList.add('hidden');
			document.getElementById('lanternPLEquipment3').classList.add('hidden');
			document.getElementById('bulbEquipment3').classList.add('hidden'); 
			document.getElementById('bracketEquipment3').classList.add('hidden');
			document.getElementById('currentContactorEquipment3').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment3').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('rcdEquipment3').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment3').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment3').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment3').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment3').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment3').classList.add('hidden');
			document.getElementById('otherEquipment3').classList.remove('hidden');
			document.getElementById('lockDoorEquipment3').classList.add('hidden');
			document.getElementById('mcbEquipment3').classList.add('hidden');
			document.getElementById('cableTrenchEquipment3').classList.add('hidden');
			document.getElementById('threadBodyEquipment3').classList.add('hidden');
			document.getElementById('ctEquipment3').classList.add('hidden');


                // equipement 3 


				document.getElementById('otherEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

///////////////////////-----------------------------------------///////////////////////////////////////			
                      // protection ------------------------------------ 

		document.getElementById('QGprotectionActuationI').classList.add('hidden');         
        document.getElementById('QCprotectionActuationI').classList.add('hidden');                 
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');            
        document.getElementById('cclprotectionActuationI').classList.add('hidden');         
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');     
        document.getElementById('seprotectionActuationI').classList.add('hidden');           
        document.getElementById('ptprotectionActuationI').classList.add('hidden');       
        document.getElementById('transprotectionActuationI').classList.add('hidden');     
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');    
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden');  // ok      
        document.getElementById('cdprotectionActuationI').classList.remove('hidden');     // ok       
        document.getElementById('phprotectionActuationI').classList.add('hidden');       // ok           
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');     // ok   

		document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

    // PROTECTION 2 TO 3 

    document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

	
		document.getElementById('cdprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });
	
	 // PROTECTION 2 TO 3 

     document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  
  
		document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');   
		 		 
            		 document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

	///////////////////////////---------------------------------------------------///////////////////////////////

        observationBtn.addEventListener('click', ()=> {    

		document.getElementById('obheading').style.display = 'block';	       
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.add('hidden');
		document.getElementById('Short_circuit_ob1').classList.add('hidden');
		document.getElementById('Smoke_ob1').classList.add('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		document.getElementById('Water_leakage_ob1').classList.add('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.add('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 


		}); 


			}else if(QGType==="pl"){
				document.getElementById('numberEquipment3').classList.remove('hidden');
			document.getElementById('circuitBreakerEquipment3').classList.add('hidden');
			document.getElementById('isolatorEquipment3').classList.add('hidden');
			document.getElementById('busbarEquipment3').classList.add('hidden');
			document.getElementById('fuseEquipment3').classList.add('hidden');
			document.getElementById('fuseBaseEquipment3').classList.add('hidden');
			document.getElementById('terminalEquipment3').classList.add('hidden');
			document.getElementById('connectorEquipment3').classList.add('hidden');
			document.getElementById('hvmvEquipment3').classList.add('hidden');
			document.getElementById('secondaryEquipment3').classList.add('hidden');
			document.getElementById('lampPostEquipment3').classList.remove('hidden');
			document.getElementById('lanternPLEquipment3').classList.remove('hidden');
			document.getElementById('bracketEquipment3').classList.remove('hidden');
			document.getElementById('bulbEquipment3').classList.remove('hidden');
			document.getElementById('currentContactorEquipment3').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment3').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('rcdEquipment3').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment3').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment3').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment3').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment3').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment3').classList.add('hidden');
			document.getElementById('otherEquipment3').classList.add('hidden');
			document.getElementById('lockDoorEquipment3').classList.add('hidden');
			document.getElementById('mcbEquipment3').classList.add('hidden');
			document.getElementById('cableTrenchEquipment3').classList.add('hidden');
			document.getElementById('threadBodyEquipment3').classList.add('hidden');
			document.getElementById('ctEquipment3').classList.add('hidden');



            // equipement 3 


			document.getElementById('numberEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('lampPostEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('lanternPLEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('bracketEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('bulbEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

//////////////////////---------------------------------------------------------------/////////////////////////			
                      // protection ------------------------------------ 

	    document.getElementById('QGprotectionActuationI').classList.add('hidden');         
        document.getElementById('QCprotectionActuationI').classList.add('hidden');                 
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');            
        document.getElementById('cclprotectionActuationI').classList.add('hidden');         
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');     
        document.getElementById('seprotectionActuationI').classList.add('hidden');           
        document.getElementById('ptprotectionActuationI').classList.add('hidden');       
        document.getElementById('transprotectionActuationI').classList.add('hidden');     
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');    
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');  // ok      
        document.getElementById('cdprotectionActuationI').classList.add('hidden');     // ok       
        document.getElementById('phprotectionActuationI').classList.add('hidden');       // ok           
        document.getElementById('cdipprotectionActuationI').classList.remove('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.remove('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');     // ok   
		
		
		document.getElementById('cdipprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

     // PROTECTION 2 TO 3 
   
	 document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  



document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

	document.getElementById('lamppostprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

// PROTECTION 2 TO 3 

	document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  


	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');   
		 
		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
         document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });
	///////////////////////////---------------------------------------------------///////////////////////////////
	
		observationBtn.addEventListener('click', ()=> {    

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.add('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.add('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.remove('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.remove('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 


		}); 


			}else if(QGType==="undergroundCable"){
				document.getElementById('numberEquipment3').classList.add('hidden');
			document.getElementById('circuitBreakerEquipment3').classList.add('hidden');
			document.getElementById('isolatorEquipment3').classList.add('hidden');
			document.getElementById('busbarEquipment3').classList.add('hidden');
			document.getElementById('fuseEquipment3').classList.add('hidden');
			document.getElementById('fuseBaseEquipment3').classList.add('hidden');
			document.getElementById('terminalEquipment3').classList.remove('hidden');
			document.getElementById('connectorEquipment3').classList.add('hidden');
			document.getElementById('hvmvEquipment3').classList.add('hidden');
			document.getElementById('secondaryEquipment3').classList.add('hidden');
			document.getElementById('lampPostEquipment3').classList.add('hidden');
			document.getElementById('lanternPLEquipment3').classList.add('hidden');
			document.getElementById('bracketEquipment3').classList.add('hidden');
			document.getElementById('bulbEquipment3').classList.add('hidden');
			document.getElementById('currentContactorEquipment3').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment3').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('rcdEquipment3').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment3').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment3').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment3').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment3').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment3').classList.add('hidden');
			document.getElementById('otherEquipment3').classList.remove('hidden');
			document.getElementById('lockDoorEquipment3').classList.add('hidden');
			document.getElementById('mcbEquipment3').classList.add('hidden');
			document.getElementById('cableTrenchEquipment3').classList.add('hidden');
			document.getElementById('threadBodyEquipment3').classList.remove('hidden');
			document.getElementById('ctEquipment3').classList.add('hidden');

              
			 // equipement 3 

             

			 document.getElementById('terminalEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('otherEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('threadBodyEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

////------------------------------------------------------------------------------------------///////////////////			
                      // protection ------------------------------------ 

	    document.getElementById('QGprotectionActuationI').classList.add('hidden');         
        document.getElementById('QCprotectionActuationI').classList.add('hidden');                 
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');            
        document.getElementById('cclprotectionActuationI').classList.add('hidden');         
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');     
        document.getElementById('seprotectionActuationI').classList.remove('hidden');           
        document.getElementById('ptprotectionActuationI').classList.add('hidden');       
        document.getElementById('transprotectionActuationI').classList.add('hidden');     
        document.getElementById('rmuprotectionActuationI').classList.remove('hidden');    
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden');  // ok      
        document.getElementById('cdprotectionActuationI').classList.remove('hidden');     // ok       
        document.getElementById('phprotectionActuationI').classList.remove('hidden');       // ok           
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');     // ok     
		
		
		document.getElementById('seprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.remove('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});

// PROTECTION 2 TO 3 

document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  


document.getElementById('rmuprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});

// PROTECTION 2 TO 3 

document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 

	document.getElementById('mvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 

document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});

// PROTECTION 2 TO 3 
document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

document.getElementById('cdprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});    

// PROTECTION 2 TO 3 

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

document.getElementById('phprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});

// PROTECTION 2 TO 3 

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  


document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');   
		 
		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});

///////////////////////////---------------------------------------------------///////////////////////////////
		observationBtn.addEventListener('click', ()=> {    

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.add('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		document.getElementById('Water_leakage_ob1').classList.add('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.remove('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.remove('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.remove('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

		}); 


	}else if(QGType==="aerialCable"){
				document.getElementById('numberEquipment3').classList.add('hidden');
			document.getElementById('circuitBreakerEquipment3').classList.add('hidden');
			document.getElementById('isolatorEquipment3').classList.add('hidden');
			document.getElementById('busbarEquipment3').classList.add('hidden');
			document.getElementById('fuseEquipment3').classList.add('hidden');
			document.getElementById('fuseBaseEquipment3').classList.add('hidden');
			document.getElementById('terminalEquipment3').classList.remove('hidden');
			document.getElementById('connectorEquipment3').classList.remove('hidden');
			document.getElementById('hvmvEquipment3').classList.add('hidden');
			document.getElementById('secondaryEquipment3').classList.add('hidden');
			document.getElementById('lampPostEquipment3').classList.add('hidden');
			document.getElementById('lanternPLEquipment3').classList.add('hidden');
			document.getElementById('bracketEquipment3').classList.add('hidden');
			document.getElementById('bulbEquipment3').classList.add('hidden');
			document.getElementById('currentContactorEquipment3').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment3').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('rcdEquipment3').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment3').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment3').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment3').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment3').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment3').classList.add('hidden');
			document.getElementById('otherEquipment3').classList.remove('hidden');
			document.getElementById('lockDoorEquipment3').classList.add('hidden');
			document.getElementById('mcbEquipment3').classList.add('hidden');
			document.getElementById('cableTrenchEquipment3').classList.add('hidden');
			document.getElementById('threadBodyEquipment3').classList.remove('hidden');
			document.getElementById('ctEquipment3').classList.add('hidden');

  
           // equipement 3 

            
			 document.getElementById('terminalEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('otherEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('threadBodyEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('connectorEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}

}); 

////------------------------------------------------------------------------------------////////////			
                      // protection ------------------------------------ 

					  document.getElementById('QGprotectionActuationI').classList.add('hidden');         
        document.getElementById('QCprotectionActuationI').classList.add('hidden');                 
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');            
        document.getElementById('cclprotectionActuationI').classList.add('hidden');         
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');     
        document.getElementById('seprotectionActuationI').classList.add('hidden');           
        document.getElementById('ptprotectionActuationI').classList.add('hidden');       
        document.getElementById('transprotectionActuationI').classList.add('hidden');     
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');    
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden');  // ok      
        document.getElementById('cdprotectionActuationI').classList.remove('hidden');     // ok       
        document.getElementById('phprotectionActuationI').classList.remove('hidden');       // ok           
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');     // ok    
		//protection actuation I to II    
		document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});	

// PROTECTION 2 TO 3 

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  


document.getElementById('cdprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});	

// PROTECTION 2 TO 3 


document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  


document.getElementById('phprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});	

// PROTECTION 2 TO 3 

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  

document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');     
		          
		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});	

///////////////////////////---------------------------------------------------///////////////////////////////

		observationBtn.addEventListener('click', ()=> {   

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.add('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		document.getElementById('Water_leakage_ob1').classList.add('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.remove('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.remove('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.remove('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

		 }); 

	}else if(QGType==="manhole"){
				document.getElementById('numberEquipment3').classList.add('hidden');
			document.getElementById('circuitBreakerEquipment3').classList.add('hidden');
			document.getElementById('isolatorEquipment3').classList.add('hidden');
			document.getElementById('busbarEquipment3').classList.add('hidden');
			document.getElementById('fuseEquipment3').classList.add('hidden');
			document.getElementById('fuseBaseEquipment3').classList.add('hidden');
			document.getElementById('terminalEquipment3').classList.add('hidden');
			document.getElementById('connectorEquipment3').classList.add('hidden');
			document.getElementById('hvmvEquipment3').classList.add('hidden');
			document.getElementById('secondaryEquipment3').classList.add('hidden');
			document.getElementById('lampPostEquipment3').classList.add('hidden');
			document.getElementById('lanternPLEquipment3').classList.add('hidden');
			document.getElementById('bracketEquipment3').classList.add('hidden');
			document.getElementById('bulbEquipment3').classList.add('hidden');
			document.getElementById('currentContactorEquipment3').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment3').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment3').classList.remove('hidden');
			document.getElementById('concreteTypeCoverEquipment3').classList.remove('hidden');
			document.getElementById('rcdEquipment3').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment3').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment3').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment3').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment3').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment3').classList.add('hidden');
			document.getElementById('otherEquipment3').classList.remove('hidden');
			document.getElementById('lockDoorEquipment3').classList.add('hidden');
			document.getElementById('mcbEquipment3').classList.add('hidden');
			document.getElementById('cableTrenchEquipment3').classList.add('hidden');
			document.getElementById('threadBodyEquipment3').classList.add('hidden');
			document.getElementById('ctEquipment3').classList.add('hidden');


               // equipement 3 

			   document.getElementById('steelTypeCoverEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 
            			    
document.getElementById('concreteTypeCoverEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('otherEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

////// ---------------------------------------------------------------------------/////////////////////////			
                      // protection ------------------------------------ 

					  document.getElementById('QGprotectionActuationI').classList.add('hidden');         
        document.getElementById('QCprotectionActuationI').classList.add('hidden');                 
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');            
        document.getElementById('cclprotectionActuationI').classList.add('hidden');         
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');     
        document.getElementById('seprotectionActuationI').classList.add('hidden');           
        document.getElementById('ptprotectionActuationI').classList.add('hidden');       
        document.getElementById('transprotectionActuationI').classList.add('hidden');     
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');    
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');  // ok      
        document.getElementById('cdprotectionActuationI').classList.add('hidden');     // ok       
        document.getElementById('phprotectionActuationI').classList.add('hidden');       // ok           
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.remove('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');     // ok  
		
		// protection actuation I to II

		document.getElementById('nproprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');    
		 
		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });    

	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');  
		 
		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });
	///////////////////////////---------------------------------------------------///////////////////////////////

		observationBtn.addEventListener('click', ()=> {    

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.add('hidden');
		document.getElementById('Short_circuit_ob1').classList.add('hidden');
		document.getElementById('Smoke_ob1').classList.add('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		document.getElementById('Water_leakage_ob1').classList.add('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.add('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.remove('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.remove('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

		}); 


			}else if(QGType==="chargingStation") {
				document.getElementById('numberEquipment3').classList.add('hidden');
			document.getElementById('circuitBreakerEquipment3').classList.remove('hidden');
			document.getElementById('isolatorEquipment3').classList.remove('hidden');
			document.getElementById('busbarEquipment3').classList.remove('hidden');
			document.getElementById('fuseEquipment3').classList.add('hidden');
			document.getElementById('fuseBaseEquipment3').classList.add('hidden');
			document.getElementById('terminalEquipment3').classList.remove('hidden');
			document.getElementById('connectorEquipment3').classList.remove('hidden');
			document.getElementById('hvmvEquipment3').classList.add('hidden');
			document.getElementById('secondaryEquipment3').classList.add('hidden');
			document.getElementById('lampPostEquipment3').classList.add('hidden');
			document.getElementById('lanternPLEquipment3').classList.add('hidden');
			document.getElementById('bracketEquipment3').classList.add('hidden');
			document.getElementById('bulbEquipment3').classList.add('hidden');
			document.getElementById('currentContactorEquipment3').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment3').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('rcdEquipment3').classList.remove('hidden');
			document.getElementById('chargingPlugCableEquipment3').classList.remove('hidden');
			document.getElementById('clientRequestMaintenanceEquipment3').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment3').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment3').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment3').classList.add('hidden');
			document.getElementById('otherEquipment3').classList.remove('hidden');
			document.getElementById('lockDoorEquipment3').classList.add('hidden');
			document.getElementById('mcbEquipment3').classList.remove('hidden');
			document.getElementById('cableTrenchEquipment3').classList.add('hidden');
			document.getElementById('threadBodyEquipment3').classList.add('hidden');
			document.getElementById('ctEquipment3').classList.add('hidden');


                                        // equipement 3  


document.getElementById('busbarEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('terminalEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('connectorEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('otherEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('circuitBreakerEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('isolatorEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('rcdEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('chargingPlugCableEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('mcbEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


//////////////////////----------------------------------------------////////////////////////////////////////////			
                      // protection actution 1 ------------------------------------ 

		document.getElementById('QGprotectionActuationI').classList.add('hidden');         
        document.getElementById('QCprotectionActuationI').classList.add('hidden');                 
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');            
        document.getElementById('cclprotectionActuationI').classList.add('hidden');         
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');     
        document.getElementById('seprotectionActuationI').classList.add('hidden');           
        document.getElementById('ptprotectionActuationI').classList.add('hidden');       
        document.getElementById('transprotectionActuationI').classList.add('hidden');     
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');    
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden');      
        document.getElementById('cdprotectionActuationI').classList.add('hidden');           
        document.getElementById('phprotectionActuationI').classList.add('hidden');                   
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.remove('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');            
		
		
		//protection actuation I to II

	 
		document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

});  

// protection 2 to 3 

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  


document.getElementById('nproprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');  
		 
            		 document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

}); 

document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden'); 
		 
            		 document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

}); 
///////////////////////////---------------------------------------------------///////////////////////////////
		observationBtn.addEventListener('click', ()=> {    


		document.getElementById('obheading').style.display = 'block';	
        document.getElementById('Trip_ob1').classList.remove('hidden');
		document.getElementById('Brunt_ob1').classList.add('hidden');
		document.getElementById('Short_circuit_ob1').classList.add('hidden');
		document.getElementById('Smoke_ob1').classList.add('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.remove('hidden');
		document.getElementById('Spark_ob1').classList.add('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

		}); 

			}else if(QGType==="evCharger") {
				document.getElementById('numberEquipment3').classList.remove('hidden');
			document.getElementById('circuitBreakerEquipment3').classList.remove('hidden');
			document.getElementById('isolatorEquipment3').classList.remove('hidden');
			document.getElementById('busbarEquipment3').classList.add('hidden');
			document.getElementById('fuseEquipment3').classList.remove('hidden');
			document.getElementById('fuseBaseEquipment3').classList.add('hidden');
			document.getElementById('terminalEquipment3').classList.remove('hidden');
			document.getElementById('connectorEquipment3').classList.remove('hidden');
			document.getElementById('hvmvEquipment3').classList.add('hidden');
			document.getElementById('secondaryEquipment3').classList.remove('hidden');
			document.getElementById('lampPostEquipment3').classList.add('hidden');
			document.getElementById('lanternPLEquipment3').classList.add('hidden');
			document.getElementById('bracketEquipment3').classList.add('hidden');
			document.getElementById('bulbEquipment3').classList.add('hidden');
			document.getElementById('currentContactorEquipment3').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment3').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('rcdEquipment3').classList.remove('hidden');
			document.getElementById('chargingPlugCableEquipment3').classList.remove('hidden');
			document.getElementById('clientRequestMaintenanceEquipment3').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment3').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment3').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment3').classList.add('hidden');
			document.getElementById('otherEquipment3').classList.remove('hidden');
			document.getElementById('lockDoorEquipment3').classList.add('hidden');
			document.getElementById('mcbEquipment3').classList.add('hidden');
			document.getElementById('cableTrenchEquipment3').classList.add('hidden');
			document.getElementById('threadBodyEquipment3').classList.add('hidden');
			document.getElementById('ctEquipment3').classList.add('hidden');


             // equipement 3 



			 document.getElementById('terminalEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
});  


document.getElementById('fuseEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
});  



document.getElementById('connectorEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.remove('hidden');
document.getElementById('phs2').classList.remove('hidden');
document.getElementById('phs3').classList.remove('hidden');
document.getElementById('phs4').classList.remove('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('otherEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('numberEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('circuitBreakerEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

 
document.getElementById('isolatorEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('secondaryEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('rcdEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('chargingPlugCableEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


///////////////////-------------------------------------------------------////////////////////////////////////

            // protection --------------------------------------------------------- ----------

	    document.getElementById('QGprotectionActuationI').classList.add('hidden');         
        document.getElementById('QCprotectionActuationI').classList.add('hidden');                 
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');            
        document.getElementById('cclprotectionActuationI').classList.add('hidden');         
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');     
        document.getElementById('seprotectionActuationI').classList.add('hidden');           
        document.getElementById('ptprotectionActuationI').classList.add('hidden');       
        document.getElementById('transprotectionActuationI').classList.add('hidden');     
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');    
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');     
        document.getElementById('cdprotectionActuationI').classList.add('hidden');          
        document.getElementById('phprotectionActuationI').classList.add('hidden');                  
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.remove('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.remove('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');         
		
		
		//protection actuation I to II

		document.getElementById('chargingstationprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden');  // OK  
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  //OK   
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');   
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');  // OK     
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // OK 
         document.getElementById('rcdprotectionActuationII').classList.remove('hidden');   // OK        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  

  // PROTECTION 2 TO 3 

  document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 

document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  



document.getElementById('rcdprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  
                		document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 

	document.getElementById('evchargerprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden');  // OK 
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');   // OK 
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');   // OK   
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');   // OK 
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');    
         document.getElementById('rcdprotectionActuationII').classList.remove('hidden');   // OK      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });
	
   // PROTECTION 2 TO 3 

   document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  



document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 

document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  



document.getElementById('rcdprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  
                		document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 

	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden'); 
		 
		 
		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  


    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });
	///////////////////////////---------------------------------------------------///////////////////////////////	
		observationBtn.addEventListener('click', ()=> {    

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.remove('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.add('hidden');
		document.getElementById('Smoke_ob1').classList.add('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.remove('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.remove('hidden');
		document.getElementById('Out_of_order_ob1').classList.remove('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.remove('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

		}); 

         }else if(QGType==="cannotDetectFaultActuation") {
				document.getElementById('numberEquipment3').classList.add('hidden');
			document.getElementById('circuitBreakerEquipment3').classList.add('hidden');
			document.getElementById('isolatorEquipment3').classList.add('hidden');
			document.getElementById('busbarEquipment3').classList.add('hidden');
			document.getElementById('fuseEquipment3').classList.add('hidden');
			document.getElementById('fuseBaseEquipment3').classList.add('hidden');
			document.getElementById('terminalEquipment3').classList.add('hidden');
			document.getElementById('connectorEquipment3').classList.add('hidden');
			document.getElementById('hvmvEquipment3').classList.add('hidden');
			document.getElementById('secondaryEquipment3').classList.add('hidden');
			document.getElementById('lampPostEquipment3').classList.add('hidden');
			document.getElementById('lanternPLEquipment3').classList.add('hidden');
			document.getElementById('bracketEquipment3').classList.add('hidden');
			document.getElementById('bulbEquipment3').classList.add('hidden');
			document.getElementById('currentContactorEquipment3').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment3').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment3').classList.add('hidden');
			document.getElementById('rcdEquipment3').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment3').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment3').classList.remove('hidden'); // ok 
			document.getElementById('handlingClientComplaintEquipment3').classList.remove('hidden'); // ok 
			document.getElementById('nonElectricityRelatedPropertiesEquipment3').classList.remove('hidden'); // ok 
			document.getElementById('powerRestoredByClientEquipment3').classList.remove('hidden'); // ok 
			document.getElementById('otherEquipment3').classList.remove('hidden'); // ok 
			document.getElementById('lockDoorEquipment3').classList.add('hidden');
			document.getElementById('mcbEquipment3').classList.add('hidden');
			document.getElementById('cableTrenchEquipment3').classList.add('hidden');
			document.getElementById('threadBodyEquipment3').classList.add('hidden');
			document.getElementById('ctEquipment3').classList.add('hidden');


            // equipement 3 

			document.getElementById('clientRequestMaintenanceEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('handlingClientComplaintEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 

document.getElementById('nonElectricityRelatedPropertiesEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('powerRestoredByClientEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 


document.getElementById('otherEquipment3').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');
}
else 
{
document.getElementById('phs1').classList.add('hidden');
document.getElementById('phs2').classList.add('hidden');
document.getElementById('phs3').classList.add('hidden');
document.getElementById('phs4').classList.add('hidden');

}
}); 
			
////////////////////////--------------------------------------------///////////////////////////////////////			
                      // protection ------------------------------------ 

	    document.getElementById('QGprotectionActuationI').classList.add('hidden');         
        document.getElementById('QCprotectionActuationI').classList.add('hidden');                 
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');            
        document.getElementById('cclprotectionActuationI').classList.add('hidden');         
        document.getElementById('cusprotectionActuationI').classList.add('hidden');      
        document.getElementById('meterprotectionActuationI').classList.add('hidden');     
        document.getElementById('seprotectionActuationI').classList.add('hidden');           
        document.getElementById('ptprotectionActuationI').classList.add('hidden');       
        document.getElementById('transprotectionActuationI').classList.add('hidden');     
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');    
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');  // ok      
        document.getElementById('cdprotectionActuationI').classList.add('hidden');     // ok       
        document.getElementById('phprotectionActuationI').classList.add('hidden');       // ok           
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.remove('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');     // ok       
		
		document.getElementById('nproprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');   
		            
            		 document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});

document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');    
		        
		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});
///////////////////////////---------------------------------------------------///////////////////////////////
		observationBtn.addEventListener('click', ()=> {    

		document.getElementById('obheading').style.display = 'block';	 
        document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.add('hidden');
		document.getElementById('Short_circuit_ob1').classList.add('hidden');
		document.getElementById('Smoke_ob1').classList.add('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		document.getElementById('Water_leakage_ob1').classList.add('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.add('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.add('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.remove('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

		}); 


		} else if (QGType === "m1") {
           var equipmentIds = [
                'numberEquipment4', 'terminalEquipment4', 'otherEquipment4', 
                'mcbEquipment4', 'ctEquipment4'
           ];


              // equipement 3 
           
              document.getElementById('numberEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
}); 
			 
document.getElementById('terminalEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
}); 
			 
document.getElementById('otherEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
}); 


document.getElementById('mcbEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
}); 

document.getElementById('ctEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
}); 


//////////////////////-----------------------------------
           // protection   -- - - -- - - - - - - - - - - - - - - - -
 
	    document.getElementById('QGprotectionActuationI').classList.remove('hidden');   // ok  
        document.getElementById('QCprotectionActuationI').classList.remove('hidden');     // ok  
		document.getElementById('CPSprotectionActuationI').classList.remove('hidden');    // ok     
        document.getElementById('cclprotectionActuationI').classList.remove('hidden');    // ok 
        document.getElementById('cusprotectionActuationI').classList.add('hidden');
        document.getElementById('meterprotectionActuationI').classList.remove('hidden');  // ok 
        document.getElementById('seprotectionActuationI').classList.add('hidden');  
        document.getElementById('ptprotectionActuationI').classList.add('hidden');  
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');     
        document.getElementById('cdprotectionActuationI').classList.add('hidden');      
        document.getElementById('phprotectionActuationI').classList.remove('hidden');   // ok    
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');     // ok    
         
    
       // protection 1 and 2 link 

             
      // 1
	 document.getElementById('QGprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });      
	
	// Protection Actuation II to III

	document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

	     			               
     // 2
	 document.getElementById('QCprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden'); 
		
       
    } 

    });   

     
    // 3
    document.getElementById('CPSprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');  
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });
	
	// protection actuation 2 to 3

	document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 
         
    // 4             
	document.getElementById('cclprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.add('hidden');  
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   
	document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 


    // 5 
            
	 document.getElementById('meterprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	   
		document.getElementById('numberprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

	document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  
    }  });    
     // 6 
 
	document.getElementById('phprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

	document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    }  });
     // 7 
	 document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (!this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    }  });

    // Hide all equipment elements except the specified ones
    var allEquipmentIds = [
        'numberEquipment4', 'circuitBreakerEquipment4', 'isolatorEquipment4',
        'busbarEquipment4', 'fuseEquipment4', 'fuseBaseEquipment4',
        'terminalEquipment4', 'connectorEquipment4', 'hvmvEquipment4',
        'secondaryEquipment4', 'lampPostEquipment4', 'lanternPLEquipment4',
        'bulbEquipment4', 'bracketEquipment4', 'currentContactorEquipment4',
        'timePhotoSensorEquipment4', 'steelTypeCoverEquipment4',
        'concreteTypeCoverEquipment4', 'rcdEquipment4',
        'chargingPlugCableEquipment4', 'clientRequestMaintenanceEquipment4',
        'handlingClientComplaintEquipment4', 'nonElectricityRelatedPropertiesEquipment4',
        'powerRestoredByClientEquipment4', 'otherEquipment4', 'lockDoorEquipment4',
        'mcbEquipment4', 'cableTrenchEquipment4', 'threadBodyEquipment4', 'ctEquipment4'
    ];

    allEquipmentIds.forEach(function(id) {
        var element = document.getElementById(id);
        if (element && !equipmentIds.includes(id)) {
            element.classList.add('hidden');
        }
    });

    // Show specific equipment fields
    equipmentIds.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.classList.remove('hidden');
        }
    }); 
observationBtn.addEventListener('click', ()=> {    

		document.getElementById('obheading').style.display = 'block';		
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.remove('hidden');
		document.getElementById('Planned_Outage_ob1').classList.remove('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.remove('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.remove('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		}); 

}

else if (QGType === "c1") {
    var equipmentIds = [
        'numberEquipment4', 'busbarEquipment4', 'fuseEquipment4',
        'fuseBaseEquipment4', 'terminalEquipment4', 'otherEquipment4', 'lockDoorEquipment4'
    ];


        // equipement 3 


		document.getElementById('busbarEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       

document.getElementById('fuseEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       

document.getElementById('fuseBaseEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       

document.getElementById('terminalEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       


document.getElementById('otherEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       


document.getElementById('numberEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});     


document.getElementById('lockDoorEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});   

/////////////////////////---------------------------------------------------------- 
         
	     // protection   -- - - -- - - - - - - - - - - - - - - - -
 
		document.getElementById('QGprotectionActuationI').classList.add('hidden');      
        document.getElementById('QCprotectionActuationI').classList.add('hidden');     
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');          
        document.getElementById('cclprotectionActuationI').classList.add('hidden');   
        document.getElementById('cusprotectionActuationI').classList.add('hidden');
        document.getElementById('meterprotectionActuationI').classList.add('hidden');   
        document.getElementById('seprotectionActuationI').classList.add('hidden');  
        document.getElementById('ptprotectionActuationI').classList.add('hidden');  
        document.getElementById('transprotectionActuationI').classList.remove('hidden');   // ok 
        document.getElementById('rmuprotectionActuationI').classList.remove('hidden');    // ok 
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden');    // ok   
        document.getElementById('cdprotectionActuationI').classList.remove('hidden');      // ok   
        document.getElementById('phprotectionActuationI').classList.add('hidden');       
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');   // ok        
           

        // prtection 1 and 2 link 
 
                // 1 
	document.getElementById('transprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mvfuseprotectionActuationII').classList.remove('hidden');   // ok 
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');   
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  

      // protection  actuation 2 to 3


	  document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });   

	document.getElementById('mvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });   





    // 2 
	document.getElementById('rmuprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');   // ok  
		document.getElementById('mvfuseprotectionActuationII').classList.remove('hidden');    // ok 
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');   
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');       
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    }); 
	
	// protection actuation 2 to 3

	document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  
	document.getElementById('mvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });   
    // 3 
	document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    }); 

   // protection actuation 2 to 3
   document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });   
    // 4 
	document.getElementById('cdprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');     // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');    // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });
	
	
 // protection actuation 2 to 3
 document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });


    // 5 
	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   
	 // protection actuation 2 to 3
	 document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });
     
    // Hide all equipment elements except the specified ones
    var allEquipmentIds = [
        'numberEquipment4', 'circuitBreakerEquipment4', 'isolatorEquipment4',
        'busbarEquipment4', 'fuseEquipment4', 'fuseBaseEquipment4',
        'terminalEquipment4', 'connectorEquipment4', 'hvmvEquipment4',
        'bracketEquipment4', 'secondaryEquipment4', 'lampPostEquipment4',
        'lanternPLEquipment4', 'bulbEquipment4', 'currentContactorEquipment4',
        'timePhotoSensorEquipment4', 'steelTypeCoverEquipment4',
        'concreteTypeCoverEquipment4', 'rcdEquipment4',
        'chargingPlugCableEquipment4', 'clientRequestMaintenanceEquipment4',
        'handlingClientComplaintEquipment4', 'nonElectricityRelatedPropertiesEquipment4',
        'powerRestoredByClientEquipment4', 'otherEquipment4', 'lockDoorEquipment4',
        'mcbEquipment4', 'cableTrenchEquipment4', 'threadBodyEquipment4', 'ctEquipment4'
    ];

    allEquipmentIds.forEach(function(id) {
        var element = document.getElementById(id);
        if (element && !equipmentIds.includes(id)) {
            element.classList.add('hidden');
        }
    });

    // Show specific equipment fields
    equipmentIds.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.classList.remove('hidden');
        }
    });
	observationBtn.addEventListener('click', ()=> {   

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.remove('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.remove('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.remove('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.remove('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 


		 }); 

}
else if (QGType === "p1") {
    var equipmentIds = [
        'numberEquipment4', 'fuseEquipment4',
        'fuseBaseEquipment4', 'terminalEquipment4', 'otherEquipment4', 'lockDoorEquipment4'
    ];

     	 
           // equipement 3  


		   document.getElementById('fuseEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       

document.getElementById('fuseBaseEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       

document.getElementById('terminalEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       


document.getElementById('otherEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       


document.getElementById('numberEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});     


document.getElementById('lockDoorEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});     
  

 //////////////////////////-----------------------------------------////////////////////////////////

         // protection   -- - - -- - - - - - - - - - - - - - - - -
 
	    document.getElementById('QGprotectionActuationI').classList.add('hidden');      
        document.getElementById('QCprotectionActuationI').classList.add('hidden');     
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');          
        document.getElementById('cclprotectionActuationI').classList.add('hidden');   
        document.getElementById('cusprotectionActuationI').classList.add('hidden');
        document.getElementById('meterprotectionActuationI').classList.add('hidden');   
        document.getElementById('seprotectionActuationI').classList.add('hidden');  
        document.getElementById('ptprotectionActuationI').classList.add('hidden');  
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');     
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden');  // ok      
        document.getElementById('cdprotectionActuationI').classList.remove('hidden');     // ok     
        document.getElementById('phprotectionActuationI').classList.remove('hidden');      // ok     
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');  // ok            
         

        // protection 1 and 2 link 

      
           		 
         // 1      
	document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });
	
	// protection actuation II to III
	document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });   

         
    // 2 
	
	document.getElementById('cdprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    }); 

	// protection actuation II to III

	document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });   


    // 3 

	document.getElementById('phprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });  
	
	
	   // Protection Actuation II to III


	   document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });   


     // 4 

	 document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
		document.getElementById('numberprotectionActuationII').classList.add('hidden');
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
        document.getElementById('rcdprotectionActuationII').classList.add('hidden');      
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });   

	// protection Acuation II to III
	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });   


    // Hide all equipment elements except the specified ones
    var allEquipmentIds = [
        'numberEquipment4', 'circuitBreakerEquipment4', 'isolatorEquipment4',
        'busbarEquipment4', 'fuseEquipment4', 'fuseBaseEquipment4',
        'terminalEquipment4', 'connectorEquipment4', 'hvmvEquipment4',
        'bracketEquipment4', 'secondaryEquipment4', 'lampPostEquipment4',
        'lanternPLEquipment4', 'bulbEquipment4', 'currentContactorEquipment4',
        'timePhotoSensorEquipment4', 'steelTypeCoverEquipment4',
        'concreteTypeCoverEquipment4', 'rcdEquipment4',
        'chargingPlugCableEquipment4', 'clientRequestMaintenanceEquipment4',
        'handlingClientComplaintEquipment4', 'nonElectricityRelatedPropertiesEquipment4',
        'powerRestoredByClientEquipment4', 'otherEquipment4', 'lockDoorEquipment4',
        'mcbEquipment4', 'cableTrenchEquipment4', 'threadBodyEquipment4', 'ctEquipment4'
    ];

    allEquipmentIds.forEach(function(id) {
        var element = document.getElementById(id);
        if (element && !equipmentIds.includes(id)) {
            element.classList.add('hidden');
        }
    });

    // Show specific equipment fields
    equipmentIds.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.classList.remove('hidden');
        }
    });
		observationBtn.addEventListener('click', ()=> {   

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		document.getElementById('Water_leakage_ob1').classList.add('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.add('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.remove('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.remove('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 

		
		 }); 

}
else if (QGType === "cxd1") {
    // Show Busbar
    document.getElementById('busbarEquipment4').classList.remove('hidden');

    // Show Terminal
    document.getElementById('terminalEquipment4').classList.remove('hidden');

    // Show Other
    document.getElementById('otherEquipment4').classList.remove('hidden');

    // Show Lock/Door
    document.getElementById('lockDoorEquipment4').classList.remove('hidden');

    // Hide all other equipment fields
    var allEquipmentIds = [
        'numberEquipment4', 'circuitBreakerEquipment4', 'isolatorEquipment4',
        'fuseEquipment4', 'fuseBaseEquipment4', 'connectorEquipment4',
        'hvmvEquipment4', 'bracketEquipment4', 'secondaryEquipment4',
        'lampPostEquipment4', 'lanternPLEquipment4', 'bulbEquipment4',
        'currentContactorEquipment4', 'timePhotoSensorEquipment4',
        'steelTypeCoverEquipment4', 'concreteTypeCoverEquipment4',
        'rcdEquipment4', 'chargingPlugCableEquipment4',
        'clientRequestMaintenanceEquipment4', 'handlingClientComplaintEquipment4',
        'nonElectricityRelatedPropertiesEquipment4', 'powerRestoredByClientEquipment4',
        'mcbEquipment4', 'cableTrenchEquipment4', 'threadBodyEquipment4', 'ctEquipment4'
    ];


             // equipement 3 

			 document.getElementById('busbarEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       


document.getElementById('terminalEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       


document.getElementById('otherEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       

document.getElementById('lockDoorEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});   


///////////////////////-----------------------------------------------------------

      
            // protection   -- - - -- - - - - - - - - - - - - - - - -
 
		document.getElementById('QGprotectionActuationI').classList.add('hidden');      
        document.getElementById('QCprotectionActuationI').classList.add('hidden');     
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');          
        document.getElementById('cclprotectionActuationI').classList.add('hidden');   
        document.getElementById('cusprotectionActuationI').classList.add('hidden');
        document.getElementById('meterprotectionActuationI').classList.add('hidden');   
        document.getElementById('seprotectionActuationI').classList.add('hidden');  
        document.getElementById('ptprotectionActuationI').classList.add('hidden');  
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');     
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden');  // ok      
        document.getElementById('cdprotectionActuationI').classList.remove('hidden');     // ok     
        document.getElementById('phprotectionActuationI').classList.remove('hidden');      // ok     
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');  // ok            
               


            // protection 1 to 2 link 
 
       
          
		 document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

	// protection Actuation II to III
	document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });   



	document.getElementById('cdprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

// Protection actuation II to III

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });   


	document.getElementById('phprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    }); 

	// protection Actuation II to III

	document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });   

         
	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

	// protection actuation II to III

	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });     

     allEquipmentIds.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.classList.add('hidden');
        }
    });

		observationBtn.addEventListener('click', ()=> {    
        
		document.getElementById('obheading').style.display = 'block';			
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.remove('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.remove('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.remove('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

		}); 
}

else if (QGType === "cdip1") {
    // Array of equipment IDs to show
    var equipmentToShow = [
        'numberEquipment4', 'fuseEquipment4', 'fuseBaseEquipment4',
        'terminalEquipment4', 'currentContactorEquipment4',
        'timePhotoSensorEquipment4', 'otherEquipment4',
        'lockDoorEquipment4', 'mcbEquipment4'
    ];

   

	 // equipement 3  


	 document.getElementById('numberEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});     

document.getElementById('fuseEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       

document.getElementById('fuseBaseEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       


document.getElementById('terminalEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       


document.getElementById('otherEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});      


document.getElementById('lockDoorEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});   

document.getElementById('currentContactorEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});   
document.getElementById('timePhotoSensorEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});   
document.getElementById('mcbEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});   

	//////////////////------------------------------------------------------

         // protection   -- - - -- - - - - - - - - - - - - - - - -
 
		document.getElementById('QGprotectionActuationI').classList.add('hidden');      
        document.getElementById('QCprotectionActuationI').classList.add('hidden');     
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');          
        document.getElementById('cclprotectionActuationI').classList.add('hidden');   
        document.getElementById('cusprotectionActuationI').classList.add('hidden');
        document.getElementById('meterprotectionActuationI').classList.add('hidden');   
        document.getElementById('seprotectionActuationI').classList.add('hidden');  
        document.getElementById('ptprotectionActuationI').classList.add('hidden');  
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');     
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden'); // ok        
        document.getElementById('cdprotectionActuationI').classList.remove('hidden');   // ok       
        document.getElementById('phprotectionActuationI').classList.add('hidden');          
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');  // ok            
         


           // protection 1 to 2 link 

                    
		   document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    }); 

	//protection actuation II to III
	document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });   

         

	document.getElementById('cdprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    }); 

	// protection actuation II to III

	document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });   

   


	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });   


    // Show selected equipment fields
    equipmentToShow.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.classList.remove('hidden');
        }
    });

    // Hide all other equipment fields
    var allEquipmentIds = [
        'circuitBreakerEquipment4', 'isolatorEquipment4',
        'busbarEquipment4', 'connectorEquipment4',
        'hvmvEquipment4', 'bracketEquipment4',
        'secondaryEquipment4', 'lampPostEquipment4',
        'lanternPLEquipment4', 'bulbEquipment4',
        'steelTypeCoverEquipment4', 'concreteTypeCoverEquipment4',
        'rcdEquipment4', 'chargingPlugCableEquipment4',
        'clientRequestMaintenanceEquipment4', 'handlingClientComplaintEquipment4',
        'nonElectricityRelatedPropertiesEquipment4', 'powerRestoredByClientEquipment4',
        'cableTrenchEquipment4', 'threadBodyEquipment4', 'ctEquipment4'
    ];

    allEquipmentIds.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.classList.add('hidden');
        }
    }); 

		observationBtn.addEventListener('click', ()=> {    

		document.getElementById('obheading').style.display = 'block';	
        document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.remove('hidden');
		document.getElementById('Out_of_order_ob1').classList.remove('hidden');
		document.getElementById('Disappeared_ob1').classList.remove('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.remove('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden');  


		}); 

}

else if (QGType === "pole1") {
    // Show Other equipment field
    document.getElementById('otherEquipment4').classList.remove('hidden');

    // Hide all other equipment fields
    var allEquipmentIds = [
        'numberEquipment4', 'circuitBreakerEquipment4', 'isolatorEquipment4',
        'busbarEquipment4', 'fuseEquipment4', 'fuseBaseEquipment4',
        'terminalEquipment4', 'connectorEquipment4', 'hvmvEquipment4',
        'bracketEquipment4', 'secondaryEquipment4', 'lampPostEquipment4',
        'lanternPLEquipment4', 'bulbEquipment4', 'currentContactorEquipment4',
        'timePhotoSensorEquipment4', 'steelTypeCoverEquipment4',
        'concreteTypeCoverEquipment4', 'rcdEquipment4',
        'chargingPlugCableEquipment4', 'clientRequestMaintenanceEquipment4',
        'handlingClientComplaintEquipment4', 'nonElectricityRelatedPropertiesEquipment4',
        'powerRestoredByClientEquipment4', 'lockDoorEquipment4',
        'mcbEquipment4', 'cableTrenchEquipment4', 'threadBodyEquipment4', 'ctEquipment4'
    ];



          // equipement 3 

		  document.getElementById('otherEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       


	 //////////////////////////--------------------------------------------------------------
             // protection   -- - - -- - - - - - - - - - - - - - - - -
 
		document.getElementById('QGprotectionActuationI').classList.add('hidden');      
        document.getElementById('QCprotectionActuationI').classList.add('hidden');     
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');          
        document.getElementById('cclprotectionActuationI').classList.add('hidden');   
        document.getElementById('cusprotectionActuationI').classList.add('hidden');
        document.getElementById('meterprotectionActuationI').classList.add('hidden');   
        document.getElementById('seprotectionActuationI').classList.add('hidden');  
        document.getElementById('ptprotectionActuationI').classList.add('hidden');  
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');     
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden'); // ok        
        document.getElementById('cdprotectionActuationI').classList.remove('hidden');   // ok       
        document.getElementById('phprotectionActuationI').classList.add('hidden');          
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');  // ok            
         



        // protection 1 to 2 link 


    
		document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

	// protection II to III

	document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });   




		document.getElementById('cdprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

	// protection actuation II to III
	document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });
		
		

		document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

	// protection actuation II to III
	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

           
    allEquipmentIds.forEach(function(id) {
        var element = document.getElementById(id);
        if (element && id !== 'otherEquipment4') {
            element.classList.add('hidden');
        }
    });
		observationBtn.addEventListener('click', ()=> {   


		document.getElementById('obheading').style.display = 'block';	        
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.add('hidden');
		document.getElementById('Short_circuit_ob1').classList.add('hidden');
		document.getElementById('Smoke_ob1').classList.add('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		document.getElementById('Water_leakage_ob1').classList.add('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.add('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden');  


		 }); 

}

else if (QGType === "pl1") {
    // Array of equipment IDs to show
    var equipmentToShow = [
        'numberEquipment4', 'lampPostEquipment4', 'lanternPLEquipment4',
        'bracketEquipment4', 'bulbEquipment4'
    ];


        // equipement 3 


		document.getElementById('numberEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});     

document.getElementById('lampPostEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});     

document.getElementById('lanternPLEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});     

document.getElementById('bracketEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});     

document.getElementById('bulbEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});     

	///////////////////////-------------------------------------------
    
         // protection   -- - - -- - - - - - - - - - - - - - - - -
 
		document.getElementById('QGprotectionActuationI').classList.add('hidden');      
        document.getElementById('QCprotectionActuationI').classList.add('hidden');     
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');          
        document.getElementById('cclprotectionActuationI').classList.add('hidden');   
        document.getElementById('cusprotectionActuationI').classList.add('hidden');
        document.getElementById('meterprotectionActuationI').classList.add('hidden');   
        document.getElementById('seprotectionActuationI').classList.add('hidden');  
        document.getElementById('ptprotectionActuationI').classList.add('hidden');  
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');     
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');        
        document.getElementById('cdprotectionActuationI').classList.add('hidden');         
        document.getElementById('phprotectionActuationI').classList.add('hidden');          
        document.getElementById('cdipprotectionActuationI').classList.remove('hidden');  // ok 
        document.getElementById('lamppostprotectionActuationI').classList.remove('hidden');  // ok 
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');       // ok          
         


            // protection 1 to 2 link 

          
			document.getElementById('cdipprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

	// protection actuation II to III

	document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

	document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

	document.getElementById('lamppostprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

	// protectionactuation II to III

	document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

	// protection Actuation II to III

	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });
	         

    // Show selected equipment fields
    equipmentToShow.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.classList.remove('hidden');
        }
    });

    // Hide all other equipment fields
    var allEquipmentIds = [
        'circuitBreakerEquipment4', 'isolatorEquipment4',
        'busbarEquipment4', 'fuseEquipment4', 'fuseBaseEquipment4',
        'terminalEquipment4', 'connectorEquipment4', 'hvmvEquipment4',
        'secondaryEquipment4', 'currentContactorEquipment4',
        'timePhotoSensorEquipment4', 'steelTypeCoverEquipment4',
        'concreteTypeCoverEquipment4', 'rcdEquipment4',
        'chargingPlugCableEquipment4', 'clientRequestMaintenanceEquipment4',
        'handlingClientComplaintEquipment4', 'nonElectricityRelatedPropertiesEquipment4',
        'powerRestoredByClientEquipment4', 'lockDoorEquipment4',
        'mcbEquipment4', 'cableTrenchEquipment4', 'threadBodyEquipment4', 'ctEquipment4' , "otherEquipment4"
    ];

    allEquipmentIds.forEach(function(id) {
        var element = document.getElementById(id);
        if (element && !equipmentToShow.includes(id)) {
            element.classList.add('hidden');
        }
    });

		observationBtn.addEventListener('click', ()=> {   

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.add('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.add('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.remove('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.remove('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		 
		 
		 }); 

}


else if (QGType === "undergroundCable1") {

       
        	document.getElementById('numberEquipment4').classList.add('hidden');
			document.getElementById('circuitBreakerEquipment4').classList.add('hidden');
			document.getElementById('isolatorEquipment4').classList.add('hidden');
			document.getElementById('busbarEquipment4').classList.add('hidden');
			document.getElementById('fuseEquipment4').classList.add('hidden');
			document.getElementById('fuseBaseEquipment4').classList.add('hidden');
			document.getElementById('terminalEquipment4').classList.remove('hidden');
			document.getElementById('connectorEquipment4').classList.add('hidden');
			document.getElementById('hvmvEquipment4').classList.add('hidden');
			document.getElementById('secondaryEquipment4').classList.add('hidden');
			document.getElementById('lampPostEquipment4').classList.add('hidden');
			document.getElementById('lanternPLEquipment4').classList.add('hidden');
			document.getElementById('bracketEquipment4').classList.add('hidden');
			document.getElementById('bulbEquipment4').classList.add('hidden');
			document.getElementById('currentContactorEquipment4').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment4').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment4').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment4').classList.add('hidden');
			document.getElementById('rcdEquipment4').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment4').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment4').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment4').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment4').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment4').classList.add('hidden');
			document.getElementById('otherEquipment4').classList.remove('hidden');
			document.getElementById('lockDoorEquipment4').classList.add('hidden');
			document.getElementById('mcbEquipment4').classList.add('hidden');
			document.getElementById('cableTrenchEquipment4').classList.add('hidden');
			document.getElementById('threadBodyEquipment4').classList.remove('hidden');
			document.getElementById('ctEquipment4').classList.add('hidden');

              // equipement 3 


 document.getElementById('terminalEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       


document.getElementById('otherEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       

document.getElementById('threadBodyEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});       
	////////////////////// ----------------------------------------------------------------
//         // protection   -- - - -- - - - - - - - - - - - - - - - -------- 
 
		document.getElementById('QGprotectionActuationI').classList.add('hidden');      
        document.getElementById('QCprotectionActuationI').classList.add('hidden');     
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');          
        document.getElementById('cclprotectionActuationI').classList.add('hidden');   
        document.getElementById('cusprotectionActuationI').classList.add('hidden');
        document.getElementById('meterprotectionActuationI').classList.add('hidden');   
        document.getElementById('seprotectionActuationI').classList.remove('hidden');   // ok 
        document.getElementById('ptprotectionActuationI').classList.add('hidden');  
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.remove('hidden');  // ok      
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden'); // ok        
        document.getElementById('cdprotectionActuationI').classList.remove('hidden');     // ok       
        document.getElementById('phprotectionActuationI').classList.remove('hidden');     // ok          
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');        // ok        
         



        // protection 1 and 2 link 


		document.getElementById('seprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.remove('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});


// protection Actuation II to III

document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

document.getElementById('rmuprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.remove('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});

// protection Actuation II to III

document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

	document.getElementById('mvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });


document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});

// protrction Actuation II to III
document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

document.getElementById('cdprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});

//protection Actuation II to III

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });
document.getElementById('phprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});

// protection actuation II to III

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});

// protection Actuation II to III

document.getElementById('otherprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 
		observationBtn.addEventListener('click', ()=> {   

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.add('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		document.getElementById('Water_leakage_ob1').classList.add('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.remove('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.remove('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.remove('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

		 }); 

}

else if (QGType === "aerialCable1" ) {


        	document.getElementById('numberEquipment4').classList.add('hidden');
			document.getElementById('circuitBreakerEquipment4').classList.add('hidden');
			document.getElementById('isolatorEquipment4').classList.add('hidden');
			document.getElementById('busbarEquipment4').classList.add('hidden');
			document.getElementById('fuseEquipment4').classList.add('hidden');
			document.getElementById('fuseBaseEquipment4').classList.add('hidden');
			document.getElementById('terminalEquipment4').classList.remove('hidden');
			document.getElementById('connectorEquipment4').classList.remove('hidden');
			document.getElementById('hvmvEquipment4').classList.add('hidden');
			document.getElementById('secondaryEquipment4').classList.add('hidden');
			document.getElementById('lampPostEquipment4').classList.add('hidden');
			document.getElementById('lanternPLEquipment4').classList.add('hidden');
			document.getElementById('bracketEquipment4').classList.add('hidden');
			document.getElementById('bulbEquipment4').classList.add('hidden');
			document.getElementById('currentContactorEquipment4').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment4').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment4').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment4').classList.add('hidden');
			document.getElementById('rcdEquipment4').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment4').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment4').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment4').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment4').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment4').classList.add('hidden');
			document.getElementById('otherEquipment4').classList.remove('hidden');
			document.getElementById('lockDoorEquipment4').classList.add('hidden');
			document.getElementById('mcbEquipment4').classList.add('hidden');
			document.getElementById('cableTrenchEquipment4').classList.add('hidden');
			document.getElementById('threadBodyEquipment4').classList.remove('hidden');
			document.getElementById('ctEquipment4').classList.add('hidden');


        // equipement 3 

		document.getElementById('terminalEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       


document.getElementById('otherEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
});       

document.getElementById('threadBodyEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});       




document.getElementById('connectorEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});       

         
/////////////////////////////////////----------------------------------------------------//////////////////
			      // protection   -- - - -- - - - - - - - - - - - - - - - -------- 
 
		document.getElementById('QGprotectionActuationI').classList.add('hidden');      
        document.getElementById('QCprotectionActuationI').classList.add('hidden');     
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');          
        document.getElementById('cclprotectionActuationI').classList.add('hidden');   
        document.getElementById('cusprotectionActuationI').classList.add('hidden');
        document.getElementById('meterprotectionActuationI').classList.add('hidden');   
        document.getElementById('seprotectionActuationI').classList.add('hidden');   
        document.getElementById('ptprotectionActuationI').classList.add('hidden');  
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');       
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden');  // ok      
        document.getElementById('cdprotectionActuationI').classList.remove('hidden');   // ok            
        document.getElementById('phprotectionActuationI').classList.remove('hidden');   // ok             
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');   // ok             
         
         
		// protection 1 and 2 link 
   
 
		document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});

// protection Actuation II to Protection Actuation III
document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

document.getElementById('cdprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});	

// Protection Actuation II to III

document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });


document.getElementById('phprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});	

// protection Actuation II to III
document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});	

// protection Avtuation II to III

document.getElementById('otherprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    }); 
        observationBtn.addEventListener('click', ()=> {    

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.add('hidden');
		document.getElementById('Short_circuit_ob1').classList.remove('hidden');
		document.getElementById('Smoke_ob1').classList.remove('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		document.getElementById('Water_leakage_ob1').classList.add('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.remove('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.remove('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.remove('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden');            


		}); 


}
else if (QGType === "manhole1") { 


	        document.getElementById('numberEquipment4').classList.add('hidden');
			document.getElementById('circuitBreakerEquipment4').classList.add('hidden');
			document.getElementById('isolatorEquipment4').classList.add('hidden');
			document.getElementById('busbarEquipment4').classList.add('hidden');
			document.getElementById('fuseEquipment4').classList.add('hidden');
			document.getElementById('fuseBaseEquipment4').classList.add('hidden');
			document.getElementById('terminalEquipment4').classList.add('hidden');
			document.getElementById('connectorEquipment4').classList.add('hidden');
			document.getElementById('hvmvEquipment4').classList.add('hidden');
			document.getElementById('secondaryEquipment4').classList.add('hidden');
			document.getElementById('lampPostEquipment4').classList.add('hidden');
			document.getElementById('lanternPLEquipment4').classList.add('hidden');
			document.getElementById('bracketEquipment4').classList.add('hidden');
			document.getElementById('bulbEquipment4').classList.add('hidden');
			document.getElementById('currentContactorEquipment4').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment4').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment4').classList.remove('hidden');
			document.getElementById('concreteTypeCoverEquipment4').classList.remove('hidden');
			document.getElementById('rcdEquipment4').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment4').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment4').classList.add('hidden');
			document.getElementById('handlingClientComplaintEquipment4').classList.add('hidden');
			document.getElementById('nonElectricityRelatedPropertiesEquipment4').classList.add('hidden');
			document.getElementById('powerRestoredByClientEquipment4').classList.add('hidden');
			document.getElementById('otherEquipment4').classList.remove('hidden');
			document.getElementById('lockDoorEquipment4').classList.add('hidden');
			document.getElementById('mcbEquipment4').classList.add('hidden');
			document.getElementById('cableTrenchEquipment4').classList.add('hidden');
			document.getElementById('threadBodyEquipment4').classList.add('hidden');
			document.getElementById('ctEquipment4').classList.add('hidden');

              // equipement 3 


			  document.getElementById('steelTypeCoverEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   


document.getElementById('concreteTypeCoverEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   


document.getElementById('otherEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   


///////////////////////////--------------------------------------------------/////////////////////////////			
         
// 	     // protection   -- - - -- - - - - - - - - - - - - - - - -------- 
 
	    document.getElementById('QGprotectionActuationI').classList.add('hidden');      
        document.getElementById('QCprotectionActuationI').classList.add('hidden');     
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');          
        document.getElementById('cclprotectionActuationI').classList.add('hidden');   
        document.getElementById('cusprotectionActuationI').classList.add('hidden');
        document.getElementById('meterprotectionActuationI').classList.add('hidden');   
        document.getElementById('seprotectionActuationI').classList.add('hidden');   
        document.getElementById('ptprotectionActuationI').classList.add('hidden');  
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');       
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');      
        document.getElementById('cdprotectionActuationI').classList.add('hidden');             
        document.getElementById('phprotectionActuationI').classList.add('hidden');                 
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.remove('hidden');  // ok 
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');   // ok       




          // protection 1 to 2 link 


		  document.getElementById('nproprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });
// protection II to III
document.getElementById('nproprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

	// protection Actuation II to III

	document.getElementById('otherprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });  
        observationBtn.addEventListener('click', ()=> {    

		document.getElementById('obheading').style.display = 'block';	
		document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.add('hidden');
		document.getElementById('Short_circuit_ob1').classList.add('hidden');
		document.getElementById('Smoke_ob1').classList.add('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		document.getElementById('Water_leakage_ob1').classList.add('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.add('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.remove('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.remove('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden');        


		}); 


}


else if (QGType === "chargingStation1") {
    // Array of equipment IDs to show
    var equipmentToShow = [
        'circuitBreakerEquipment4', 'isolatorEquipment4', 'busbarEquipment4',
        'terminalEquipment4', 'connectorEquipment4', 'rcdEquipment4',
        'chargingPlugCableEquipment4', 'otherEquipment4', 'mcbEquipment4'
    ];

         // equipement 3 

         
		 document.getElementById('circuitBreakerEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   
document.getElementById('isolatorEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   
document.getElementById('rcdEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   
document.getElementById('chargingPlugCableEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   
document.getElementById('otherEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   
document.getElementById('mcbEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   

document.getElementById('busbarEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   

 
document.getElementById('terminalEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   

document.getElementById('connectorEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   
 	
/////////////////////////---------------------------------------------///////////////////////////////////

          // protection   -- - - -- - - - - - - - - - - - - - - - -------- 
 
		document.getElementById('QGprotectionActuationI').classList.add('hidden');      
        document.getElementById('QCprotectionActuationI').classList.add('hidden');     
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');          
        document.getElementById('cclprotectionActuationI').classList.add('hidden');   
        document.getElementById('cusprotectionActuationI').classList.add('hidden');
        document.getElementById('meterprotectionActuationI').classList.add('hidden');   
        document.getElementById('seprotectionActuationI').classList.add('hidden');   
        document.getElementById('ptprotectionActuationI').classList.add('hidden');  
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');       
        document.getElementById('qgbtprotectionActuationI').classList.remove('hidden');  // ok      
        document.getElementById('cdprotectionActuationI').classList.add('hidden');              
        document.getElementById('phprotectionActuationI').classList.add('hidden');               
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.remove('hidden'); // ok 
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');     // ok       
    
     

          // protection 1 to 2 link 

        
		  document.getElementById('qgbtprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

}); 

// protection Actuation II to III
document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

document.getElementById('nproprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

}); 

// Protection Actuation II to III

document.getElementById('nproprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

}); 

// Protection Actuation II to III

document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

    // Show selected equipment fields
    equipmentToShow.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.classList.remove('hidden');
        }
    });

    // Hide all other equipment fields
    var allEquipmentIds = [
        'numberEquipment4', 'fuseEquipment4', 'fuseBaseEquipment4',
        'secondaryEquipment4', 'lampPostEquipment4', 'lanternPLEquipment4',
        'bulbEquipment4', 'currentContactorEquipment4', 'timePhotoSensorEquipment4',
        'steelTypeCoverEquipment4', 'concreteTypeCoverEquipment4',
        'bracketEquipment4', 'handlingClientComplaintEquipment4',
        'clientRequestMaintenanceEquipment4', 'nonElectricityRelatedPropertiesEquipment4',
        'powerRestoredByClientEquipment4', 'lockDoorEquipment4',
        'cableTrenchEquipment4', 'threadBodyEquipment4', 'ctEquipment4' , "hvmvEquipment4"
    ];

    allEquipmentIds.forEach(function(id) {
        var element = document.getElementById(id);
        if (element && !equipmentToShow.includes(id)) {
            element.classList.add('hidden');
        }
    }); 
		observationBtn.addEventListener('click', ()=> {    

		document.getElementById('obheading').style.display = 'block';	
        document.getElementById('Trip_ob1').classList.remove('hidden');
		document.getElementById('Brunt_ob1').classList.add('hidden');
		document.getElementById('Short_circuit_ob1').classList.add('hidden');
		document.getElementById('Smoke_ob1').classList.add('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.remove('hidden');
		document.getElementById('Spark_ob1').classList.add('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden'); 
		

		}); 


}
else if (QGType === "evCharger1") {
    // Array of equipment IDs to show
    var equipmentToShow = [
        'numberEquipment4', 'circuitBreakerEquipment4', 'isolatorEquipment4',
        'fuseEquipment4', 'terminalEquipment4', 'connectorEquipment4',
        'secondaryEquipment4', 'rcdEquipment4', 'chargingPlugCableEquipment4',
        'otherEquipment4'
    ];

       // equipement 3 


       document.getElementById('numberEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   
document.getElementById('circuitBreakerEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   

document.getElementById('isolatorEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   


document.getElementById('secondaryEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   

document.getElementById('rcdEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');

}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   

document.getElementById('chargingPlugCableEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   
document.getElementById('otherEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   


document.getElementById('fuseEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   




document.getElementById('terminalEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   



document.getElementById('connectorEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.remove('hidden');
document.getElementById('phj2').classList.remove('hidden');
document.getElementById('phj3').classList.remove('hidden');
document.getElementById('phj4').classList.remove('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   


/////----/////////////////////------------------------------------------/////////////////////////////////
	       // protection   -- - - -- - - - - - - - - - - - - - - - -------- 
 
		document.getElementById('QGprotectionActuationI').classList.add('hidden');      
        document.getElementById('QCprotectionActuationI').classList.add('hidden');     
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');          
        document.getElementById('cclprotectionActuationI').classList.add('hidden');   
        document.getElementById('cusprotectionActuationI').classList.add('hidden');
        document.getElementById('meterprotectionActuationI').classList.add('hidden');   
        document.getElementById('seprotectionActuationI').classList.add('hidden');   
        document.getElementById('ptprotectionActuationI').classList.add('hidden');  
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');       
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');        
        document.getElementById('cdprotectionActuationI').classList.add('hidden');             
        document.getElementById('phprotectionActuationI').classList.add('hidden');               
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.remove('hidden'); // ok 
        document.getElementById('evchargerprotectionActuationI').classList.remove('hidden');  //ok
        
		document.getElementById('nproprotectionActuationI').classList.add('hidden');
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');     // ok       

    
        // protection 1 to 2 link 


		document.getElementById('chargingstationprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.remove('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.remove('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    }); 
// protection Actuation II to III

document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

	document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

	document.getElementById('rcdprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

	document.getElementById('evchargerprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.remove('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.remove('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.remove('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.remove('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.remove('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

	// Protection Actuation II to III
	
	document.getElementById('circuitbreakerprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });
	document.getElementById('lvfuseprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.remove('hidden'); 
			         document.getElementById('pah2').classList.remove('hidden');  
				     document.getElementById('pah3').classList.remove('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

	document.getElementById('mcbprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

	document.getElementById('rcdprotectionActuationII').addEventListener('change', function() {
    if (this.querySelector('input[type="checkbox"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.remove('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });




	
	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } 

    });

	document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });

         
    // Show selected equipment fields
    equipmentToShow.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.classList.remove('hidden');
        }
    });

    // Hide all other equipment fields
    var allEquipmentIds = [
        'fuseBaseEquipment4', 'lampPostEquipment4', 'lanternPLEquipment4',
        'bulbEquipment4', 'currentContactorEquipment4', 'timePhotoSensorEquipment4',
        'steelTypeCoverEquipment4', 'concreteTypeCoverEquipment4',
        'bracketEquipment4', 'handlingClientComplaintEquipment4',
        'clientRequestMaintenanceEquipment4', 'nonElectricityRelatedPropertiesEquipment4',
        'powerRestoredByClientEquipment4', 'lockDoorEquipment4',
        'mcbEquipment4', 'cableTrenchEquipment4', 'threadBodyEquipment4', 'ctEquipment4' , "busbarEquipment4" , "hvmvEquipment4"
    ];

    allEquipmentIds.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.classList.add('hidden');
        }
    });    

		observationBtn.addEventListener('click', ()=> {   

		document.getElementById('obheading').style.display = 'block';		
		document.getElementById('Trip_ob1').classList.remove('hidden');
		document.getElementById('Brunt_ob1').classList.remove('hidden');
		document.getElementById('Short_circuit_ob1').classList.add('hidden');
		document.getElementById('Smoke_ob1').classList.add('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.remove('hidden');
		document.getElementById('Water_leakage_ob1').classList.remove('hidden');
		document.getElementById('High/low_voltage_ob1').classList.remove('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.remove('hidden');
		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.remove('hidden');
		document.getElementById('Out_of_order_ob1').classList.remove('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.remove('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.remove('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.add('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden');            


		 }); 


}else if (QGType === "cannotDetectFault1") {


        	document.getElementById('numberEquipment4').classList.add('hidden');
			document.getElementById('circuitBreakerEquipment4').classList.add('hidden');
			document.getElementById('isolatorEquipment4').classList.add('hidden');
			document.getElementById('busbarEquipment4').classList.add('hidden');
			document.getElementById('fuseEquipment4').classList.add('hidden');
			document.getElementById('fuseBaseEquipment4').classList.add('hidden');
			document.getElementById('terminalEquipment4').classList.add('hidden');
			document.getElementById('connectorEquipment4').classList.add('hidden');
			document.getElementById('hvmvEquipment4').classList.add('hidden');
			document.getElementById('secondaryEquipment4').classList.add('hidden');
			document.getElementById('lampPostEquipment4').classList.add('hidden');
			document.getElementById('lanternPLEquipment4').classList.add('hidden');
			document.getElementById('bracketEquipment4').classList.add('hidden');
			document.getElementById('bulbEquipment4').classList.add('hidden');
			document.getElementById('currentContactorEquipment4').classList.add('hidden');
			document.getElementById('timePhotoSensorEquipment4').classList.add('hidden');
			document.getElementById('steelTypeCoverEquipment4').classList.add('hidden');
			document.getElementById('concreteTypeCoverEquipment4').classList.add('hidden');
			document.getElementById('rcdEquipment4').classList.add('hidden');
			document.getElementById('chargingPlugCableEquipment4').classList.add('hidden');
			document.getElementById('clientRequestMaintenanceEquipment4').classList.remove('hidden'); // ok 
			document.getElementById('handlingClientComplaintEquipment4').classList.remove('hidden'); // ok 
			document.getElementById('nonElectricityRelatedPropertiesEquipment4').classList.remove('hidden'); // ok 
			document.getElementById('powerRestoredByClientEquipment4').classList.remove('hidden'); // ok 
			document.getElementById('otherEquipment4').classList.remove('hidden'); // ok 
			document.getElementById('lockDoorEquipment4').classList.add('hidden');
			document.getElementById('mcbEquipment4').classList.add('hidden');
			document.getElementById('cableTrenchEquipment4').classList.add('hidden');
			document.getElementById('threadBodyEquipment4').classList.add('hidden');
			document.getElementById('ctEquipment4').classList.add('hidden');
    

             // equipement 3 


   document.getElementById('clientRequestMaintenanceEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   
document.getElementById('handlingClientComplaintEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   
document.getElementById('nonElectricityRelatedPropertiesEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   
document.getElementById('powerRestoredByClientEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   
document.getElementById('otherEquipment4').addEventListener('change' , function() {

if(this.querySelector('input[type="checkbox"]').checked) 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden');
document.getElementById('phj4').classList.add('hidden');
}
else 
{
document.getElementById('phj1').classList.add('hidden');
document.getElementById('phj2').classList.add('hidden');
document.getElementById('phj3').classList.add('hidden'); 
document.getElementById('phj4').classList.add('hidden');

}
});   
//////////////////////////////////////////////-------------------------------------------//////////////////////
			   // protection   -- - - -- - - - - - - - - - - - - - - - -------- 
 
		document.getElementById('QGprotectionActuationI').classList.add('hidden');      
        document.getElementById('QCprotectionActuationI').classList.add('hidden');     
		document.getElementById('CPSprotectionActuationI').classList.add('hidden');          
        document.getElementById('cclprotectionActuationI').classList.add('hidden');   
        document.getElementById('cusprotectionActuationI').classList.add('hidden');
        document.getElementById('meterprotectionActuationI').classList.add('hidden');   
        document.getElementById('seprotectionActuationI').classList.add('hidden');   
        document.getElementById('ptprotectionActuationI').classList.add('hidden');  
        document.getElementById('transprotectionActuationI').classList.add('hidden');   
        document.getElementById('rmuprotectionActuationI').classList.add('hidden');       
        document.getElementById('qgbtprotectionActuationI').classList.add('hidden');  
        document.getElementById('cdprotectionActuationI').classList.add('hidden');                
        document.getElementById('phprotectionActuationI').classList.add('hidden');                
        document.getElementById('cdipprotectionActuationI').classList.add('hidden');
        document.getElementById('lamppostprotectionActuationI').classList.add('hidden');
        
		document.getElementById('chargingstationprotectionActuationI').classList.add('hidden');
        document.getElementById('evchargerprotectionActuationI').classList.add('hidden');
        
		document.getElementById('nproprotectionActuationI').classList.remove('hidden');  // ok 
        document.getElementById('otherprotectionActuationI').classList.remove('hidden');   // ok        

          // protection 1 to protection 2 link 

		  document.getElementById('nproprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});

// protection Actuation II to III

document.getElementById('noproprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });


document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); // ok 
		document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  // ok 
		document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   // ok 
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    } else {
        // Hide the "Number" checkbox if PT is not selected
        document.getElementById('numberprotectionActuationII').classList.add('hidden'); 
		 document.getElementById('circuitbreakerprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('lvfuseprotectionActuationII').classList.add('hidden');  
		 document.getElementById('mcbprotectionActuationII').classList.add('hidden');  
		 document.getElementById('sehvprotectionActuationII').classList.add('hidden');  
		 document.getElementById('FeederprotectionActuationII').classList.add('hidden');   
         document.getElementById('rcdprotectionActuationII').classList.add('hidden');        
    }
});
//Protection Actuation II to III

document.getElementById('otherprotectionActuationI').addEventListener('change', function() {
    if (this.querySelector('input[type="radio"]').checked)  
	{
        // Show the "Number" checkbox in Protection Actuation II
	  

		             document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } else {
        // Hide the "Number" checkbox if PT is not selected
      
                     document.getElementById('pah1').classList.add('hidden'); 
			         document.getElementById('pah2').classList.add('hidden');  
				     document.getElementById('pah3').classList.add('hidden'); 
				     document.getElementById('pah4').classList.add('hidden');  

    } 

    });          
     
		observationBtn.addEventListener('click', () => {   

		document.getElementById('obheading').style.display = 'block';	
        document.getElementById('Trip_ob1').classList.add('hidden');
		document.getElementById('Brunt_ob1').classList.add('hidden');
		document.getElementById('Short_circuit_ob1').classList.add('hidden');
		document.getElementById('Smoke_ob1').classList.add('hidden');
		document.getElementById('Discharge_Leakage_ob1').classList.add('hidden');
		document.getElementById('Water_leakage_ob1').classList.add('hidden');
		document.getElementById('High/low_voltage_ob1').classList.add('hidden');
		document.getElementById('Customer_no_present_ob1').classList.add('hidden');
		document.getElementById('Planned_Outage_ob1').classList.add('hidden');
		document.getElementById('Spark_ob1').classList.add('hidden');		
		document.getElementById('Unsealed_ob1').classList.add('hidden');
		document.getElementById('Fused_ob1').classList.add('hidden');
		document.getElementById('Out_of_order_ob1').classList.add('hidden');
		document.getElementById('Disappeared_ob1').classList.add('hidden');
		document.getElementById('Damage_ob1').classList.add('hidden');
		document.getElementById('Open_circuit_ob1').classList.add('hidden');
		document.getElementById('Gas_leakage_ob1').classList.add('hidden'); 
		document.getElementById('Oil_leakage_ob1').classList.add('hidden');
		document.getElementById('Standing_water_ob1').classList.add('hidden'); 
		document.getElementById('W/o_cover_plate_ob1').classList.add('hidden');  
		document.getElementById('No_Fault_Detected_ob1').classList.remove('hidden'); 
		document.getElementById('Bad_contact_ob1').classList.add('hidden'); 
		document.getElementById('No_responsibility_ob1').classList.add('hidden');  });  

  }
  
}
	
// Additional section .....................................................................



 repairProcedureBtn.addEventListener('click' , ()=>{

	document.getElementById('rpod').style.display = "none";  
    document.getElementById('rproure').style.display = "none"; 

 });   

 meterSealBtn.addEventListener('click', ()=>{ 

	document.getElementById('metalinfo').style.display = "none";  
    document.getElementById('mseal').style.display = "none"; 

 }); 

 reportBtn.addEventListener('click', ()=>{

	document.getElementById('reportviewer').style.display = "none";  
    document.getElementById('repoviewq').style.display = "none"; 


 }); 

 PreliminaryBtn.addEventListener('click', ()=>{
    
	document.getElementById('prmsc').style.display = "none";  
    document.getElementById('pcfo').style.display = "none"; 


 }); 


 ResponsibilityBtn.addEventListener('click' , ()=>{


	document.getElementById('rpsec').style.display = "none";  
    document.getElementById('rho').style.display = "none"; 
      

 }); 


 RemarkBtn.addEventListener('click' , ()=>{


	document.getElementById('resectpoint').style.display = "none";  
    document.getElementById('remarkpoint').style.display = "none"; 


 });  


 MaterialsBtn.addEventListener('click' , ()=>{


    document.getElementById('mertsec').style.display = "none";  
    document.getElementById('mertlused').style.display = "none"; 


 }); 

 LabourBtn.addEventListener('click' , () =>{


    document.getElementById('lbsec').style.display = "none";  
    document.getElementById('lbour').style.display = "none"; 


 }); 


 DebitBtn.addEventListener('click' , ()=>{ 

	document.getElementById('dbseec').style.display = "none";  
    document.getElementById('dbcus').style.display = "none"; 

 }); 

 cem_respBtn.addEventListener('click' , ()=>{ 


    document.getElementById('cems').style.display = "none";  
    document.getElementById('cemrepo').style.display = "none"; 

 }); 

 function showopt(jobType)
 {
        
	var jobOptions = document.querySelectorAll('.hidden');
	jobOptions.forEach(function(option) {
        option.classList.add('hidden');
    });       

    if(jobType === 'customerInstallation')
	{
        repairProcedureBtn.addEventListener('click' , ()=>{

        document.getElementById('rpod').style.display = "block";   
		document.getElementById('rproure').style.display = "block"; 

       });   
	   meterSealBtn.addEventListener('click', ()=>{ 

        document.getElementById('metalinfo').style.display = "block";  
        document.getElementById('mseal').style.display = "block"; 

        });  
		reportBtn.addEventListener('click', ()=>{

        document.getElementById('reportviewer').style.display = "block";  
        document.getElementById('repoviewq').style.display = "block"; 


        });  


        PreliminaryBtn.addEventListener('click', ()=>{
    
	     document.getElementById('prmsc').style.display = "block";  
         document.getElementById('pcfo').style.display = "block"; 


         });  


		 ResponsibilityBtn.addEventListener('click' , ()=>{


         document.getElementById('rpsec').style.display = "block";  
         document.getElementById('rho').style.display = "block"; 
  

        });  

		RemarkBtn.addEventListener('click' , ()=>{


       document.getElementById('resectpoint').style.display = "block";  
       document.getElementById('remarkpoint').style.display = "block"; 


        });  


		MaterialsBtn.addEventListener('click' , ()=>{


        document.getElementById('mertsec').style.display = "block";  
        document.getElementById('mertlused').style.display = "block"; 


        }); 


		LabourBtn.addEventListener('click' , () =>{


        document.getElementById('lbsec').style.display = "block";  
        document.getElementById('lbour').style.display = "block"; 


        }); 


        DebitBtn.addEventListener('click' , ()=>{ 

        document.getElementById('dbseec').style.display = "block";  
        document.getElementById('dbcus').style.display = "block"; 

       }); 


       cem_respBtn.addEventListener('click' , ()=>{ 


       document.getElementById('cems').style.display = "block";  
       document.getElementById('cemrepo').style.display = "block"; 

       }); 


	}
	else if(jobType === 'CEMNetwork')
	{
        repairProcedureBtn.addEventListener('click' , ()=>{

        document.getElementById('rpod').style.display = "block";  
		document.getElementById('rproure').style.display = "block"; 

         });   
		 meterSealBtn.addEventListener('click', ()=>{ 

         document.getElementById('metalinfo').style.display = "block";  
         document.getElementById('mseal').style.display = "block"; 

         }); 
		 reportBtn.addEventListener('click', ()=>{

         document.getElementById('reportviewer').style.display = "block";  
         document.getElementById('repoviewq').style.display = "block"; 


         });  

		 PreliminaryBtn.addEventListener('click', ()=>{
    
	       document.getElementById('prmsc').style.display = "block";   
	       document.getElementById('pcfo').style.display = "block"; 


    	});  


		ResponsibilityBtn.addEventListener('click' , ()=>{


        document.getElementById('rpsec').style.display = "block";  
        document.getElementById('rho').style.display = "block"; 


       });  


	   RemarkBtn.addEventListener('click' , ()=>{


       document.getElementById('resectpoint').style.display = "block";  
       document.getElementById('remarkpoint').style.display = "block"; 


       });  



	   MaterialsBtn.addEventListener('click' , ()=>{


         document.getElementById('mertsec').style.display = "block";  
         document.getElementById('mertlused').style.display = "block"; 


        });  

		
		LabourBtn.addEventListener('click' , () =>{


        document.getElementById('lbsec').style.display = "block";  
        document.getElementById('lbour').style.display = "block"; 


        });  

		
        DebitBtn.addEventListener('click' , ()=>{ 

         document.getElementById('dbseec').style.display = "block";  
         document.getElementById('dbcus').style.display = "block"; 

         }); 


		 cem_respBtn.addEventListener('click' , ()=>{ 


         document.getElementById('cems').style.display = "block";  
         document.getElementById('cemrepo').style.display = "block"; 

        }); 

	}
    else if(jobType === 'CEMNetworkClaim')
	{
		 repairProcedureBtn.addEventListener('click' , ()=>{

         document.getElementById('rpod').style.display = "block";  
		 document.getElementById('rproure').style.display = "block";

         });  
		 meterSealBtn.addEventListener('click', ()=>{ 

         document.getElementById('metalinfo').style.display = "block";  
         document.getElementById('mseal').style.display = "block"; 

         });  
		 reportBtn.addEventListener('click', ()=>{

        document.getElementById('reportviewer').style.display = "block";  
        document.getElementById('repoviewq').style.display = "block"; 


        });  


		PreliminaryBtn.addEventListener('click', ()=>{
    
	     document.getElementById('prmsc').style.display = "block";  
     	 document.getElementById('pcfo').style.display = "block"; 

    	}); 


        ResponsibilityBtn.addEventListener('click' , ()=>{


         document.getElementById('rpsec').style.display = "block";  
         document.getElementById('rho').style.display = "block"; 


         });  



		 RemarkBtn.addEventListener('click' , ()=>{


         document.getElementById('resectpoint').style.display = "block";  
         document.getElementById('remarkpoint').style.display = "block"; 


         });  


		 MaterialsBtn.addEventListener('click' , ()=>{


          document.getElementById('mertsec').style.display = "block";  
          document.getElementById('mertlused').style.display = "block"; 


        }); 


		LabourBtn.addEventListener('click' , () =>{


        document.getElementById('lbsec').style.display = "block";  
        document.getElementById('lbour').style.display = "block"; 


        }); 


        
        DebitBtn.addEventListener('click' , ()=>{ 

         document.getElementById('dbseec').style.display = "block";  
         document.getElementById('dbcus').style.display = "block"; 

        }); 

      
		cem_respBtn.addEventListener('click' , ()=>{ 


        document.getElementById('cems').style.display = "block";  
        document.getElementById('cemrepo').style.display = "block"; 

        }); 

	}

 }


const canvas = document.getElementById('signpad');
	const signatureDataInput = document.getElementById('sign');
	const clearButton = document.getElementById('clear-signature');
	const ctx = canvas.getContext('2d');

	let drawing = false;

	canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;

	function startDrawing(event) {
		drawing = true;
		ctx.beginPath();
		ctx.moveTo(event.offsetX, event.offsetY);
	}

	function draw(event) {
		if (!drawing) return;
		ctx.lineTo(event.offsetX, event.offsetY);
		ctx.stroke();
	}

	function stopDrawing() {
		drawing = false;
		signatureDataInput.value = canvas.toDataURL();
	}

	canvas.addEventListener('mousedown', startDrawing);
	canvas.addEventListener('mousemove', draw);
	canvas.addEventListener('mouseup', stopDrawing);
	canvas.addEventListener('mouseleave', stopDrawing);

	clearButton.addEventListener('click', () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		signatureDataInput.value = '';
	});
	document.getElementById('previewBtn').addEventListener('click', function() {
    // Get all selected job types
    const numberEquipment2Value = document.getElementById('i2a').value; 
    const protectionact2  = document.getElementById('prot2').value; 
    const repairvalue = document.getElementById('repairnumber').value; 
    const metersealnewvalue = document.getElementById('newSealNo').value;  
    const metersealoldvalue = document.getElementById('oldSealNo').value;  
    const selectedJobTypes = document.querySelectorAll('input[name="jobType"]:checked');
    const selectedEquipmentI = document.querySelectorAll('input[name="equipment"]:checked');
    const selectedEquipmentII = document.querySelectorAll('input[name="equipment2"]:checked'); 
    const selectedEquipmentIII = document.querySelectorAll('input[name="equipment3"]:checked');
    const selectedProtectionI = document.querySelector('input[name="protectionActuationI"]:checked');
    const protectionActuationI = selectedProtectionI ? selectedProtectionI.value : 'None selected';
    const selectedProtectionII = document.querySelectorAll('input[name="protectionActuationII"]:checked');
    const selectedProtectionIII = document.querySelectorAll('input[name="protectionActuationIII"]:checked');
    const protectionCapacity = document.querySelector('input[name="protectionActuationIII"][type="text"]').value;
    const selectedObservations = document.querySelectorAll('input[name="observation"]:checked');
    const selectedRepairProcedures = document.querySelectorAll('input[name="repairProcedure"]:checked');
    const selectedMeterSeals = document.querySelectorAll('input[name="meterSeal"]:checked');
    const selectedReport = document.querySelector('input[name="Report"]:checked');
    const reportText = selectedReport ? selectedReport.value : 'None selected';
    const selectedPreliminaryCause = document.querySelector('input[name="Preliminary cause of failure"]:checked');
    const preliminaryCauseText = selectedPreliminaryCause ? selectedPreliminaryCause.value : 'None selected';
    const selectedResponsibility = document.querySelector('input[name="CEM"]:checked');
    const responsibilityText = selectedResponsibility ? selectedResponsibility.value : 'None selected';
    const remarksText = document.getElementById('longText').value;
    const description = document.getElementById('Description').value;
    const fuse = document.getElementById('Fuse').value;
    const circuitBreaker = document.getElementById('Circuitbreaker').value;
    const rating = document.getElementById('Rating').value;
    const qty = document.getElementById('Qty').value;
    const code = document.getElementById('Code').value;
    const hours = document.getElementById('Hours').value;
    const workNo = document.getElementById('WorkNo').value;
	const debitToCustomer = document.getElementById('yes_no_dropdown').value;
    const mop = document.getElementById('mop').value;
    const staffNo = document.getElementById('staff-no').value;
    const date = document.getElementById('date').value;
	const req = document.getElementById('req').value;
    const arr = document.getElementById('arr').value;
    const conc = document.getElementById('conc').value;
    const dat = document.getElementById('dat').value;
    const oms = document.getElementById('oms').value;
    const reg = document.getElementById('reg').value;
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const contract = document.getElementById('contract').value;
    const meter = document.getElementById('meter').value;
    const add = document.getElementById('add').value;
	 const sign = document.getElementById('sign').value;
    // Check if at least one job type and one equipment I are selected
    if (selectedJobTypes.length > 0 && selectedEquipmentI.length > 0) {
        const modal = document.getElementById('myModal');
        const modalText = document.getElementById('modalText');
        
        const jobTypeText = Array.from(selectedJobTypes).map(jobType => jobType.value).join('<br>');
        const equipmentIText = Array.from(selectedEquipmentI).map(equipment => equipment.value).join('<br>');
        
        const equipmentIIValues = Array.from(selectedEquipmentII).map(equipment => equipment.value);
        if (numberEquipment2Value !== '') {
            equipmentIIValues.push(numberEquipment2Value);
        }
        const equipmentIIText = equipmentIIValues.join('<br>');
        
        const equipmentIIIText = Array.from(selectedEquipmentIII).map(equipment => equipment.value).join('<br>');
        
        const protection2values = Array.from(selectedProtectionII).map(equipment => equipment.value);  
        if(protectionact2 !== '') {
            protection2values.push(protectionact2);
        }
        const protectionIIText = protection2values.join('<br>');

        const protectionIIIText = Array.from(selectedProtectionIII).map(protection => protection.value).join('<br>');
        const observationText = Array.from(selectedObservations).map(observation => observation.value).join('<br>');
        
        const repairProcedureValues = Array.from(selectedRepairProcedures).map(procedure => procedure.value);  
        if(repairvalue !== '') {
            repairProcedureValues.push(repairvalue);
        }
        const repairProcedureText = repairProcedureValues.join('<br>');

        const meterSealValues = Array.from(selectedMeterSeals).map(seal => seal.value);
        if(metersealnewvalue !== '') {
            meterSealValues.push(metersealnewvalue);
        }
        if(metersealoldvalue !== '') {
            meterSealValues.push(metersealoldvalue);
        }
        const meterSealText = meterSealValues.join('<br>');

        const materialsLaborUsedPreview = `
            Description: ${description}<br>
            Fuse: ${fuse}<br>
            Circuit Breaker: ${circuitBreaker}<br>
            Rating: ${rating}<br>
            Qty: ${qty}<br>
            Code: ${code}
        `;
        
        const labourDetailsPreview = `
            Hours: ${hours}<br>
            Work No: ${workNo}
        `;

        // Debit to Customer and CEM Responsible Staffs preview
        const debitToCustomerPreview = `
            Debit to Customer: ${debitToCustomer}<br>
            MOP: ${mop}
        `;
        
        const cemResponsibleStaffsPreview = `
            Staff No: ${staffNo}<br>
            Date: ${date}
        `;
        modalText.innerHTML = `<h1 style="margin-left:460px"> PREVIEW </h1> <br>
            Nature of Job: ${jobTypeText}<br>
            Equipment I: ${equipmentIText}<br>
            Equipment II: ${equipmentIIText}<br>
            Equipment III: ${equipmentIIIText}<br>
            Protection Actuation I: ${protectionActuationI}<br>
            Protection Actuation II: ${protectionIIText}<br>
            Protection Actuation III: ${protectionIIIText}<br>
            Capacity: ${protectionCapacity}<br>
            Observations: ${observationText}<br>
            Repair Procedure: ${repairProcedureText}<br>
            Meter Seal:<br> ${meterSealText}<br>
            Report: ${reportText}<br>
            Preliminary Cause: ${preliminaryCauseText}<br>
            Responsibility: ${responsibilityText}<br>
            Remarks: ${remarksText}<br>
            Materials and Labour Used:<br> ${materialsLaborUsedPreview}<br>
            Labour:<br> ${labourDetailsPreview}<br>
			 ${debitToCustomerPreview}<br>
            ${cemResponsibleStaffsPreview}<br>
			 Time/Date:<br>
             Request: ${req}<br>
             Arrival: ${arr}<br>
             Conclusion: ${conc}<br>
             Date: ${dat}<br>
             OMS Event No.: ${oms}<br>
            Registration No.: ${reg}<br>
            Customer Identification/Installation:<br>
             Name: ${name}<br>
             Contact No.: ${contact}<br>
             Contract No.: ${contract}<br>
             Meter No.: ${meter}<br>
             Address: ${add}<br>
			 signpad:<br><img src=${sign}  height='100' width='100' />`;

        modal.style.display = 'block';
    } else {
        alert('Please select at least one nature of job and one equipment I.');
    }
});

const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }

}

// submit action
	document.getElementById('submitBtn').addEventListener('click', function() {
		
		window.location.href = 'submit.html';
	});
