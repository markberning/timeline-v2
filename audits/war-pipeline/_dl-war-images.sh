#!/usr/bin/env bash
# Serial downloader for the three new ACW theme narratives' PD images.
# Wikimedia rate-limits parallel fetches and rejects the default curl UA — so:
# one at a time, descriptive UA, small delay.
set -u
DEST="/Users/mberning/projects/personal/timeline-v2-phase2/public/war-img"
mkdir -p "$DEST"
UA="StuffHappenedBot/1.0 (https://stuffhappened.com; reading-app image self-host)"
ok=0; fail=0
dl() {
  local url="$1" name="$2" out="$DEST/$2"
  if [ -s "$out" ]; then echo "skip (exists): $name"; ok=$((ok+1)); return; fi
  if curl -fsSL -A "$UA" --retry 2 --retry-delay 3 -o "$out" "$url"; then
    local sz; sz=$(stat -f%z "$out" 2>/dev/null || echo 0)
    if [ "$sz" -gt 3000 ]; then echo "ok  ($sz b): $name"; ok=$((ok+1));
    else echo "TINY ($sz b) — suspect: $name"; fail=$((fail+1)); fi
  else echo "FAIL: $name  <- $url"; fail=$((fail+1)); fi
  sleep 1.5
}

# ---- Road to War (11) ----
dl "https://upload.wikimedia.org/wikipedia/commons/d/dd/Reynolds%27s_political_map_of_the_United_States%2C_designed_to_exhibit_the_comparative_area_of_the_free_and_slave_states_and_the_territory_open_to_slavery_or_freedom_by_the_repeal_of_the_Missouri_LOC_2003627003.jpg" "road-to-war-hero-reynolds-map.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Map_of_the_Missouri_Compromise%2C_1820.jpg/1280px-Map_of_the_Missouri_Compromise%2C_1820.jpg" "road-to-war-fig1-missouri-compromise-map.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/3/33/Henry_Clay_by_Mathew_Brady_1849.jpg" "road-to-war-fig2-henry-clay-brady.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/The_United_States_Senate%2C_A.D._1850%2C_by_Peter_F._Rothermel.jpg/1280px-The_United_States_Senate%2C_A.D._1850%2C_by_Peter_F._Rothermel.jpg" "road-to-war-fig3-senate-1850-rothermel.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/John_C_Calhoun_by_Mathew_Brady%2C_1849.jpg/1280px-John_C_Calhoun_by_Mathew_Brady%2C_1849.jpg" "road-to-war-fig4-calhoun-brady.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Southern_Chivalry.jpg/1280px-Southern_Chivalry.jpg" "road-to-war-fig5-southern-chivalry-caning.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Stephen_A_Douglas_by_Vannerson%2C_1859.jpg/1280px-Stephen_A_Douglas_by_Vannerson%2C_1859.jpg" "road-to-war-fig6-douglas-vannerson.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/8/8c/Border_ruffians_invading_Kansas.jpg" "road-to-war-fig7-border-ruffians-kansas.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dred_Scott_photograph_%28circa_1857%29.jpg/1280px-Dred_Scott_photograph_%28circa_1857%29.jpg" "road-to-war-fig8-dred-scott-1857.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/John_Brown_portrait%2C_1859.jpg/1280px-John_Brown_portrait%2C_1859.jpg" "road-to-war-fig9-john-brown-1859.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/4/42/HWFireHouseBrown.jpg" "road-to-war-fig10-harpers-ferry-marines.jpg"

