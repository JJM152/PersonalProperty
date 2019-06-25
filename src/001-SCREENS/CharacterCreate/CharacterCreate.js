App.Pages.CharacterCreate = class CharacterCreate {
    constructor()
    {

        this._StatSliderConfig = { };
    }

    get Stats() { return this._StatSliderConfig; }
    set Stats(v) { this._StatSliderConfig = v };

    AddStatSlider(Type, Attrib, Label)
    {
        var ID = Type + "_" + Attrib;
        if (this.Stats.hasOwnProperty(ID) == false) {

            this.Stats[ID] = { 
                TYPE : Type,
                ATTRIB : Attrib,
            };
        }
    }
};