import { Bug, Shield, Sprout, Target, ShieldAlert, Bird, Flower2, Home, BugPlay } from 'lucide-react';
import Image from 'next/image';
import swarmersImg from '@/assets/services/subservices/Swarmers.webp';
import mudtubesImg from '@/assets/services/subservices/mudtubes.webp';
import wooddamageImg from '@/assets/services/subservices/wooddamage.webp';
import sitePrepImg from '@/assets/services/site-prepration.webp';
import soilTreatImg from '@/assets/services/soil-tretement.webp';
import terminateTreatmentImg from '@/assets/services/subservices/terminatetreatment.webp';
import activeGel1Img from '@/assets/services/subservices/activegel1.webp';
import activeGel2Img from '@/assets/services/subservices/activegel2.webp';
import rodexTreatmentImg from '@/assets/services/subservices/rodextreatment.webp';
import bedBugsImg from '@/assets/services/subservices/bedbugs1.webp';
import woodBorerImg from '@/assets/services/subservices/woodborer.webp';
import birdControlImg from '@/assets/services/subservices/birdcontrol.webp';
import lawnHorticultureImg from '@/assets/services/subservices/lawn-horticulture.webp';
import greenhouseImg from '@/assets/services/subservices/greenhouse.webp';

export const servicesData = [
  {
    id: 'activegel',
    slug: 'activegel',
    name: 'ACTIVEGEL TREATMENT',
    shortDesc: 'Cockroaches, Red & Black Ants, Silverfish, Spiders',
    icon: Bug,
    content: (
      <div className="space-y-8 text-brand-text-secondary leading-relaxed">
        <div>
          <p className="mb-4">
            It is the highly effective, safe and the Developed technology for cockroach control available today Worldwide. The PROFESSIONAL’z expert uses a new generation Gel. It is the new generation highly active, broad-spectrum insecticide. It controls target insects with a single feeding. It is effective in the control of roaches because these insects serve as carriers of the poison to harborages.
          </p>
          <p className="mb-4">
            It works through both ingestion and contact knocking down roaches that eat or simply touch the bait. One contaminated roach kills others where they live or breed. The active ingredient is also transferred to other members when they cannibalize dying cockroaches resulting in the death of further cockroaches. This effect is called “cascade effect”. This cascade effect achieves colony elimination, but with faster visible results. Once they are applied, they will last at least 2-3 month or until the bait is consumed or destroyed.
          </p>
          <p className="mb-4">
            The application will be directed to the harborages and in the area where water is not used on regular basis for cleaning and in the dark and dry area. It is not volatile, therefore there are not airborne active ingredients released. This reduces chemical exposure to applicators, customers and the environment in general.
            This service provides protection from a number of pests i.e. cockroaches, black ants, red ants, spiders, flies, Silverfish.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 max-w-4xl mx-auto mt-4 mb-8">
          <Image src={activeGel1Img} alt="ActiveGel Treatment 1" className="w-full h-auto object-cover" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-brand-text-primary mb-4">Crawling Insect Pest’s Management</h3>
          <p>
            We will use odour-less insecticidal spray, to control crawling insects. This is a new generation formulations which is odorless, highly active, broad-spectrum insecticide with quick-knock down effect. This treatment will cover processing / manufacturing area, stores, lockers, toilets and etc. The application will be directed to the harborages and surfaces frequented by pests. The frequency of treatment will be fortnightly or as and when required.
          </p>
        </div>

        <div className="bg-brand-primary/5 p-4 sm:p-5 md:p-6 rounded-2xl border border-brand-primary/10">
          <h3 className="text-xl font-bold text-brand-primary mb-4">FEATURES AND ADVANTAGES</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Our ActiveGel service is the Advanced Cockroach Management Service wherein the highly potent active ingredient is applied at all the cockroach hideouts.</li>
            <li>Totally proven treatment.</li>
            <li>Convenient to the CUSTOMER – the services can be executed without any disturbance to the routine work in the house.</li>
            <li>Odourless & non messy.</li>
            <li><strong>NO NEED TO VACATE THE PREMISES DURING AND AFTER THE SERVICE.</strong></li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-600 mb-4">HAZARDS OF COCKROACHES</h3>
          <p className="mb-4">
            The cockroaches are the most common pests in the homes, restaurants, hotels offices, hospitals, factories and any structure that has some source of food. They virtually feed on anything and do not discriminate between food and filth. Their small body size helps them to hide in tiny crack and crevice.
          </p>
          <p>
            Their presence is not only annoying but also unhygienic due to their stinking body secretion. They not only contaminate food and utensils but also take active part in the spread of disease causing organisms such as dysentery, diarrhoea and salmonellosis (food poisoning). The cockroaches are positively linked to human allergens leading to asthma. Cockroaches impart dark stains and unpleasant odours to the surfaces they frequent, giving impression of unhygienic conditions.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 max-w-4xl mx-auto mt-4">
          <Image src={activeGel2Img} alt="ActiveGel Treatment 2" className="w-full h-auto object-cover" />
        </div>
      </div>
    )
  },
  {
    id: 'rodex',
    slug: 'rodex',
    name: 'RODEX TREATMENT',
    shortDesc: 'Rats & Mice',
    icon: Target,
    content: (
      <div className="space-y-8 text-brand-text-secondary leading-relaxed">
        <div>
          <p className="mb-4">
            Developed Rodent Management treatment provides a total and effective control of rats & mice. RODEX treatment uses registered products and is designed keeping human safety in mind. The rodents have become one of the most important urban pests.
          </p>
          <p className="mb-4">
            The new age RODEX Service is based on type of rodent species, extent of infestation & its spread. There is no single or one answer for rodent control. However, it's a combination of baiting, trapping & proofing methods.
          </p>
          <p>
            We use Hit baits, it is a single dose anticoagulant Rodenticide at the outer periphery of your premises while in the inner parts we use glue traps. The baits and glue traps are placed at strategic locations in specially prepared bait stations with lock and key arrangements.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 max-w-4xl mx-auto mt-4 mb-4">
          <Image src={rodexTreatmentImg} alt="Rodent Treatment" className="w-full h-auto object-cover" />
        </div>

        <div className="bg-red-50 p-4 sm:p-5 md:p-6 rounded-2xl border border-red-100">
          <h3 className="text-2xl font-bold text-red-600 mb-4">HAZARDS OF RATS & MICE</h3>
          <p className="mb-4">
            Rodents may bite if cornered, which can transmit a dangerous disease such as rat-bite fever, murine typhus and hantavirus pulmonary syndrome, among other diseases. Rodent urine and feces also contain many diseases. The urine contains allergens that can cause an attack with people who have allergies or asthma. Urine can also stain large areas and cause the area to stink. Rodents may chew through electrical wires, which can start fires, or they can cause structural damage by gnawing on wood.
          </p>
          <p className="mb-4">
            Rat bites and scratches can result in disease and rat-bite fever. Rat urine is responsible for the spread of leptospirosis, which can result in liver and kidney damage. It can also be contracted through handling or inhalation of scat. Complications include renal and liver failure, as well as cardiovascular problems.
          </p>
          <p className="mb-4">
            Lymphocytic choriomeningitis (LCMV), a viral infectious disease, is transmitted through the saliva and urine of rats. Some individuals experience long-term effects of lymphocytic choriomeningitis, while others experience only temporary discomfort.
          </p>
          <p className="mb-4">
            One of the most historically dangerous rat-borne diseases is the bubonic plague, also called “Black Plague,” and its variants. Transfer occurs when fleas from the rats bite human beings. Fleas transported on rats are considered responsible for this plague during the Middle Ages, which killed millions. From the transmission of bubonic plague to typhus and hantavirus, rat infestations can prove harmful to human health.
          </p>
          <p>
            Rats also are a potential source of allergens. Their droppings, dander and shed hair can cause people to sneeze and experience other allergic reactions.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'terminate',
    slug: 'terminate',
    name: 'TERMITE TREATMENT',
    shortDesc: 'Termites',
    icon: ShieldAlert,
    content: (
      <div className="space-y-8 text-brand-text-secondary leading-relaxed">
        <div>
          <h3 className="text-2xl font-bold text-brand-text-primary mb-4">TERMINATE treatment comprises of two types:</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-6 font-medium">
            <li>Post Construction Anti Termite Treatment.</li>
            <li>Pre Construction Anti termite Treatment.</li>
          </ol>
        </div>

        <div className="bg-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
          <h4 className="text-xl font-bold text-brand-primary mb-3">Post Construction Anti Termite Treatment:</h4>
          <p className="mb-4">
            It comprises of drilling holes in the junction of floor and wall, soaking them with the termiticide and sealing them. This makes a completely undetectable chemical barrier around your property. Termites unknowingly forage through treated area, quickly passing the termiticide throughout their population. This leads faster control of termites.
          </p>

          <h5 className="font-bold text-brand-text-primary mb-2 mt-4">CONTROL METHODS</h5>
          <p className="mb-4">
            The control methods consist of creating continuous chemical barrier between the structure and the contact point with the soil. This prevents the entry of termites in to the building from the soil and forces to move them to other area. Below the soil it’s practically impossible to find out the main source or location of the colony.
          </p>
          <p>
            <strong>How chemical barrier is created?</strong> The standard method employed all over the world to create chemical for existing structure is to drill holes at wall and floor junction at the interval of one foot and pump in temiticides. The holes are sealed with cement after injecting sufficient quantity of chemical. The expansion joints and all utility lines are also treated with the chemical to cut off all possible entry points for the termites. To carry out this treatment it is essential to have clear access to all the walls present in the building at ground floor.
          </p>
        </div>

        <div className="bg-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
          <h4 className="text-xl font-bold text-brand-primary mb-3">Pre Construction Anti termite Treatment:</h4>
          <p className="mb-4">
            It comprises of different Specifications for different stages, for which we follow IS-CODE {`{IS 6313 (Part-II)}`} and our own researched & developed methods.
          </p>

          <h5 className="font-bold text-brand-text-primary mb-2 mt-4">Treatment for buildings without Basement:</h5>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Treatment to top surface of plinth filling</li>
            <li>Treatment at junction of wall and floor</li>
            <li>Treatment of soil along external perimeter</li>
            <li>Treatment of soil surrounding pipes, wastes and conduits</li>
            <li>Treatment of expansion joints</li>
          </ul>

          <h5 className="font-bold text-brand-text-primary mb-2 mt-4">Treatment for Basement structures/load bearing structures:</h5>
          <ul className="list-disc pl-5 space-y-1 mb-6">
            <li>Treatment to soil below raft/foundation</li>
            <li>Treatment to soil along the retaining wall</li>
            <li>Treatment to soil along the external perimeter of the building</li>
            <li>Treatment of soil surrounding pipes, wastes and conduits</li>
            <li>Treatment under the apron provided, if any</li>
          </ul>

          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 max-w-4xl mx-auto mt-8">
            <Image src={terminateTreatmentImg} alt="Termite Treatment" className="w-full h-auto object-cover" />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-brand-text-primary mb-4">What are Termites?</h3>
          <p className="mb-4">
            Termites belong to group of social insects living in colonies having different casts, performing different functions and look different from each other.
          </p>
          <p className="mb-4">
            The colony consists of Queen and King living in the underground cellar, where as workers move out in search of food that is anything containing cellulose in the soil and above ground structure. The queen may live for more than 25 years and is capable of laying more than 25000 eggs per day depending on availability of food. Where as workers live for up to 3 years and are blind and sterile, they work for 24 hours and are responsible for destruction and damage.
          </p>
          <p className="mb-4">
            Subterranean termites have a cryptobiotic or "hidden" lifestyle. This means that they are always hidden from our view either beneath the surface of the soil, beneath the surface of the wood, or in their mud tunnels.
          </p>
          <p className="mb-4">
            This cryptobiotic nature contributes to their success in invading human structures. The termites enter our buildings from beneath the soil surface and forage within the wood. We usually do not detect their presence until damage becomes evident or termite swarming takes place. Often we have no idea how the termites got into the structure. This can make it very difficult to control them.
          </p>
        </div>

        <div className="bg-yellow-50 p-4 sm:p-5 md:p-6 rounded-2xl border border-yellow-200">
          <h4 className="text-lg font-bold text-yellow-800 mb-2 text-center">PLEASE NOTE</h4>
          <p className="text-yellow-900 text-sm md:text-base text-center">
            Most of the time the termite damage remains hidden and is not noticed till major damage had already taken place. The termites are hidden invaders enter the buildings through the natural cracks and crevices in the structures. They also construct mud tubes as pathways. The presence of mud tubes is the sign of Termite infestation.<br /><br />
            In most of the situations the extensive damage to the property is noticed due to the termite attack and is irreparable one. In some of the cases the live termites are seen in the areas where the services are to be provided.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-brand-text-primary mb-4">Indicators of Infestation:</h3>
          <p className="mb-4">A subterranean termite infestation is usually recognized by the following 3 indicators:</p>
          <ol className="list-decimal pl-5 space-y-8">
            <li>
              <strong>Mud tubes:</strong> The termite foraging tubes extend from the ground to the infested wood. The tubes provide shelter for the foraging termites. The tubes are muddy looking in appearance, flattened and about the width of a pencil. They are most obvious when they extend over concrete foundations and other exposed surfaces. However, the tubes are often less visible, running along cracks, underneath flooring, or behind siding and baseboards.
              <div className="mt-4 rounded-xl overflow-hidden shadow-sm border border-gray-100 max-w-lg">
                <Image src={mudtubesImg} alt="Termite Mud Tubes" className="w-full h-auto object-cover" />
              </div>
            </li>
            <li>
              <strong>Swarmers:</strong> Winged termites emerging indoors or outside from swarming tubes immediately adjacent to the structure are often the first sign of a subterranean infestation. Swarming termites are attracted to light. Therefore, Swarmers indoors are often found around lighting fixtures, windows, doors and vents. Also, large numbers of discarded termite wings on windowsills, floors or in spider webs are a sure sign of infestation.
              <div className="mt-4 rounded-xl overflow-hidden shadow-sm border border-gray-100 max-w-lg">
                <Image src={swarmersImg} alt="Termite Swarmers" className="w-full h-auto object-cover" />
              </div>
            </li>
            <li>
              <strong>Wood Damage:</strong> A common indication of subterranean infestation is the presence of dark areas or blisters in wood flooring. However, subterranean termite damage can go unnoticed. Because the termites only eat the internal part of wood leaving the grain and exterior surface intact and filling the eaten portion with soil to prevent it from collapsing. However, the galleries can be detected by tapping the wood every few inches with the handle of a screwdriver. The damaged wood sounds hollow and the screwdriver may even break through the wood into the galleries. If the galleries are active the worker termites will be observed inside.
              <div className="mt-4 rounded-xl overflow-hidden shadow-sm border border-gray-100 max-w-lg">
                <Image src={wooddamageImg} alt="Termite Wood Damage" className="w-full h-auto object-cover" />
              </div>
            </li>
          </ol>
        </div>
      </div>
    )
  },
  {
    id: 'bed-bugs',
    slug: 'bed-bugs',
    name: 'BED BUGS Service',
    shortDesc: 'Bed Bugs Eradication',
    icon: Home,
    content: (
      <div className="space-y-8 text-brand-text-secondary leading-relaxed">
        <div>
          <p className="mb-4">
            Bed bugs are the common pest of man, his domestic animals and various other mammals. The sole food of bed bugs is blood from warm blooded animals. Human are the preferred hosts for the common bed bug, but they will feed readily on other animals such as poultry, mice, rats, canaries, dogs, bats, guinea pigs etc. Normally they feed at night however they also feed in daylight hours in places such as theatres, offices, rest rooms, passenger transport vehicles etc.
          </p>
          <p className="mb-4">
            Bedbugs give off a distinct odour. They are active blood suckers, their bites cause welts and irritations to many people. Many people develop an allergic reaction to the saliva injected by bed bug as it feeds. The bitten spot usually swells and swelling may be severe in highly sensitive individuals.
          </p>
        </div>

        <div className="bg-brand-primary/5 p-4 sm:p-5 md:p-6 rounded-2xl border border-brand-primary/10">
          <h3 className="text-xl font-bold text-brand-primary mb-4">Bed Bug Management Service</h3>
          <p className="mb-3">Our service comprises of treating all places where the bed bugs may be hiding:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>On beds.</li>
            <li>Mattresses (mattress buttons) as well as the folds at the edges.</li>
            <li>Cracks and crevices in walls, bed frames, wall hangings, picture frames, night lamp stands, stuffed furniture, base boards, behind loose wall papers, light switches, door and window frames, conduits etc.</li>
          </ul>
          <p className="text-sm font-medium">
            If the bed bugs problem is reported in public areas such as theatres/ hospitals, railways care must be taken while spraying such places. IDEALLY the spray must be directed to CRACKS and CREVICES where bed bugs hide and breed.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 max-w-4xl mx-auto mt-4 mb-4">
          <Image src={bedBugsImg} alt="Bed Bugs Treatment" className="w-full h-auto object-cover" />
        </div>
      </div>
    )
  },
  {
    id: 'wood-borer',
    slug: 'wood-borer',
    name: 'Wood Borer Treatment',
    shortDesc: 'Wood Borer Control',
    icon: Shield,
    content: (
      <div className="space-y-8 text-brand-text-secondary leading-relaxed">
        <div>
          <p className="mb-4">
            There are number of species of wood borers, the most common among is the Powder Post Beetle (Anobium punctatum) and is known as the furniture beetle. The furniture beetle is considered as the most serious pest of all types of seasoned wood.
          </p>
          <p className="mb-4">
            The tiny beetle attacks most of the wood used for framing work, cabinet furniture and woodwork. The adult is a tiny flying insect, dark brown to black in colour. Female normally lay eggs in the crevices and rough surfaces of timber, after hatching eggs the worm enters in to the timber creating the network of tunnels through out the timber.
          </p>
          <p className="mb-4">
            The wood borer attack is characterised by the small, round holes on the surface, with a coarse to fine powder sifting from them. This powder like mass/ frass is characterised by the bun shaped pellets within the mass.
          </p>
          <p className="mb-4">
            The life cycle takes one to more years depend on the species involved and environmental conditions. The adult is a good flyer and thus can attack and spread the new area.
          </p>
        </div>

        <div className="bg-brand-primary/5 p-4 sm:p-5 md:p-6 rounded-2xl border border-brand-primary/10">
          <h3 className="text-xl font-bold text-brand-primary mb-4">Treatment Methodology</h3>
          <p>
            Wood borer treatment comprises of treating each and every tunnel created by the wood boring insect by using insecticide in oil based solutions. Each and every tunnel is carefully identified and treated to get the desired results. Oil solution sprays are also carried out to the furniture in nearby area to avoid the re-occurrence and spread of the borer infestation in healthy wood.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 max-w-4xl mx-auto mt-4 mb-4">
          <Image src={woodBorerImg} alt="Wood Borer Treatment" className="w-full h-auto object-cover" />
        </div>
      </div>
    )
  },
  {
    id: 'mosquito',
    slug: 'mosquito',
    name: 'MOSQUITO MANAGEMENT',
    shortDesc: 'Complete Mosquito Control',
    icon: BugPlay,
    content: (
      <div className="space-y-8 text-brand-text-secondary leading-relaxed">
        <div>
          <h3 className="text-2xl font-bold text-brand-text-primary mb-4">MOSQUITOES: The Threat</h3>
          <p className="mb-4">
            Mosquito adults are small, flying insects pose major threat to mankind due to their active participation in transmitting vector borne diseases. Mosquitoes occur in a variety of habitats ranging from deserts, below sea level to high mountain meadows. There are several species that readily attack/ bite people results in itching, swelling, restlessness, loss of sleep moreover they prevent the enjoyment of many outdoor areas.
          </p>
          <p className="mb-4">
            Some species are capable of transmitting diseases as vectors or carriers that cause human diseases such as MALARIA, FILARIA, Japanese encephalitis, DENGUE, etc.
          </p>
        </div>

        <div className="bg-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
          <h4 className="text-xl font-bold text-brand-text-primary mb-4">Types/ species of Mosquitoes:</h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Anopheles spp.</strong> – prefers clean water for breeding</li>
            <li><strong>Culex spp.</strong> – breeds in sewage / dirty water</li>
            <li><strong>Aedes spp.</strong> – breeds in artificial containers</li>
            <li><strong>Mansonia spp.</strong> – water with hyacinths</li>
          </ul>
          <p>
            Female mosquitoes have mouthparts adapted for piercing the skin and sucking blood, and long slender wings covered with small scales. Blood meal is required for production of eggs. Apart from the attack on human beings they also attack pets and livestock. Male mosquitoes do not bite but survive on plant juices and other sources of sugar rather than blood. Some prefer human blood & some are fond of cattle & other animals. It varies from areas to area depending upon the availability of cattle and other animals etc.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-brand-text-primary mb-4">LIFE CYCLE</h3>
          <p className="mb-4">
            The life cycle of mosquito varies from species to species. Some females lay their eggs singly on water surfaces; other species lay batches of eggs, called rafts, 100 or more at a time on water surfaces. Eggs developed on water surfaces hatch within a day and the larva comes out of egg, molt several times and become a pupa. Larval life cycle takes 7 to 10 days based on the climatic conditions. Adult emerges out of pupa after 1-2 days. In peak of summer the life cycle, from egg to adult is completed within a week.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-brand-text-primary">Different Methods of MOSQUITO MANAGEMENT:</h3>

          <div className="bg-brand-primary/5 p-4 sm:p-5 md:p-6 rounded-2xl border border-brand-primary/10">
            <h4 className="text-lg font-bold text-brand-primary mb-2">Larvicidal Treatment:</h4>
            <p className="mb-3">Treatment to all water bodies or breeding places in and around the vicinity.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Use of Mosquito Fish:</strong> Species of fishes are used for control of controlling mosquito larvae. These fishes feed on the larvae and thus control mosquito population. Guppy & Gambusia are the common mosquito larval feeding fishes.</li>
              <li><strong>Use of microbial product (Bacteria):</strong> For control of mosquito larvae: e.g. BTI formulations. It is safe and effective without any side effects.</li>
            </ul>
          </div>

          <div className="bg-brand-primary/5 p-4 sm:p-5 md:p-6 rounded-2xl border border-brand-primary/10">
            <h4 className="text-lg font-bold text-brand-primary mb-2">ADULTICIDAL TREATMENT: INDOOR RESIDUAL SPRAY</h4>
            <p>
              On occasions in mosquito abatement programme chemicals are required to be applied to kill adult mosquitoes. This is achieved by applying residual pesticides frequently indoor inside the houses so that the resting mosquitoes are controlled.
            </p>
          </div>

          <div className="bg-brand-primary/5 p-4 sm:p-5 md:p-6 rounded-2xl border border-brand-primary/10">
            <h4 className="text-lg font-bold text-brand-primary mb-2">ADULTICIDING OUT DOOR APPLICATION: FOGGING OR MISTING</h4>
            <p>
              Thermal foggers / misters have been used to generate Fogs / wherein the pesticidal smoke/ mists are created to kill the adult mosquitoes. It always better to use misting as it leaves insecticidal residues in treated areas. Fogging gives psychological impact however the effect of the fog/ smoke is lost quickly out door and thus treatment does not give any protection once the fog is diluted.
            </p>
          </div>
        </div>

      </div>
    )
  },
  {
    id: 'bird-control',
    slug: 'bird-control',
    name: 'Bird Control',
    shortDesc: 'Safe Bird Removal',
    icon: Bird,
    content: (
      <div className="space-y-8 text-brand-text-secondary leading-relaxed">
        <div>
          <p className="mb-4">
            Every year, birds cause millions of dollars of damage to corporate and professional buildings, small businesses, boats and homes - but that represents only a small portion of the overall cost of a bird problem.
          </p>
          <p className="text-lg font-medium text-brand-text-primary">
            In addition to all that property damage, there are serious health hazards posed by bird droppings, mite-infested nesting sites and dead birds.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 max-w-4xl mx-auto mt-4 mb-4">
          <Image src={birdControlImg} alt="Bird Control" className="w-full h-auto object-cover" />
        </div>
      </div>
    )
  },
  {
    id: 'lawn-treatment',
    slug: 'lawn-treatment',
    name: 'Lawn / Horticulture',
    shortDesc: 'Outdoor Protection',
    icon: Flower2,
    content: (
      <div className="space-y-8 text-brand-text-secondary leading-relaxed">
        <div>
          <p className="mb-4">
            The easiest way to see whether there is a lawn pest problem is with a careful assessment of the lawn. Do whenever you walk across it? Moths fly upward in the grass, Can you see bugs crossing your sidewalks? In Addition, search for splotchy brown spots, which are the telltale sign of grubs. Here’s the thing you must know about Lawn pest management.
          </p>
        </div>

        <div className="bg-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-brand-text-primary mb-4">When to Use Pest Control?</h3>
          <p className="mb-4">
            Pests are inclined to be most active during the warmest part of the growing season. It is often a great thought to remove pests until they hatch or promptly after hatching. However, you do not need to over-implement pest control in expectation of the problem (unless you have had an on-going issue with pests, naturally).
          </p>
          <p>
            A lot of pesticides used in the inappropriate time will kill beneficial insects like butterflies etc. It is also going to kill pests which are the natural enemies of the pests you are attempting to dispose of.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-brand-text-primary mb-4">Common Pests</h3>
          <p className="mb-4">
            <strong>Ants</strong> could be advantageous for your lawn/garden. Other more damaging insects can be devoured by them. The small black ants building mounds are seen by you are normally benign. You ought to take precautions to keep them out of your property, but if you really see them in your own lawn, do not stress. However fire ants and white ants needs to be eradicated in professional manner.
          </p>
          <p className="mb-4">
            <strong>Fire ants</strong> not only damage your lawn/garden with big piles, in addition they have dangerous stings. Unless controlled and your home will be severely damaged by carpenter ants and termites (white ants).
          </p>
          <p>
            <strong>Bugs</strong> are hard to discover since they run from light. To locate them, pull apart turf to check out a little insect burrowing back into the earth. Assess several areas to be particular.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 max-w-4xl mx-auto mt-4 mb-4">
          <Image src={lawnHorticultureImg} alt="Lawn Horticulture Treatment" className="w-full h-auto object-cover" />
        </div>
      </div>
    )
  },
  {
    id: 'greenhouse',
    slug: 'greenhouse',
    name: 'Green House Treatment',
    shortDesc: 'Plant Safety',
    icon: Sprout,
    content: (
      <div className="space-y-8 text-brand-text-secondary leading-relaxed">
        <div>
          <p className="mb-4">
            Retail greenhouses have many challenges for managing pests that are different from production greenhouses. Retail greenhouses are open to the public, usually for long hours and often 7 days a week, making the timing of pesticide treatments difficult.
          </p>
          <p className="mb-4">
            These greenhouses contain a variety of mature plants ready for sale, often with delicate blooms. Plants arrive regularly from many different sources increasing the likelihood that pests will be brought into the greenhouse. Some plants are quickly sold while others remain in the greenhouse for long periods of time. The longer that plants stay in the greenhouse, the probability increases that insects will migrate to these plants.
          </p>
        </div>

        <div className="bg-brand-primary/5 p-4 sm:p-5 md:p-6 rounded-2xl border border-brand-primary/10">
          <h3 className="text-xl font-bold text-brand-primary mb-4">Integrated Pest Management (IPM) Program</h3>
          <p className="mb-4">
            Retail greenhouses should have a weekly, integrated pest management (IPM) program in place to detect problems early. A regular monitoring program using sticky cards and plant inspection is the basis of all pest management programs. Early detection and treatment will result in better pest control, while pest populations are low and before pests move throughout the greenhouse. Retailers will find through experience that some plants will need to be monitored more carefully than others throughout the course of a year.
          </p>
          <p>
            When only a few plants are infested, plants can be moved and treated outdoors (weather permitting). Small infestations can be spot treated. Heavily infested and/or diseased plants should be promptly removed into a trash bag, tied up and removed from the greenhouse.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 max-w-4xl mx-auto mt-4 mb-4">
          <Image src={greenhouseImg} alt="Greenhouse Treatment" className="w-full h-auto object-cover" />
        </div>
      </div>
    )
  },
];