# ---- Lincoln's Rise (10) ----
dl "https://upload.wikimedia.org/wikipedia/commons/a/ab/Abraham_Lincoln%2C_candidate_for_U.S._president%2C_three-quarter_length_portrait%2C_before_delivering_his_Cooper_Union_address_in_New_York_City%29_-_Brady%2C_N.Y_LCCN98504529.jpg" "lincolns-rise-hero-cooper-union-brady.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/7/7e/Abraham_Lincoln_by_Byers%2C_1858_-_crop.jpg" "lincolns-rise-lincoln-1858-byers.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Senator_Stephen_A._Douglas%29_-_E._Anthony%2C_501_Broadway%2C_N.Y_LCCN2017660633.jpg/1280px-Senator_Stephen_A._Douglas%29_-_E._Anthony%2C_501_Broadway%2C_N.Y_LCCN2017660633.jpg" "lincolns-rise-douglas-anthony-1860.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/The_political_quadrille._Music_by_Dred_Scott_LCCN2008661605.jpg/1280px-The_political_quadrille._Music_by_Dred_Scott_LCCN2008661605.jpg" "lincolns-rise-political-quadrille-1860.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/The_national_game._Three_%22outs%22_and_one_%22run%22_LCCN2003674584.jpg/1280px-The_national_game._Three_%22outs%22_and_one_%22run%22_LCCN2003674584.jpg" "lincolns-rise-national-game-1860.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/The_Republicans_in_nominating_co%28nv%29ent%28ion%29_in_their_wigwam_at_Chicago%2C_May_1860_LCCN2003652565.jpg/1280px-The_Republicans_in_nominating_co%28nv%29ent%28ion%29_in_their_wigwam_at_Chicago%2C_May_1860_LCCN2003652565.jpg" "lincolns-rise-wigwam-convention-1860.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Charleston_Mercury_Secession_Broadside%2C_1860.jpg/1280px-Charleston_Mercury_Secession_Broadside%2C_1860.jpg" "lincolns-rise-charleston-mercury-1860.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/ElectoralCollege1860.svg/1280px-ElectoralCollege1860.svg.png" "lincolns-rise-electoral-map-1860.png"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/James_Buchanan_in_1860_-_Meade_Brothers.jpg/1280px-James_Buchanan_in_1860_-_Meade_Brothers.jpg" "lincolns-rise-buchanan-1860.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Free_speech%2C_free_soil%2C_free_men._This_is_to_certify_that_%28blank%29_is_a_member_of_the_%28blank%29_Wide-awake_Club_LCCN2004665362.jpg/1280px-Free_speech%2C_free_soil%2C_free_men._This_is_to_certify_that_%28blank%29_is_a_member_of_the_%28blank%29_Wide-awake_Club_LCCN2004665362.jpg" "lincolns-rise-wide-awake-certificate-1860.jpg"

# ---- Two Governments (12) ----
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Bombardment_of_Fort_Sumter%2C_Charleston_Harbor.jpg/1280px-Bombardment_of_Fort_Sumter%2C_Charleston_Harbor.jpg" "two-governments-hero.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/e/e7/1861_Davis_Inaugural.jpg" "two-governments-montgomery-inaugural.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Jefferson_Davis_-_NARA_-_528293a.jpg/1280px-Jefferson_Davis_-_NARA_-_528293a.jpg" "two-governments-davis-portrait.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Alexander_H._Stephens_%28528288a%29.jpg/1280px-Alexander_H._Stephens_%28528288a%29.jpg" "two-governments-stephens-portrait.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Abraham_Lincoln_O-57_by_Brady%2C_1861.jpg/1280px-Abraham_Lincoln_O-57_by_Brady%2C_1861.jpg" "two-governments-lincoln-portrait.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Inauguration_of_President_Lincoln_at_U.S._Capitol%2C_March_4%2C_1861_LCCN00650936.jpg/1280px-Inauguration_of_President_Lincoln_at_U.S._Capitol%2C_March_4%2C_1861_LCCN00650936.jpg" "two-governments-lincoln-inaugural.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/4/4d/Fort_Sumter_interior_after_bombardment_%28recto%29.jpg" "two-governments-sumter-interior.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Robert_Anderson%2C_Major_%28Union%29._-_DPLA_-_31883cd7278918d74a12d02f3ecc1aaf.jpg/1280px-Robert_Anderson%2C_Major_%28Union%29._-_DPLA_-_31883cd7278918d74a12d02f3ecc1aaf.jpg" "two-governments-anderson-portrait.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Gen._Pierre_Gustave_Toutant_de_Beauregard%2C_C.S.A_-_NARA_-_528596.jpg/1280px-Gen._Pierre_Gustave_Toutant_de_Beauregard%2C_C.S.A_-_NARA_-_528596.jpg" "two-governments-beauregard-portrait.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/7/7d/The_sixth_regiment_of_the_Massachusetts_volunteers_firing_into_the_people_in_Pratt_Street%2C_while_attempting_to_pass_through_Baltimore_en_route_for_Washington%2C_April_19%2C_1861_LCCN2003663108.jpg" "two-governments-baltimore-riot.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Map_of_the_secession_crisis_of_1860_to_1861.jpg/1280px-Map_of_the_secession_crisis_of_1860_to_1861.jpg" "two-governments-secession-map.jpg"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gen._Robert_E._Lee%2C_C.S.A_-_NARA_-_529894.jpg/1280px-Gen._Robert_E._Lee%2C_C.S.A_-_NARA_-_529894.jpg" "two-governments-lee-portrait.jpg"

echo "==== DONE: ok=$ok fail=$fail ===="
