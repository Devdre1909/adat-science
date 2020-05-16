<template>
  <div>
    <div>
      <NavBar />
      <b-container style="margin-top: 3rem">
        <h4>Kindly fill the application form</h4>
        <b-form>
          <b-form-group label="Surname" for="surname">
            <b-form-input id="surname" type="text" placeholder="Surname">
            </b-form-input>
          </b-form-group>
          <b-form-group label="First name" for="first_name">
            <b-form-input id="first_name" type="text" placeholder="First name">
            </b-form-input>
          </b-form-group>
          <b-form-group label="Email" for="email">
            <b-form-input id="email" type="email" placeholder="Email">
            </b-form-input>
          </b-form-group>
          <b-form-group label="Phone Number" for="phone_number">
            <b-form-input
              id="phone_number"
              type="text"
              placeholder="Phone number"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group label="Contact Address" for="contact_address">
            <b-form-textarea
              id="contact_address"
              placeholder="Contact Address"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <b-form-group label="Date of Birth" for="dob">
            <b-form-datepicker id="dob" class="mb-2"></b-form-datepicker>
          </b-form-group>
          <b-form-group label="Country of Residence" for="cof">
            <b-form-input
              type="text"
              id="cof"
              placeholder="Country of Residence"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Citizenship" for="citizenship">
            <b-form-input
              list="citizenship-list"
              id="citizenship"
            ></b-form-input>
            <b-form-datalist
              id="citizenship-list"
              :options="options"
            ></b-form-datalist>
          </b-form-group>
          <b-form-group label="Sex" for="sex">
            <b-form-select :options="optionSex"></b-form-select>
          </b-form-group>
          <b-form-group label="Education" for="education">
            <b-form-select
              v-model="selectedEdu"
              :options="optionEdu"
            ></b-form-select>
          </b-form-group>
          <div v-if="selectedEdu === 'NCE/ND/Undergraduate'">
            <b-form-group label="Name of Current Institution" for="noci">
              <b-form-input
                type="text"
                id="noci"
                placeholder="Name of Current Institution"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Course of Study" for="cos">
              <b-form-input
                type="text"
                id="cos"
                placeholder="Course of Study"
              ></b-form-input>
            </b-form-group>
          </div>
          <div v-if="selectedEdu === 'HND/Graduates/Higher degree'">
            <b-form-group label="Highest Degree obtained" for="hdo">
              <b-form-input
                type="text"
                id="hdo"
                placeholder="Highest Degree obtained"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Institution where the degree was obtained"
              for="inti_do"
            >
              <b-form-input
                type="text"
                id="inti_do"
                placeholder="Institution where the degree was obtained"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="African language(s) spoken" for="inti_do">
              <b-form-input
                type="text"
                id="inti_do"
                placeholder="African language(s) spoken (Use comma to separate each language(s))"
              ></b-form-input>
            </b-form-group>
          </div>
          <h4>Next of Kin</h4>
          <b-form-group label="Full name" for="next_of_kin_name">
            <b-form-input
              type="text"
              id="next_of_kin_name"
              placeholder="Full name"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Phone Number" for="next_of_kin_phone">
            <b-form-input
              type="text"
              id="next_of_kin_phone"
              placeholder="Phone Number"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Address" for="next_of_kin_address">
            <b-form-textarea
              id="next_of_kin_address"
              placeholder="Address"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <h4>Essay Section</h4>
          <p>
            <strong
              >Instruction: applicants are to answer either of the
              essays</strong
            >
          </p>
          <p>
            It is evident that Africans are no more comfortable with the
            stereotype knowledge of the fact that, they were colonized by the
            Europeans. This has triggered several strives and anger in most
            engagements that connects the Africans with the western
            counterparts. One therefore wonders, would Africa fare better had
            she not been colonized? What is your view on this?
          </p>
          <b-form-group>
            <b-form-textarea
              id="a1"
              placeholder="Your answer here..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <p>
            Many historiographies have been following divisions, schemes and
            sequences set by the Europeans who in the past claimed that there
            was no such thing as Africa and that the history of Africa is
            bequeathed to it by the Europeans. On the other extreme, most
            Africans claimed that Africa was a paradise before her contact with
            the Europeans. Is this true?
          </p>
          <b-form-group>
            <b-form-textarea
              id="a2"
              placeholder="Your answer here..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <h4>Declaration</h4>
          <p>
            By writing your name in the space provided, you have agreed to the
            declaration below: <br />
            I <input type="text" class="personal" /> declare that all
            information supply in this application is true of me and that at any
            time it is proven otherwise, I risk being disqualified.
          </p>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-container>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
  data() {
    return {
      options: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan (Province of China)",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
        "Åland Islands"
      ],
      optionSex: [
        { value: "Male", text: "Male" },
        { value: "Female", text: "Female" },
        { value: "Not selected", text: "Choose not to declare" }
      ],
      optionEdu: [
        { value: "none", text: "None" },
        { value: "NCE/ND/Undergraduate", text: "NCE/ND/Undergraduate" },
        {
          value: "HND/Graduates/Higher degree",
          text: "HND/Graduates/Higher degree"
        }
      ],
      selectedEdu: ""
    };
  },
  components: {
    NavBar
  }
};
</script>

<style>
.personal {
  border: none;
  border-bottom: 2px solid #333;
  margin: 0 0.3rem;
}

.personal:focus {
  outline: none;
}
</style>
