"use strict";
let objects;
(function (objects)
{
    class Project
    {
        constructor(realestatePage="",protectedPlanet="",instructorevaluationForm="")
        {
            this.realestatePage = realestatePage;
            this.protectedPlanet = protectedPlanet;
            this.instructorevaluationForm = instructorevaluationForm;
        }

        toString()
        {
            let outputstring ="";
            outputstring += "Real Estate Page    : " + this.realestatePage + "\n";
            outputstring += "Protected Planet    : " + this.protectedPlanet + "\n";
            outputstring += "Instructor Evaluation Form   : " + this.instructorevaluationForm + "\n"; 
            return outputstring;
        }

        toJSON()
        {
            let JSONObject =
            {
                realestatePage: this.realestatePage,
                protectedPlanet: this.protectedPlanet,
                instructorevaluationForm: this.instructorevaluationForm,
            };

            return JSONObject;
        }

        setProject(JSON_Data)
        {
            this.realestatePage = JSON_Data.realestatePage;
            this.protectedPlanet = JSON_Data.protectedPlanet;
            this.instructorevaluationForm = JSON_Data.instructorevaluationForm;
        }
    }
    objects.Project = Project;

}(objects || (objects = {})));