/**
 * HospitalRunFHIRAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BackboneElement = require('./BackboneElement');

/**
 * Creates an instance of DosageInstructionItem
 */
class DosageInstructionItem extends BackboneElement {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.text = this.constructor.getValue(obj.text);
        this.additionalInstructions = this.constructor.getValue(obj.additionalInstructions);
        this.timing = this.constructor.getValue(obj.timing);
        this.asNeeded = this.constructor.getValue(obj.asNeeded);
        this.site = this.constructor.getValue(obj.site);
        this.route = this.constructor.getValue(obj.route);
        this.method = this.constructor.getValue(obj.method);
        this.dose = this.constructor.getValue(obj.dose);
        this.rate = this.constructor.getValue(obj.rate);
        this.maxDosePerPeriod = this.constructor.getValue(obj.maxDosePerPeriod);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'text', realName: 'text' },
            {
                name: 'additionalInstructions',
                realName: 'additionalInstructions',
                type: 'CodeableConcept',
            },
            { name: 'timing', realName: 'timing', type: 'Timing' },
            { name: 'asNeeded', realName: 'asNeeded', type: 'CodeableConcept' },
            { name: 'site', realName: 'site' },
            { name: 'route', realName: 'route', type: 'CodeableConcept' },
            { name: 'method', realName: 'method', type: 'CodeableConcept' },
            { name: 'dose', realName: 'dose' },
            { name: 'rate', realName: 'rate' },
            { name: 'maxDosePerPeriod', realName: 'maxDosePerPeriod', type: 'Ratio' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {
        };
    }
}

module.exports = DosageInstructionItem;