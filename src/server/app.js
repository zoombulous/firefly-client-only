const Express = require ("express")();
const Http = require ("http").Server(Express);
const Socketio = require ("socket.io")(Http);
const PORT = process.env.PORT || 3000
var fs = require('fs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var FastBitSet = require('fastbitset');

Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});

process.setMaxListeners(5)

var position = {
    x:200,
    y:300
};


var position2 = {
    x:220,
    y:220
};

var position3 = {
    x:230,
    y:230
};

var position4 = {
    x:240,
    y:240
};

var position5 = {
    x:240,
    y:240
};

var position6 = {
    x:240,
    y:250
};

var position7 = {
    x:240,
    y:260
};


var z_broken_shuttle = base64_encode('./third_broken_shuttle.jpg');
var z_cruiser_patrol = base64_encode('./third_cruiser_patrol.jpg');
var z_engine_room = base64_encode('./third_engine_room.jpg');
var z_minor_tech_diff = base64_encode('./third_minor_tech_diff.jpg');
var z_the_big_black = base64_encode('./third_the_big_black.jpg')
var cargo = base64_encode('./cargo.jpg')

var contraband = base64_encode('./contraband.jpg')
var one_fuel = base64_encode('./1fuel.jpg')
var two_fuel = base64_encode('./2fuel.jpg')
var fugitive = base64_encode('./fugitive.jpg')
var one_part = base64_encode('./1part.jpg')
var two_part = base64_encode('./2part.jpg')
var passenger = base64_encode('./passenger.jpg')
var empty = base64_encode('./empty.jpg')

//money

var z100Credits = base64_encode('./100Credits.jpg')
var z500Credits = base64_encode('./500Credits.jpg')
var z1000Credits = base64_encode('./1000Credits.jpg')
var z2000Credits = base64_encode('./2000Credits.jpg')
var znegative_100 = base64_encode('./negative_100.jpg')
var znegative_500 = base64_encode('./negative_500.jpg')
var znegative_1000 = base64_encode('./negative_1000.jpg')
var znegative_2000 = base64_encode('./negative_2000.jpg')



//alliance cards

var alliance_space = base64_encode('./alliance_space.jpg')

var coil_busted_01 = base64_encode('./coil_busted_01.jpg')
var the_big_black_01 = base64_encode('./the_big_black_01.jpg')
var minor_tech_difficulties = base64_encode('./minor_tech_difficulties.jpg')
var the_big_black_02 = base64_encode('./the_big_black_02.jpg')
var cruiser_patrol_01 = base64_encode('./cruiser_patrol_01.jpg')
var the_big_black_03 = base64_encode('./the_big_black_03.jpg')
var broken_down_shuttle_01 = base64_encode('./broken_down_shuttle_01.jpg')
var persistent_pursuit_01 = base64_encode('./persistent_pursuit_01.jpg')
var the_big_black_04 = base64_encode('./the_big_black_04.jpg')
var hell_come_at_you_sideways_01 = base64_encode('./persistent_pursuit_02.jpg')
var persistent_pursuit_02 = base64_encode('./persistent_pursuit_02.jpg')
var family_dinner_01 = base64_encode('./family_dinner_01.jpg')
var the_big_black_05 = base64_encode('./the_big_black_05.jpg')
var outbound_colonists_01 = base64_encode('./outbound_colonists_01.jpg')
var distress_signal_01 = base64_encode('./distress_signal_01.jpg')
var the_big_black_06 = base64_encode('./the_big_black_06.jpg')
var cruiser_patrol_02 = base64_encode('./cruiser_patrol_02.jpg')
var fire_in_the_engine_room_01 = base64_encode('./fire_in_the_engine_room_01.jpg')
var alliance_checkpoint_01 = base64_encode('./alliance_checkpoint_01.jpg')
var customs_inspection_01 = base64_encode('./customs_inspection_01.jpg')
var the_big_black_07 = base64_encode('./the_big_black_07.jpg')
var the_big_black_08 = base64_encode('./the_big_black_08.jpg')
var cruiser_patrol_03 = base64_encode('./cruiser_patrol_03.jpg')
var the_big_black_09 = base64_encode('./the_big_black_09.jpg')
var cruiser_patrol_04 = base64_encode('./cruiser_patrol_04.jpg')
var leave_no_ground_to_go_to_01 = base64_encode('./leave_no_ground_to_go_to_01.jpg')
var persistent_pursuit_03 = base64_encode('./persistent_pursuit_03.jpg')
var the_big_black_10 = base64_encode('./the_big_black_10.jpg')
var alliance_entaglements_01 = base64_encode('./alliance_entaglements_01.jpg')
var alliance_cruiser_01 = base64_encode('./alliance_cruiser_01.jpg')
var the_big_black_11 = base64_encode('./the_big_black_11.jpg')
var the_big_black_12 = base64_encode('./the_big_black_12.jpg')
var the_big_black_13 = base64_encode('./the_big_black_13.jpg')
var badgers_boys_01 = base64_encode('./badgers_boys_01.jpg')
var cruiser_patrol_05 = base64_encode('./cruiser_patrol_05.jpg')
var the_big_black_14 = base64_encode('./the_big_black_14.jpg')
var alliance_harassment_01 = base64_encode('./alliance_harassment_01.jpg')
var the_big_black_15 = base64_encode('./the_big_black_15.jpg')
var the_big_black_16 = base64_encode('./the_big_black_16.jpg')
var the_big_black_17 = base64_encode('./the_big_black_17.jpg')
var passenger_unrest_01 = base64_encode('./passenger_unrest_01.jpg')
var the_big_black_18 = base64_encode('./the_big_black_18.jpg')
var alliance_harassment_02 = base64_encode('./alliance_harassment_02.jpg')
var the_big_black_19 = base64_encode('./the_big_black_19.jpg')
var customs_inspection_02 = base64_encode('./customs_inspection_02.jpg')
var the_big_black_20 = base64_encode('./the_big_black_20.jpg')
var alliance_interrogation_01 = base64_encode('./alliance_interrogation_01.jpg')
var whats_going_on_in_the_engine_room_01 = base64_encode('./whats_going_on_in_the_engine_room_01.jpg')
var freighter_convoy_01 = base64_encode('./freighter_convoy_01.jpg')
var the_big_black_21 = base64_encode('./the_big_black_21.jpg')
var regulated_salvage_01 = base64_encode('./regulated_salvage_01.jpg')
var enhanced_enforcement_01 = base64_encode('./enhanced_enforcement_01.jpg')
var the_big_black_22 = base64_encode('./the_big_black_22.jpg')
var the_big_black_23 = base64_encode('./the_big_black_23.jpg')
var the_big_black_24 = base64_encode('./the_big_black_24.jpg')
var the_big_black_26 = base64_encode('./the_big_black_26.jpg')
var abandoned_ship_01 = base64_encode('./abandoned_ship_01.jpg')
var the_big_black_27 = base64_encode('./the_big_black_27.jpg')
var persistent_pursuit_04 = base64_encode('./persistent_pursuit_04.jpg')
var the_big_black_25 = base64_encode('./the_big_black_25.jpg')



//border cards
var border_space = base64_encode('./border_space.jpg')

var border_a_rogue_trader_01 = base64_encode('./border_a_rogue_trader_01.jpg')
var border_an_adrift_transport_01 = base64_encode('./border_an_adrift_transport_01.jpg')
var border_bait_01 = base64_encode('./border_bait_01.jpg')
var border_dangerous_salvage_01 = base64_encode('./border_dangerous_salvage_01.jpg')
var border_derelict_ship_01 = base64_encode('./border_derelict_ship_01.jpg')
var border_derelict_ship_02 = base64_encode('./border_derelict_ship_02.jpg')
var border_enhanced_enforcement_01 = base64_encode('./border_enhanced_enforcement_01.jpg')
var border_enhanced_enforcement_02 = base64_encode('./border_enhanced_enforcement_02.jpg')
var border_family_dinner_01 = base64_encode('./border_family_dinner_01.jpg')
var border_ghost_ship_01 = base64_encode('./border_ghost_ship_01.jpg')
var border_hallowed_out_space_liner_01 = base64_encode('./border_hallowed_out_space_liner_01.jpg')
var border_hell_come_at_you_sideways_01 = base64_encode('./border_hell_come_at_you_sideways_01.jpg')
var border_leave_no_ground_to_go_to_01 = base64_encode('./border_leave_no_ground_to_go_to_01.jpg')
var border_nav_hazard_asteroid_01 = base64_encode('./border_nav_hazard_asteroid_01.jpg')
var border_nav_hazard_debris_field_01 = base64_encode('./border_nav_hazard_debris_field_01.jpg')
var border_patiences_posse_01 = base64_encode('./border_patiences_posse_01.jpg')
var border_persistent_pursuit_01 = base64_encode('./border_persistent_pursuit_01.jpg')
var border_persistent_pursuit_02 = base64_encode('./border_persistent_pursuit_02.jpg')
var border_persistent_pursuit_03 = base64_encode('./border_persistent_pursuit_03.jpg')
var border_persistent_pursuit_04 = base64_encode('./border_persistent_pursuit_04.jpg')
var border_punctured_fuel_lines_01 = base64_encode('./border_punctured_fuel_lines_01.jpg')
var border_reaver_bait_01 = base64_encode('./border_reaver_bait_01.jpg')
var border_reaver_cutter_01 = base64_encode('./border_reaver_cutter_01.jpg')
var border_reaver_cutter_02 = base64_encode('./border_reaver_cutter_02.jpg')
var border_reavers_dead_ahead_01 = base64_encode('./border_reavers_dead_ahead_01.jpg')
var border_reavers_dead_ahead_02 = base64_encode('./border_reavers_dead_ahead_02.jpg')
var border_reavers_dead_ahead_03 = base64_encode('./border_reavers_dead_ahead_03.jpg')
var border_reavers_on_the_hunt_01 = base64_encode('./border_reavers_on_the_hunt_01.jpg')
var border_reavers_on_the_hunt_02 = base64_encode('./border_reavers_on_the_hunt_02.jpg')
var border_reavers_on_the_hunt_03 = base64_encode('./border_reavers_on_the_hunt_03.jpg')
var border_reavers_on_the_hunt_04 = base64_encode('./border_reavers_on_the_hunt_04.jpg')
var border_reavers_on_the_hunt_05 = base64_encode('./border_reavers_on_the_hunt_05.jpg')
var border_reavers_on_the_hunt_06 = base64_encode('./border_reavers_on_the_hunt_06.jpg')
var border_reavers_on_the_hunt_07 = base64_encode('./border_reavers_on_the_hunt_07.jpg')
var border_reavers_on_the_hunt_08 = base64_encode('./border_reavers_on_the_hunt_08.jpg')
var border_reavers_on_the_hunt_09 = base64_encode('./border_reavers_on_the_hunt_09.jpg')
var border_reavers_on_the_hunt_10 = base64_encode('./border_reavers_on_the_hunt_10.jpg')
var border_reavers_on_the_hunt_11 = base64_encode('./border_reavers_on_the_hunt_11.jpg')
var border_reavers_on_the_hunt_12 = base64_encode('./border_reavers_on_the_hunt_12.jpg')
var border_reavers_on_the_hunt_13 = base64_encode('./border_reavers_on_the_hunt_13.jpg')
var border_reavers_on_the_hunt_14 = base64_encode('./border_reavers_on_the_hunt_14.jpg')
var border_reavers_on_the_hunt_15 = base64_encode('./border_reavers_on_the_hunt_15.jpg')
var border_ruttin_drive_cores_blown_01 = base64_encode('./border_ruttin_drive_cores_blown_01.jpg')
var border_scrapper_ambush_01 = base64_encode('./border_scrapper_ambush_01.jpg')
var border_shes_tore_up_plenty_01 = base64_encode('./border_shes_tore_up_plenty_01.jpg')
var border_ship_graveyard = base64_encode('./border_ship_graveyard.jpg')
var border_space_pox_01 = base64_encode('./border_space_pox_01.jpg')
var border_storms_gettin_worse_01 = base64_encode('./border_storms_gettin_worse_01.jpg')
var border_the_big_black_01 = base64_encode('./border_the_big_black_01.jpg')
var border_the_big_black_02 = base64_encode('./border_the_big_black_02.jpg')
var border_the_big_black_03 = base64_encode('./border_the_big_black_03.jpg')
var border_the_big_black_04 = base64_encode('./border_the_big_black_04.jpg')
var border_the_big_black_05 = base64_encode('./border_the_big_black_05.jpg')
var border_the_big_black_06 = base64_encode('./border_the_big_black_06.jpg')
var border_the_big_black_07 = base64_encode('./border_the_big_black_07.jpg')
var border_the_big_black_08 = base64_encode('./border_the_big_black_08.jpg')
var border_the_big_black_09 = base64_encode('./border_the_big_black_09.jpg')
var border_the_big_black_10 = base64_encode('./border_the_big_black_10.jpg')
var border_the_big_black_11 = base64_encode('./border_the_big_black_11.jpg')
var border_the_big_black_12 = base64_encode('./border_the_big_black_12.jpg')
var border_the_big_black_13 = base64_encode('./border_the_big_black_13.jpg')
var border_the_big_black_14 = base64_encode('./border_the_big_black_14.jpg')
var border_the_big_black_15 = base64_encode('./border_the_big_black_15.jpg')
var border_the_big_black_16 = base64_encode('./border_the_big_black_16.jpg')
var border_the_big_black_17 = base64_encode('./border_the_big_black_17.jpg')
var border_the_big_black_18 = base64_encode('./border_the_big_black_18.jpg')
var border_the_big_black_19 = base64_encode('./border_the_big_black_19.jpg')
var border_the_big_black_20 = base64_encode('./border_the_big_black_21.jpg')
var border_the_big_black_21 = base64_encode('./border_the_big_black_21.jpg')
var border_whats_that_noise_01 = base64_encode('./border_whats_that_noise_01.jpg')

//rim space

var rim_space = base64_encode('./z_rim_space.jpg')

var rim_reavers_in_orbit = base64_encode('./rim_reavers_in_orbit.jpg')
var rim_storms_gettin_worse = base64_encode('./rim_storms_gettin_worse.jpg')
var rim_the_big_black_01 = base64_encode('./rim_the_big_black_01.jpg')
var rim_reavers_on_the_hunt_01 = base64_encode('./rim_reavers_on_the_hunt_01.jpg')
var rim_reavers_on_the_hunt_02 = base64_encode('./rim_reavers_on_the_hunt_02.jpg')
var rim_reavers_on_the_hunt_03 = base64_encode('./rim_reavers_on_the_hunt_03.jpg')
var rim_reaver_cutter_01 = base64_encode('./rim_reaver_cutter_01.jpg')
var rim_hell_come_at_you_sideways_01 = base64_encode('./rim_hell_come_at_you_sideways_01.jpg')
var rim_reavers_on_the_hunt_04 = base64_encode('./rim_reavers_on_the_hunt_04.jpg')
var rim_fly_by_night_casino_ship = base64_encode('./rim_fly_by_night_casino_ship.jpg')
var rim_objects_in_space = base64_encode('./rim_objects_in_space.jpg')
var rim_persistent_persuit_01 = base64_encode('./rim_persistent_persuit_01.jpg')
var rim_the_big_black_02 = base64_encode('./rim_the_big_black_02.jpg')
var rim_the_big_black_03 = base64_encode('./rim_the_big_black_03.jpg')
var rim_reavers_on_the_hunt_05 = base64_encode('./rim_reavers_on_the_hunt_05.jpg')
var rim_ravaged_transport = base64_encode('./rim_ravaged_transport.jpg')
var rim_alliance_spy_satellite = base64_encode('./rim_alliance_spy_satellite.jpg')
var rim_the_big_black_04 = base64_encode('./rim_the_big_black_04.jpg')
var rim_the_big_black_05 = base64_encode('./rim_the_big_black_05.jpg')
var rim_nav_system_on_the_fritz = base64_encode('./rim_nav_system_on_the_fritz.jpg')
var rim_the_big_black_06 = base64_encode('./rim_the_big_black_06.jpg')
var rim_the_big_black_07 = base64_encode('./rim_the_big_black_07.jpg')
var rim_persistent_persuit_02 = base64_encode('./rim_persistent_persuit_02.jpg')
var rim_blown_out_buffer_panel = base64_encode('./rim_blown_out_buffer_panel.jpg')
var rim_persistent_persuit_03 = base64_encode('./rim_persistent_persuit_03.jpg')
var rim_reavers_in_orbit_01 = base64_encode('./rim_reavers_in_orbit_01.jpg')
var rim_first_come_first_serve = base64_encode('./rim_first_come_first_serve.jpg')
var rim_reaver_booby_trap = base64_encode('./rim_reaver_booby_trap.jpg')
var rim_reavers_on_the_hunt_06 = base64_encode('./rim_reavers_on_the_hunt_06.jpg')
var rim_reavers_in_orbit_02 = base64_encode('./rim_reavers_in_orbit_02.jpg')
var rim_enhanced_enforcement = base64_encode('./rim_enhanced_enforcement.jpg')
var rim__the_big_black_08 = base64_encode('./rim__the_big_black_08.jpg')
var rim_reavers_on_the_hunt_07 = base64_encode('./rim_reavers_on_the_hunt_07.jpg')
var rim_damaged_spy_satellite = base64_encode('./rim_damaged_spy_satellite.jpg')
var rim_fuel_coupling_failure = base64_encode('./rim_fuel_coupling_failure.jpg')
var rim_the_big_black_09 = base64_encode('./rim_the_big_black_09.jpg')
var rim_reavers_on_the_hunt_08 = base64_encode('./rim_reavers_on_the_hunt_08.jpg')
var rim__the_big_black_10 = base64_encode('./rim__the_big_black_10.jpg')
var rim_orphaned_cargo_pod = base64_encode('./rim_orphaned_cargo_pod.jpg')
var rim_leave_no_ground_to_go_to = base64_encode('./rim_leave_no_ground_to_go_to.jpg')
var rim_failure_to_communicate = base64_encode('./rim_failure_to_communicate.jpg')
var rim_abandoned_tanker = base64_encode('./rim_abandoned_tanker.jpg')
var rim_the_bit_black_11 = base64_encode('./rim_the_bit_black_11.jpg')
var rim_the_bit_black_12 = base64_encode('./rim_the_bit_black_12.jpg')
var rim_the_bit_black_13 = base64_encode('./rim_the_bit_black_13.jpg')
var rim_the_bit_black_14 = base64_encode('./rim_the_bit_black_14.jpg')
var rim_the_bit_black_15 = base64_encode('./rim_the_bit_black_15.jpg')
var rim_shes_tore_up_plenty = base64_encode('./rim_shes_tore_up_plenty.jpg')
var rim_grav_well_maneuver = base64_encode('./rim_grav_well_maneuver.jpg')
var rim_persistent_pursuit_03 = base64_encode('./rim_persistent_pursuit_03.jpg')
var rim_the_big_black_16 = base64_encode('./rim_the_big_black_16.jpg')
var rim_reaver_cutter_02 = base64_encode('./rim_reaver_cutter_02.jpg')
var rim_the_big_black_17 = base64_encode('./rim_the_big_black_17.jpg')
var rim_horowitz_trading_scow = base64_encode('./rim_horowitz_trading_scow.jpg')
var rim_nishas_neer_do_wells = base64_encode('./rim_nishas_neer_do_wells.jpg')
var rim_local_tariff_patrol = base64_encode('./rim_local_tariff_patrol.jpg')
var rim_first_rule_of_flying = base64_encode('./rim_first_rule_of_flying.jpg')
var rim_locking_horns_over_scraps = base64_encode('./rim_locking_horns_over_scraps.jpg')
var rim_the_big_black_18 = base64_encode('./rim_the_big_black_18.jpg')
var rim_the_big_black_19 = base64_encode('./rim_the_big_black_19.jpg')
var rim_the_big_black = base64_encode('./rim_the_big_black.jpg')

//bounty alert

var bounty_alert = base64_encode('./bounty_alert.jpg')
var bounty_bandits = base64_encode('./bounty_bandits.jpg')
var bounty_billy = base64_encode('./bounty_billy.jpg')
var bounty_bree = base64_encode('./bounty_bree.jpg')
var bounty_crow = base64_encode('./bounty_crow.jpg')
var bounty_dalin = base64_encode('./bounty_dalin.jpg')
var bounty_enforcers = base64_encode('./bounty_enforcers.jpg')
var bounty_grange_brothers = base64_encode('./bounty_grange_brothers.jpg')
var bounty_helen = base64_encode('./bounty_helen.jpg')
var bounty_interrogator = base64_encode('./bounty_interrogator.jpg')
var bounty_jayne = base64_encode('./bounty_jayne.jpg')
var bounty_jesse = base64_encode('./bounty_jesse.jpg')
var bounty_river_tam = base64_encode('./bounty_river_tam.jpg')
var bounty_scrappers = base64_encode('./bounty_scrappers.jpg')
var bounty_simon_tam = base64_encode('./bounty_simon_tam.jpg')
var bounty_stitch = base64_encode('./bounty_stitch.jpg')
var bounty_the_fixer = base64_encode('./bounty_the_fixer.jpg')
var bounty_the_specialist = base64_encode('./bounty_the_specialist.jpg')
var bounty_tracey = base64_encode('./bounty_tracey.jpg')
var bounty_two_fry = base64_encode('./bounty_two_fry.jpg')
var bounty_zoe = base64_encode('./bounty_zoe.jpg')

//captains

var captain_atherton = base64_encode('./captain_atherton.jpg')
var captain_burgess = base64_encode('./captain_burgess.jpg')
var captain_corbin = base64_encode('./captain_corbin.jpg')
var captain_jubal_early = base64_encode('./captain_jubal_early.jpg')
var captain_malcolm = base64_encode('./captain_malcolm.jpg')
var captain_marco = base64_encode('./captain_marco.jpg')
var captain_monty = base64_encode('./captain_monty.jpg')
var captain_murphy = base64_encode('./captain_murphy.jpg')
var captain_nandi = base64_encode('./captain_nandi.jpg')
var captain_sash = base64_encode('./captain_sash.jpg')
var captain_womack = base64_encode('./captain_womack.jpg')
var captain_wright = base64_encode('./captain_wright.jpg')

//cores
var captaints_cores_back = base64_encode('./captaints_cores_back.jpg')

var echelon_core_01 = base64_encode('./echelon_core_01.jpg')
var radion_core_01 = base64_encode('./radion_core_01.jpg')
var radion_core_02 = base64_encode('./radion_core_02.jpg')
var radion_core_03 = base64_encode('./radion_core_03.jpg')
var radion_core_04 = base64_encode('./radion_core_04.jpg')
var tricapissen_core_01 = base64_encode('./tricapissen_core_01.jpg')

//alliance contract

var alliance_contact = base64_encode('./alliance_contact.jpg')

//ships

var bonanza = base64_encodePNG('./bonanza.png')
var bonniemae = base64_encodePNG('./bonnie mae.png')
var interceptor = base64_encodePNG('./interceptor.png')
var s_s_walden = base64_encodePNG('./s_s_walden.png')
var serenity = base64_encodePNG('./serenity.png')
var yun_qi = base64_encodePNG('./yun_qi.png')

var smile_sad = base64_encodePNG('./smile_sad.png')
var smile_happy = base64_encodePNG('./smile_happy.png')


//jobs



//amnon duul
var amnon_duul_not_solid_red = base64_encode('./amnon_duul_not_solid_red.jpg')
var amnon_duul_solid = base64_encode('./amnon_duul_solid.jpg')

var amnon_duul_coachworks_trade_secrets = base64_encode('./amnon_duul_coachworks_trade_secrets.jpg')
var amnon_duul_contract_jumper_01 = base64_encode('./amnon_duul_contract_jumper_01.jpg')
var amnon_duul_contract_jumper_02 = base64_encode('./amnon_duul_contract_jumper_02.jpg')
var amnon_duul_contract_jumper_03 = base64_encode('./amnon_duul_contract_jumper_03.jpg')
var amnon_duul_contract_jumper_04 = base64_encode('./amnon_duul_contract_jumper_04.jpg')
var amnon_duul_contract_jumper_05 = base64_encode('./amnon_duul_contract_jumper_05.jpg')
var amnon_duul_courting_aphrodite = base64_encode('./amnon_duul_courting_aphrodite.jpg')
var amnon_duul_courting_kerry = base64_encode('./amnon_duul_courting_kerry.jpg')
var amnon_duul_courting_regina = base64_encode('./amnon_duul_courting_regina.jpg')
var amnon_duul_discrete_transportation = base64_encode('./amnon_duul_discrete_transportation.jpg')
var amnon_duul_feeding_alliance_fat_cats_01 = base64_encode('./amnon_duul_feeding_alliance_fat_cats_01.jpg')
var amnon_duul_feeding_alliance_fat_cats_02 = base64_encode('./amnon_duul_feeding_alliance_fat_cats_02.jpg')
var amnon_duul_feeding_alliance_fat_cats_03 = base64_encode('./amnon_duul_feeding_alliance_fat_cats_03.jpg')
var amnon_duul_gun_running_special_order = base64_encode('./amnon_duul_gun_running_special_order.jpg')
var amnon_duul_gun_running_three_hills = base64_encode('./amnon_duul_gun_running_three_hills.jpg')
var amnon_duul_gun_running = base64_encode('./amnon_duul_gun_running.jpg')
var amnon_duul_haulin_military_scrap_01 = base64_encode('./amnon_duul_haulin_military_scrap_01.jpg')
var amnon_duul_haulin_military_scrap_02 = base64_encode('./amnon_duul_haulin_military_scrap_02.jpg')
var amnon_duul_heavy_loadi_01 = base64_encode('./amnon_duul_heavy_loadi_01.jpg')
var amnon_duul_heavy_loadi_03 = base64_encode('./amnon_duul_heavy_loadi_03.jpg')
var amnon_duul_heavy_loadi_02 = base64_encode('./amnon_duul_heavy_loadi_02.jpg')
var amnon_duul_homesteader_transport_01 = base64_encode('./amnon_duul_homesteader_transport_01.jpg')
var amnon_duul_homesteader_transport_02 = base64_encode('./amnon_duul_homesteader_transport_02.jpg')
var amnon_duul_homesteader_transport_03 = base64_encode('./amnon_duul_homesteader_transport_03.jpg')
var amnon_duul_homesteader_transport_04 = base64_encode('./amnon_duul_homesteader_transport_04.jpg')
var amnon_duul_hot_cargo = base64_encode('./amnon_duul_hot_cargo.jpg')
var amnon_duul_irrigation_supply_run = base64_encode('./amnon_duul_irrigation_supply_run.jpg')
var amnon_duul_miner_transport = base64_encode('./amnon_duul_miner_transport.jpg')
var amnon_duul_settler_transport = base64_encode('./amnon_duul_settler_transport.jpg')
var amnon_duul_some_discretion_is_required = base64_encode('./amnon_duul_some_discretion_is_required.jpg')
var amnon_duul_special_delivery_classified_tech = base64_encode('./amnon_duul_special_delivery_classified_tech.jpg')
var amnon_duul_special_delivery_secret_prototype = base64_encode('./amnon_duul_special_delivery_secret_prototype.jpg')
var amnon_duul_stolen_goods = base64_encode('./amnon_duul_stolen_goods.jpg')
var amnon_duul_war_victims_relief_fund_charter = base64_encode('./amnon_duul_war_victims_relief_fund_charter.jpg')
var amnon_duul_worker_and_equiptment_transport = base64_encode('./amnon_duul_worker_and_equiptment_transport.jpg')
var amnon_duul_zia_com_deliveries = base64_encode('./amnon_duul_zia_com_deliveries.jpg')
var amnon_duul_zia_com_franchising = base64_encode('./amnon_duul_zia_com_franchising.jpg')
var amnon_duul_zir_com_deliveries_priority_mail_run_01 = base64_encode('./amnon_duul_zir_com_deliveries_priority_mail_run_01.jpg')
var amnon_duul_zir_com_deliveries_priority_mail_run_02 = base64_encode('./amnon_duul_zir_com_deliveries_priority_mail_run_02.jpg')
var amnon_duul_zir_com_deliveries_priority_mail_run_03 = base64_encode('./amnon_duul_zir_com_deliveries_priority_mail_run_03.jpg')
var amnon_duul_zir_com_deliveries_priority_mail_run_04 = base64_encode('./amnon_duul_zir_com_deliveries_priority_mail_run_04.jpg')
var amnon_duul_zir_com_deliveries_priority_mail_run_05 = base64_encode('./amnon_duul_zir_com_deliveries_priority_mail_run_05.jpg')
var amnon_duul_zir_com_deliveries_special_order = base64_encode('./amnon_duul_zir_com_deliveries_special_order.jpg')
var amnon_duul_zir_com_franchising_tanis_docks = base64_encode('./amnon_duul_zir_com_franchising_tanis_docks.jpg')
var amnon_duul_zir_com_franchising_urp_transport_hub = base64_encode('./amnon_duul_zir_com_franchising_urp_transport_hub.jpg')



//badger

var badger_solid = base64_encode('./badger_solid.jpg')
var badger_not_solid_red = base64_encode('./badger_not_solid_red.jpg')

var badger_a_stick_as_big_as_harrows = base64_encode('./badger_a_stick_as_big_as_harrows.jpg')
var badger_bilking_the_yokels = base64_encode('./badger_bilking_the_yokels.jpg')
var badger_bootleggin_run_01 = base64_encode('./badger_bootleggin_run_01.jpg')
var badger_bootleggin_run_02 = base64_encode('./badger_bootleggin_run_02.jpg')
var badger_bootleggin_run = base64_encode('./badger_bootleggin_run.jpg')
var badger_breaking_into_new_markets = base64_encode('./badger_breaking_into_new_markets.jpg')
var badger_casino_caper = base64_encode('./badger_casino_caper.jpg')
var badger_data_jacking = base64_encode('./badger_data_jacking.jpg')
var badger_delaying_the_dive = base64_encode('./badger_delaying_the_dive.jpg')
var badger_diamons_the_size_of_testicles = base64_encode('./badger_diamons_the_size_of_testicles.jpg')
var badger_filling_up_their_dance_cards = base64_encode('./badger_filling_up_their_dance_cards.jpg')
var badger_finders_keepers = base64_encode('./badger_finders_keepers.jpg')
var badger_gravy_trains_acomin = base64_encode('./badger_gravy_trains_acomin.jpg')
var badger_hard_goods_for_hard_times = base64_encode('./badger_hard_goods_for_hard_times.jpg')
var badger_hump_em_let_em_twist = base64_encode('./badger_hump_em_let_em_twist.jpg')
var badger_i_dream_of_djinn = base64_encode('./badger_i_dream_of_djinn.jpg')
var badger_ill_show_you_a_psychotic_lowlife = base64_encode('./badger_ill_show_you_a_psychotic_lowlife.jpg')
var badger_keep_your_noses_clean = base64_encode('./badger_keep_your_noses_clean.jpg')
var badger_kill_the_messenger = base64_encode('./badger_kill_the_messenger.jpg')
var badger_losing_patience = base64_encode('./badger_losing_patience.jpg')
var badger_make_the_love_connection = base64_encode('./badger_make_the_love_connection.jpg')
var badger_offload_the_motherlode = base64_encode('./badger_offload_the_motherlode.jpg')
var badger_on_the_up_and_up = base64_encode('./badger_on_the_up_and_up.jpg')
var badger_pilfer_purloin_and_plunder_01 = base64_encode('./badger_pilfer_purloin_and_plunder_01.jpg')
var badger_pilfer_purloin_and_plunder_02 = base64_encode('./badger_pilfer_purloin_and_plunder_02.jpg')
var badger_pilfer_purloin_and_plunder_03 = base64_encode('./badger_pilfer_purloin_and_plunder_03.jpg')
var badger_pilfer_purloin_and_plunder_04 = base64_encode('./badger_pilfer_purloin_and_plunder_04.jpg')
var badger_pilfer_purloin_and_plunder_05 = base64_encode('./badger_pilfer_purloin_and_plunder_05.jpg')
var badger_playing_the_middleman = base64_encode('./badger_playing_the_middleman.jpg')
var badger_poking_holes_in_niskas_plans = base64_encode('./badger_poking_holes_in_niskas_plans.jpg')
var badger_procure_the_postmans_parcel = base64_encode('./badger_procure_the_postmans_parcel.jpg')
var badger_raising_funds_at_the_fundraiser = base64_encode('./badger_raising_funds_at_the_fundraiser.jpg')
var badger_robbing_peter_to_feed_paul = base64_encode('./badger_robbing_peter_to_feed_paul.jpg')
var badger_send_them_to_the_ruttin_mines = base64_encode('./badger_send_them_to_the_ruttin_mines.jpg')
var badger_slave_wrangling = base64_encode('./badger_slave_wrangling.jpg')
var badger_solid = base64_encode('./badger_solid.jpg')
var badger_sowing_chaos = base64_encode('./badger_sowing_chaos.jpg')
var badger_street_sweepers = base64_encode('./badger_street_sweepers.jpg')
var badger_takes_my_breath_away = base64_encode('./badger_takes_my_breath_away.jpg')
var badger_talkin_all_respectable_like = base64_encode('./badger_talkin_all_respectable_like.jpg')
var badger_the_alliance_payroll_caper = base64_encode('./badger_the_alliance_payroll_caper.jpg')
var badger_the_hospital_job = base64_encode('./badger_the_hospital_job.jpg')
var badger_time_for_a_fancy_shindig = base64_encode('./badger_time_for_a_fancy_shindig.jpg')
var badger_try_one_of_the_border_planets = base64_encode('./badger_try_one_of_the_border_planets.jpg')
var badger_withdraw_from_the_first_bank = base64_encode('./badger_withdraw_from_the_first_bank.jpg')
var badger_pushing_drops = base64_encode('./badger_pushing_drops.jpg')

//getting base


//finished getting base


//fanty and mingo

var fanty_mingo_not_solid_red = base64_encode('./fanty_mingo_not_solid_red.jpg')
var fanty_mingo_solid = base64_encode('./fanty_mingo_solid.jpg')

var fanty_mingo_brothers_keeper = base64_encode('./fanty_mingo_brothers_keeper.jpg')
var fanty_mingo_double_dealing_duo = base64_encode('./fanty_mingo_double_dealing_duo.jpg')
var fanty_mingo_double_dip = base64_encode('./fanty_mingo_double_dip.jpg')
var fanty_mingo_double_entenore = base64_encode('./fanty_mingo_double_entenore.jpg')
var fanty_mingo_double_fun = base64_encode('./fanty_mingo_double_fun.jpg')
var fanty_mingo_double_jeapardy = base64_encode('./fanty_mingo_double_jeapardy.jpg')
var fanty_mingo_double_pleasure = base64_encode('./fanty_mingo_double_pleasure.jpg')
var fanty_mingo_double_time_delivery = base64_encode('./fanty_mingo_double_time_delivery.jpg')
var fanty_mingo_double_wide = base64_encode('./fanty_mingo_double_wide.jpg')
var fanty_mingo_dual_destinations = base64_encode('./fanty_mingo_dual_destinations.jpg')
var fanty_mingo_dually_discreet_relocations = base64_encode('./fanty_mingo_dually_discreet_relocations.jpg')
var fanty_mingo_dupicitous_dalliances = base64_encode('./fanty_mingo_dupicitous_dalliances.jpg')
var fanty_mingo_horowitz_double_hook_up = base64_encode('./fanty_mingo_horowitz_double_hook_up.jpg')
var fanty_mingo_pair_of_jokers = base64_encode('./fanty_mingo_pair_of_jokers.jpg')
var fanty_mingo_serving_two_masters = base64_encode('./fanty_mingo_serving_two_masters.jpg')
var fanty_mingo_tale_of_two_cities = base64_encode('./fanty_mingo_tale_of_two_cities.jpg')
var fanty_mingo_twin_brotherly_love = base64_encode('./fanty_mingo_twin_brotherly_love.jpg')
var fanty_mingo_two_by_two = base64_encode('./fanty_mingo_two_by_two.jpg')
var fanty_mingo_two_faced_swindlers = base64_encode('./fanty_mingo_two_faced_swindlers.jpg')
var fanty_mingo_two_for_one = base64_encode('./fanty_mingo_two_for_one.jpg')
var fanty_mingo_two_for_the_road = base64_encode('./fanty_mingo_two_for_the_road.jpg')
var fanty_mingo_two_heads = base64_encode('./fanty_mingo_two_heads.jpg')
var fanty_mingo_two_mules_for_sister_constance = base64_encode('./fanty_mingo_two_mules_for_sister_constance.jpg')
var fanty_mingo_two_towers = base64_encode('./fanty_mingo_two_towers.jpg')
var fanty_mingo_two_ways = base64_encode('./fanty_mingo_two_ways.jpg')



//harken

var harken_not_solid_red = base64_encode('./harken_not_solid_red.jpg')
var harken_solid = base64_encode('./harken_solid.jpg')


var harken_alliance_commission_01 = base64_encode('./harken_alliance_commission_01.jpg')
var harken_alliance_commission_02 = base64_encode('./harken_alliance_commission_02.jpg')
var harken_alliance_commission_03 = base64_encode('./harken_alliance_commission_03.jpg')
var harken_alliance_commission_04 = base64_encode('./harken_alliance_commission_04.jpg')
var harken_alliance_commission_05 = base64_encode('./harken_alliance_commission_05.jpg')
var harken_boots_on_the_ground = base64_encode('./harken_boots_on_the_ground.jpg')
var harken_cargo_delivery_albion = base64_encode('./harken_cargo_delivery_albion.jpg')
var harken_cargo_delivery_ariel = base64_encode('./harken_cargo_delivery_ariel.jpg')
var harken_cargo_delivery_sihnon = base64_encode('./harken_cargo_delivery_sihnon.jpg')
var harken_cargo_delivery_valentine = base64_encode('./harken_cargo_delivery_valentine.jpg')
var harken_cargo_delivery_osiris = base64_encode('./harken_cargo_delivery_osiris.jpg')
var harken_cortek_relay_7_restock_order = base64_encode('./harken_cortek_relay_7_restock_order.jpg')
var harken_cortek_relay_maintenance_01 = base64_encode('./harken_cortek_relay_maintenance_01.jpg')
var harken_cortek_relay_maintenance_02 = base64_encode('./harken_cortek_relay_maintenance_02.jpg')
var harken_cortek_relay_seven_service_call = base64_encode('./harken_cortek_relay_seven_service_call.jpg')
var harken_courier_service_meridian = base64_encode('./harken_courier_service_meridian.jpg')
var harken_enforced_exile_constance = base64_encode('./harken_enforced_exile_constance.jpg')
var harken_enforced_exile_new_kasmir = base64_encode('./harken_enforced_exile_new_kasmir.jpg')
var harken_equipment_delivery_bellerophon = base64_encode('./harken_equipment_delivery_bellerophon.jpg')
var harken_equiptment_delivery_persephone = base64_encode('./harken_equiptment_delivery_persephone.jpg')
var harken_force_settler_relocation = base64_encode('./harken_force_settler_relocation.jpg')
var harken_forced_settler_relocation_01 = base64_encode('./harken_forced_settler_relocation_01.jpg')
var harken_forced_settler_relocation_02 = base64_encode('./harken_forced_settler_relocation_02.jpg')
var harken_forced_settler_relocation = base64_encode('./harken_forced_settler_relocation.jpg')
var harken_fuel_run_bords = base64_encode('./harken_fuel_run_bords.jpg')
var harken_fuel_run_silverhold = base64_encode('./harken_fuel_run_silverhold.jpg')
var harken_laborer_transport = base64_encode('./harken_laborer_transport.jpg')
var harken_medical_emergency_transport = base64_encode('./harken_medical_emergency_transport.jpg')
var harken_relief_supplies_newhope = base64_encode('./harken_relief_supplies_newhope.jpg')
var harken_relief_supplies_st_albans = base64_encode('./harken_relief_supplies_st_albans.jpg')
var harken_repair_team_transport = base64_encode('./harken_repair_team_transport.jpg')
var harken_riot_suppression_dock_worker_strike = base64_encode('./harken_riot_suppression_dock_worker_strike.jpg')
var harken_riot_suppression_ezra_food_shortage = base64_encode('./harken_riot_suppression_ezra_food_shortage.jpg')
var harken_riot_suppression_rancher_protest = base64_encode('./harken_riot_suppression_rancher_protest.jpg')
var harken_scrap_hauling_aesir = base64_encode('./harken_scrap_hauling_aesir.jpg')
var harken_scrap_hauling_space_bazaar = base64_encode('./harken_scrap_hauling_space_bazaar.jpg')
var harken_settlers_to_new_melbourne = base64_encode('./harken_settlers_to_new_melbourne.jpg')
var harken_settlers_to_regina = base64_encode('./harken_settlers_to_regina.jpg')
var harken_survey_team_transport = base64_encode('./harken_survey_team_transport.jpg')
var harken_trade_negotiations = base64_encode('./harken_trade_negotiations.jpg')
var harken_university_student_transport = base64_encode('./harken_university_student_transport.jpg')
var harken_vacationers_to_pelorum = base64_encode('./harken_vacationers_to_pelorum.jpg')
var harken_vital_supplies_jubilee = base64_encode('./harken_vital_supplies_jubilee.jpg')
var harken_vital_supplies_kerry = base64_encode('./harken_vital_supplies_kerry.jpg')
var harken_winning_hearts_and_minds = base64_encode('./harken_winning_hearts_and_minds.jpg')

//getting base


//finished getting base


//lord harrow

var lord_harrow_not_solid_red = base64_encode('./lord_harrow_not_solid_red.jpg')
var lord_harrow_solid = base64_encode('./lord_harrow_solid.jpg')


var lord_harrow_a_favor_for_his_lordship = base64_encode('./lord_harrow_a_favor_for_his_lordship.jpg')
var lord_harrow_a_fight_before_your_gutted = base64_encode('./lord_harrow_a_fight_before_your_gutted.jpg')
var lord_harrow_a_solid_deal = base64_encode('./lord_harrow_a_solid_deal.jpg')
var lord_harrow_another_day_older_and_deeper_in_debt = base64_encode('./lord_harrow_another_day_older_and_deeper_in_debt.jpg')
var lord_harrow_baubles_for_the_ball = base64_encode('./lord_harrow_baubles_for_the_ball.jpg')
var lord_harrow_delicate_dealings = base64_encode('./lord_harrow_delicate_dealings.jpg')
var lord_harrow_does_this_mean_were_in_business = base64_encode('./lord_harrow_does_this_mean_were_in_business.jpg')
var lord_harrow_fifteen_tons = base64_encode('./lord_harrow_fifteen_tons.jpg')
var lord_harrow_goods_to_people_what_need_them = base64_encode('./lord_harrow_goods_to_people_what_need_them.jpg')
var lord_harrow_guess_im_just_a_good_man = base64_encode('./lord_harrow_guess_im_just_a_good_man.jpg')
var lord_harrow_hungry_for_beefsteak = base64_encode('./lord_harrow_hungry_for_beefsteak.jpg')
var lord_harrow_in_your_hold_before_midnight = base64_encode('./lord_harrow_in_your_hold_before_midnight.jpg')
var lord_harrow_mercy_is_the_mark_of_a_great_man = base64_encode('./lord_harrow_mercy_is_the_mark_of_a_great_man.jpg')
var lord_harrow_mirandas_promise = base64_encode('./lord_harrow_mirandas_promise.jpg')
var lord_harrow_mirandas_secret = base64_encode('./lord_harrow_mirandas_secret.jpg')
var lord_harrow_muss_up_the_spoiled_dandy = base64_encode('./lord_harrow_muss_up_the_spoiled_dandy.jpg')
var lord_harrow_my_works_illegal_but_its_honest = base64_encode('./lord_harrow_my_works_illegal_but_its_honest.jpg')
var lord_harrow_offend_the_psychotic_lowlife_community = base64_encode('./lord_harrow_offend_the_psychotic_lowlife_community.jpg')
var lord_harrow_private_reserve = base64_encode('./lord_harrow_private_reserve.jpg')
var lord_harrow_rely_on_your_winnino_personality = base64_encode('./lord_harrow_rely_on_your_winnino_personality.jpg')
var lord_harrow_run_with_rocks = base64_encode('./lord_harrow_run_with_rocks.jpg')
var lord_harrow_shinies_for_mudville = base64_encode('./lord_harrow_shinies_for_mudville.jpg')
var lord_harrow_sir_im_an_honest_man = base64_encode('./lord_harrow_sir_im_an_honest_man.jpg')
var lord_harrow_the_uroboros_run = base64_encode('./lord_harrow_the_uroboros_run.jpg')
var lord_harrow_warricks_request = base64_encode('./lord_harrow_warricks_request.jpg')


//magistrate higgins

var magistrate_higgins_not_solid_red = base64_encode('./magistrate_higgins_not_solid_red.jpg')
var magistrate_higgins_solid = base64_encode('./magistrate_higgins_solid.jpg')
                     
var magistrate_higgins_dirt_nap_fetch_lien_wong = base64_encode('./magistrate_higgins_dirt_nap_fetch_lien_wong.jpg')
var magistrate_higgins_dirt_nap_fetch_conroy = base64_encode('./magistrate_higgins_dirt_nap_fetch_conroy.jpg')
var magistrate_higgins_dirt_nap_fetch_malachi = base64_encode('./magistrate_higgins_dirt_nap_fetch_malachi.jpg')
var magistrate_higgins_dirt_nap_fetch_muldoon = base64_encode('./magistrate_higgins_dirt_nap_fetch_muldoon.jpg')
var magistrate_higgins_fetch_kessler = base64_encode('./magistrate_higgins_fetch_kessler.jpg')
var magistrate_higgins_mud_pipeline_albion = base64_encode('./magistrate_higgins_mud_pipeline_albion.jpg')
var magistrate_higgins_mud_pipeline_ariel = base64_encode('./magistrate_higgins_mud_pipeline_ariel.jpg')
var magistrate_higgins_mud_pipeline_bellerophon = base64_encode('./magistrate_higgins_mud_pipeline_bellerophon.jpg')
var magistrate_higgins_mud_pipeline_bernadette = base64_encode('./magistrate_higgins_mud_pipeline_bernadette.jpg')
var magistrate_higgins_mud_pipeline_lian_jiun = base64_encode('./magistrate_higgins_mud_pipeline_lian_jiun.jpg')
var magistrate_higgins_mud_pipeline_londinium = base64_encode('./magistrate_higgins_mud_pipeline_londinium.jpg')
var magistrate_higgins_mud_pipeline_osiris = base64_encode('./magistrate_higgins_mud_pipeline_osiris.jpg')
var magistrate_higgins_mud_pipeline_santo = base64_encode('./magistrate_higgins_mud_pipeline_santo.jpg')
var magistrate_higgins_mud_run_aberdeen = base64_encode('./magistrate_higgins_mud_run_aberdeen.jpg')
var magistrate_higgins_mud_run_deadwood = base64_encode('./magistrate_higgins_mud_run_deadwood.jpg')
var magistrate_higgins_mud_run_heaven = base64_encode('./magistrate_higgins_mud_run_heaven.jpg')
var magistrate_higgins_mud_run_highgate = base64_encode('./magistrate_higgins_mud_run_highgate.jpg')
var magistrate_higgins_mud_run_meridian = base64_encode('./magistrate_higgins_mud_run_meridian.jpg')
var magistrate_higgins_mud_run_muir = base64_encode('./magistrate_higgins_mud_run_muir.jpg')
var magistrate_higgins_mud_run_new_nanaane = base64_encode('./magistrate_higgins_mud_run_new_nanaan.jpg')
var magistrate_higgins_mud_run_salisbury = base64_encode('./magistrate_higgins_mud_run_salisbury.jpg')
var magistrate_higgins_mudder_grab_hera = base64_encode('./magistrate_higgins_mudder_grab_hera.jpg')
var magistrate_higgins_mudder_grab_ithaca = base64_encode('./magistrate_higgins_mudder_grab_ithaca.jpg')
var magistrate_higgins_mudder_grab_shadow = base64_encode('./magistrate_higgins_mudder_grab_shadow.jpg')
var magistrate_higgins_mudder_grab_three_hills = base64_encode('./magistrate_higgins_mudder_grab_three_hills.jpg')


//mr universe

var mr_universe_not_solid_red = base64_encode('./mr_universe_not_solid_red.jpg')
var mr_universe_solid = base64_encode('./mr_universe_solid.jpg')

var mr_universe_a_wee_bit_naughty_01 = base64_encode('./mr_universe_a_wee_bit_naughty_01.jpg')
var mr_universe_a_wee_bit_naughty_02 = base64_encode('./mr_universe_a_wee_bit_naughty_02.jpg')
var mr_universe_action_on_the_side = base64_encode('./mr_universe_action_on_the_side.jpg')
var mr_universe_bruises_and_contusions = base64_encode('./mr_universe_bruises_and_contusions.jpg')
var mr_universe_do_in_light = base64_encode('./mr_universe_do_in_light.jpg')
var mr_universe_do_it_off_the_grid_01 = base64_encode('./mr_universe_do_it_off_the_grid_01.jpg')
var mr_universe_do_it_off_the_grid_02 = base64_encode('./mr_universe_do_it_off_the_grid_02.jpg')
var mr_universe_grand_theft_larceny = base64_encode('./mr_universe_grand_theft_larceny.jpg')
var mr_universe_how_weird_is_that = base64_encode('./mr_universe_how_weird_is_that.jpg')
var mr_universe_play_merry_hob = base64_encode('./mr_universe_play_merry_hob.jpg')
var mr_universe_right_in_my_orbit_01 = base64_encode('./mr_universe_right_in_my_orbit_01.jpg')
var mr_universe_right_in_my_orbit_02 = base64_encode('./mr_universe_right_in_my_orbit_02.jpg')
var mr_universe_run_the_long_con = base64_encode('./mr_universe_run_the_long_con.jpg')
var mr_universe_someone_is_talking_01 = base64_encode('./mr_universe_someone_is_talking_01.jpg')
var mr_universe_someone_is_talking_02 = base64_encode('./mr_universe_someone_is_talking_02.jpg')
var mr_universe_techno_kung_fu = base64_encode('./mr_universe_techno_kung_fu.jpg')
var mr_universe_the_puppet_theatre = base64_encode('./mr_universe_the_puppet_theatre.jpg')
var mr_universe_the_very_best_violence = base64_encode('./mr_universe_the_very_best_violence.jpg')
var mr_universe_to_the_eyes_and_ears = base64_encode('./mr_universe_to_the_eyes_and_ears.jpg')
var mr_universe_two_by_two = base64_encode('./mr_universe_two_by_two.jpg')
var mr_universe_two_more_than_i_need_01 = base64_encode('./mr_universe_two_more_than_i_need_01.jpg')
var mr_universe_two_more_than_i_need_02 = base64_encode('./mr_universe_two_more_than_i_need_02.jpg')
var mr_universe_up_the_body_count = base64_encode('./mr_universe_up_the_body_count.jpg')
var mr_universe_with_your_hads_tied = base64_encode('./mr_universe_with_your_hads_tied.jpg')
var mr_universe_with_your_hands_tied = base64_encode('./mr_universe_with_your_hands_tied.jpg')


//niska

var niska_not_solid_red = base64_encode('./niska_not_solid_red.jpg')
var niska_solid = base64_encode('./niska_solid.jpg')

var niska_a_judge_in_niskas_pocket = base64_encode('./niska_a_judge_in_niskas_pocket.jpg')
var niska_a_message_from_niska_01 = base64_encode('./niska_a_message_from_niska_01.jpg')
var niska_a_message_from_niska_02 = base64_encode('./niska_a_message_from_niska_02.jpg')
var niska_a_message_from_niska_03 = base64_encode('./niska_a_message_from_niska_03.jpg')
var niska_a_message_from_niska_04 = base64_encode('./niska_a_message_from_niska_04.jpg')
var niska_a_message_from_niska_05 = base64_encode('./niska_a_message_from_niska_05.jpg')
var niska_all_manner_of_unwelcomed = base64_encode('./niska_all_manner_of_unwelcomed.jpg')
var niska_corporate_espionage_target_blue_sun = base64_encode('./niska_corporate_espionage_target_blue_sun.jpg')
var niska_from_great_need_springs_great_profit = base64_encode('./niska_from_great_need_springs_great_profit.jpg')
var niska_heavens_rejects = base64_encode('./niska_heavens_rejects.jpg')
var niska_her_majesty_the_mayor_of_whitefall = base64_encode('./niska_her_majesty_the_mayor_of_whitefall.jpg')
var niska_hit_the_relief_supplies_convoy = base64_encode('./niska_hit_the_relief_supplies_convoy.jpg')
var niska_infinitrate_the_trade_ministry = base64_encode('./niska_infinitrate_the_trade_ministry.jpg')
var niska_inside_information = base64_encode('./niska_inside_information.jpg')
var niska_its_not_business_its_personal = base64_encode('./niska_its_not_business_its_personal.jpg')
var niska_jump_and_hump_the_compatition = base64_encode('./niska_jump_and_hump_the_compatition.jpg')
var niska_kidnapping_for_fun_and_profit = base64_encode('./niska_kidnapping_for_fun_and_profit.jpg')
var niska_meridian_credit_exchange_heist = base64_encode('./niska_meridian_credit_exchange_heist.jpg')
var niska_moon_the_alliance = base64_encode('./niska_moon_the_alliance.jpg')
var niska_my_wifes_other_nephew_needs_a_lift = base64_encode('./niska_my_wifes_other_nephew_needs_a_lift.jpg')
var niska_narcotics_express = base64_encode('./niska_narcotics_express.jpg')
var niska_non_profit_profiteering = base64_encode('./niska_non_profit_profiteering.jpg')
var niska_pirated_tech_delivery = base64_encode('./niska_pirated_tech_delivery.jpg')
var niska_postman_only_rung_once = base64_encode('./niska_postman_only_rung_once.jpg')
var niska_protection_racket_shake_down_jubilee = base64_encode('./niska_protection_racket_shake_down_jubilee.jpg')
var niska_protection_racket_shake_down = base64_encode('./niska_protection_racket_shake_down.jpg')
var niska_reavers_schmeavers = base64_encode('./niska_reavers_schmeavers.jpg')
var niska_repo_by_fire = base64_encode('./niska_repo_by_fire.jpg')
var niska_sad_little_king_of_a_hill = base64_encode('./niska_sad_little_king_of_a_hill.jpg')
var niska_sharking_the_whales = base64_encode('./niska_sharking_the_whales.jpg')
var niska_slave_grab = base64_encode('./niska_slave_grab.jpg')
var niska_snake_oil_vaccinations = base64_encode('./niska_snake_oil_vaccinations.jpg')
var niska_stranger_to_a_strange_land = base64_encode('./niska_stranger_to_a_strange_land.jpg')
var niska_taking_candy_from_babies = base64_encode('./niska_taking_candy_from_babies.jpg')
var niska_the_alliance_reserve_bank_heist = base64_encode('./niska_the_alliance_reserve_bank_heist.jpg')
var niska_the_ariel_city_museum_art_heist = base64_encode('./niska_the_ariel_city_museum_art_heist.jpg')
var niska_the_big_bad_niska = base64_encode('./niska_the_big_bad_niska.jpg')
var niska_the_expandable = base64_encode('./niska_the_expandable.jpg')
var niska_the_temple_job = base64_encode('./niska_the_temple_job.jpg')
var niska_the_train_job = base64_encode('./niska_the_train_job.jpg')
var niska_the_vaults_of_olympus = base64_encode('./niska_the_vaults_of_olympus.jpg')
var niska_this_is_why_you_cant_have_nice_things = base64_encode('./niska_this_is_why_you_cant_have_nice_things.jpg')
var niska_wet_ware_run = base64_encode('./niska_wet_ware_run.jpg')
var niska_whats_yours_is_mine = base64_encode('./niska_whats_yours_is_mine.jpg')
var niska_where_angels_fear_to_tread = base64_encode('./niska_where_angels_fear_to_tread.jpg')



//patience

var patience_not_solid_red = base64_encode('./patience_not_solid_red.jpg')
var patience_solid = base64_encode('./patience_solid.jpg')

var patience_aggresive_recruitment = base64_encode('./patience_aggresive_recruitment.jpg')
var patience_bank_holdup = base64_encode('./patience_bank_holdup.jpg')
var patience_big_black_cattle_drive_01 = base64_encode('./patience_big_black_cattle_drive_01.jpg')
var patience_big_black_cattle_drive_02 = base64_encode('./patience_big_black_cattle_drive_02.jpg')
var patience_cattle_rustling_01 = base64_encode('./patience_cattle_rustling_01.jpg')
var patience_cattle_rustling_02 = base64_encode('./patience_cattle_rustling_02.jpg')
var patience_dung_run_01 = base64_encode('./patience_dung_run_01.jpg')
var patience_dung_run_02 = base64_encode('./patience_dung_run_02.jpg')
var patience_feed_for_the_herd_03 = base64_encode('./patience_feed_for_the_herd_03.jpg')
var patience_feed_for_the_herds_01 = base64_encode('./patience_feed_for_the_herds_01.jpg')
var patience_feed_for_the_herds_02 = base64_encode('./patience_feed_for_the_herds_02.jpg')
var patience_foodstuffs_for_the_downtrodden = base64_encode('./patience_foodstuffs_for_the_downtrodden.jpg')
var patience_gold_rush = base64_encode('./patience_gold_rush.jpg')
var patience_good_fences_make_good_neighbors = base64_encode('./patience_good_fences_make_good_neighbors.jpg')
var patience_good_old_fashioned_mail_robbery = base64_encode('./patience_good_old_fashioned_mail_robbery.jpg')
var patience_guns_for_my_gun_hands_01 = base64_encode('./patience_guns_for_my_gun_hands_01.jpg')
var patience_guns_for_my_gun_hands_02 = base64_encode('./patience_guns_for_my_gun_hands_02.jpg')
var patience_hard_rustlin_01 = base64_encode('./patience_hard_rustlin_01.jpg')
var patience_hard_rustlin_02 = base64_encode('./patience_hard_rustlin_02.jpg')
var patience_hard_rustlin_03 = base64_encode('./patience_hard_rustlin_03.jpg')
var patience_hard_rustlin_04 = base64_encode('./patience_hard_rustlin_04.jpg')
var patience_hard_rustlin_05 = base64_encode('./patience_hard_rustlin_05.jpg')
var patience_henpencked_badger = base64_encode('./patience_henpencked_badger.jpg')
var patience_low_down_dirty_dealings = base64_encode('./patience_low_down_dirty_dealings.jpg')
var patience_motherlode_mine_holdup = base64_encode('./patience_motherlode_mine_holdup.jpg')
var patience_ranch_hand_recruitment_01 = base64_encode('./patience_ranch_hand_recruitment_01.jpg')
var patience_ranch_hand_recruitment_02 = base64_encode('./patience_ranch_hand_recruitment_02.jpg')
var patience_range_war_brisingamem = base64_encode('./patience_range_war_brisingamem.jpg')
var patience_range_war_cannery_sabotage = base64_encode('./patience_range_war_cannery_sabotage.jpg')
var patience_range_war_feedlot_sabotage = base64_encode('./patience_range_war_feedlot_sabotage.jpg')
var patience_range_war_jiangyin = base64_encode('./patience_range_war_jiangyin.jpg')
var patience_range_war_three_hills = base64_encode('./patience_range_war_three_hills.jpg')
var patience_rob_the_alliance_pay_train = base64_encode('./patience_rob_the_alliance_pay_train.jpg')
var patience_robbing_heaven = base64_encode('./patience_robbing_heaven.jpg')
var patience_salisbury_steaks = base64_encode('./patience_salisbury_steaks.jpg')
var patience_sterlin_steers = base64_encode('./patience_sterlin_steers.jpg')
var patience_swipe_settler_rations_01 = base64_encode('./patience_swipe_settler_rations_01.jpg')
var patience_swipe_settler_rations_02 = base64_encode('./patience_swipe_settler_rations_02.jpg')
var patience_the_beaumonde_derby = base64_encode('./patience_the_beaumonde_derby.jpg')
var patience_the_beef_must_flow_01 = base64_encode('./patience_the_beef_must_flow_01.jpg')
var patience_the_beef_must_flow_02 = base64_encode('./patience_the_beef_must_flow_02.jpg')
var patience_the_beef_must_flow_03 = base64_encode('./patience_the_beef_must_flow_03.jpg')
var patience_the_beef_must_flow_04 = base64_encode('./patience_the_beef_must_flow_04.jpg')
var patience_the_shoje_downs = base64_encode('./patience_the_shoje_downs.jpg')
var patience_the_zephyr_stakes = base64_encode('./patience_the_zephyr_stakes.jpg')


//END OF JOBS


//misbehave


var aim_to_misbehave = base64_encode('./aim_to_misbehave.jpg')

var state_of_the_art_security_system = base64_encode('./state_of_the_art_security_system.jpg')
var old_fashioned_shoot_out = base64_encode('./old_fashioned_shoot_out.jpg')
var a_bit_of_local_color_01 = base64_encode('./a_bit_of_local_color_01.jpg')
var time_for_some_thrillin_heroics = base64_encode('./time_for_some_thrillin_heroics.jpg')
var keep_a_low_profile_01 = base64_encode('./keep_a_low_profile_01.jpg')
var lets_go_see_the_crappy_town = base64_encode('./lets_go_see_the_crappy_town.jpg')
var old_vendetta = base64_encode('./old_vendetta.jpg')
var kidnapped_by_hill_folk = base64_encode('./kidnapped_by_hill_folk.jpg')
var a_bit_of_local_color_02 = base64_encode('./a_bit_of_local_color_02.jpg')
var gun_play_01 = base64_encode('./gun_play_01.jpg')
var the_local_law_01 = base64_encode('./the_local_law_01.jpg')
var gun_play_02 = base64_encode('./gun_play_02.jpg')
var knife_fight = base64_encode('./knife_fight.jpg')
var the_local_law_02 = base64_encode('./the_local_law_02.jpg')
var locals_in_need = base64_encode('./locals_in_need.jpg')
var an_unexpected_oportunity = base64_encode('./an_unexpected_oportunity.jpg')
var a_formal_affair = base64_encode('./a_formal_affair.jpg')
var the_sheriffs_justice = base64_encode('./the_sheriffs_justice.jpg')
var ambush = base64_encode('./ambush.jpg')
var it_takes_a_womans_touch = base64_encode('./it_takes_a_womans_touch.jpg')
var we_need_a_distraction = base64_encode('./we_need_a_distraction.jpg')
var alliance_patrol = base64_encode('./alliance_patrol.jpg')
var keep_a_low_profile_02 = base64_encode('./keep_a_low_profile_02.jpg')
var alliance_patrol_01 = base64_encode('./alliance_patrol_01.jpg')
var a_rival_crew = base64_encode('./a_rival_crew.jpg')
var everything_thats_not_nailed_down_01 = base64_encode('./everything_thats_not_nailed_down_01.jpg')
var kill_the_alarm_01 = base64_encode('./kill_the_alarm_01.jpg')
var a_little_job_on_the_side = base64_encode('./a_little_job_on_the_side.jpg')
var an_interesting_day = base64_encode('./an_interesting_day.jpg')
var it_was_the_best_day_ever = base64_encode('./it_was_the_best_day_ever.jpg')
var kill_the_alarm_02 = base64_encode('./kill_the_alarm_02.jpg')
var backwater_deputies = base64_encode('./backwater_deputies.jpg')
var tight_security_01 = base64_encode('./tight_security_01.jpg')
var reaver_raid = base64_encode('./reaver_raid.jpg')
var alliance_patrol_02 = base64_encode('./alliance_patrol_02.jpg')
var tight_security_02 = base64_encode('./tight_security_02.jpg')
var denied_docking_rights = base64_encode('./denied_docking_rights.jpg')
var everything_thats_not_nailed_down_02 = base64_encode('./everything_thats_not_nailed_down_02.jpg')
var alliance_operatives = base64_encode('./alliance_operatives.jpg')
var a_vote_of_no_confidence = base64_encode('./a_vote_of_no_confidence.jpg')

//scenario

var scenario_back_green = base64_encode('./scenario_back_green.jpg')

var scenario_1 = base64_encode('./scenario_1.jpg')
var scenario_2 = base64_encode('./scenario_2.jpg')
var scenario_3 = base64_encode('./scenario_3.jpg')
var scenario_4 = base64_encode('./scenario_4.jpg')
var scenario_5 = base64_encode('./scenario_5.jpg')
var scenario_6 = base64_encode('./scenario_6.jpg')
var scenario_7 = base64_encode('./scenario_7.jpg')
var scenario_8 = base64_encode('./scenario_8.jpg')
var scenario_9 = base64_encode('./scenario_9.jpg')
var scenario_10 = base64_encode('./scenario_10.jpg')
var scenario_11 = base64_encode('./scenario_11.jpg')
var scenario_12 = base64_encode('./scenario_12.jpg')
var scenario_13 = base64_encode('./scenario_13.jpg')
var scenario_14 = base64_encode('./scenario_14.jpg')
var scenario_15 = base64_encode('./scenario_15.jpg')
var scenario_16 = base64_encode('./scenario_16.jpg')
var scenario_17 = base64_encode('./scenario_17.jpg')
var scenario_18 = base64_encode('./scenario_18.jpg')
var scenario_19 = base64_encode('./scenario_19.jpg')
var scenario_20 = base64_encode('./scenario_20.jpg')

//shopping


//beaumonde

var beaumonde_back = base64_encode('./beaumonde_back.jpg')

var beaumonde_01 = base64_encode('./beaumonde_01.jpg')
var beaumonde_02 = base64_encode('./beaumonde_02.jpg')
var beaumonde_03 = base64_encode('./beaumonde_03.jpg')
var beaumonde_04 = base64_encode('./beaumonde_04.jpg')
var beaumonde_05 = base64_encode('./beaumonde_05.jpg')
var beaumonde_06 = base64_encode('./beaumonde_06.jpg')
var beaumonde_07 = base64_encode('./beaumonde_07.jpg')
var beaumonde_08 = base64_encode('./beaumonde_08.jpg')
var beaumonde_09 = base64_encode('./beaumonde_09.jpg')
var beaumonde_10 = base64_encode('./beaumonde_10.jpg')
var beaumonde_11 = base64_encode('./beaumonde_11.jpg')
var beaumonde_12 = base64_encode('./beaumonde_12.jpg')
var beaumonde_13 = base64_encode('./beaumonde_13.jpg')
var beaumonde_14 = base64_encode('./beaumonde_14.jpg')
var beaumonde_15 = base64_encode('./beaumonde_15.jpg')
var beaumonde_16 = base64_encode('./beaumonde_16.jpg')
var beaumonde_17 = base64_encode('./beaumonde_17.jpg')
var beaumonde_18 = base64_encode('./beaumonde_18.jpg')
var beaumonde_19 = base64_encode('./beaumonde_19.jpg')
var beaumonde_20 = base64_encode('./beaumonde_20.jpg')
var beaumonde_21 = base64_encode('./beaumonde_21.jpg')
var beaumonde_22 = base64_encode('./beaumonde_22.jpg')
var beaumonde_23 = base64_encode('./beaumonde_23.jpg')
var beaumonde_24 = base64_encode('./beaumonde_24.jpg')
var beaumonde_25 = base64_encode('./beaumonde_25.jpg')



//meridian

var meridian_back = base64_encode('./meridian_back.jpg')

var meridian_01 = base64_encode('./meridian_01.jpg')
var meridian_02 = base64_encode('./meridian_02.jpg')
var meridian_03 = base64_encode('./meridian_03.jpg')
var meridian_04 = base64_encode('./meridian_04.jpg')
var meridian_05 = base64_encode('./meridian_05.jpg')
var meridian_06 = base64_encode('./meridian_06.jpg')
var meridian_07 = base64_encode('./meridian_07.jpg')
var meridian_08 = base64_encode('./meridian_08.jpg')
var meridian_09 = base64_encode('./meridian_09.jpg')
var meridian_10 = base64_encode('./meridian_10.jpg')
var meridian_11 = base64_encode('./meridian_11.jpg')
var meridian_12 = base64_encode('./meridian_12.jpg')
var meridian_13 = base64_encode('./meridian_13.jpg')
var meridian_14 = base64_encode('./meridian_14.jpg')
var meridian_15 = base64_encode('./meridian_15.jpg')
var meridian_16 = base64_encode('./meridian_16.jpg')
var meridian_17 = base64_encode('./meridian_17.jpg')
var meridian_18 = base64_encode('./meridian_18.jpg')
var meridian_19 = base64_encode('./meridian_19.jpg')
var meridian_20 = base64_encode('./meridian_20.jpg')
var meridian_21 = base64_encode('./meridian_21.jpg')
var meridian_22 = base64_encode('./meridian_22.jpg')
var meridian_23 = base64_encode('./meridian_23.jpg')
var meridian_24 = base64_encode('./meridian_24.jpg')
var meridian_25 = base64_encode('./meridian_25.jpg')


//osiris_shipworks

var osiris_shipworks_back = base64_encode('./osiris_shipworks_back.jpg')

var osiris_shipworks_01 = base64_encode('./osiris_shipworks_01.jpg')
var osiris_shipworks_02 = base64_encode('./osiris_shipworks_02.jpg')
var osiris_shipworks_03 = base64_encode('./osiris_shipworks_03.jpg')
var osiris_shipworks_04 = base64_encode('./osiris_shipworks_04.jpg')
var osiris_shipworks_05 = base64_encode('./osiris_shipworks_05.jpg')
var osiris_shipworks_06 = base64_encode('./osiris_shipworks_06.jpg')
var osiris_shipworks_07 = base64_encode('./osiris_shipworks_07.jpg')
var osiris_shipworks_08 = base64_encode('./osiris_shipworks_08.jpg')
var osiris_shipworks_09 = base64_encode('./osiris_shipworks_09.jpg')
var osiris_shipworks_10 = base64_encode('./osiris_shipworks_10.jpg')
var osiris_shipworks_11 = base64_encode('./osiris_shipworks_11.jpg')
var osiris_shipworks_12 = base64_encode('./osiris_shipworks_12.jpg')
var osiris_shipworks_13 = base64_encode('./osiris_shipworks_13.jpg')
var osiris_shipworks_14 = base64_encode('./osiris_shipworks_14.jpg')
var osiris_shipworks_15 = base64_encode('./osiris_shipworks_15.jpg')
var osiris_shipworks_16 = base64_encode('./osiris_shipworks_16.jpg')
var osiris_shipworks_17 = base64_encode('./osiris_shipworks_17.jpg')
var osiris_shipworks_18 = base64_encode('./osiris_shipworks_18.jpg')
var osiris_shipworks_19 = base64_encode('./osiris_shipworks_19.jpg')
var osiris_shipworks_20 = base64_encode('./osiris_shipworks_20.jpg')
var osiris_shipworks_21 = base64_encode('./osiris_shipworks_21.jpg')
var osiris_shipworks_22 = base64_encode('./osiris_shipworks_22.jpg')
var osiris_shipworks_23 = base64_encode('./osiris_shipworks_23.jpg')
var osiris_shipworks_24 = base64_encode('./osiris_shipworks_24.jpg')
var osiris_shipworks_25 = base64_encode('./osiris_shipworks_25.jpg')
var osiris_shipworks_26 = base64_encode('./osiris_shipworks_26.jpg')
var osiris_shipworks_27 = base64_encode('./osiris_shipworks_27.jpg')
var osiris_shipworks_28 = base64_encode('./osiris_shipworks_28.jpg')
var osiris_shipworks_29 = base64_encode('./osiris_shipworks_29.jpg')
var osiris_shipworks_30 = base64_encode('./osiris_shipworks_30.jpg')
var osiris_shipworks_31 = base64_encode('./osiris_shipworks_31.jpg')
var osiris_shipworks_32 = base64_encode('./osiris_shipworks_32.jpg')
var osiris_shipworks_33 = base64_encode('./osiris_shipworks_33.jpg')
var osiris_shipworks_34 = base64_encode('./osiris_shipworks_34.jpg')
var osiris_shipworks_35 = base64_encode('./osiris_shipworks_35.jpg')
var osiris_shipworks_36 = base64_encode('./osiris_shipworks_36.jpg')
var osiris_shipworks_37 = base64_encode('./osiris_shipworks_37.jpg')
var osiris_shipworks_38 = base64_encode('./osiris_shipworks_38.jpg')
var osiris_shipworks_39 = base64_encode('./osiris_shipworks_39.jpg')
var osiris_shipworks_40 = base64_encode('./osiris_shipworks_40.jpg')
var osiris_shipworks_41 = base64_encode('./osiris_shipworks_41.jpg')


//persephone

var persephone_back = base64_encode('./persephone_back.jpg')

var persephone_01 = base64_encode('./persephone_01.jpg')
var persephone_02 = base64_encode('./persephone_02.jpg')
var persephone_03 = base64_encode('./persephone_03.jpg')
var persephone_04 = base64_encode('./persephone_04.jpg')
var persephone_05 = base64_encode('./persephone_05.jpg')
var persephone_06 = base64_encode('./persephone_06.jpg')
var persephone_07 = base64_encode('./persephone_07.jpg')
var persephone_08 = base64_encode('./persephone_08.jpg')
var persephone_09 = base64_encode('./persephone_09.jpg')
var persephone_10 = base64_encode('./persephone_10.jpg')
var persephone_11 = base64_encode('./persephone_11.jpg')
var persephone_12 = base64_encode('./persephone_12.jpg')
var persephone_13 = base64_encode('./persephone_13.jpg')
var persephone_14 = base64_encode('./persephone_14.jpg')
var persephone_15 = base64_encode('./persephone_15.jpg')
var persephone_16 = base64_encode('./persephone_16.jpg')
var persephone_17 = base64_encode('./persephone_17.jpg')
var persephone_18 = base64_encode('./persephone_18.jpg')
var persephone_19 = base64_encode('./persephone_19.jpg')
var persephone_20 = base64_encode('./persephone_20.jpg')
var persephone_21 = base64_encode('./persephone_21.jpg')
var persephone_22 = base64_encode('./persephone_22.jpg')
var persephone_23 = base64_encode('./persephone_23.jpg')
var persephone_24 = base64_encode('./persephone_24.jpg')
var persephone_25 = base64_encode('./persephone_25.jpg')
var persephone_26 = base64_encode('./persephone_26.jpg')
var persephone_27 = base64_encode('./persephone_27.jpg')
var persephone_28 = base64_encode('./persephone_28.jpg')
var persephone_29 = base64_encode('./persephone_29.jpg')
var persephone_30 = base64_encode('./persephone_30.jpg')
var persephone_31 = base64_encode('./persephone_31.jpg')
var persephone_32 = base64_encode('./persephone_32.jpg')
var persephone_33 = base64_encode('./persephone_33.jpg')
var persephone_34 = base64_encode('./persephone_34.jpg')
var persephone_35 = base64_encode('./persephone_35.jpg')
var persephone_36 = base64_encode('./persephone_36.jpg')
var persephone_37 = base64_encode('./persephone_37.jpg')
var persephone_38 = base64_encode('./persephone_38.jpg')
var persephone_39 = base64_encode('./persephone_39.jpg')
var persephone_40 = base64_encode('./persephone_40.jpg')
var persephone_41 = base64_encode('./persephone_41.jpg')

//regina

var regina_back = base64_encode('./regina_back.jpg')

var regina_01 = base64_encode('./regina_01.jpg')
var regina_02 = base64_encode('./regina_02.jpg')
var regina_03 = base64_encode('./regina_03.jpg')
var regina_04 = base64_encode('./regina_04.jpg')
var regina_05 = base64_encode('./regina_05.jpg')
var regina_06 = base64_encode('./regina_06.jpg')
var regina_07 = base64_encode('./regina_07.jpg')
var regina_08 = base64_encode('./regina_08.jpg')
var regina_09 = base64_encode('./regina_09.jpg')
var regina_10 = base64_encode('./regina_10.jpg')
var regina_11 = base64_encode('./regina_11.jpg')
var regina_12 = base64_encode('./regina_12.jpg')
var regina_13 = base64_encode('./regina_13.jpg')
var regina_14 = base64_encode('./regina_14.jpg')
var regina_15 = base64_encode('./regina_15.jpg')
var regina_16 = base64_encode('./regina_16.jpg')
var regina_17 = base64_encode('./regina_17.jpg')
var regina_18 = base64_encode('./regina_18.jpg')
var regina_19 = base64_encode('./regina_19.jpg')
var regina_20 = base64_encode('./regina_20.jpg')
var regina_21 = base64_encode('./regina_21.jpg')
var regina_22 = base64_encode('./regina_22.jpg')
var regina_23 = base64_encode('./regina_23.jpg')
var regina_24 = base64_encode('./regina_24.jpg')
var regina_25 = base64_encode('./regina_25.jpg')
var regina_26 = base64_encode('./regina_26.jpg')
var regina_27 = base64_encode('./regina_27.jpg')
var regina_28 = base64_encode('./regina_28.jpg')
var regina_29 = base64_encode('./regina_29.jpg')
var regina_30 = base64_encode('./regina_30.jpg')
var regina_31 = base64_encode('./regina_31.jpg')
var regina_32 = base64_encode('./regina_32.jpg')
var regina_33 = base64_encode('./regina_33.jpg')
var regina_34 = base64_encode('./regina_34.jpg')
var regina_35 = base64_encode('./regina_35.jpg')
var regina_36 = base64_encode('./regina_36.jpg')
var regina_37 = base64_encode('./regina_37.jpg')
var regina_38 = base64_encode('./regina_38.jpg')
var regina_39 = base64_encode('./regina_39.jpg')
var regina_40 = base64_encode('./regina_40.jpg')
var regina_41 = base64_encode('./regina_41.jpg')


//silverhold_munitions

var silverhold_munitions_back = base64_encode('./silverhold_munitions_back.jpg')

var silverhold_munitions_01 = base64_encode('./silverhold_munitions_01.jpg')
var silverhold_munitions_02 = base64_encode('./silverhold_munitions_02.jpg')
var silverhold_munitions_03 = base64_encode('./silverhold_munitions_03.jpg')
var silverhold_munitions_04 = base64_encode('./silverhold_munitions_04.jpg')
var silverhold_munitions_05 = base64_encode('./silverhold_munitions_05.jpg')
var silverhold_munitions_06 = base64_encode('./silverhold_munitions_06.jpg')
var silverhold_munitions_07 = base64_encode('./silverhold_munitions_07.jpg')
var silverhold_munitions_08 = base64_encode('./silverhold_munitions_08.jpg')
var silverhold_munitions_09 = base64_encode('./silverhold_munitions_09.jpg')
var silverhold_munitions_10 = base64_encode('./silverhold_munitions_10.jpg')
var silverhold_munitions_11 = base64_encode('./silverhold_munitions_11.jpg')
var silverhold_munitions_12 = base64_encode('./silverhold_munitions_12.jpg')
var silverhold_munitions_13 = base64_encode('./silverhold_munitions_13.jpg')
var silverhold_munitions_14 = base64_encode('./silverhold_munitions_14.jpg')
var silverhold_munitions_15 = base64_encode('./silverhold_munitions_15.jpg')
var silverhold_munitions_16 = base64_encode('./silverhold_munitions_16.jpg')
var silverhold_munitions_17 = base64_encode('./silverhold_munitions_17.jpg')
var silverhold_munitions_18 = base64_encode('./silverhold_munitions_18.jpg')
var silverhold_munitions_19 = base64_encode('./silverhold_munitions_19.jpg')
var silverhold_munitions_20 = base64_encode('./silverhold_munitions_20.jpg')
var silverhold_munitions_21 = base64_encode('./silverhold_munitions_21.jpg')
var silverhold_munitions_22 = base64_encode('./silverhold_munitions_22.jpg')
var silverhold_munitions_23 = base64_encode('./silverhold_munitions_23.jpg')
var silverhold_munitions_24 = base64_encode('./silverhold_munitions_24.jpg')
var silverhold_munitions_25 = base64_encode('./silverhold_munitions_25.jpg')
var silverhold_munitions_26 = base64_encode('./silverhold_munitions_26.jpg')
var silverhold_munitions_27 = base64_encode('./silverhold_munitions_27.jpg')
var silverhold_munitions_28 = base64_encode('./silverhold_munitions_28.jpg')
var silverhold_munitions_30 = base64_encode('./silverhold_munitions_30.jpg')
var silverhold_munitions_31 = base64_encode('./silverhold_munitions_31.jpg')
var silverhold_munitions_32 = base64_encode('./silverhold_munitions_32.jpg')
var silverhold_munitions_33 = base64_encode('./silverhold_munitions_33.jpg')
var silverhold_munitions_34 = base64_encode('./silverhold_munitions_34.jpg')
var silverhold_munitions_35 = base64_encode('./silverhold_munitions_35.jpg')
var silverhold_munitions_36 = base64_encode('./silverhold_munitions_36.jpg')
var silverhold_munitions_37 = base64_encode('./silverhold_munitions_37.jpg')
var silverhold_munitions_38 = base64_encode('./silverhold_munitions_38.jpg')
var silverhold_munitions_39 = base64_encode('./silverhold_munitions_39.jpg')
var silverhold_munitions_40 = base64_encode('./silverhold_munitions_40.jpg')
var silverhold_munitions_41 = base64_encode('./silverhold_munitions_41.jpg')

//space_bazaar

var space_bazaar_back = base64_encode('./space_bazaar_back.jpg')

var space_bazaar_01 = base64_encode('./space_bazaar_01.jpg')
var space_bazaar_02 = base64_encode('./space_bazaar_02.jpg')
var space_bazaar_03 = base64_encode('./space_bazaar_03.jpg')
var space_bazaar_04 = base64_encode('./space_bazaar_04.jpg')
var space_bazaar_05 = base64_encode('./space_bazaar_05.jpg')
var space_bazaar_06 = base64_encode('./space_bazaar_06.jpg')
var space_bazaar_07 = base64_encode('./space_bazaar_07.jpg')
var space_bazaar_08 = base64_encode('./space_bazaar_08.jpg')
var space_bazaar_09 = base64_encode('./space_bazaar_09.jpg')
var space_bazaar_10 = base64_encode('./space_bazaar_10.jpg')
var space_bazaar_11 = base64_encode('./space_bazaar_11.jpg')
var space_bazaar_12 = base64_encode('./space_bazaar_12.jpg')
var space_bazaar_13 = base64_encode('./space_bazaar_13.jpg')
var space_bazaar_14 = base64_encode('./space_bazaar_14.jpg')
var space_bazaar_15 = base64_encode('./space_bazaar_15.jpg')
var space_bazaar_16 = base64_encode('./space_bazaar_16.jpg')
var space_bazaar_17 = base64_encode('./space_bazaar_17.jpg')
var space_bazaar_18 = base64_encode('./space_bazaar_18.jpg')
var space_bazaar_19 = base64_encode('./space_bazaar_19.jpg')
var space_bazaar_20 = base64_encode('./space_bazaar_20.jpg')
var space_bazaar_21 = base64_encode('./space_bazaar_21.jpg')
var space_bazaar_22 = base64_encode('./space_bazaar_22.jpg')
var space_bazaar_23 = base64_encode('./space_bazaar_23.jpg')
var space_bazaar_24 = base64_encode('./space_bazaar_24.jpg')
var space_bazaar_25 = base64_encode('./space_bazaar_25.jpg')
var space_bazaar_26 = base64_encode('./space_bazaar_26.jpg')
var space_bazaar_27 = base64_encode('./space_bazaar_27.jpg')
var space_bazaar_28 = base64_encode('./space_bazaar_28.jpg')
var space_bazaar_29 = base64_encode('./space_bazaar_29.jpg')
var space_bazaar_30 = base64_encode('./space_bazaar_30.jpg')
var space_bazaar_31 = base64_encode('./space_bazaar_31.jpg')
var space_bazaar_32 = base64_encode('./space_bazaar_32.jpg')
var space_bazaar_33 = base64_encode('./space_bazaar_33.jpg')
var space_bazaar_34 = base64_encode('./space_bazaar_34.jpg')
var space_bazaar_35 = base64_encode('./space_bazaar_35.jpg')
var space_bazaar_36 = base64_encode('./space_bazaar_36.jpg')
var space_bazaar_37 = base64_encode('./space_bazaar_37.jpg')
var space_bazaar_38 = base64_encode('./space_bazaar_38.jpg')
var space_bazaar_39 = base64_encode('./space_bazaar_39.jpg')
var space_bazaar_40 = base64_encode('./space_bazaar_40.jpg')
var space_bazaar_41 = base64_encode('./space_bazaar_41.jpg')

var empty_shop = base64_encode('./empty_shop.jpg')
var empty_card = base64_encode('./empty_card.jpg')


var crewMood = [
    //player 1
    [
        //crew
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
    ],
    //player 2
    [
        //crew
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
    ],
    //player 3
    [
        //crew
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
    ],
    //player 4
    [
        //crew
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
        [[smile_happy],["smile_happy"]],
    ]

]



var travelCards = [
    [
        coil_busted_01,
        the_big_black_01,
        minor_tech_difficulties,
        the_big_black_02,
        cruiser_patrol_01,
        the_big_black_03,
        broken_down_shuttle_01,
        persistent_pursuit_01,
        the_big_black_04,
        hell_come_at_you_sideways_01,
        persistent_pursuit_02,
        family_dinner_01,
        the_big_black_05,
        outbound_colonists_01,
        distress_signal_01,
        the_big_black_06,
        cruiser_patrol_02,
        fire_in_the_engine_room_01,
        alliance_checkpoint_01,
        customs_inspection_01,
        the_big_black_07,
        the_big_black_08,
        cruiser_patrol_03,
        the_big_black_09,
        cruiser_patrol_04,
        leave_no_ground_to_go_to_01,
        persistent_pursuit_03,
        the_big_black_10,
        alliance_entaglements_01,
        alliance_cruiser_01,
        the_big_black_11,
        the_big_black_12,
        the_big_black_13,
        badgers_boys_01,
        cruiser_patrol_05,
        the_big_black_14,
        alliance_harassment_01,
        the_big_black_15,
        the_big_black_16,
        the_big_black_17,
        passenger_unrest_01,
        the_big_black_18,
        alliance_harassment_02,
        the_big_black_19,
        customs_inspection_02,
        the_big_black_20,
        alliance_interrogation_01,
        whats_going_on_in_the_engine_room_01,
        freighter_convoy_01,
        the_big_black_21,
        regulated_salvage_01,
        enhanced_enforcement_01,
        the_big_black_22,
        the_big_black_23,
        the_big_black_24,
        the_big_black_26,
        abandoned_ship_01,
        the_big_black_27,
        persistent_pursuit_04,
        the_big_black_25

    ],
    [coil_busted_01]
];

var travelCardsBorder = [
    [
        border_a_rogue_trader_01,
border_an_adrift_transport_01,
border_bait_01,
border_dangerous_salvage_01,
border_derelict_ship_01,
border_derelict_ship_02,
border_enhanced_enforcement_01,
border_enhanced_enforcement_02,
border_family_dinner_01,
border_ghost_ship_01,
border_hallowed_out_space_liner_01,
border_hell_come_at_you_sideways_01,
border_leave_no_ground_to_go_to_01,
border_nav_hazard_asteroid_01,
border_nav_hazard_debris_field_01,
border_patiences_posse_01,
border_persistent_pursuit_01,
border_persistent_pursuit_02,
border_persistent_pursuit_03,
border_persistent_pursuit_04,
border_punctured_fuel_lines_01,
border_reaver_bait_01,
border_reaver_cutter_01,
border_reaver_cutter_02,
border_reavers_dead_ahead_01,
border_reavers_dead_ahead_02,
border_reavers_dead_ahead_03,
border_reavers_on_the_hunt_01,
border_reavers_on_the_hunt_02,
border_reavers_on_the_hunt_03,
border_reavers_on_the_hunt_04,
border_reavers_on_the_hunt_05,
border_reavers_on_the_hunt_06,
border_reavers_on_the_hunt_07,
border_reavers_on_the_hunt_08,
border_reavers_on_the_hunt_09,
border_reavers_on_the_hunt_10,
border_reavers_on_the_hunt_11,
border_reavers_on_the_hunt_12,
border_reavers_on_the_hunt_13,
border_reavers_on_the_hunt_14,
border_reavers_on_the_hunt_15,
border_ruttin_drive_cores_blown_01,
border_scrapper_ambush_01,
border_shes_tore_up_plenty_01,
border_ship_graveyard,
border_space_pox_01,
border_storms_gettin_worse_01,
border_the_big_black_01,
border_the_big_black_02,
border_the_big_black_03,
border_the_big_black_04,
border_the_big_black_05,
border_the_big_black_06,
border_the_big_black_07,
border_the_big_black_08,
border_the_big_black_09,
border_the_big_black_10,
border_the_big_black_11,
border_the_big_black_12,
border_the_big_black_13,
border_the_big_black_14,
border_the_big_black_15,
border_the_big_black_16,
border_the_big_black_17,
border_the_big_black_18,
border_the_big_black_19,
border_the_big_black_20,
border_the_big_black_21,
border_whats_that_noise_01

    ],
    [border_whats_that_noise_01]
];

var travelCardsRim = [
    [
        rim_reavers_in_orbit,
rim_storms_gettin_worse,
rim_the_big_black_01,
rim_reavers_on_the_hunt_01,
rim_reavers_on_the_hunt_02,
rim_reavers_on_the_hunt_03,
rim_reaver_cutter_01,
rim_hell_come_at_you_sideways_01,
rim_reavers_on_the_hunt_04,
rim_fly_by_night_casino_ship,
rim_objects_in_space,
rim_persistent_persuit_01,
rim_the_big_black_02,
rim_the_big_black_03,
rim_reavers_on_the_hunt_05,
rim_ravaged_transport,
rim_alliance_spy_satellite,
rim_the_big_black_04,
rim_the_big_black_05,
rim_nav_system_on_the_fritz,
rim_the_big_black_06,
rim_the_big_black_07,
rim_persistent_persuit_02,
rim_blown_out_buffer_panel,
rim_persistent_persuit_03,
rim_reavers_in_orbit_01,
rim_first_come_first_serve,
rim_reaver_booby_trap,
rim_reavers_on_the_hunt_06,
rim_reavers_in_orbit_02,
rim_enhanced_enforcement,
rim__the_big_black_08,
rim_reavers_on_the_hunt_07,
rim_damaged_spy_satellite,
rim_fuel_coupling_failure,
rim_the_big_black_09,
rim_reavers_on_the_hunt_08,
rim__the_big_black_10,
rim_orphaned_cargo_pod,
rim_leave_no_ground_to_go_to,
rim_failure_to_communicate,
rim_abandoned_tanker,
rim_the_bit_black_11,
rim_the_bit_black_12,
rim_the_bit_black_13,
rim_the_bit_black_14,
rim_the_bit_black_15,
rim_shes_tore_up_plenty,
rim_grav_well_maneuver,
rim_persistent_pursuit_03,
rim_the_big_black_16,
rim_reaver_cutter_02,
rim_the_big_black_17,
rim_horowitz_trading_scow,
rim_nishas_neer_do_wells,
rim_local_tariff_patrol,
rim_first_rule_of_flying,
rim_locking_horns_over_scraps,
rim_the_big_black_18,
rim_the_big_black_19,
rim_the_big_black

    ],
    [rim_the_big_black]
];

var bountyCards = [
    [
        bounty_alert,
bounty_bandits,
bounty_billy,
bounty_bree,
bounty_crow,
bounty_dalin,
bounty_enforcers,
bounty_grange_brothers,
bounty_helen,
bounty_interrogator,
bounty_jayne,
bounty_jesse,
bounty_river_tam,
bounty_scrappers,
bounty_simon_tam,
bounty_stitch,
bounty_the_fixer,
bounty_the_specialist,
bounty_tracey,
bounty_two_fry,
bounty_zoe

    ],
    [bounty_zoe]
];

var misbehave = [
    state_of_the_art_security_system,
    old_fashioned_shoot_out,
    a_bit_of_local_color_01,
    time_for_some_thrillin_heroics,
    keep_a_low_profile_01,
    lets_go_see_the_crappy_town,
    old_vendetta,
    kidnapped_by_hill_folk,
    a_bit_of_local_color_02,
    gun_play_01,
    the_local_law_01,
    gun_play_02,
    knife_fight,
    the_local_law_02,
    locals_in_need,
    an_unexpected_oportunity,
    a_formal_affair,
    the_sheriffs_justice,
    ambush,
    it_takes_a_womans_touch,
    we_need_a_distraction,
    alliance_patrol,
    keep_a_low_profile_02,
    alliance_patrol_01,
    a_rival_crew,
    everything_thats_not_nailed_down_01,
    kill_the_alarm_01,
    a_little_job_on_the_side,
    an_interesting_day,
    it_was_the_best_day_ever,
    kill_the_alarm_02,
    backwater_deputies,
    tight_security_01,
    reaver_raid,
    alliance_patrol_02,
    tight_security_02,
    denied_docking_rights,
    everything_thats_not_nailed_down_02,
    alliance_operatives,
    a_vote_of_no_confidence

];

var allCaptains = [
    captain_atherton,
    captain_burgess,
    captain_corbin,
    captain_jubal_early,
    captain_malcolm,
    captain_marco,
    captain_monty,
    captain_murphy,
    captain_nandi,
    captain_sash,
    captain_womack,
    captain_wright
];

var allCores = [
echelon_core_01,
radion_core_01,
radion_core_02,
radion_core_03,
radion_core_04,
tricapissen_core_01
];


var changeNameForCards = [
    [

    ],
    [coil_busted_01]
];

var shipCards =
    [
        //[possible supply [[i],[n]], [[i],[n]] ]
        [
            [
                [ [empty_card], ["Empty Slot"] ],
                [ [bonniemae], ["Bonnie Mae"] ],
                [ [bonanza], ["Bonanza"] ],
                [ [interceptor], ["Interceptor"] ],
                [ [s_s_walden], ["S.S. Walden"] ],
                [ [serenity], ["Serenity"] ],
                [ [yun_qi], ["Yun Qi"] ]
                
            ],
        ],
        //[player [total], [chosen 12boxes] ]
        //player1
        [
            //chosen for boxes (12 in total)
            [  [ [bonniemae], ["Bonnie Mae"] ],
               [ [empty], ["Passenger"] ],
               [ [empty], ["Passenger"] ]
               [ [empty], ["Passenger"] ],
               [ [empty], ["Part"] ],
               [ [empty], ["Part"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ]
            ],
            //totals
            [],
            //index
            [[1],
             [1],
             [1],
             [1],
             [1],
             [1],
             [1],
             [1],
             [1],
             [1],
             [1],
             [1]]
        ],
        
        //player2
[
            //chosen for boxes (12 in total)
            [  [ [bonniemae], ["Bonnie Mae"] ],
               [ [passenger], ["Passenger"] ],
               [ [empty], ["Passenger"] ]
               [ [empty], ["Passenger"] ],
               [ [empty], ["Part"] ],
               [ [empty], ["Part"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ]
            ],
            //totals
            [],
            //index
            [[2],
             [2],
             [2],
             [2],
             [2],
             [2],
             [2],
             [2],
             [2],
             [2],
             [2],
             [2]]
        ]
        ,//player3
        [
            //chosen for boxes (12 in total)
            [  [ [bonniemae], ["Bonnie Mae"] ],
               [ [passenger], ["Passenger"] ],
               [ [empty], ["Passenger"] ]
               [ [empty], ["Passenger"] ],
               [ [empty], ["Part"] ],
               [ [empty], ["Part"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ]
            ],
            //totals
            [],
            //index
            [[2],
             [2],
             [2],
             [2],
             [2],
             [2],
             [2],
             [2],
             [2],
             [2],
             [2],
             [2]]
        ],
        //player4
        [
            //chosen for boxes (12 in total)
            [  [ [bonniemae], ["Bonnie Mae"] ],
               [ [passenger], ["Passenger"] ],
               [ [empty], ["Passenger"] ]
               [ [empty], ["Passenger"] ],
               [ [empty], ["Part"] ],
               [ [empty], ["Part"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ]
            ],
            //totals
            [],
            //index
            [[2],
             [2],
             [2],
             [2],
             [2],
             [2],
             [2],
             [2],
             [2],
             [2],
             [2],
             [2]]
        ],
        
    ]

var shipCards2 = [4]

var playerCards = [
    // [crew],[private],[items],[ship upgr],[jobs]

    //0
    [ [    [],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]]
           
      ],
      //private
      [
          [],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]]
          
      ],
      //items
      [[],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]]
      ],
      //ship upgrade
      [
          [],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]]
           
      ],
      //jobs
      [[],
       [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]]
           
      ],
      //finished jobs
      [
          [
              []
              
          ],
          //index
          [0],
          //displayed
          [
              [[empty_card],["empty_card"],["empty_card"]]
           
          ]
      ],
      //current jobs
      [
          [],
          [empty_card],
          [empty_card],
          [empty_card]
      ],

      //core
      [
          [],
          [[radion_core_01],["original"],["core"]]
      ]
      
    ],
    //1
[ [    [],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]]
           
      ],
      //private
      [
          [],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]]
          
      ],
      //items
      [[],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]]
      ],
      //ship upgrade
      [
          [],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]]
           
      ],
      //jobs
      [[],
       [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]]
           
      ],
      //finished jobs
      [
          [
              []
              
          ],
          //index
          [0],
          //displayed
          [
              [[empty_card],["empty_card"],["empty_card"]]
           
          ]
      ],
      //current jobs
      [
          [],
          [empty_card],
          [empty_card],
          [empty_card]
      ],

      //core
      [
          [],
          [[radion_core_01],["original"],["core"]]
      ]
      
    ],
    //2
    //crew
    [ [    [],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]]
           
      ],
      //private
      [
          [],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]]
          
      ],
      //items
      [[],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]]
      ],
      //ship upgrade
      [
          [],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]]
           
      ],
      //jobs
      [[],
       [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]]
           
      ],
      //finished jobs
      [
          [
              []
              
          ],
          //index
          [0],
          //displayed
          [
              [[empty_card],["empty_card"],["empty_card"]]
           
          ]
      ],
      //current jobs
      [
          [],
          [empty_card],
          [empty_card],
          [empty_card]
      ],

      //core
      [
          [],
          [[radion_core_01],["original"],["core"]]
      ]
      
    ],
    
    //3
    [ [    [],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]]
           
      ],
      //private
      [
          [],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]]
          
      ],
      //items
      [[],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]]
      ],
      //ship upgrade
      [
          [],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]],
          [[empty_card],["empty_card"],["empty_card"]]
           
      ],
      //jobs
      [[],
       [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]]
           
      ],
      //finished jobs
      [
          [
              []
              
          ],
          //index
          [0],
          //displayed
          [
              [[empty_card],["empty_card"],["empty_card"]]
           
          ]
      ],
      //current jobs
      [
          [],
          [empty_card],
          [empty_card],
          [empty_card]
      ],

      //core
      [
          [],
          [[radion_core_01],["original"],["core"]]
      ]
      
    ],
    //shops and jobs
    
    //shops
    [
        //4 - shop 1
        //beaumonde
        [
            //draw
            [
                [[beaumonde_01],["beaumonde"],["shipUpgrade"]],
                [[beaumonde_02],["beaumonde"],["item"]],
                [[beaumonde_03],["beaumonde"],["item"]],
                [[beaumonde_04],["beaumonde"],["item"]],
                [[beaumonde_05],["beaumonde"],["item"]],
                [[beaumonde_06],["beaumonde"],["crew"]],
                [[beaumonde_07],["beaumonde"],["crew"]],
                [[beaumonde_08],["beaumonde"],["crew"]],
                [[beaumonde_09],["beaumonde"],["crew"]],
                [[beaumonde_10],["beaumonde"],["item"]],
                [[beaumonde_11],["beaumonde"],["crew"]],
                [[beaumonde_12],["beaumonde"],["item"]],
                [[beaumonde_13],["beaumonde"],["crew"]],
                [[beaumonde_14],["beaumonde"],["item"]],
                [[beaumonde_15],["beaumonde"],["crew"]],
                [[beaumonde_16],["beaumonde"],["shipUpgrade"]],
                [[beaumonde_17],["beaumonde"],["item"]],
                [[beaumonde_18],["beaumonde"],["shipUpgrade"]],
                [[beaumonde_19],["beaumonde"],["crew"]],
                [[beaumonde_20],["beaumonde"],["item"]],
                [[beaumonde_21],["beaumonde"],["item"]],
                [[beaumonde_22],["beaumonde"],["crew"]],
                [[beaumonde_23],["beaumonde"],["item"]],
                [[beaumonde_24],["beaumonde"],["item"]],
                [[beaumonde_25],["beaumonde"],["item"]],
                
            ],
            //discard 4-1
            [
                //all discards 4-1-0
                [
                    
                ],
                //chosen to display 4-0-1-1
                [
                    [empty_card]
                ],
                
                //index 4-1-2
                
                [0]
                
            ],
            //considered
            [
                [empty_card],
                [empty_card],
                [empty_card]
            ],
            //back of card
            [beaumonde_back] 
        ]
    ],
    [
        //5 - shop 2
        //meridian
        [
            //draw
            [
                [[meridian_01],["meridian"],["crew"]],
                [[meridian_02],["meridian"],["crew"]],
                [[meridian_03],["meridian"],["item"]],
                [[meridian_04],["meridian"],["shipUpgrade"]],
                [[meridian_05],["meridian"],["item"]],
                [[meridian_06],["meridian"],["shipUpgrade"]],
                [[meridian_07],["meridian"],["item"]],
                [[meridian_08],["meridian"],["core"]],
                [[meridian_09],["meridian"],["crew"]],
                [[meridian_10],["meridian"],["item"]],
                [[meridian_11],["meridian"],["item"]],
                [[meridian_12],["meridian"],["item"]],
                [[meridian_13],["meridian"],["item"]],
                [[meridian_14],["meridian"],["shipUpgrade"]],
                [[meridian_15],["meridian"],["item"]],
                [[meridian_16],["meridian"],["item"]],
                [[meridian_17],["meridian"],["crew"]],
                [[meridian_18],["meridian"],["item"]],
                [[meridian_19],["meridian"],["shipUpgrade"]],
                [[meridian_20],["meridian"],["item"]],
                [[meridian_21],["meridian"],["crew"]],
                [[meridian_22],["meridian"],["crew"]],
                [[meridian_23],["meridian"],["crew"]],
                [[meridian_24],["meridian"],["shipUpgrade"]],
                [[meridian_25],["meridian"],["shipUpgrade"]]
            ],
            //discard
            [
                //all discards 4-1-0
                [],
                //chosen to display 4-0-1-1
                [
                    [empty_card]
                ],
                
                //index 4-1-2
                
                [0]
                
            ],
            //considered
            [
                [empty_card],
                [empty_card],
                [empty_card]
            ],
            //back of card
            [meridian_back] 
        ]
    ],
    [
        //6 - shop 3
        //osiris shipworks
        
        [
            //draw
            [
                [[osiris_shipworks_01],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_02],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_03],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_04],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_05],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_06],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_07],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_08],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_09],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_10],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_11],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_12],["osiris_shipworks"],["core"]],
                [[osiris_shipworks_13],["osiris_shipworks"],["core"]],
                [[osiris_shipworks_14],["osiris_shipworks"],["core"]],
                [[osiris_shipworks_15],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_16],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_17],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_18],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_19],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_20],["osiris_shipworks"],["core"]],
                [[osiris_shipworks_21],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_22],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_23],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_24],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_25],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_26],["osiris_shipworks"],["core"]],
                [[osiris_shipworks_27],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_28],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_29],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_30],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_31],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_32],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_33],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_34],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_35],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_36],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_37],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_38],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_39],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_40],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_41],["osiris_shipworks"],["crew"]]
                
            ],
            //discard
            [
                [   
                ],
                //chosen to display 6-0-1-1
                [
                    [empty_card]
                ],
            
                //index 6-1-2
                
                [1]
                
            ],
            //considered
            [
                [empty_card],
                [empty_card],
                [empty_card]
            ],
            //back of card
            [osiris_shipworks_back] 
            
        ]    
    ],
    [
        //7 - shop 4
        //persephone
        
        [
            //draw
            [
                [[persephone_01],["persephone"],["item"]],
                [[persephone_02],["persephone"],["item"]],
                [[persephone_03],["persephone"],["item"]],
                [[persephone_04],["persephone"],["shipUpgrade"]],
                [[persephone_05],["persephone"],["shipUpgrade"]],
                [[persephone_06],["persephone"],["crew"]],
                [[persephone_07],["persephone"],["item"]],
                [[persephone_08],["persephone"],["item"]],
                [[persephone_09],["persephone"],["shipUpgrade"]],
                [[persephone_10],["persephone"],["shipUpgrade"]],
                [[persephone_11],["persephone"],["item"]],
                [[persephone_12],["persephone"],["crew"]],
                [[persephone_13],["persephone"],["item"]],
                [[persephone_14],["persephone"],["item"]],
                [[persephone_15],["persephone"],["item"]],
                [[persephone_16],["persephone"],["shipUpgrade"]],
                [[persephone_17],["persephone"],["item"]],
                [[persephone_18],["persephone"],["crew"]],
                [[persephone_19],["persephone"],["item"]],
                [[persephone_20],["persephone"],["crew"]],
                [[persephone_21],["persephone"],["crew"]],
                [[persephone_22],["persephone"],["crew"]],
                [[persephone_23],["persephone"],["item"]],
                [[persephone_24],["persephone"],["crew"]],
                [[persephone_25],["persephone"],["crew"]],
                [[persephone_26],["persephone"],["crew"]],
                [[persephone_27],["persephone"],["item"]],
                [[persephone_28],["persephone"],["crew"]],
                [[persephone_29],["persephone"],["crew"]],
                [[persephone_30],["persephone"],["crew"]],
                [[persephone_31],["persephone"],["crew"]],
                [[persephone_32],["persephone"],["crew"]],
                [[persephone_33],["persephone"],["item"]],
                [[persephone_34],["persephone"],["shipUpgrade"]],
                [[persephone_35],["persephone"],["crew"]],
                [[persephone_36],["persephone"],["item"]],
                [[persephone_37],["persephone"],["crew"]],
                [[persephone_38],["persephone"],["crew"]],
                [[persephone_39],["persephone"],["item"]],
                [[persephone_40],["persephone"],["item"]],
                [[persephone_41],["persephone"],["crew"]]
                
            ],
            //discard
            [
                [   
                ],
                //chosen to display 7-0-1-1
                [
                    [empty_card]
                ],
                
                //index 7-0-1-2
                
                [0]
                
            ],
            //considered
                [
                    [empty_card],
                    [empty_card],
                    [empty_card]
                ],
            //back of card
            [persephone_back] 
            
            
        ]
    ],
    //8 - shop 5
    //regina
    [
        [
        //draw
            [
                [[regina_01],["regina"],["item"]],
                [[regina_02],["regina"],["item"]],
                [[regina_03],["regina"],["shipUpgrade"]],
                [[regina_04],["regina"],["item"]],
                [[regina_05],["regina"],["item"]],
                [[regina_06],["regina"],["item"]],
                [[regina_07],["regina"],["shipUpgrade"]],
                [[regina_08],["regina"],["crew"]],
                [[regina_09],["regina"],["item"]],
                [[regina_10],["regina"],["item"]],
                [[regina_11],["regina"],["item"]],
                [[regina_12],["regina"],["crew"]],
                [[regina_13],["regina"],["shipUpgrade"]],
                [[regina_14],["regina"],["crew"]],
                [[regina_15],["regina"],["crew"]],
                [[regina_16],["regina"],["crew"]],
                [[regina_17],["regina"],["crew"]],
                [[regina_18],["regina"],["crew"]],
                [[regina_19],["regina"],["item"]],
                [[regina_20],["regina"],["shipUpgrade"]],
                [[regina_21],["regina"],["item"]],
                [[regina_22],["regina"],["item"]],
                [[regina_23],["regina"],["item"]],
                [[regina_24],["regina"],["shipUpgrade"]],
                [[regina_25],["regina"],["crew"]],
                [[regina_26],["regina"],["crew"]],
                [[regina_27],["regina"],["crew"]],
                [[regina_28],["regina"],["shipUpgrade"]],
                [[regina_29],["regina"],["crew"]],
                [[regina_30],["regina"],["shipUpgrade"]],
                [[regina_31],["regina"],["shipUpgrade"]],
                [[regina_32],["regina"],["crew"]],
                [[regina_33],["regina"],["shipUpgrade"]],
                [[regina_34],["regina"],["item"]],
                [[regina_35],["regina"],["crew"]],
                [[regina_36],["regina"],["crew"]],
                [[regina_37],["regina"],["crew"]],
                [[regina_38],["regina"],["shipUpgrade"]],
                [[regina_39],["regina"],["crew"]],
                [[regina_40],["regina"],["item"]],
                [[regina_41],["regina"],["crew"]]
                
            ],
            //discard
            [
                [],
            //chosen to display 8-0-1-1
                [
                    [empty_card]
                ],
                
                //index 8-0-1-2
                
                [1]

            ],
                //considered
            [
                [empty_card],
                [empty_card],
                [empty_card]
            ],
            //back of card
            [regina_back] 
            
        ]
    ],
    //9 - shop 6
    //silverhold munitions
    [
        [
            //draw
            [
                [[silverhold_munitions_01],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_02],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_03],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_04],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_05],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_06],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_07],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_08],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_09],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_10],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_11],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_12],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_13],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_14],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_15],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_16],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_17],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_18],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_19],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_20],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_21],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_22],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_23],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_24],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_25],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_26],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_27],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_28],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_30],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_31],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_32],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_33],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_34],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_35],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_36],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_37],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_38],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_39],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_40],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_41],["silverhold_munitions"],["crew"]]
            ],
            //discard
            [
                [   
                ],
                //chosen to display 9-0-1-1
                [
                    [empty_card]
                ],
                
                //index 9-0-1-2
                
                [1]
                
            ],
            //considered
            [
                [empty_card],
                [empty_card],
                [empty_card]
            ],
            //back of card
            [silverhold_munitions_back] 
            
                
        ]
    ],
    //10 - shop 7
    //space bazaar
    [
        [
            //draw
            [
                [[space_bazaar_01],["space_bazaar"],["crew"]],
                [[space_bazaar_02],["space_bazaar"],["item"]],
                [[space_bazaar_03],["space_bazaar"],["item"]],
                [[space_bazaar_04],["space_bazaar"],["crew"]],
                [[space_bazaar_05],["space_bazaar"],["item"]],
                [[space_bazaar_06],["space_bazaar"],["crew"]],
                [[space_bazaar_07],["space_bazaar"],["item"]],
                [[space_bazaar_08],["space_bazaar"],["item"]],
                [[space_bazaar_09],["space_bazaar"],["item"]],
                [[space_bazaar_10],["space_bazaar"],["shipUpgrade"]],
                [[space_bazaar_11],["space_bazaar"],["item"]],
                [[space_bazaar_12],["space_bazaar"],["crew"]],
                [[space_bazaar_13],["space_bazaar"],["item"]],
                [[space_bazaar_14],["space_bazaar"],["item"]],
                [[space_bazaar_15],["space_bazaar"],["crew"]],
                [[space_bazaar_16],["space_bazaar"],["item"]],
                [[space_bazaar_17],["space_bazaar"],["crew"]],
                [[space_bazaar_18],["space_bazaar"],["shipUpgrade"]],
                [[space_bazaar_19],["space_bazaar"],["item"]],
                [[space_bazaar_20],["space_bazaar"],["crew"]],
                [[space_bazaar_21],["space_bazaar"],["item"]],
                [[space_bazaar_22],["space_bazaar"],["item"]],
                [[space_bazaar_23],["space_bazaar"],["crew"]],
                [[space_bazaar_24],["space_bazaar"],["item"]],
                [[space_bazaar_25],["space_bazaar"],["crew"]],
                [[space_bazaar_26],["space_bazaar"],["crew"]],
                [[space_bazaar_27],["space_bazaar"],["item"]],
                [[space_bazaar_28],["space_bazaar"],["item"]],
                [[space_bazaar_29],["space_bazaar"],["item"]],
                [[space_bazaar_30],["space_bazaar"],["shipUpgrade"]],
                [[space_bazaar_31],["space_bazaar"],["item"]],
                [[space_bazaar_32],["space_bazaar"],["item"]],
                [[space_bazaar_33],["space_bazaar"],["crew"]],
                [[space_bazaar_34],["space_bazaar"],["item"]],
                [[space_bazaar_35],["space_bazaar"],["crew"]],
                [[space_bazaar_36],["space_bazaar"],["crew"]],
                [[space_bazaar_37],["space_bazaar"],["shipUpgrade"]],
                [[space_bazaar_38],["space_bazaar"],["crew"]],
                [[space_bazaar_39],["space_bazaar"],["crew"]],
                [[space_bazaar_40],["space_bazaar"],["crew"]],
                [[space_bazaar_41],["space_bazaar"],["item"]]
                
            ],
            //discard
            [
                [],
                //chosen to display 10-0-1-1
                [
                    [empty_card]
                ],
                
                //index 10-0-1-2
                
                [1]

            ],
            //considered
            [
                [empty_card],
                [empty_card],
                [empty_card]
            ],
            //back of card
            [space_bazaar_back] 
            
            
        ]
    ],
        
        //jobs
        
        //11 amnon duul
    [
        
    ],
        //12 badger
    [
        
    ],
    //13 fanty and mingo
    [
        
    ],
    
    //14 harken
    [
        
    ],
    
    //15 lord harrow
    [
        
    ],
    
    //16 magistrate higgins
    [
            
    ],
    
    //17 mr universe
    
    [
        
    ],

        //18 niska
    [
        
    ],
    
    //19 patience
    [
        
    ],
    
    //20 card backs
    
    [
        amnon_duul_solid,
        badger_solid,
        fanty_mingo_solid,
        harken_solid,
        lord_harrow_solid,
        magistrate_higgins_solid,
        niska_solid,
        patience_solid
    ],

    //21 random draw cards
    
    [
        [
            //test
            
            //draw
            [
                ["test 1"],
                ["test 2"],
                ["test 3"],
                ["test 4"],
                ["test 5"]
            ],
            //chosen
            [],
            //index
            [1],
            //discards
            []
            
        ],
        
        //alliance
        [
            //draw
            [
                
            ],
            //chosen
            [alliance_space],
            //index
            [],
            //discards
            [],
            //reshuffle
            [
                
            ],
            //card face
            []
        ],
        
        //border
        [
            //draw
            [
                
            ],
            //chosen
            [border_space],
            //index
            [],
            //discards
            [],
            //reshuffle
            [
            ],
            //card face
            []
        ],
        //rim
        [
            //draw
            [
                
            ],
            //chosen
            [rim_space],
            //index
            [],
            //discards
            [],
            //reshuffle
            [
                
            ],
            //card face
            []
        ],
        //bounty
        [
            //draw
            [
                
            ],
            //chosen
            [bounty_alert],
            //index
            [],
            //discards
            [],
            //reshuffle
            [
                
            ],
            //card face
            []
        ],
        //misbehave
        [
            //draw
            [
                
            ],
            //chosen
            [aim_to_misbehave],
            //index
            [],
            //discards
            [],
            //reshuffle
            [
                
            ],
            //card face
            []
        ]
        
    ],
    //money
    [
        [z100Credits],
        [z500Credits],
        [z1000Credits],
        [z2000Credits],
        [znegative_100],
        [znegative_500],
        [znegative_1000],
        [znegative_2000],
    ],
    //scenario
    [scenario_1]
    
];

var playerCardsData = [
    // [crew],[private],[items],[ship upgr],[jobs]

    //0
    [
        [    [],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[z_cruiser_patrol],["tinker"],["crew"]],
           [[z_engine_room],["london"],["crew"]],
           [[z_broken_shuttle],["bazaar"],["crew"]],
           [[z_cruiser_patrol],["tinker"],["crew"]],
           [[z_engine_room],["london"],["crew"]],
           [[z_engine_room],["london"],["crew"]],
           [[empty_card],["empty_card"],["empty_card"]]
           
      ], [["empty_card"], ["empty_card"]], [4]  ],
    
    //1
    [ [    [],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[z_cruiser_patrol],["tinker"],["crew"]],
           [[z_engine_room],["london"],["crew"]],
           [[z_broken_shuttle],["bazaar"],["crew"]],
           [[z_cruiser_patrol],["tinker"],["crew"]],
           [[z_engine_room],["london"],["crew"]],
           [[z_engine_room],["london"],["crew"]],
           [[empty_card],["empty_card"],["empty_card"]]
           
      ], [["empty_card"], ["empty_card"]], [4]  ],

    //2
    //crew
    [ [    [],
           [[z_minor_tech_diff],["bazaar"],["crew"]],
           [[z_cruiser_patrol],["tinker"],["crew"]],
           [[z_engine_room],["bazaar"],["crew"]],
           [[z_broken_shuttle],["bazaar"],["crew"]],
           [[z_cruiser_patrol],["tinker"],["crew"]],
           [[z_engine_room],["bazaar"],["crew"]],
           [[z_broken_shuttle],["bazaar"],["crew"]],
           [[z_cruiser_patrol],["tinker"],["crew"]],
           [[z_engine_room],["bazaar"],["crew"]],
           [[z_engine_room],["bazaar"],["crew"]],
           [[empty_card],["empty_card"],["empty_card"]]
      ],
      //private
      [
          [],
          [[z_the_big_black],["silverhold_munitions"],["crew"]],
          [[z_cruiser_patrol],["space_bazaar"],["item"]],
          [[z_cruiser_patrol],["silverhold_munitions"],["crew"]],
          [[empty_card],["empty_card"],["empty_card"]],
          [[z_cruiser_patrol],["space_bazaar"],["item"]],
          [[z_cruiser_patrol],["silverhold_munitions"],["crew"]],
          [[z_broken_shuttle],["space_bazaar"],["crew"]],
          [[z_cruiser_patrol],["silverhold_munitions"],["item"]],
          [[empty_card],["empty_card"],["empty_card"]],
          [[z_minor_tech_diff],["space_bazaar"],["item"]],
          [],
          
      ],
      //items
      [[],
       [[z_engine_room],["bazaar"],["item"]],
       [[z_minor_tech_diff],["tinker"],["item"]],
       [[z_engine_room],["london"],["item"]],
       [[z_broken_shuttle],["bazaar"],["item"]],
       [[z_minor_tech_diff],["tinker"],["item"]],
       [[z_the_big_black],["london"],["item"]],
       [[z_broken_shuttle],["bazaar"],["item"]],
       [[z_minor_tech_diff],["tinker"],["item"]],
       [[z_engine_room],["london"],["item"]],
       [[z_broken_shuttle],["bazaar"],["item"]],
       [[z_minor_tech_diff],["tinker"],["item"]],
       [[z_engine_room],["london"],["item"]]
      ],
      //ship upgrade
      [
          [],
          [[z_broken_shuttle],["bazaar"],["crew"]],
          [[z_minor_tech_diff],["tinker"],["crew"]],
          [[z_engine_room],["london"],["crew"]],
          [[z_broken_shuttle],["bazaar"],["crew"]]
      ],
      //jobs
      [[],
       [[amnon_duul_contract_jumper_01],["amnon_duul"],["job"]],
       [[amnon_duul_contract_jumper_02],["amnon_duul"],["job"]],
       [[amnon_duul_contract_jumper_03],["amnon_duul"],["job"]]
      ],
      //finished jobs
      [
          [
              [[amnon_duul_courting_aphrodite],["amnon_duul"],["job"]],
        [[amnon_duul_courting_kerry],["amnon_duul"],["job"]],
        [[amnon_duul_courting_regina],["amnon_duul"],["job"]],
        [[amnon_duul_discrete_transportation],["amnon_duul"],["job"]]
              
          ],
          //index
          [0],
          //displayed
          [
              [amnon_duul_courting_aphrodite],["amnon_duul"],["job"]
          ]
      ]
    ],
    
    //3
    [ [    [],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[empty_card],["empty_card"],["empty_card"]],
           [[z_cruiser_patrol],["tinker"],["crew"]],
           [[z_engine_room],["london"],["crew"]],
           [[z_broken_shuttle],["bazaar"],["crew"]],
           [[z_cruiser_patrol],["tinker"],["crew"]],
           [[z_engine_room],["london"],["crew"]],
           [[z_engine_room],["london"],["crew"]],
           [[empty_card],["empty_card"],["empty_card"]]
           
      ], [["empty_card"], ["empty_card"]], [4]  ],
    //shops and jobs
    
    //shops
    [
        //4 - shop 1
        //beaumonde
        [
            //draw
            [
                [[beaumonde_01],["beaumonde"],["shipUpgrade"]],
                [[beaumonde_02],["beaumonde"],["item"]],
                [[beaumonde_03],["beaumonde"],["item"]],
                [[beaumonde_04],["beaumonde"],["item"]],
                [[beaumonde_05],["beaumonde"],["item"]],
                [[beaumonde_06],["beaumonde"],["crew"]],
                [[beaumonde_07],["beaumonde"],["crew"]],
                [[beaumonde_08],["beaumonde"],["crew"]],
                [[beaumonde_09],["beaumonde"],["crew"]],
                [[beaumonde_10],["beaumonde"],["item"]],
                [[beaumonde_11],["beaumonde"],["crew"]],
                [[beaumonde_12],["beaumonde"],["item"]],
                [[beaumonde_13],["beaumonde"],["crew"]],
                [[beaumonde_14],["beaumonde"],["item"]],
                [[beaumonde_15],["beaumonde"],["crew"]],
                [[beaumonde_16],["beaumonde"],["shipUpgrade"]],
                [[beaumonde_17],["beaumonde"],["item"]],
                [[beaumonde_18],["beaumonde"],["shipUpgrade"]],
                [[beaumonde_19],["beaumonde"],["crew"]],
                [[beaumonde_20],["beaumonde"],["item"]],
                [[beaumonde_21],["beaumonde"],["item"]],
                [[beaumonde_22],["beaumonde"],["crew"]],
                [[beaumonde_23],["beaumonde"],["item"]],
                [[beaumonde_24],["beaumonde"],["item"]],
                [[beaumonde_25],["beaumonde"],["item"]],
                
            ],
            //discard 4-1
            [
                //all discards 4-1-0
                [
                    [empty_card]
                ],
                //chosen to display 4-0-1-1
                [
                    [empty_card],
                    [empty_card],
                    [empty_card]
                ],
                
                //index 4-1-2
                
                [0]
                
            ],
            //considered
            [
                [empty_card],
                [empty_card],
                [empty_card]
            ],
            //back of card
            [beaumonde_back] 
        ]
    ],
    [
        //5 - shop 2
        //meridian
        [
            //draw
            [
                [[meridian_01],["meridian"],["crew"]],
                [[meridian_02],["meridian"],["crew"]],
                [[meridian_03],["meridian"],["item"]],
                [[meridian_04],["meridian"],["shipUpgrade"]],
                [[meridian_05],["meridian"],["item"]],
                [[meridian_06],["meridian"],["shipUpgrade"]],
                [[meridian_07],["meridian"],["item"]],
                [[meridian_08],["meridian"],["core"]],
                [[meridian_09],["meridian"],["crew"]],
                [[meridian_10],["meridian"],["item"]],
                [[meridian_11],["meridian"],["item"]],
                [[meridian_12],["meridian"],["item"]],
                [[meridian_13],["meridian"],["item"]],
                [[meridian_14],["meridian"],["shipUpgrade"]],
                [[meridian_15],["meridian"],["item"]],
                [[meridian_16],["meridian"],["item"]],
                [[meridian_17],["meridian"],["crew"]],
                [[meridian_18],["meridian"],["item"]],
                [[meridian_19],["meridian"],["shipUpgrade"]],
                [[meridian_20],["meridian"],["item"]],
                [[meridian_21],["meridian"],["crew"]],
                [[meridian_22],["meridian"],["crew"]],
                [[meridian_23],["meridian"],["crew"]],
                [[meridian_24],["meridian"],["shipUpgrade"]],
                [[meridian_25],["meridian"],["shipUpgrade"]]
            ],
            //discard
            [
                //all discards 4-1-0
                [
                    [empty_card]
                ],
                //chosen to display 4-0-1-1
                [
                    [empty_card],
                    [empty_card],
                    [empty_card]
                ],
                
                //index 4-1-2
                
                [0]
                
            ],
            //considered
            [
                [empty_card],
                [empty_card],
                [empty_card]
            ],
            //back of card
            [meridian_back] 
        ]
    ],
    [
        //6 - shop 3
        //osiris shipworks
        
        [
            //draw
            [
                [[osiris_shipworks_01],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_02],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_03],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_04],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_05],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_06],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_07],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_08],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_09],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_10],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_11],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_12],["osiris_shipworks"],["core"]],
                [[osiris_shipworks_13],["osiris_shipworks"],["core"]],
                [[osiris_shipworks_14],["osiris_shipworks"],["core"]],
                [[osiris_shipworks_15],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_16],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_17],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_18],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_19],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_20],["osiris_shipworks"],["core"]],
                [[osiris_shipworks_21],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_22],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_23],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_24],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_25],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_26],["osiris_shipworks"],["core"]],
                [[osiris_shipworks_27],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_28],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_29],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_30],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_31],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_32],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_33],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_34],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_35],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_36],["osiris_shipworks"],["shipUpgrade"]],
                [[osiris_shipworks_37],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_38],["osiris_shipworks"],["item"]],
                [[osiris_shipworks_39],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_40],["osiris_shipworks"],["crew"]],
                [[osiris_shipworks_41],["osiris_shipworks"],["crew"]]
                
            ],
            //discard
            [
                [
                    [empty_card]   
                    
                ],
                //chosen to display 6-0-1-1
                [
                    [empty_card],
                    [empty_card],
                    [empty_card]
                ],
            
                //index 6-1-2
                
                [1]
                
            ],
            //considered
            [
                [empty_card],
                [empty_card],
                [empty_card]
            ],
            //back of card
            [osiris_shipworks_back] 
            
        ]    
    ],
    [
        //7 - shop 4
        //persephone
        
        [
            //draw
            [
                [[persephone_01],["persephone"],["item"]],
                [[persephone_02],["persephone"],["item"]],
                [[persephone_03],["persephone"],["item"]],
                [[persephone_04],["persephone"],["shipUpgrade"]],
                [[persephone_05],["persephone"],["shipUpgrade"]],
                [[persephone_06],["persephone"],["crew"]],
                [[persephone_07],["persephone"],["item"]],
                [[persephone_08],["persephone"],["item"]],
                [[persephone_09],["persephone"],["shipUpgrade"]],
                [[persephone_10],["persephone"],["shipUpgrade"]],
                [[persephone_11],["persephone"],["item"]],
                [[persephone_12],["persephone"],["crew"]],
                [[persephone_13],["persephone"],["item"]],
                [[persephone_14],["persephone"],["item"]],
                [[persephone_15],["persephone"],["item"]],
                [[persephone_16],["persephone"],["shipUpgrade"]],
                [[persephone_17],["persephone"],["item"]],
                [[persephone_18],["persephone"],["crew"]],
                [[persephone_19],["persephone"],["item"]],
                [[persephone_20],["persephone"],["crew"]],
                [[persephone_21],["persephone"],["crew"]],
                [[persephone_22],["persephone"],["crew"]],
                [[persephone_23],["persephone"],["item"]],
                [[persephone_24],["persephone"],["crew"]],
                [[persephone_25],["persephone"],["crew"]],
                [[persephone_26],["persephone"],["crew"]],
                [[persephone_27],["persephone"],["item"]],
                [[persephone_28],["persephone"],["crew"]],
                [[persephone_29],["persephone"],["crew"]],
                [[persephone_30],["persephone"],["crew"]],
                [[persephone_31],["persephone"],["crew"]],
                [[persephone_32],["persephone"],["crew"]],
                [[persephone_33],["persephone"],["item"]],
                [[persephone_34],["persephone"],["shipUpgrade"]],
                [[persephone_35],["persephone"],["crew"]],
                [[persephone_36],["persephone"],["item"]],
                [[persephone_37],["persephone"],["crew"]],
                [[persephone_38],["persephone"],["crew"]],
                [[persephone_39],["persephone"],["item"]],
                [[persephone_40],["persephone"],["item"]],
                [[persephone_41],["persephone"],["crew"]]
                
            ],
            //discard
            [
                [
                    [empty_card],
                    [empty_card]
                    
                ],
                //chosen to display 7-0-1-1
                [
                    [empty_card],
                    [empty_card],
                    [empty_card]
                ],
                
                //index 7-0-1-2
                
                [0]
                
            ],
            //considered
                [
                    [empty_card],
                    [empty_card],
                    [empty_card]
                ],
            //back of card
            [persephone_back] 
            
            
        ]
    ],
    //8 - shop 5
    //regina
    [
        [
        //draw
            [
                [[regina_01],["regina"],["item"]],
                [[regina_02],["regina"],["item"]],
                [[regina_03],["regina"],["shipUpgrade"]],
                [[regina_04],["regina"],["item"]],
                [[regina_05],["regina"],["item"]],
                [[regina_06],["regina"],["item"]],
                [[regina_07],["regina"],["shipUpgrade"]],
                [[regina_08],["regina"],["crew"]],
                [[regina_09],["regina"],["item"]],
                [[regina_10],["regina"],["item"]],
                [[regina_11],["regina"],["item"]],
                [[regina_12],["regina"],["crew"]],
                [[regina_13],["regina"],["shipUpgrade"]],
                [[regina_14],["regina"],["crew"]],
                [[regina_15],["regina"],["crew"]],
                [[regina_16],["regina"],["crew"]],
                [[regina_17],["regina"],["crew"]],
                [[regina_18],["regina"],["crew"]],
                [[regina_19],["regina"],["item"]],
                [[regina_20],["regina"],["shipUpgrade"]],
                [[regina_21],["regina"],["item"]],
                [[regina_22],["regina"],["item"]],
                [[regina_23],["regina"],["item"]],
                [[regina_24],["regina"],["shipUpgrade"]],
                [[regina_25],["regina"],["crew"]],
                [[regina_26],["regina"],["crew"]],
                [[regina_27],["regina"],["crew"]],
                [[regina_28],["regina"],["shipUpgrade"]],
                [[regina_29],["regina"],["crew"]],
                [[regina_30],["regina"],["shipUpgrade"]],
                [[regina_31],["regina"],["shipUpgrade"]],
                [[regina_32],["regina"],["crew"]],
                [[regina_33],["regina"],["shipUpgrade"]],
                [[regina_34],["regina"],["item"]],
                [[regina_35],["regina"],["crew"]],
                [[regina_36],["regina"],["crew"]],
                [[regina_37],["regina"],["crew"]],
                [[regina_38],["regina"],["shipUpgrade"]],
                [[regina_39],["regina"],["crew"]],
                [[regina_40],["regina"],["item"]],
                [[regina_41],["regina"],["crew"]]
                
            ],
            //discard
            [
                [
                    [empty_card],
                ],
            //chosen to display 8-0-1-1
                [
                    [empty_card],
                    [empty_card],
                    [empty_card]
                ],
                
                //index 8-0-1-2
                
                [1]

            ],
                //considered
            [
                [empty_card],
                [empty_card],
                [empty_card]
            ],
            //back of card
            [regina_back] 
            
        ]
    ],
    //9 - shop 6
    //silverhold munitions
    [
        [
            //draw
            [
                [[silverhold_munitions_01],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_02],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_03],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_04],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_05],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_06],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_07],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_08],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_09],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_10],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_11],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_12],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_13],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_14],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_15],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_16],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_17],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_18],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_19],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_20],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_21],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_22],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_23],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_24],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_25],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_26],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_27],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_28],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_30],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_31],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_32],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_33],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_34],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_35],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_36],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_37],["silverhold_munitions"],["crew"]],
                [[silverhold_munitions_38],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_39],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_40],["silverhold_munitions"],["item"]],
                [[silverhold_munitions_41],["silverhold_munitions"],["crew"]]
            ],
            //discard
            [
                [
                    [empty_card],
                    [empty_card]
                    
                ],
                //chosen to display 9-0-1-1
                [
                    [empty_card],
                    [empty_card],
                    [empty_card]
                ],
                
                //index 9-0-1-2
                
                [1]
                
            ],
            //considered
            [
                [empty_card],
                [empty_card],
                [empty_card]
            ],
            //back of card
            [silverhold_munitions_back] 
            
                
        ]
    ],
    //10 - shop 7
    //space bazaar
    [
        [
            //draw
            [
                [[space_bazaar_01],["space_bazaar"],["crew"]],
                [[space_bazaar_02],["space_bazaar"],["item"]],
                [[space_bazaar_03],["space_bazaar"],["item"]],
                [[space_bazaar_04],["space_bazaar"],["crew"]],
                [[space_bazaar_05],["space_bazaar"],["item"]],
                [[space_bazaar_06],["space_bazaar"],["crew"]],
                [[space_bazaar_07],["space_bazaar"],["item"]],
                [[space_bazaar_08],["space_bazaar"],["item"]],
                [[space_bazaar_09],["space_bazaar"],["item"]],
                [[space_bazaar_10],["space_bazaar"],["shipUpgrade"]],
                [[space_bazaar_11],["space_bazaar"],["item"]],
                [[space_bazaar_12],["space_bazaar"],["crew"]],
                [[space_bazaar_13],["space_bazaar"],["item"]],
                [[space_bazaar_14],["space_bazaar"],["item"]],
                [[space_bazaar_15],["space_bazaar"],["crew"]],
                [[space_bazaar_16],["space_bazaar"],["item"]],
                [[space_bazaar_17],["space_bazaar"],["crew"]],
                [[space_bazaar_18],["space_bazaar"],["shipUpgrade"]],
                [[space_bazaar_19],["space_bazaar"],["item"]],
                [[space_bazaar_20],["space_bazaar"],["crew"]],
                [[space_bazaar_21],["space_bazaar"],["item"]],
                [[space_bazaar_22],["space_bazaar"],["item"]],
                [[space_bazaar_23],["space_bazaar"],["crew"]],
                [[space_bazaar_24],["space_bazaar"],["item"]],
                [[space_bazaar_25],["space_bazaar"],["crew"]],
                [[space_bazaar_26],["space_bazaar"],["crew"]],
                [[space_bazaar_27],["space_bazaar"],["item"]],
                [[space_bazaar_28],["space_bazaar"],["item"]],
                [[space_bazaar_29],["space_bazaar"],["item"]],
                [[space_bazaar_30],["space_bazaar"],["shipUpgrade"]],
                [[space_bazaar_31],["space_bazaar"],["item"]],
                [[space_bazaar_32],["space_bazaar"],["item"]],
                [[space_bazaar_33],["space_bazaar"],["crew"]],
                [[space_bazaar_34],["space_bazaar"],["item"]],
                [[space_bazaar_35],["space_bazaar"],["crew"]],
                [[space_bazaar_36],["space_bazaar"],["crew"]],
                [[space_bazaar_37],["space_bazaar"],["shipUpgrade"]],
                [[space_bazaar_38],["space_bazaar"],["crew"]],
                [[space_bazaar_39],["space_bazaar"],["crew"]],
                [[space_bazaar_40],["space_bazaar"],["crew"]],
                [[space_bazaar_41],["space_bazaar"],["item"]]
                
            ],
            //discard
            [
                [
                    [empty_card],
                    [empty_card]
                ],
                //chosen to display 10-0-1-1
                [
                    [empty_card],
                    [empty_card],
                    [empty_card]
                ],
                
                //index 10-0-1-2
                
                [1]

            ],
            //considered
            [
                [empty_card],
                [empty_card],
                [empty_card]
            ],
            //back of card
            [space_bazaar_back] 
            
            
        ]
    ],
        
        //jobs
        
        //11 amnon duul
    [
        [[amnon_duul_coachworks_trade_secrets],["amnon_duul"],["job"],["amnon_duul_coachworks_trade_secrets"]],
        [[amnon_duul_contract_jumper_01],["amnon_duul"],["job"]],
        [[amnon_duul_contract_jumper_02],["amnon_duul"],["job"]],
        [[amnon_duul_contract_jumper_03],["amnon_duul"],["job"]],
        [[amnon_duul_contract_jumper_04],["amnon_duul"],["job"]],
        [[amnon_duul_contract_jumper_05],["amnon_duul"],["job"]],
        [[amnon_duul_courting_aphrodite],["amnon_duul"],["job"]],
        [[amnon_duul_courting_kerry],["amnon_duul"],["job"]],
        [[amnon_duul_courting_regina],["amnon_duul"],["job"]],
        [[amnon_duul_discrete_transportation],["amnon_duul"],["job"]],
        [[amnon_duul_feeding_alliance_fat_cats_01],["amnon_duul"],["job"]],
        [[amnon_duul_feeding_alliance_fat_cats_02],["amnon_duul"],["job"]],
        [[amnon_duul_feeding_alliance_fat_cats_03],["amnon_duul"],["job"]],
        [[amnon_duul_gun_running_special_order],["amnon_duul"],["job"]],
        [[amnon_duul_gun_running_three_hills],["amnon_duul"],["job"]],
        [[amnon_duul_gun_running],["amnon_duul"],["job"]],
        [[amnon_duul_haulin_military_scrap_01],["amnon_duul"],["job"]],
        [[amnon_duul_haulin_military_scrap_02],["amnon_duul"],["job"]],
        [[amnon_duul_heavy_loadi_01],["amnon_duul"],["job"]],
        [[amnon_duul_heavy_loadi_03],["amnon_duul"],["job"]],
        [[amnon_duul_heavy_loadi_02],["amnon_duul"],["job"]],
        [[amnon_duul_homesteader_transport_01],["amnon_duul"],["job"]],
        [[amnon_duul_homesteader_transport_02],["amnon_duul"],["job"]],
        [[amnon_duul_homesteader_transport_03],["amnon_duul"],["job"]],
        [[amnon_duul_homesteader_transport_04],["amnon_duul"],["job"]],
        [[amnon_duul_hot_cargo],["amnon_duul"],["job"]],
        [[amnon_duul_irrigation_supply_run],["amnon_duul"],["job"]],
        [[amnon_duul_miner_transport],["amnon_duul"],["job"]],
        [[amnon_duul_settler_transport],["amnon_duul"],["job"]],
        [[amnon_duul_some_discretion_is_required],["amnon_duul"],["job"]],
        [[amnon_duul_special_delivery_classified_tech],["amnon_duul"],["job"]],
        [[amnon_duul_special_delivery_secret_prototype],["amnon_duul"],["job"]],
        [[amnon_duul_stolen_goods],["amnon_duul"],["job"]],
        [[amnon_duul_war_victims_relief_fund_charter],["amnon_duul"],["job"]],
        [[amnon_duul_worker_and_equiptment_transport],["amnon_duul"],["job"]],
        [[amnon_duul_zia_com_deliveries],["amnon_duul"],["job"]],
        [[amnon_duul_zia_com_franchising],["amnon_duul"],["job"]],
        [[amnon_duul_zir_com_deliveries_priority_mail_run_01],["amnon_duul"],["job"]],
        [[amnon_duul_zir_com_deliveries_priority_mail_run_02],["amnon_duul"],["job"]],
        [[amnon_duul_zir_com_deliveries_priority_mail_run_03],["amnon_duul"],["job"]],
        [[amnon_duul_zir_com_deliveries_priority_mail_run_04],["amnon_duul"],["job"]],
        [[amnon_duul_zir_com_deliveries_priority_mail_run_05],["amnon_duul"],["job"]],
        [[amnon_duul_zir_com_deliveries_special_order],["amnon_duul"],["job"]],
        [[amnon_duul_zir_com_franchising_tanis_docks],["amnon_duul"],["job"]],
        [[amnon_duul_zir_com_franchising_urp_transport_hub],["amnon_duul"],["job"]]
        
    ],
        //12 badger
    [
        [[badger_a_stick_as_big_as_harrows],["badger"],["job"]],
        [[badger_bilking_the_yokels],["badger"],["job"]],
        [[badger_bootleggin_run_01],["badger"],["job"]],
        [[badger_bootleggin_run_02],["badger"],["job"]],
        [[badger_bootleggin_run],["badger"],["job"]],
        [[badger_breaking_into_new_markets],["badger"],["job"]],
        [[badger_casino_caper],["badger"],["job"]],
        [[badger_data_jacking],["badger"],["job"]],
        [[badger_delaying_the_dive],["badger"],["job"]],
        [[badger_diamons_the_size_of_testicles],["badger"],["job"]],
        [[badger_filling_up_their_dance_cards],["badger"],["job"]],
        [[badger_finders_keepers],["badger"],["job"]],
        [[badger_gravy_trains_acomin],["badger"],["job"]],
        [[badger_hard_goods_for_hard_times],["badger"],["job"]],
        [[badger_hump_em_let_em_twist],["badger"],["job"]],
        [[badger_i_dream_of_djinn],["badger"],["job"]],
        [[badger_ill_show_you_a_psychotic_lowlife],["badger"],["job"]],
        [[badger_keep_your_noses_clean],["badger"],["job"]],
        [[badger_kill_the_messenger],["badger"],["job"]],
        [[badger_losing_patience],["badger"],["job"]],
        [[badger_make_the_love_connection],["badger"],["job"]],
        [[badger_offload_the_motherlode],["badger"],["job"]],
        [[badger_on_the_up_and_up],["badger"],["job"]],
        [[badger_pilfer_purloin_and_plunder_01],["badger"],["job"]],
        [[badger_pilfer_purloin_and_plunder_02],["badger"],["job"]],
        [[badger_pilfer_purloin_and_plunder_03],["badger"],["job"]],
        [[badger_pilfer_purloin_and_plunder_04],["badger"],["job"]],
        [[badger_pilfer_purloin_and_plunder_05],["badger"],["job"]],
        [[badger_playing_the_middleman],["badger"],["job"]],
        [[badger_poking_holes_in_niskas_plans],["badger"],["job"]],
        [[badger_procure_the_postmans_parcel],["badger"],["job"]],
        [[badger_raising_funds_at_the_fundraiser],["badger"],["job"]],
        [[badger_robbing_peter_to_feed_paul],["badger"],["job"]],
        [[badger_send_them_to_the_ruttin_mines],["badger"],["job"]],
        [[badger_slave_wrangling],["badger"],["job"]],
        [[badger_sowing_chaos],["badger"],["job"]],
        [[badger_street_sweepers],["badger"],["job"]],
        [[badger_takes_my_breath_away],["badger"],["job"]],
        [[badger_talkin_all_respectable_like],["badger"],["job"]],
        [[badger_the_alliance_payroll_caper],["badger"],["job"]],
        [[badger_the_hospital_job],["badger"],["job"]],
        [[badger_time_for_a_fancy_shindig],["badger"],["job"]],
        [[badger_try_one_of_the_border_planets],["badger"],["job"]],
        [[badger_withdraw_from_the_first_bank],["badger"],["job"]],
        [[badger_pushing_drops],["badger"],["job"]]
    ],
    //13 fanty and mingo
    [
        [[fanty_mingo_brothers_keeper],["fanty_mingo"],["job"]],
        [[fanty_mingo_double_dealing_duo],["fanty_mingo"],["job"]],
        [[fanty_mingo_double_dip],["fanty_mingo"],["job"]],
        [[fanty_mingo_double_entenore],["fanty_mingo"],["job"]],
        [[fanty_mingo_double_fun],["fanty_mingo"],["job"]],
        [[fanty_mingo_double_jeapardy],["fanty_mingo"],["job"]],
        [[fanty_mingo_double_pleasure],["fanty_mingo"],["job"]],
        [[fanty_mingo_double_time_delivery],["fanty_mingo"],["job"]],
        [[fanty_mingo_double_wide],["fanty_mingo"],["job"]],
        [[fanty_mingo_dual_destinations],["fanty_mingo"],["job"]],
        [[fanty_mingo_dually_discreet_relocations],["fanty_mingo"],["job"]],
        [[fanty_mingo_dupicitous_dalliances],["fanty_mingo"],["job"]],
        [[fanty_mingo_horowitz_double_hook_up],["fanty_mingo"],["job"]],
        [[fanty_mingo_pair_of_jokers],["fanty_mingo"],["job"]],
        [[fanty_mingo_serving_two_masters],["fanty_mingo"],["job"]],
        [[fanty_mingo_tale_of_two_cities],["fanty_mingo"],["job"]],
        [[fanty_mingo_twin_brotherly_love],["fanty_mingo"],["job"]],
        [[fanty_mingo_two_by_two],["fanty_mingo"],["job"]],
        [[fanty_mingo_two_faced_swindlers],["fanty_mingo"],["job"]],
        [[fanty_mingo_two_for_one],["fanty_mingo"],["job"]],
        [[fanty_mingo_two_for_the_road],["fanty_mingo"],["job"]],
        [[fanty_mingo_two_heads],["fanty_mingo"],["job"]],
        [[fanty_mingo_two_mules_for_sister_constance],["fanty_mingo"],["job"]],
        [[fanty_mingo_two_towers],["fanty_mingo"],["job"]],
        [[fanty_mingo_two_ways],["fanty_mingo"],["job"]]
    ],
    
    //14 harken
    [
        [[harken_alliance_commission_01],["harken"],["job"]],
        [[harken_alliance_commission_02],["harken"],["job"]],
        [[harken_alliance_commission_03],["harken"],["job"]],
        [[harken_alliance_commission_04],["harken"],["job"]],
        [[harken_alliance_commission_05],["harken"],["job"]],
        [[harken_boots_on_the_ground],["harken"],["job"]],
        [[harken_cargo_delivery_albion],["harken"],["job"]],
        [[harken_cargo_delivery_ariel],["harken"],["job"]],
        [[harken_cargo_delivery_sihnon],["harken"],["job"]],
        [[harken_cargo_delivery_valentine],["harken"],["job"]],
        [[harken_cargo_delivery_osiris],["harken"],["job"]],
        [[harken_cortek_relay_7_restock_order],["harken"],["job"]],
        [[harken_cortek_relay_maintenance_01],["harken"],["job"]],
        [[harken_cortek_relay_maintenance_02],["harken"],["job"]],
        [[harken_cortek_relay_seven_service_call],["harken"],["job"]],
        [[harken_courier_service_meridian],["harken"],["job"]],
        [[harken_enforced_exile_constance],["harken"],["job"]],
        [[harken_enforced_exile_new_kasmir],["harken"],["job"]],
        [[harken_equipment_delivery_bellerophon],["harken"],["job"]],
        [[harken_equiptment_delivery_persephone],["harken"],["job"]],
        [[harken_force_settler_relocation],["harken"],["job"]],
        [[harken_forced_settler_relocation_01],["harken"],["job"]],
        [[harken_forced_settler_relocation_02],["harken"],["job"]],
        [[harken_forced_settler_relocation],["harken"],["job"]],
        [[harken_fuel_run_bords],["harken"],["job"]],
        [[harken_fuel_run_silverhold],["harken"],["job"]],
        [[harken_laborer_transport],["harken"],["job"]],
        [[harken_medical_emergency_transport],["harken"],["job"]],
        [[harken_relief_supplies_newhope],["harken"],["job"]],
        [[harken_relief_supplies_st_albans],["harken"],["job"]],
        [[harken_repair_team_transport],["harken"],["job"]],
        [[harken_riot_suppression_dock_worker_strike],["harken"],["job"]],
        [[harken_riot_suppression_ezra_food_shortage],["harken"],["job"]],
        [[harken_riot_suppression_rancher_protest],["harken"],["job"]],
        [[harken_scrap_hauling_aesir],["harken"],["job"]],
        [[harken_scrap_hauling_space_bazaar],["harken"],["job"]],
        [[harken_settlers_to_new_melbourne],["harken"],["job"]],
        [[harken_settlers_to_regina],["harken"],["job"]],
        [[harken_survey_team_transport],["harken"],["job"]],
        [[harken_trade_negotiations],["harken"],["job"]],
        [[harken_university_student_transport],["harken"],["job"]],
        [[harken_vacationers_to_pelorum],["harken"],["job"]],
        [[harken_vital_supplies_jubilee],["harken"],["job"]],
        [[harken_vital_supplies_kerry],["harken"],["job"]],
        [[harken_winning_hearts_and_minds],["harken"],["job"]]
        
    ],
    
    //15 lord harrow
    [
        [[lord_harrow_a_favor_for_his_lordship],["lord_harrow"],["job"]],
        [[lord_harrow_a_fight_before_your_gutted],["lord_harrow"],["job"]],
        [[lord_harrow_a_solid_deal],["lord_harrow"],["job"]],
        [[lord_harrow_another_day_older_and_deeper_in_debt],["lord_harrow"],["job"]],
        [[lord_harrow_baubles_for_the_ball],["lord_harrow"],["job"]],
        [[lord_harrow_delicate_dealings],["lord_harrow"],["job"]],
        [[lord_harrow_does_this_mean_were_in_business],["lord_harrow"],["job"]],
        [[lord_harrow_fifteen_tons],["lord_harrow"],["job"]],
        [[lord_harrow_goods_to_people_what_need_them],["lord_harrow"],["job"]],
        [[lord_harrow_guess_im_just_a_good_man],["lord_harrow"],["job"]],
        [[lord_harrow_hungry_for_beefsteak],["lord_harrow"],["job"]],
        [[lord_harrow_in_your_hold_before_midnight],["lord_harrow"],["job"]],
        [[lord_harrow_mercy_is_the_mark_of_a_great_man],["lord_harrow"],["job"]],
        [[lord_harrow_mirandas_promise],["lord_harrow"],["job"]],
        [[lord_harrow_mirandas_secret],["lord_harrow"],["job"]],
        [[lord_harrow_muss_up_the_spoiled_dandy],["lord_harrow"],["job"]],
        [[lord_harrow_my_works_illegal_but_its_honest],["lord_harrow"],["job"]],
        [[lord_harrow_offend_the_psychotic_lowlife_community],["lord_harrow"],["job"]],
        [[lord_harrow_private_reserve],["lord_harrow"],["job"]],
        [[lord_harrow_rely_on_your_winnino_personality],["lord_harrow"],["job"]],
        [[lord_harrow_run_with_rocks],["lord_harrow"],["job"]],
        [[lord_harrow_shinies_for_mudville],["lord_harrow"],["job"]],
        [[lord_harrow_sir_im_an_honest_man],["lord_harrow"],["job"]],
        [[lord_harrow_the_uroboros_run],["lord_harrow"],["job"]],
        [[lord_harrow_warricks_request],["lord_harrow"],["job"]]
        
    ],
    
    //16 magistrate higgins
    [
        [[magistrate_higgins_dirt_nap_fetch_lien_wong],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_dirt_nap_fetch_conroy],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_dirt_nap_fetch_malachi],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_dirt_nap_fetch_muldoon],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_fetch_kessler],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mud_pipeline_albion],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mud_pipeline_ariel],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mud_pipeline_bellerophon],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mud_pipeline_bernadette],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mud_pipeline_lian_jiun],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mud_pipeline_londinium],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mud_pipeline_osiris],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mud_pipeline_santo],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mud_run_aberdeen],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mud_run_deadwood],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mud_run_heaven],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mud_run_highgate],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mud_run_meridian],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mud_run_muir],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mud_run_new_nanaane],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mud_run_salisbury],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mudder_grab_hera],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mudder_grab_ithaca],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mudder_grab_shadow],["magistrate_higgins"],["job"]],
        [[magistrate_higgins_mudder_grab_three_hills],["magistrate_higgins"],["job"]]
            
    ],
    
    //17 mr universe
    
    [
        [[mr_universe_a_wee_bit_naughty_01],["mr_universe"],["job"]],
        [[mr_universe_a_wee_bit_naughty_02],["mr_universe"],["job"]],
            [[mr_universe_action_on_the_side],["mr_universe"],["job"]],
            [[mr_universe_bruises_and_contusions],["mr_universe"],["job"]],
            [[mr_universe_do_in_light],["mr_universe"],["job"]],
            [[mr_universe_do_it_off_the_grid_01],["mr_universe"],["job"]],
            [[mr_universe_do_it_off_the_grid_02],["mr_universe"],["job"]],
            [[mr_universe_grand_theft_larceny],["mr_universe"],["job"]],
            [[mr_universe_how_weird_is_that],["mr_universe"],["job"]],
            [[mr_universe_play_merry_hob],["mr_universe"],["job"]],
            [[mr_universe_right_in_my_orbit_01],["mr_universe"],["job"]],
            [[mr_universe_right_in_my_orbit_02],["mr_universe"],["job"]],
            [[mr_universe_run_the_long_con],["mr_universe"],["job"]],
            [[mr_universe_someone_is_talking_01],["mr_universe"],["job"]],
            [[mr_universe_someone_is_talking_02],["mr_universe"],["job"]],
            [[mr_universe_techno_kung_fu],["mr_universe"],["job"]],
            [[mr_universe_the_puppet_theatre],["mr_universe"],["job"]],
            [[mr_universe_the_very_best_violence],["mr_universe"],["job"]],
            [[mr_universe_to_the_eyes_and_ears],["mr_universe"],["job"]],
            [[mr_universe_two_by_two],["mr_universe"],["job"]],
            [[mr_universe_two_more_than_i_need_01],["mr_universe"],["job"]],
            [[mr_universe_two_more_than_i_need_02],["mr_universe"],["job"]],
            [[mr_universe_up_the_body_count],["mr_universe"],["job"]],
            [[mr_universe_with_your_hads_tied],["mr_universe"],["job"]],
            [[mr_universe_with_your_hands_tied],["mr_universe"],["job"]]
            
        ],

        //18 niska
        [
            [[niska_a_judge_in_niskas_pocket],["niska"],["job"]],
            [[niska_a_message_from_niska_01],["niska"],["job"]],
            [[niska_a_message_from_niska_02],["niska"],["job"]],
            [[niska_a_message_from_niska_03],["niska"],["job"]],
            [[niska_a_message_from_niska_04],["niska"],["job"]],
            [[niska_a_message_from_niska_05],["niska"],["job"]],
            [[niska_all_manner_of_unwelcomed],["niska"],["job"]],
            [[niska_corporate_espionage_target_blue_sun],["niska"],["job"]],
            [[niska_from_great_need_springs_great_profit],["niska"],["job"]],
            [[niska_heavens_rejects],["niska"],["job"]],
            [[niska_her_majesty_the_mayor_of_whitefall],["niska"],["job"]],
            [[niska_hit_the_relief_supplies_convoy],["niska"],["job"]],
            [[niska_infinitrate_the_trade_ministry],["niska"],["job"]],
            [[niska_inside_information],["niska"],["job"]],
            [[niska_its_not_business_its_personal],["niska"],["job"]],
            [[niska_jump_and_hump_the_compatition],["niska"],["job"]],
            [[niska_kidnapping_for_fun_and_profit],["niska"],["job"]],
            [[niska_meridian_credit_exchange_heist],["niska"],["job"]],
            [[niska_moon_the_alliance],["niska"],["job"]],
            [[niska_my_wifes_other_nephew_needs_a_lift],["niska"],["job"]],
            [[niska_narcotics_express],["niska"],["job"]],
            [[niska_non_profit_profiteering],["niska"],["job"]],
            [[niska_pirated_tech_delivery],["niska"],["job"]],
            [[niska_postman_only_rung_once],["niska"],["job"]],
            [[niska_protection_racket_shake_down_jubilee],["niska"],["job"]],
            [[niska_protection_racket_shake_down],["niska"],["job"]],
            [[niska_reavers_schmeavers],["niska"],["job"]],
            [[niska_repo_by_fire],["niska"],["job"]],
            [[niska_sad_little_king_of_a_hill],["niska"],["job"]],
            [[niska_sharking_the_whales],["niska"],["job"]],
            [[niska_slave_grab],["niska"],["job"]],
            [[niska_snake_oil_vaccinations],["niska"],["job"]],
            [[niska_stranger_to_a_strange_land],["niska"],["job"]],
            [[niska_taking_candy_from_babies],["niska"],["job"]],
            [[niska_the_alliance_reserve_bank_heist],["niska"],["job"]],
            [[niska_the_ariel_city_museum_art_heist],["niska"],["job"]],
            [[niska_the_big_bad_niska],["niska"],["job"]],
            [[niska_the_expandable],["niska"],["job"]],
            [[niska_the_temple_job],["niska"],["job"]],
            [[niska_the_train_job],["niska"],["job"]],
            [[niska_the_vaults_of_olympus],["niska"],["job"]],
            [[niska_this_is_why_you_cant_have_nice_things],["niska"],["job"]],
            [[niska_wet_ware_run],["niska"],["job"]],
            [[niska_whats_yours_is_mine],["niska"],["job"]],
            [[niska_where_angels_fear_to_tread],["niska"],["job"]]
            
        ],
        
        //19 patience
        [
            [[patience_aggresive_recruitment],["patience"],["job"]],
            [[patience_bank_holdup],["patience"],["job"]],
            [[patience_big_black_cattle_drive_01],["patience"],["job"]],
            [[patience_big_black_cattle_drive_02],["patience"],["job"]],
            [[patience_cattle_rustling_01],["patience"],["job"]],
            [[patience_cattle_rustling_02],["patience"],["job"]],
            [[patience_dung_run_01],["patience"],["job"]],
            [[patience_dung_run_02],["patience"],["job"]],
            [[patience_feed_for_the_herd_03],["patience"],["job"]],
            [[patience_feed_for_the_herds_01],["patience"],["job"]],
            [[patience_feed_for_the_herds_02],["patience"],["job"]],
            [[patience_foodstuffs_for_the_downtrodden],["patience"],["job"]],
            [[patience_gold_rush],["patience"],["job"]],
            [[patience_good_fences_make_good_neighbors],["patience"],["job"]],
            [[patience_good_old_fashioned_mail_robbery],["patience"],["job"]],
            [[patience_guns_for_my_gun_hands_01],["patience"],["job"]],
            [[patience_guns_for_my_gun_hands_02],["patience"],["job"]],
            [[patience_hard_rustlin_01],["patience"],["job"]],
            [[patience_hard_rustlin_02],["patience"],["job"]],
            [[patience_hard_rustlin_03],["patience"],["job"]],
            [[patience_hard_rustlin_04],["patience"],["job"]],
            [[patience_hard_rustlin_05],["patience"],["job"]],
            [[patience_henpencked_badger],["patience"],["job"]],
            [[patience_low_down_dirty_dealings],["patience"],["job"]],
            [[patience_motherlode_mine_holdup],["patience"],["job"]],
            [[patience_ranch_hand_recruitment_01],["patience"],["job"]],
            [[patience_ranch_hand_recruitment_02],["patience"],["job"]],
            [[patience_range_war_brisingamem],["patience"],["job"]],
            [[patience_range_war_cannery_sabotage],["patience"],["job"]],
            [[patience_range_war_feedlot_sabotage],["patience"],["job"]],
            [[patience_range_war_jiangyin],["patience"],["job"]],
            [[patience_range_war_three_hills],["patience"],["job"]],
            [[patience_rob_the_alliance_pay_train],["patience"],["job"]],
            [[patience_robbing_heaven],["patience"],["job"]],
            [[patience_salisbury_steaks],["patience"],["job"]],
            [[patience_sterlin_steers],["patience"],["job"]],
            [[patience_swipe_settler_rations_01],["patience"],["job"]],
            [[patience_swipe_settler_rations_02],["patience"],["job"]],
            [[patience_the_beaumonde_derby],["patience"],["job"]],
            [[patience_the_beef_must_flow_01],["patience"],["job"]],
            [[patience_the_beef_must_flow_02],["patience"],["job"]],
            [[patience_the_beef_must_flow_03],["patience"],["job"]],
            [[patience_the_beef_must_flow_04],["patience"],["job"]],
            [[patience_the_shoje_downs],["patience"],["job"]],
            [[patience_the_zephyr_stakes],["patience"],["job"]]
            
        ],

    //20 card backs
    
    [
        amnon_duul_solid,
        badger_solid,
        fanty_mingo_solid,
        harken_solid,
        lord_harrow_solid,
        magistrate_higgins_solid,
        niska_solid,
        patience_solid
    ],

    //21 random draw cards
    
    [
        [
            //test
            
            //draw
            [
                ["test 1"],
                ["test 2"],
                ["test 3"],
                ["test 4"],
                ["test 5"]
            ],
            //chosen
            [],
            //index
            [1],
            //discards
            []
            
        ],
        
        //alliance
        [
            //draw
            [
                [coil_busted_01],
                [the_big_black_01],
                [minor_tech_difficulties],
                [the_big_black_02],
                [cruiser_patrol_01],
                [the_big_black_03],
                [broken_down_shuttle_01],
                [persistent_pursuit_01],
                [the_big_black_04],
                [hell_come_at_you_sideways_01],
                [persistent_pursuit_02],
                [family_dinner_01],
                [the_big_black_05],
                [outbound_colonists_01],
                [distress_signal_01],
                [the_big_black_06],
                [cruiser_patrol_02],
                [fire_in_the_engine_room_01],
                [alliance_checkpoint_01],
                [customs_inspection_01],
                [the_big_black_07],
                [the_big_black_08],
                [cruiser_patrol_03],
                [the_big_black_09],
                [cruiser_patrol_04],
                [leave_no_ground_to_go_to_01],
                [persistent_pursuit_03],
                [the_big_black_10],
                [alliance_entaglements_01],
                [alliance_cruiser_01],
                [the_big_black_11],
                [the_big_black_12],
                [the_big_black_13],
                [badgers_boys_01],
                [cruiser_patrol_05],
                [the_big_black_14],
                [alliance_harassment_01],
                [the_big_black_15],
                [the_big_black_16],
                [the_big_black_17],
                [passenger_unrest_01],
                [the_big_black_18],
                [alliance_harassment_02],
                [the_big_black_19],
                [customs_inspection_02],
                [the_big_black_20],
                [alliance_interrogation_01],
                [whats_going_on_in_the_engine_room_01],
                [freighter_convoy_01],
                [the_big_black_21],
                [regulated_salvage_01],
                [enhanced_enforcement_01],
                [the_big_black_22],
                [the_big_black_23],
                [the_big_black_24],
                [the_big_black_26],
                [abandoned_ship_01],
                [the_big_black_27],
                [persistent_pursuit_04],
                [the_big_black_25]
            ],
            //chosen
            [alliance_space],
            //index
            [],
            //discards
            [],
            //reshuffle
            [
                [coil_busted_01],
                [the_big_black_01],
                [minor_tech_difficulties],
                [the_big_black_02],
                [cruiser_patrol_01],
                [the_big_black_03],
                [broken_down_shuttle_01],
                [persistent_pursuit_01],
                [the_big_black_04],
                [hell_come_at_you_sideways_01],
                [persistent_pursuit_02],
                [family_dinner_01],
                [the_big_black_05],
                [outbound_colonists_01],
                [distress_signal_01],
                [the_big_black_06],
                [cruiser_patrol_02],
                [fire_in_the_engine_room_01],
                [alliance_checkpoint_01],
                [customs_inspection_01],
                [the_big_black_07],
                [the_big_black_08],
                [cruiser_patrol_03],
                [the_big_black_09],
                [cruiser_patrol_04],
                [leave_no_ground_to_go_to_01],
                [persistent_pursuit_03],
                [the_big_black_10],
                [alliance_entaglements_01],
                [alliance_cruiser_01],
                [the_big_black_11],
                [the_big_black_12],
                [the_big_black_13],
                [badgers_boys_01],
                [cruiser_patrol_05],
                [the_big_black_14],
                [alliance_harassment_01],
                [the_big_black_15],
                [the_big_black_16],
                [the_big_black_17],
                [passenger_unrest_01],
                [the_big_black_18],
                [alliance_harassment_02],
                [the_big_black_19],
                [customs_inspection_02],
                [the_big_black_20],
                [alliance_interrogation_01],
                [whats_going_on_in_the_engine_room_01],
                [freighter_convoy_01],
                [the_big_black_21],
                [regulated_salvage_01],
                [enhanced_enforcement_01],
                [the_big_black_22],
                [the_big_black_23],
                [the_big_black_24],
                [the_big_black_26],
                [abandoned_ship_01],
                [the_big_black_27],
                [persistent_pursuit_04],
                [the_big_black_25]
            ],
            //card face
            [alliance_space]
        ],
        
        //border
        [
            //draw
            [
                [border_a_rogue_trader_01],
                [border_an_adrift_transport_01],
                [border_bait_01],
                [border_dangerous_salvage_01],
                [border_derelict_ship_01],
                [border_derelict_ship_02],
                [border_enhanced_enforcement_01],
                [border_enhanced_enforcement_02],
                [border_family_dinner_01],
                [border_ghost_ship_01],
                [border_hallowed_out_space_liner_01],
                [border_hell_come_at_you_sideways_01],
                [border_leave_no_ground_to_go_to_01],
                [border_nav_hazard_asteroid_01],
                [border_nav_hazard_debris_field_01],
                [border_patiences_posse_01],
                [border_persistent_pursuit_01],
                [border_persistent_pursuit_02],
                [border_persistent_pursuit_03],
                [border_persistent_pursuit_04],
                [border_punctured_fuel_lines_01],
                [border_reaver_bait_01],
                [border_reaver_cutter_01],
                [border_reaver_cutter_02],
                [border_reavers_dead_ahead_01],
                [border_reavers_dead_ahead_02],
                [border_reavers_dead_ahead_03],
                [border_reavers_on_the_hunt_01],
                [border_reavers_on_the_hunt_02],
                [border_reavers_on_the_hunt_03],
                [border_reavers_on_the_hunt_04],
                [border_reavers_on_the_hunt_05],
                [border_reavers_on_the_hunt_06],
                [border_reavers_on_the_hunt_07],
                [border_reavers_on_the_hunt_08],
                [border_reavers_on_the_hunt_09],
                [border_reavers_on_the_hunt_10],
                [border_reavers_on_the_hunt_11],
                [border_reavers_on_the_hunt_12],
                [border_reavers_on_the_hunt_13],
                [border_reavers_on_the_hunt_14],
                [border_reavers_on_the_hunt_15],
                [border_ruttin_drive_cores_blown_01],
                [border_scrapper_ambush_01],
                [border_shes_tore_up_plenty_01],
                [border_ship_graveyard],
                [border_space_pox_01],
                [border_storms_gettin_worse_01],
                [border_the_big_black_01],
                [border_the_big_black_02],
                [border_the_big_black_03],
                [border_the_big_black_04],
                [border_the_big_black_05],
                [border_the_big_black_06],
                [border_the_big_black_07],
                [border_the_big_black_08],
                [border_the_big_black_09],
                [border_the_big_black_10],
                [border_the_big_black_11],
                [border_the_big_black_12],
                [border_the_big_black_13],
                [border_the_big_black_14],
                [border_the_big_black_15],
                [border_the_big_black_16],
                [border_the_big_black_17],
                [border_the_big_black_18],
                [border_the_big_black_19],
                [border_the_big_black_20],
                [border_the_big_black_21],
                [border_whats_that_noise_01]
            ],
            //chosen
            [border_space],
            //index
            [],
            //discards
            [],
            //reshuffle
            [
                [border_a_rogue_trader_01],
                [border_an_adrift_transport_01],
                [border_bait_01],
                [border_dangerous_salvage_01],
                [border_derelict_ship_01],
                [border_derelict_ship_02],
                [border_enhanced_enforcement_01],
                [border_enhanced_enforcement_02],
                [border_family_dinner_01],
                [border_ghost_ship_01],
                [border_hallowed_out_space_liner_01],
                [border_hell_come_at_you_sideways_01],
                [border_leave_no_ground_to_go_to_01],
                [border_nav_hazard_asteroid_01],
                [border_nav_hazard_debris_field_01],
                [border_patiences_posse_01],
                [border_persistent_pursuit_01],
                [border_persistent_pursuit_02],
                [border_persistent_pursuit_03],
                [border_persistent_pursuit_04],
                [border_punctured_fuel_lines_01],
                [border_reaver_bait_01],
                [border_reaver_cutter_01],
                [border_reaver_cutter_02],
                [border_reavers_dead_ahead_01],
                [border_reavers_dead_ahead_02],
                [border_reavers_dead_ahead_03],
                [border_reavers_on_the_hunt_01],
                [border_reavers_on_the_hunt_02],
                [border_reavers_on_the_hunt_03],
                [border_reavers_on_the_hunt_04],
                [border_reavers_on_the_hunt_05],
                [border_reavers_on_the_hunt_06],
                [border_reavers_on_the_hunt_07],
                [border_reavers_on_the_hunt_08],
                [border_reavers_on_the_hunt_09],
                [border_reavers_on_the_hunt_10],
                [border_reavers_on_the_hunt_11],
                [border_reavers_on_the_hunt_12],
                [border_reavers_on_the_hunt_13],
                [border_reavers_on_the_hunt_14],
                [border_reavers_on_the_hunt_15],
                [border_ruttin_drive_cores_blown_01],
                [border_scrapper_ambush_01],
                [border_shes_tore_up_plenty_01],
                [border_ship_graveyard],
                [border_space_pox_01],
                [border_storms_gettin_worse_01],
                [border_the_big_black_01],
                [border_the_big_black_02],
                [border_the_big_black_03],
                [border_the_big_black_04],
                [border_the_big_black_05],
                [border_the_big_black_06],
                [border_the_big_black_07],
                [border_the_big_black_08],
                [border_the_big_black_09],
                [border_the_big_black_10],
                [border_the_big_black_11],
                [border_the_big_black_12],
                [border_the_big_black_13],
                [border_the_big_black_14],
                [border_the_big_black_15],
                [border_the_big_black_16],
                [border_the_big_black_17],
                [border_the_big_black_18],
                [border_the_big_black_19],
                [border_the_big_black_20],
                [border_the_big_black_21],
                [border_whats_that_noise_01]
            ],
            //card face
            [border_space]
        ],
        //rim
        [
            //draw
            [
                [rim_reavers_in_orbit],
                [rim_storms_gettin_worse],
                [rim_the_big_black_01],
                [rim_reavers_on_the_hunt_01],
                [rim_reavers_on_the_hunt_02],
                [rim_reavers_on_the_hunt_03],
                [rim_reaver_cutter_01],
                [rim_hell_come_at_you_sideways_01],
                [rim_reavers_on_the_hunt_04],
                [rim_fly_by_night_casino_ship],
                [rim_objects_in_space],
                [rim_persistent_persuit_01],
                [rim_the_big_black_02],
                [rim_the_big_black_03],
                [rim_reavers_on_the_hunt_05],
                [rim_ravaged_transport],
                [rim_alliance_spy_satellite],
                [rim_the_big_black_04],
                [rim_the_big_black_05],
                [rim_nav_system_on_the_fritz],
                [rim_the_big_black_06],
                [rim_the_big_black_07],
                [rim_persistent_persuit_02],
                [rim_blown_out_buffer_panel],
                [rim_persistent_persuit_03],
                [rim_reavers_in_orbit_01],
                [rim_first_come_first_serve],
                [rim_reaver_booby_trap],
                [rim_reavers_on_the_hunt_06],
                [rim_reavers_in_orbit_02],
                [rim_enhanced_enforcement],
                [rim__the_big_black_08],
                [rim_reavers_on_the_hunt_07],
                [rim_damaged_spy_satellite],
                [rim_fuel_coupling_failure],
                [rim_the_big_black_09],
                [rim_reavers_on_the_hunt_08],
                [rim__the_big_black_10],
                [rim_orphaned_cargo_pod],
                [rim_leave_no_ground_to_go_to],
                [rim_failure_to_communicate],
                [rim_abandoned_tanker],
                [rim_the_bit_black_11],
                [rim_the_bit_black_12],
                [rim_the_bit_black_13],
                [rim_the_bit_black_14],
                [rim_the_bit_black_15],
                [rim_shes_tore_up_plenty],
                [rim_grav_well_maneuver],
                [rim_persistent_pursuit_03],
                [rim_the_big_black_16],
                [rim_reaver_cutter_02],
                [rim_the_big_black_17],
                [rim_horowitz_trading_scow],
                [rim_nishas_neer_do_wells],
                [rim_local_tariff_patrol],
                [rim_first_rule_of_flying],
                [rim_locking_horns_over_scraps],
                [rim_the_big_black_18],
                [rim_the_big_black_19],
                [rim_the_big_black]
            ],
            //chosen
            [rim_space],
            //index
            [],
            //discards
            [],
            //reshuffle
            [
                [rim_reavers_in_orbit],
                [rim_storms_gettin_worse],
                [rim_the_big_black_01],
                [rim_reavers_on_the_hunt_01],
                [rim_reavers_on_the_hunt_02],
                [rim_reavers_on_the_hunt_03],
                [rim_reaver_cutter_01],
                [rim_hell_come_at_you_sideways_01],
                [rim_reavers_on_the_hunt_04],
                [rim_fly_by_night_casino_ship],
                [rim_objects_in_space],
                [rim_persistent_persuit_01],
                [rim_the_big_black_02],
                [rim_the_big_black_03],
                [rim_reavers_on_the_hunt_05],
                [rim_ravaged_transport],
                [rim_alliance_spy_satellite],
                [rim_the_big_black_04],
                [rim_the_big_black_05],
                [rim_nav_system_on_the_fritz],
                [rim_the_big_black_06],
                [rim_the_big_black_07],
                [rim_persistent_persuit_02],
                [rim_blown_out_buffer_panel],
                [rim_persistent_persuit_03],
                [rim_reavers_in_orbit_01],
                [rim_first_come_first_serve],
                [rim_reaver_booby_trap],
                [rim_reavers_on_the_hunt_06],
                [rim_reavers_in_orbit_02],
                [rim_enhanced_enforcement],
                [rim__the_big_black_08],
                [rim_reavers_on_the_hunt_07],
                [rim_damaged_spy_satellite],
                [rim_fuel_coupling_failure],
                [rim_the_big_black_09],
                [rim_reavers_on_the_hunt_08],
                [rim__the_big_black_10],
                [rim_orphaned_cargo_pod],
                [rim_leave_no_ground_to_go_to],
                [rim_failure_to_communicate],
                [rim_abandoned_tanker],
                [rim_the_bit_black_11],
                [rim_the_bit_black_12],
                [rim_the_bit_black_13],
                [rim_the_bit_black_14],
                [rim_the_bit_black_15],
                [rim_shes_tore_up_plenty],
                [rim_grav_well_maneuver],
                [rim_persistent_pursuit_03],
                [rim_the_big_black_16],
                [rim_reaver_cutter_02],
                [rim_the_big_black_17],
                [rim_horowitz_trading_scow],
                [rim_nishas_neer_do_wells],
                [rim_local_tariff_patrol],
                [rim_first_rule_of_flying],
                [rim_locking_horns_over_scraps],
                [rim_the_big_black_18],
                [rim_the_big_black_19],
                [rim_the_big_black]
            ],
            //card face
            [rim_space]
        ],
        //bounty
        [
            //draw
            [
                [bounty_alert],
                [bounty_bandits],
                [bounty_billy],
                [bounty_bree],
                [bounty_crow],
                [bounty_dalin],
                [bounty_enforcers],
                [bounty_grange_brothers],
                [bounty_helen],
                [bounty_interrogator],
                [bounty_jayne],
                [bounty_jesse],
                [bounty_river_tam],
                [bounty_scrappers],
                [bounty_simon_tam],
                [bounty_stitch],
                [bounty_the_fixer],
                [bounty_the_specialist],
                [bounty_tracey],
                [bounty_two_fry],
                [bounty_zoe]
            ],
            //chosen
            [bounty_alert],
            //index
            [],
            //discards
            [],
            //reshuffle
            [
                [bounty_alert],
                [bounty_bandits],
                [bounty_billy],
                [bounty_bree],
                [bounty_crow],
                [bounty_dalin],
                [bounty_enforcers],
                [bounty_grange_brothers],
                [bounty_helen],
                [bounty_interrogator],
                [bounty_jayne],
                [bounty_jesse],
                [bounty_river_tam],
                [bounty_scrappers],
                [bounty_simon_tam],
                [bounty_stitch],
                [bounty_the_fixer],
                [bounty_the_specialist],
                [bounty_tracey],
                [bounty_two_fry],
                [bounty_zoe]
            ],
            //card face
            [bounty_alert]
        ],
        //misbehave
        [
            //draw
            [
                [state_of_the_art_security_system],
                [old_fashioned_shoot_out],
                [a_bit_of_local_color_01],
                [time_for_some_thrillin_heroics],
                [keep_a_low_profile_01],
                [lets_go_see_the_crappy_town],
                [old_vendetta],
                [kidnapped_by_hill_folk],
                [a_bit_of_local_color_02],
                [gun_play_01],
                [the_local_law_01],
                [gun_play_02],
                [knife_fight],
                [the_local_law_02],
                [locals_in_need],
                [an_unexpected_oportunity],
                [a_formal_affair],
                [the_sheriffs_justice],
                [ambush],
                [it_takes_a_womans_touch],
                [we_need_a_distraction],
                [alliance_patrol],
                [keep_a_low_profile_02],
                [alliance_patrol_01],
                [a_rival_crew],
                [everything_thats_not_nailed_down_01],
                [kill_the_alarm_01],
                [a_little_job_on_the_side],
                [an_interesting_day],
                [it_was_the_best_day_ever],
                [kill_the_alarm_02],
                [backwater_deputies],
                [tight_security_01],
                [reaver_raid],
                [alliance_patrol_02],
                [tight_security_02],
                [denied_docking_rights],
                [everything_thats_not_nailed_down_02],
                [alliance_operatives],
                [a_vote_of_no_confidence]
            ],
            //chosen
            [aim_to_misbehave],
            //index
            [],
            //discards
            [],
            //reshuffle
            [
                [state_of_the_art_security_system],
                [old_fashioned_shoot_out],
                [a_bit_of_local_color_01],
                [time_for_some_thrillin_heroics],
                [keep_a_low_profile_01],
                [lets_go_see_the_crappy_town],
                [old_vendetta],
                [kidnapped_by_hill_folk],
                [a_bit_of_local_color_02],
                [gun_play_01],
                [the_local_law_01],
                [gun_play_02],
                [knife_fight],
                [the_local_law_02],
                [locals_in_need],
                [an_unexpected_oportunity],
                [a_formal_affair],
                [the_sheriffs_justice],
                [ambush],
                [it_takes_a_womans_touch],
                [we_need_a_distraction],
                [alliance_patrol],
                [keep_a_low_profile_02],
                [alliance_patrol_01],
                [a_rival_crew],
                [everything_thats_not_nailed_down_01],
                [kill_the_alarm_01],
                [a_little_job_on_the_side],
                [an_interesting_day],
                [it_was_the_best_day_ever],
                [kill_the_alarm_02],
                [backwater_deputies],
                [tight_security_01],
                [reaver_raid],
                [alliance_patrol_02],
                [tight_security_02],
                [denied_docking_rights],
                [everything_thats_not_nailed_down_02],
                [alliance_operatives],
                [a_vote_of_no_confidence]
            ],
            //card face
            [aim_to_misbehave]
        ]
        
    ],

    //22 money
    [],

    //23 scenarios
    []
    
]

var possibleScenario = [

    [
        [scenario_1],
        [scenario_2],
        [scenario_3],
        [scenario_4],
        [scenario_5],
        [scenario_6],
        [scenario_7],
        [scenario_8],
        [scenario_9],
        [scenario_10],
        [scenario_11],
        [scenario_12],
        [scenario_13],
        [scenario_14],
        [scenario_15],
        [scenario_16],
        [scenario_17],
        [scenario_18],
        [scenario_19],
        [scenario_20]
    ],
    //index
    [0]

]

var possibleCaptains = [
    [[captain_atherton], ["captain"]],
    [[captain_burgess], ["captain"]],
    [[captain_corbin], ["captain"]],
    [[captain_jubal_early], ["captain"]],
    [[captain_malcolm], ["captain"]],
    [[captain_marco], ["captain"]],
    [[captain_monty], ["captain"]],
    [[captain_murphy], ["captain"]],
    [[captain_nandi], ["captain"]],
    [[captain_sash], ["captain"]],
    [[captain_womack], ["captain"]],
    [[captain_wright], ["captain"]]
]

var shipInv =
    [
        //[possible supply [[i],[n]], [[i],[n]] ]
        [
            [
                [ [empty] ],
                [ [cargo], ["Cargo"] ],
                [ [contraband], ["Contraband"] ],
                [ [one_fuel], ["Fuel"] ],
                [ [two_fuel], ["Fuel"], ["Fuel"] ],
                [ [one_part], ["Part"] ],
                [ [two_part], ["Part"], ["Part"] ],
                [ [passenger], ["Passenger"] ]
            ],
        ],
        //[player [total], [chosen 12boxes] ]
        //player1
        [
            //chosen for boxes (12 in total)
            [  [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ]
            ],
            //totals
            [],
            //index
            []
        ],
        
        //player2
        [  
            //chosen for boxes (12 in total)
            [  [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ]
               ],
            //totals
            [],
            //index
               [0]
            
        ],//player3
        [  
            //chosen for boxes (12 in total)
            [  [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ]
            ],
            //totals
            [],
               //index
            [0]
        ],
        //player4
        [  
            //chosen for boxes (12 in total)
            [  [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ],
               [ [empty], ["Empty Slot"] ]
            ],
            //totals
            [],
               //index
            [0]
        ]
    ]

var drawRandomCards =
    [
    [
        //test
        
            //draw
            [
                ["test 1"],
                ["test 2"],
                ["test 3"],
                ["test 4"],
                ["test 5"]
            ],
            //chosen
            [],
            //index
            [1],
            //discards
            []
        
    ],
        
    //alliance
    [
        //draw
        [
            [coil_busted_01],
            [the_big_black_01],
            [minor_tech_difficulties],
            [the_big_black_02],
            [cruiser_patrol_01],
            [the_big_black_03],
            [broken_down_shuttle_01],
            [persistent_pursuit_01],
            [the_big_black_04],
            [hell_come_at_you_sideways_01],
            [persistent_pursuit_02],
            [family_dinner_01],
            [the_big_black_05],
            [outbound_colonists_01],
            [distress_signal_01],
            [the_big_black_06],
            [cruiser_patrol_02],
            [fire_in_the_engine_room_01],
            [alliance_checkpoint_01],
            [customs_inspection_01],
            [the_big_black_07],
            [the_big_black_08],
            [cruiser_patrol_03],
            [the_big_black_09],
            [cruiser_patrol_04],
            [leave_no_ground_to_go_to_01],
            [persistent_pursuit_03],
            [the_big_black_10],
            [alliance_entaglements_01],
            [alliance_cruiser_01],
            [the_big_black_11],
            [the_big_black_12],
            [the_big_black_13],
            [badgers_boys_01],
            [cruiser_patrol_05],
            [the_big_black_14],
            [alliance_harassment_01],
            [the_big_black_15],
            [the_big_black_16],
            [the_big_black_17],
            [passenger_unrest_01],
            [the_big_black_18],
            [alliance_harassment_02],
            [the_big_black_19],
            [customs_inspection_02],
            [the_big_black_20],
            [alliance_interrogation_01],
            [whats_going_on_in_the_engine_room_01],
            [freighter_convoy_01],
            [the_big_black_21],
            [regulated_salvage_01],
            [enhanced_enforcement_01],
            [the_big_black_22],
            [the_big_black_23],
            [the_big_black_24],
            [the_big_black_26],
            [abandoned_ship_01],
            [the_big_black_27],
            [persistent_pursuit_04],
            [the_big_black_25]
        ],
        //chosen
        [alliance_space],
        //index
        [],
        //discards
        []
    ],
    
    //border
    [
        //draw
        [
            [border_a_rogue_trader_01],
            [border_an_adrift_transport_01],
            [border_bait_01],
            [border_dangerous_salvage_01],
            [border_derelict_ship_01],
            [border_derelict_ship_02],
            [border_enhanced_enforcement_01],
            [border_enhanced_enforcement_02],
            [border_family_dinner_01],
            [border_ghost_ship_01],
            [border_hallowed_out_space_liner_01],
            [border_hell_come_at_you_sideways_01],
            [border_leave_no_ground_to_go_to_01],
            [border_nav_hazard_asteroid_01],
            [border_nav_hazard_debris_field_01],
            [border_patiences_posse_01],
            [border_persistent_pursuit_01],
            [border_persistent_pursuit_02],
            [border_persistent_pursuit_03],
            [border_persistent_pursuit_04],
            [border_punctured_fuel_lines_01],
            [border_reaver_bait_01],
            [border_reaver_cutter_01],
            [border_reaver_cutter_02],
            [border_reavers_dead_ahead_01],
            [border_reavers_dead_ahead_02],
            [border_reavers_dead_ahead_03],
            [border_reavers_on_the_hunt_01],
            [border_reavers_on_the_hunt_02],
            [border_reavers_on_the_hunt_03],
            [border_reavers_on_the_hunt_04],
            [border_reavers_on_the_hunt_05],
            [border_reavers_on_the_hunt_06],
            [border_reavers_on_the_hunt_07],
            [border_reavers_on_the_hunt_08],
            [border_reavers_on_the_hunt_09],
            [border_reavers_on_the_hunt_10],
            [border_reavers_on_the_hunt_11],
            [border_reavers_on_the_hunt_12],
            [border_reavers_on_the_hunt_13],
            [border_reavers_on_the_hunt_14],
            [border_reavers_on_the_hunt_15],
            [border_ruttin_drive_cores_blown_01],
            [border_scrapper_ambush_01],
            [border_shes_tore_up_plenty_01],
            [border_ship_graveyard],
            [border_space_pox_01],
            [border_storms_gettin_worse_01],
            [border_the_big_black_01],
            [border_the_big_black_02],
            [border_the_big_black_03],
            [border_the_big_black_04],
            [border_the_big_black_05],
            [border_the_big_black_06],
            [border_the_big_black_07],
            [border_the_big_black_08],
            [border_the_big_black_09],
            [border_the_big_black_10],
            [border_the_big_black_11],
            [border_the_big_black_12],
            [border_the_big_black_13],
            [border_the_big_black_14],
            [border_the_big_black_15],
            [border_the_big_black_16],
            [border_the_big_black_17],
            [border_the_big_black_18],
            [border_the_big_black_19],
            [border_the_big_black_20],
            [border_the_big_black_21],
            [border_whats_that_noise_01]
        ],
        //chosen
        [border_space],
        //index
        [],
        //discards
        []
    ]
    //rim
    [
        //draw
        [
            [rim_reavers_in_orbit],
            [rim_storms_gettin_worse],
            [rim_the_big_black_01],
            [rim_reavers_on_the_hunt_01],
            [rim_reavers_on_the_hunt_02],
            [rim_reavers_on_the_hunt_03],
            [rim_reaver_cutter_01],
            [rim_hell_come_at_you_sideways_01],
            [rim_reavers_on_the_hunt_04],
            [rim_fly_by_night_casino_ship],
            [rim_objects_in_space],
            [rim_persistent_persuit_01],
            [rim_the_big_black_02],
            [rim_the_big_black_03],
            [rim_reavers_on_the_hunt_05],
            [rim_ravaged_transport],
            [rim_alliance_spy_satellite],
            [rim_the_big_black_04],
            [rim_the_big_black_05],
            [rim_nav_system_on_the_fritz],
            [rim_the_big_black_06],
            [rim_the_big_black_07],
            [rim_persistent_persuit_02],
            [rim_blown_out_buffer_panel],
            [rim_persistent_persuit_03],
            [rim_reavers_in_orbit_01],
            [rim_first_come_first_serve],
            [rim_reaver_booby_trap],
            [rim_reavers_on_the_hunt_06],
            [rim_reavers_in_orbit_02],
            [rim_enhanced_enforcement],
            [rim__the_big_black_08],
            [rim_reavers_on_the_hunt_07],
            [rim_damaged_spy_satellite],
            [rim_fuel_coupling_failure],
            [rim_the_big_black_09],
            [rim_reavers_on_the_hunt_08],
            [rim__the_big_black_10],
            [rim_orphaned_cargo_pod],
            [rim_leave_no_ground_to_go_to],
            [rim_failure_to_communicate],
            [rim_abandoned_tanker],
            [rim_the_bit_black_11],
            [rim_the_bit_black_12],
            [rim_the_bit_black_13],
            [rim_the_bit_black_14],
            [rim_the_bit_black_15],
            [rim_shes_tore_up_plenty],
            [rim_grav_well_maneuver],
            [rim_persistent_pursuit_03],
            [rim_the_big_black_16],
            [rim_reaver_cutter_02],
            [rim_the_big_black_17],
            [rim_horowitz_trading_scow],
            [rim_nishas_neer_do_wells],
            [rim_local_tariff_patrol],
            [rim_first_rule_of_flying],
            [rim_locking_horns_over_scraps],
            [rim_the_big_black_18],
            [rim_the_big_black_19],
            [rim_the_big_black]
        ],
        //chosen
        [rim_space],
        //index
        [],
        //discards
        []
    ],
    //bounty
    [
        //draw
        [
            [bounty_alert],
            [bounty_bandits],
            [bounty_billy],
            [bounty_bree],
            [bounty_crow],
            [bounty_dalin],
            [bounty_enforcers],
            [bounty_grange_brothers],
            [bounty_helen],
            [bounty_interrogator],
            [bounty_jayne],
            [bounty_jesse],
            [bounty_river_tam],
            [bounty_scrappers],
            [bounty_simon_tam],
            [bounty_stitch],
            [bounty_the_fixer],
            [bounty_the_specialist],
            [bounty_tracey],
            [bounty_two_fry],
            [bounty_zoe]
        ],
        //chosen
        [bounty_alert],
        //index
        [],
        //discards
        []
    ],
    //misbehave
    [
        //draw
        [
            [state_of_the_art_security_system],
            [old_fashioned_shoot_out],
            [a_bit_of_local_color_01],
            [time_for_some_thrillin_heroics],
            [keep_a_low_profile_01],
            [lets_go_see_the_crappy_town],
            [old_vendetta],
            [kidnapped_by_hill_folk],
            [a_bit_of_local_color_02],
            [gun_play_01],
            [the_local_law_01],
            [gun_play_02],
            [knife_fight],
            [the_local_law_02],
            [locals_in_need],
            [an_unexpected_oportunity],
            [a_formal_affair],
            [the_sheriffs_justice],
            [ambush],
            [it_takes_a_womans_touch],
            [we_need_a_distraction],
            [alliance_patrol],
            [keep_a_low_profile_02],
            [alliance_patrol_01],
            [a_rival_crew],
            [everything_thats_not_nailed_down_01],
            [kill_the_alarm_01],
            [a_little_job_on_the_side],
            [an_interesting_day],
            [it_was_the_best_day_ever],
            [kill_the_alarm_02],
            [backwater_deputies],
            [tight_security_01],
            [reaver_raid],
            [alliance_patrol_02],
            [tight_security_02],
            [denied_docking_rights],
            [everything_thats_not_nailed_down_02],
            [alliance_operatives],
            [a_vote_of_no_confidence]
        ],
        //chosen
        [aim_to_misbehave],
        //index
        [],
        //discards
        []
    ]
        
]

var images = [
    z_broken_shuttle,
    z_cruiser_patrol,
    z_engine_room,
    z_minor_tech_diff,
    z_the_big_black
];

var chosenCard = [z_the_big_black];

var wallet1 = 300;

var wallet2 = 100;

var wallet3 = 100;

var wallet4 = 100;

var warrant1 = 0;

var warrant2 = 0;

var warrant3 = 0;

var warrant4 = 0;

var goalTokens1 = 0;

var goalTokens2 = 0;

var goalTokens3 = 0;

var goalTokens4 = 0;


var p1Inv = playerCards[0][0];
var p2Inv = playerCards[1][0];
var p3Inv = playerCards[2][0];
var p4Inv = playerCards[3][0];
var p1Chosen = playerCards[0][1];
var p2Chosen = playerCards[1][1];
var p3Chosen = playerCards[2][1];
var p4Chosen = playerCards[3][1];
var p1Index = playerCards[0][2];
var p2Index = playerCards[1][2];
var p3Index = playerCards[2][2];
var p4Index = playerCards[3][2];

function c(player, crew) {
    crewMood[player][crew] =
        [[smile_sad],["smile_sad"]];
}

function b(player, crew) {
    console.log("began changing mood function");
    if (crewMood[player][crew][0] == smile_happy) {
        console.log("began as happy");
        crewMood[player][crew] = [[smile_sad],["smile_sad"]];
        console.log(crewMood[player][crew][1]);
    }
    else if (crewMood[player][crew][0] == smile_sad) {
        console.log("began as sad");
        
        crewMood[player][crew] =
            [[smile_happy],["smile_happy"]];
        console.log(crewMood[player][crew][1])
    }
                console.log("ended changing mood");
                console.log(crewMood[player][crew][1]);
};

function discardShopConsidered1(shop) {
    playerCards[shop][0][1][0].push(playerCards[shop][0][2][0]);
    console.log("discards length =", playerCards[shop][0][1][0].length);
    
    playerCards[shop][0][1][1] = playerCards[shop][0][2][0]
    playerCards[shop][0][2][0] = [empty_card];
    //console.log("considered cards =", playerCards[shop][0][2]);
    //console.log("deck cards =", playerCards[shop][0][0]);
}

function drawShopConsidered(shop, player, considered) {
    //giveReplaceEmptyShop(2,0,shop,0)
    console.log("player =", player);

    if (playerCards[shop][0][2][considered] != empty_card) {
        console.log("considered card is not empty")
        if (playerCards[player][1][1][0] == empty_card) {
            playerCards[player][1][1] = playerCards[shop][0][2][considered]
            playerCards[shop][0][2][considered] = [empty_card]
            console.log("changed elm 1")
        }
        else if (playerCards[player][1][2][0] == empty_card) {
            playerCards[player][1][2] = playerCards[shop][0][2][considered]
            playerCards[shop][0][2][considered] = [empty_card]
            console.log("changed elm 2")
        }
        else if (playerCards[player][1][3][0] == empty_card) {
            playerCards[player][1][3] = playerCards[shop][0][2][considered]
            playerCards[shop][0][2][considered] = [empty_card]
            console.log("changed elm 3")
        }
        else if (playerCards[player][1][4][0] == empty_card) {
            playerCards[player][1][4] = playerCards[shop][0][2][considered]
            playerCards[shop][0][2][considered] = [empty_card]
            console.log("changed elm 4")
        }
        else if (playerCards[player][1][5][0] == empty_card) {
            playerCards[player][1][5] = playerCards[shop][0][2][considered]
            playerCards[shop][0][2][considered] = [empty_card]
            console.log("changed elm 5")
        }
        else if (playerCards[player][1][6][0] == empty_card) {
            playerCards[player][1][6] = playerCards[shop][0][2][considered]
            playerCards[shop][0][2][considered] = [empty_card]
            console.log("changed elm 6")
        }
        else if (playerCards[player][1][7][0] == empty_card) {
            playerCards[player][1][7] = playerCards[shop][0][2][considered]
            playerCards[shop][0][2][considered] = [empty_card]
            console.log("changed elm 7")
        }
        else if (playerCards[player][1][8][0] == empty_card) {
            playerCards[player][1][8] = playerCards[shop][0][2][considered]
            playerCards[shop][0][2][considered] = [empty_card]
            console.log("changed elm 8")
        }
        else if (playerCards[player][1][9][0] == empty_card) {
            playerCards[player][1][9] = playerCards[shop][0][2][considered]
            playerCards[shop][0][2][considered] = [empty_card]
            console.log("changed elm 9")
        }
        else if (playerCards[player][1][10][0] == empty_card) {
            playerCards[player][1][10] = playerCards[shop][0][2][considered]
            playerCards[shop][0][2][considered] = [empty_card]
            console.log("changed elm 10")
        }
        console.log("failed finding an empty spot");
    }
    console.log("tried to draw card")
}

function giveReplaceEmptyShop(player, deckSection, givingPlayer, givingCard) {
    
    if (playerCards[player][deckSection][1][1] == "empty_card") {
        const x = playerCards[player][deckSection][1]
        playerCards[player][deckSection][1] =
            playerCards[givingPlayer][0][2][givingCard]
        playerCards[givingPlayer][0][2][givingCard] = empty_card;
        console.log("removed elm 1");
    }
    else if (playerCards[player][deckSection][2][1] == "empty_card") {
        const x = playerCards[player][deckSection][2]
        playerCards[player][deckSection][2] =
            playerCards[givingPlayer][0][2][givingCard]
        playerCards[givingPlayer][0][2][givingCard] = empty_card;
        console.log("removed elm 2");
    }
    else if (playerCards[player][deckSection][3][1] == "empty_card") {
        const x = playerCards[player][deckSection][3]
        playerCards[player][deckSection][3] =
            playerCards[givingPlayer][0][2][givingCard]
        playerCards[givingPlayer][0][2][givingCard] = empty_card;
        console.log("removed elm 3");
    }
    else if (playerCards[player][deckSection][4][1] == "empty_card") {
        const x = playerCards[player][deckSection][4]
        playerCards[player][deckSection][4] =
            playerCards[givingPlayer][0][2][givingCard]
        playerCards[givingPlayer][0][2][givingCard] = empty_card;
        console.log("removed elm 4");
    }
    else if (playerCards[player][deckSection][5][1] == "empty_card") {
        const x = playerCards[player][deckSection][5]
        playerCards[player][deckSection][5] =
            playerCards[givingPlayer][0][2][givingCard]
        playerCards[givingPlayer][0][2][givingCard] = empty_card;
        console.log("removed elm 5");
    }
    else if (playerCards[player][deckSection][6][1] == "empty_card") {
        const x = playerCards[player][deckSection][6]
        playerCards[player][deckSection][6] =
            playerCards[givingPlayer][0][2][givingCard]
        playerCards[givingPlayer][0][2][givingCard] = empty_card;
        console.log("removed elm 6");
    }
    else if (playerCards[player][deckSection][7][1] == "empty_card") {
        const x = playerCards[player][deckSection][7]
        playerCards[player][deckSection][7] =
            playerCards[givingPlayer][0][2][givingCard]
        playerCards[givingPlayer][0][2][givingCard] = empty_card;
        console.log("removed elm 7");
    }
    else if (playerCards[player][deckSection][8][1] == "empty_card") {
        const x = playerCards[player][deckSection][8]
        playerCards[player][deckSection][8] =
            playerCards[givingPlayer][0][2][givingCard]
        playerCards[givingPlayer][0][2][givingCard] = empty_card;
        console.log("removed elm 8");
    }
    else if (playerCards[player][deckSection][9][1] == "empty_card") {
        const x = playerCards[player][deckSection][9]
        playerCards[player][deckSection][9] =
            playerCards[givingPlayer][0][2][givingCard]
        playerCards[givingPlayer][0][2][givingCard] = empty_card;
        console.log("removed elm 9");
    }
    else if (playerCards[player][deckSection][10][1] == "empty_card") {
        const x = playerCards[player][deckSection][10]
        playerCards[player][deckSection][10] =
            playerCards[givingPlayer][0][2][givingCard]
        playerCards[givingPlayer][0][2][givingCard] = empty_card;
        console.log("removed elm 10");
    }
    else {
        console.log("OPERATION FAILED")
    }
    
}

function discardShopConsidered2(shop) {
    playerCards[shop][0][1][0].push(playerCards[shop][0][2][1]);

    playerCards[shop][0][1][1] = playerCards[shop][0][2][1]
    playerCards[shop][0][2][1] = [empty_card];
    console.log("considered cards =", playerCards[shop][0][2]);
    console.log("deck cards =", playerCards[shop][0][0]);
}

function discardShopConsidered3(shop) {
    playerCards[shop][0][1][0].push(playerCards[shop][0][2][2]);
    playerCards[shop][0][1][1] = playerCards[shop][0][2][2]
    playerCards[shop][0][2][2] = [empty_card];
    
    console.log("considered cards =", playerCards[shop][0][2]);
    console.log("deck cards =", playerCards[shop][0][0]);
}

function reshuffleGameCards(type) {
    playerCards[21][type][0] = playerCardsData[21][type][4];
    playerCards[21][type][1] = playerCardsData[21][type][5];
    console.log("shuffled deck");
}

function rollDice() {
    var newRoll = Math.floor(Math.random() * 6) + 1;
    shipCards2[0] = newRoll;
    console.log("new dice = ", shipCards2[0]);
}

function randomCaptain(player) {
    var randomCap = Math.floor(Math.random() * 12);
    playerCards[player][0][1] = possibleCaptains[randomCap]
}

function randomGameCards(type) {
    var randomPick =
        Math.floor(Math.random() * (playerCardsData[21][type][0].length - 1))
    playerCards[21][type][2] = randomPick
    if (playerCardsData[21][type][1].length > 0) {
        playerCards[21][type][3].push(playerCards[21][type][1])
    }
    playerCards[21][type][1] = playerCardsData[21][type][0][
        playerCards[21][type][2] ]
    playerCardsData[21][type][0].splice(randomPick, 1)
    var chosenRan = playerCards[21][type][1]
    var drawRan = playerCards[21][type][0]
    var discardsRan = playerCards[21][type][3]
    console.log("chosen =", chosenRan)

}

function nextScenario() {
    if (possibleScenario[1][0] >= possibleScenario[0].length) {
        possibleScenario[1][0] = 0;
        playerCards[23][0] = possibleScenario[0][
            possibleScenario[1][0]
        ];
    }
    if (possibleScenario[1][0] < possibleScenario[0].length) {
        possibleScenario[1][0]++;
        playerCards[23][0] = possibleScenario[0][
            possibleScenario[1][0]
        ];
    }
}

function addShopToConsidered(shop) {
    var randomBeaumonde =
        Math.floor(Math.random() * (playerCards[shop][0][0].length - 1))

    if (playerCards[shop][0][2].length < 3) {
        if (playerCards[shop][0][2].length < 2) {
            if (playerCards[shop][0][2].length < 1){
                playerCards[shop][0][2].push([empty_card],
                                          [empty_card],
                                          [empty_card])
            }
            else {
                playerCards[shop][0][2].push([empty_card], [empty_card])
            }
        }
        else {
            playerCards[shop][0][2].push([empty_card])
        }
    }
    if (playerCards[shop][0][0][0] == empty_card) {
        console.log("there are no cards to draw");
    }
    else {
        if (playerCards[shop][0][2][0] == empty_card) {
            playerCards[shop][0][2][0] = playerCards[shop][0][0][randomBeaumonde]
            playerCards[shop][0][0].splice([randomBeaumonde], 1);
            console.log("removed elm 1");
        }
        else if (playerCards[shop][0][2][1] == empty_card) {
            playerCards[shop][0][2][1] = playerCards[shop][0][0][randomBeaumonde]
            playerCards[shop][0][0].splice([randomBeaumonde], 1);
            console.log("removed elm 2");
        }
        else if (playerCards[shop][0][2][2] == empty_card) {
            playerCards[shop][0][2][2] = playerCards[shop][0][0][randomBeaumonde]
            playerCards[shop][0][0].splice([randomBeaumonde], 1);
            console.log("removed elm 3");
        }
    }
    if (playerCards[shop][0][0].length < 1) {
        console.log("there are no more cards to draw, so replacing with empty");
        playerCards[shop][0][0].push(empty_card)
    }
    console.log(playerCards[shop][0][2]);
}



function addShopDiscardToConsidered(shop) {
    var originalChosen = playerCards[shop][0][1][1]
    playerCards[shop][0][1][1].filter(function(x) {
        return (x !== empty_card);
        });
    if (playerCards[shop][0][2].length < 3) {
        if (playerCards[shop][0][2].length < 2) {
            if (playerCards[shop][0][2].length < 1){
                playerCards[shop][0][2].push([empty_card],
                                             [empty_card],
                                             [empty_card])
            }
            else {
                playerCards[shop][0][2].push([empty_card],
                                             [empty_card])
            }
        }
        else {
            playerCards[shop][0][2].push([empty_card])
        }
    }
    console.log("the considered cards at start after filling emptys ", playerCards[shop][0][2]);
    if (playerCards[shop][0][2][0] == empty_card) {
        console.log("first card", playerCards[shop][0][2][0],
                    "= empty_card")
        playerCards[shop][0][2][0] = playerCards[shop][0][1][1];
        
        playerCards[shop][0][1][0] = playerCards[shop][0][1][0].filter(function(x) {
            return (x !== playerCards[shop][0][1][1])
        });    
    }
    else if (playerCards[shop][0][2][1] == empty_card) {
        console.log("second card", playerCards[shop][0][2][1],
                    "= empty_card")
        //first chosen now equals the chosen display of discard
        playerCards[shop][0][2][1] = playerCards[shop][0][1][1];
        //discard that was moved into first chosen is filtered from discard
        playerCards[shop][0][1][0] = playerCards[shop][0][1][0].filter(function(x) {
            return (x !== playerCards[shop][0][1][1])
        });
        //rotate discards to make it so there is a new discard display
        rotateDiscardsShop(shop)
    }
    else if (playerCards[shop][0][2][2] == empty_card) {
        console.log("third card", playerCards[shop][0][2][0],
                    "= empty_card")
        //second chosen now equals the chosen display of discard
        playerCards[shop][0][2][2] = playerCards[shop][0][1][1];
        //discard that was moved into second chosen is filtered from discard   
        playerCards[shop][0][1][0] = playerCards[shop][0][1][0].filter(function(x) {
            return (x !== playerCards[shop][0][1][1])
        });
        //rotate discards to make it so there is a new discard display
        rotateDiscardsShop(shop)
    }
    playerCards[shop][0][1][0] = playerCards[shop][0][1][0].filter(function(x) {
        return (x !== playerCards[shop][0][1][1])
    });
    
    
    if (playerCards[shop][0][1][1] == undefined) {
        console.log("going to try to set empty card now")
            playerCards[shop][0][1][1] = [empty_card]
    }
    else {
        console.log("chosen should not be undefined",
                    playerCards[shop][0][1][1]);
    }
    rotateDiscardsShop(shop);
    //console.log("check chosen =", playerCards[shop][0][1][1]);
    //console.log("considered at end =",playerCards[shop][0][2]);
}

function rotateDiscardsShop(shop) {
    console.log("started rotate discards shop function");
    var index = parseInt(playerCards[shop][0][1][2], 10);
    //console.log(playerCards[shop][0][1][0]);
    console.log("index at start =", index);
    
    if (playerCards[shop][0][1][0].length > 1){
        console.log("there are no discards");
    }
    
    if (playerCards[shop][0][1][0].length == 1){
        playerCards[shop][0][1][1] = playerCards[shop][0][1][0][0]
        console.log("there is only one card");
    }
    else if (playerCards[shop][0][1][0].length) {
        console.log("there is more than one card in discard", "discard length =", playerCards[shop][0][1][0].length);
        
        if (playerCards[shop][0][1][0].length < 2) {
            playerCards[shop][0][1][2] = 0;
            
        }
        else if (index > playerCards[shop][0][1][0].length - 1) {
            console.log("need to restart from zero");
            playerCards[shop][0][1][2] = 0
            console.log("index change", playerCards[shop][0][1][2]);
            playerCards[shop][0][1][1] = playerCards[shop][0][1][0][
                playerCards[shop][0][1][2]]
            playerCards[shop][0][1][0].filter(function(x) {
                return (x !== empty_card);
            });
        }
        else {
            playerCards[shop][0][1][2]++
            playerCards[shop][0][1][2] = [playerCards[shop][0][1][2]];
            playerCards[shop][0][1][1] =
                playerCards[shop][0][1][0][index]
            console.log("new index !! =", playerCards[shop][0][1][2]);
        }
        if (playerCards[shop][0][1].length < 1) {
            playerCards[shop][0][1][1] = [empty_card]
        }
        playerCards[shop][0][1].filter(function(x) {
            return (x !== [empty_card]);
        });
        if (playerCards[shop][0][1][0].length < 1) {
            playerCards[shop][0][1][1] = [empty_card];
        }
        else if (playerCards[shop][0][1][1][0] == empty_card) {
            playerCards[shop][0][1][1] = playerCards[shop][0][1][0][0];
        }
    }
    
    console.log(playerCards[shop][0][1][0].length);
    
}



function rotateDiscardsMeridian() {
    var index = playerCards[4][0][1][2];
    
    if (index > playerCards[4][0][1][0].length - 1) {
        console.log("need to restart from zero");
        playerCards[4][0][1][2] = 0
        console.log("index change", playerCards[4][0][1][2]);
        playerCards[4][0][1][1] = playerCards[4][0][1][0][
            playerCards[4][0][1][2]]
    }
    else {
        playerCards[4][0][1][2]++;
        playerCards[4][0][1][2] = [playerCards[4][0][1][2]]
        
        playerCards[4][0][1][1] = playerCards[4][0][1][0][index]
        console.log("new index =", playerCards[4][0][1][2]);
    }
}

function rotateDiscardsOsirisShipworks() {
    var index = playerCards[6][0][1][2];
    
    if (index > playerCards[6][0][1][0].length - 1) {
        console.log("need to restart from zero");
        index = 0
        playerCards[6][0][1][1] = playerCards[6][0][1][0][index]
    }

    playerCards[6][0][1][2] = [+index + 1];
    playerCards[6][0][1][1] = playerCards[6][0][1][0][index]
    console.log(playerCards[6][0][1][0][index]);
}

function rotateDiscardsPersephone() {
    var index = playerCards[7][0][1][2];
    
    if (index > playerCards[7][0][1][0].length - 1) {
        console.log("need to restart from zero");
        index = 0
        playerCards[7][0][1][1] = playerCards[7][0][1][0][index]
    }

    playerCards[7][0][1][2] = [+index + 1];
    playerCards[7][0][1][1] = playerCards[7][0][1][0][index]
    console.log(playerCards[7][0][1][0][index]);
}

function rotateDiscardsRegina() {
    var index = playerCards[8][0][1][2];
    
    if (index > playerCards[8][0][1][0].length - 1) {
        console.log("need to restart from zero");
        index = 0
        playerCards[8][0][1][1] = playerCards[8][0][1][0][index]
    }

    playerCards[8][0][1][2] = [+index + 1];
    playerCards[8][0][1][1] = playerCards[8][0][1][0][index]
    console.log(playerCards[8][0][1][0][index]);
}

function rotateDiscardsSilverholdMunitions() {
    var index = playerCards[9][0][1][2];
    
    if (index > playerCards[9][0][1][0].length - 1) {
        console.log("need to restart from zero");
        index = 0
        playerCards[9][0][1][1] = playerCards[9][0][1][0][index]
    }

    playerCards[9][0][1][2] = [+index + 1];
    playerCards[9][0][1][1] = playerCards[9][0][1][0][index]
    console.log(playerCards[9][0][1][0][index]);
}

function rotateDiscardsSpaceBazaar() {
    var index = playerCards[10][0][1][2];
    
    if (index > playerCards[10][0][1][0].length - 1) {
        console.log("need to restart from zero");
        index = 0
        playerCards[10][0][1][1] = playerCards[10][0][1][0][index]
    }

    playerCards[10][0][1][2] = [+index + 1];
    playerCards[10][0][1][1] = playerCards[10][0][1][0][index]
    console.log(playerCards[10][0][1][0][index]);
}





function p1Picker() {
            var x = p1Index;
            p1Chosen = p1Inv[x];
}

function p2Picker() {
    var x = p2Index;
    p2Chosen = p2Inv[x];
    var val = p2Inv[x];
}

function p2Last() {

    p2Index = p2Inv.length - 1;
    p2Picker();
}

function p2Next() {
    p2Index++;
    p2Index = p2Index % p2Inv.length;
    p2Picker();
}

function p2Prev() {
    if (p2Index === 0) {
        p2Index = p2Inv.length
    }
    p2Index = p2Index - 1;
    p2Picker();
}

function p1Next() {
    p1Index++;
    p1Index = p1Index % p1Inv.length;
    p1Picker();
} 

function p1Prev() {
    if (p1Index === 0) {
                 p1Index = p1Inv.length
    }
    p1Index = p1Index - 1;
    p1Picker();
}

function p3c1giveToX(getting) {
    console.log("start giving = ", playerCards[2][0].length,
                "getting = ", getting.length);
    if (playerCards[2][0].length > 2) {
        
        getting.push(playerCards[2][0][1]);

        
        playerCards[2][0] = playerCards[2][0].filter(function(x) {
            return x !== (playerCards[2][0][1]);
        });
        console.log("end giving = ", playerCards[2][0].length,
                        "getting = ", getting.length);
    }
}

function p3c1giveToDiscard() {
    
    if (playerCards[2][0].length > 2) {

        console.log("card shop label = ", playerCards[2][0][1][1]);

        
        if (playerCards[2][0][1][1] = "beaumonde") {
            playerCards[4][1].push(playerCards[2][0][1]);
            console.log("discarded into beaumonde");
        };
        if (playerCards[2][0][1][1] = "meridian") {
            playerCards[5][1].push(playerCards[2][0][1]);
            console.log("discarded into meridian");
        };
        if (playerCards[2][0][1][1] = "osiris_shipworks") {
            playerCards[6][1].push(playerCards[2][0][1]);
            console.log("discarded into osiris_shipworks");
        };
        if (playerCards[2][0][1][1] = "persephone") {
            playerCards[7][1].push(playerCards[2][0][1]);
            console.log("discarded into persephone");
        };
        if (playerCards[2][0][1][1] = "regina") {
            playerCards[8][1].push(playerCards[2][0][1]);
            console.log("discarded into regina");
        };
        if (playerCards[2][0][1][1] = "silverhold_munitions") {
            playerCards[9][1].push(playerCards[2][0][1]);
            console.log("discarded into silverhold_munitions");
        };
        if (playerCards[2][0][1][1] = "space_bazaar") {
            playerCards[10][1].push(playerCards[2][0][1]);
            console.log("discarded into space_bazaar");
        };
        playerCards[2][0] = playerCards[2][0].filter(function(x) {
            return x !== (playerCards[2][0][1]);
        });
    
    }
}

function finishedJobBackup(player, deckSection, card) {
    console.log("started finished job function")
    if (playerCards[player][deckSection][card][0] == empty_card){
        console.log("empty card")
    }
    else {
        playerCards[player][5][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("finished jobs length =", playerCards[player][5][0].length);
        
        playerCards[player][5][0].filter(function(x) {
            return x !== (empty_card);
        });
        
        finishedJobRotate(player);
    }
}

function finishedJob(player, deckSection, card) {
    console.log("started finished job function")
    if (playerCards[player][deckSection][card][0] == empty_card){
        console.log("empty card")
    }
    else {
        playerCards[player][5][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("finished jobs length =", playerCards[player][5][0].length);
        
        playerCards[player][5][0].filter(function(x) {
            return x !== (empty_card);
        });
        
        finishedJobRotate(player);
    }
}


function finishedJobRotate(player) {
    console.log("starting finished job rotate");
    console.log("index = ", playerCards[player][5][1]);
    if (playerCards[player][5][1] >
        playerCards[player][5][0].length - 1) {
        console.log("need to restart from zero");
        playerCards[player][5][1] = 0
        playerCards[player][5][2] =
            playerCards[player][5][0][
                playerCards[player][5][1]]
    }
    else {
        playerCards[player][5][1]++;
        playerCards[player][5][2] =
            playerCards[player][5][0][
                playerCards[player][5][1]];
    }
}

function drawJobBackup(player, shop) {
    console.log(playerCards[shop][0][3])
    randNum = Math.floor(Math.random() *
                        playerCards[shop].length)
    console.log("random number = ", randNum)
    if (playerCards[player][4][1][0] == empty_card) {
        console.log("first slot was empty");
        playerCards[player][4][1] =
            playerCards[shop][randNum];
        playerCards[shop].filter(function(x) {
            return (x !== playerCards[shop][randNum])
        });
    }
    else if (playerCards[player][4][2][0] == empty_card) {
        playerCards[player][4][2] =
            playerCards[shop][randNum];
        playerCards[shop].filter(function(x) {
            return (x !== playerCards[shop][randNum])
        });
    }
    else if (playerCards[player][4][3][0] == empty_card) {
        playerCards[player][4][3] =
            playerCards[shop][randNum];
        playerCards[shop].filter(function(x) {
            return (x !== playerCards[shop][randNum])
        });
    }
    else if (playerCards[player][4][3][4] != empty_card ) {
        console.log("no empty slots for jobs available");
    }
}

function startJob(player, jobNumber) {

    if (playerCards[player][6][jobNumber][0] == empty_card){
        console.log("finishedJob is empty");
        playerCards[player][6][jobNumber] =
            playerCards[player][4][jobNumber];
        playerCards[player][4][jobNumber] =
            [empty_card]
        console.log("startJob complete");
    }
    
}


function drawJob(player, shop) {
    randNum = Math.floor(Math.random() *
                        playerCardsData[shop].length)
    console.log("random number = ", randNum)
    if (playerCards[player][4][1][0] == empty_card) {
        console.log("first slot was empty");
        playerCards[player][4][1] =
            playerCardsData[shop][randNum];
        playerCardsData[shop].filter(function(x) {
            return (x !== playerCardsData[shop][randNum])
        });
    }
    else if (playerCards[player][4][2][0] == empty_card) {
        playerCards[player][4][2] =
            playerCardsData[shop][randNum];
        playerCardsData[shop].filter(function(x) {
            return (x !== playerCardsData[shop][randNum])
        });
    }
    else if (playerCards[player][4][3][0] == empty_card) {
        playerCards[player][4][3] =
            playerCardsData[shop][randNum];
        playerCardsData[shop].filter(function(x) {
            return (x !== playerCardsData[shop][randNum])
        });
    }
    else if (playerCards[player][4][3][4] != empty_card ) {
        console.log("no empty slots for jobs available");
    }
}

function discard(player, deckSection, card) {
    console.log("started discard function")
    console.log("shop label = ", playerCards[player][deckSection][card][1])
    if (playerCards[player][deckSection][card][1] == "captain") {
        console.log("There will be no munity on this ship");
    }
    if (playerCards[player][deckSection][card][1] == "beaumonde") {
        console.log("equaled beaumonde");
        playerCards[4][0][1][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into bazaar",
                    "bazaar length = ", playerCards[4][0][1][0].length)
};
    if (playerCards[player][deckSection][card][1] == "meridian") {
        playerCards[5][0][1][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into meridian",
                    "meridian length = ", playerCards[5][0][1][0].length);
    };

    if (playerCards[player][deckSection][card][1] == "osiris_shipworks") {
        playerCards[6][0][1][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into osiris_shipworks",
                    "osiris_shipworks = ", playerCards[6][0][1][0].length);
    };

    if (playerCards[player][deckSection][card][1] == "persephone") {
        playerCards[7][0][1][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into persephone",
                    "persephone = ", playerCards[7][0][1][0].length);
    };

    if (playerCards[player][deckSection][card][1] == "regina") {
        playerCards[8][0][1][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into regina",
                    "regina = ", playerCards[8][0][1][0].length);
    };

    if (playerCards[player][deckSection][card][1] == "silverhold_munitions") {
        playerCards[9][0][1][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into silverhold_munitions")
        console.log("silverhold_munitions = ")
    };

    if (playerCards[player][deckSection][card][1] == "space_bazaar") {
        playerCards[10][0][1][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into space_bazaar",
                    "space_bazaar = ");
    };

    if (playerCards[player][deckSection][card][1] == "amnon_duul") {
        playerCardsData[11][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into amnon duul",
                    "amnon duul = ");
    };

    if (playerCards[player][deckSection][card][1] == "badger") {
        playerCardsData[12][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into badger",
                    "badger = ");
    };

    if (playerCards[player][deckSection][card][1] == "fanty_mingo") {
        playerCardsData[13][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into fanty_mingo",
                    "fanty_mingo = ");
    };

    if (playerCards[player][deckSection][card][1] == "harken") {
        playerCardsData[14][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into harken",
                    "harken = ");
    };

    if (playerCards[player][deckSection][card][1] == "lord_harrow") {
        playerCardsData[15][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into lord_harrow",
                    "lord_harrow = ");
    };

    if (playerCards[player][deckSection][card][1] == "magistrate_higgins") {
        playerCardsData[16][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into magistrate_higgins",
                    "magistrate_higgins = ");
    };

    if (playerCards[player][deckSection][card][1] == "mr_universe") {
        playerCardsData[17][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into mr_universe",
                    "mr_universe = ");
    };

    if (playerCards[player][deckSection][card][1] == "niska") {
        playerCardsData[18][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into niska",
                    "niska = ");
    };

    if (playerCards[player][deckSection][card][1] == "patience") {
        playerCardsData[19][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into patience",
                    "patience = ");
    };

    if (playerCards[player][deckSection][card][0] == empty_card) {
        console.log("already empty");
    }

    else {
        playerCards[player][deckSection][card] = [empty_card]
    }
}


function discardBackup(player, deckSection, card) {
    console.log("started discard function")
    console.log("shop label = ", playerCards[player][deckSection][card][1])
    if (playerCards[player][deckSection][card][1] == "beaumonde") {
        console.log("equaled beaumonde");
        playerCards[4][0][1][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into bazaar",
                    "bazaar length = ", playerCards[4][0][1][0].length)
};
    if (playerCards[player][deckSection][card][1] == "meridian") {
        playerCards[5][0][1][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into meridian",
                    "meridian length = ", playerCards[5][0][1][0].length);
    };

    if (playerCards[player][deckSection][card][1] == "osiris_shipworks") {
        playerCards[6][0][1][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into osiris_shipworks",
                    "osiris_shipworks = ", playerCards[6][0][1][0].length);
    };

    if (playerCards[player][deckSection][card][1] == "persephone") {
        playerCards[7][0][1][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into persephone",
                    "persephone = ", playerCards[7][0][1][0].length);
    };

    if (playerCards[player][deckSection][card][1] == "regina") {
        playerCards[8][0][1][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into regina",
                    "regina = ", playerCards[8][0][1][0].length);
    };

    if (playerCards[player][deckSection][card][1] == "silverhold_munitions") {
        playerCards[9][0][1][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into silverhold_munitions")
        console.log("silverhold_munitions = ")
    };

    if (playerCards[player][deckSection][card][1] == "space_bazaar") {
        playerCards[10][0][1][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into space_bazaar",
                    "space_bazaar = ");
    };

    if (playerCards[player][deckSection][card][1] == "amnon_duul") {
        playerCards[11][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into amnon duul",
                    "amnon duul = ");
    };

    if (playerCards[player][deckSection][card][1] == "badger") {
        playerCards[12][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into badger",
                    "badger = ");
    };

    if (playerCards[player][deckSection][card][1] == "fanty_mingo") {
        playerCards[13][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into fanty_mingo",
                    "fanty_mingo = ");
    };

    if (playerCards[player][deckSection][card][1] == "harken") {
        playerCards[14][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into harken",
                    "harken = ");
    };

    if (playerCards[player][deckSection][card][1] == "lord_harrow") {
        playerCards[15][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into lord_harrow",
                    "lord_harrow = ");
    };

    if (playerCards[player][deckSection][card][1] == "magistrate_higgins") {
        playerCards[16][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into magistrate_higgins",
                    "magistrate_higgins = ");
    };

    if (playerCards[player][deckSection][card][1] == "mr_universe") {
        playerCards[17][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into mr_universe",
                    "mr_universe = ");
    };

    if (playerCards[player][deckSection][card][1] == "niska") {
        playerCards[18][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into niska",
                    "niska = ");
    };

    if (playerCards[player][deckSection][card][1] == "patience") {
        playerCards[19][0].push(playerCards[player][deckSection][card]);
        playerCards[player][deckSection][card] = [empty_card]
        console.log("discarded into patience",
                    "patience = ");
    };

    if (playerCards[player][deckSection][card][0] == empty_card) {
        console.log("already empty");
    }

    else {
        playerCards[player][deckSection][card] = [empty_card]
    }
}

//p3c1

function PrivGiveToMain(player,card) {

    console.log("items start = ", playerCards[2][2].length);

    if (playerCards[2][0].length > 1) {
        
        
        if (playerCards[2][1][1][2] == "item") {
   
            playerCards[2][2].push(playerCards[2][1][1]);
            console.log("ITEM!!",
                        "items length = ", playerCards[2][2].length,
                        "crew length = ", playerCards[2][0].length,
                        "ship upgrade = ", playerCards[2][3].length,
                        "items left in private = ", playerCards[2][1].length);
        };
        if (playerCards[2][1][1][2] == "crew") {
            playerCards[2][0].push(playerCards[2][1][1]);
            console.log("CREW!!",
                        "items length = ", playerCards[2][2].length,
                        "crew length = ", playerCards[2][0].length,
                        "ship upgrade = ", playerCards[2][3].length,
                        "items left in private = ", playerCards[2][1].length);
        };
        if (playerCards[2][1][1][2] == "shipUpgrade") {
            playerCards[2][3].push(playerCards[2][1][1]);
            console.log("SHIP UPGRADE!!",
                        "items length = ", playerCards[2][2].length,
                        "crew length = ", playerCards[2][0].length,
                        "ship upgrade = ", playerCards[2][3].length,
                        "items left in private = ", playerCards[2][1].length);
        };
         playerCards[2][1] = playerCards[2][1].filter(function(x) {
            return x !== (playerCards[2][1][1]);
         });
    
    }
}


function p3c1PrivGiveToMain() {

    console.log("items start = ", playerCards[2][2].length);

    if (playerCards[2][0].length > 1) {
        
        
        if (playerCards[2][1][1][2] == "item") {
   
            playerCards[2][2].push(playerCards[2][1][1]);
            console.log("ITEM!!",
                        "items length = ", playerCards[2][2].length,
                        "crew length = ", playerCards[2][0].length,
                        "ship upgrade = ", playerCards[2][3].length,
                        "items left in private = ", playerCards[2][1].length);
        };
        if (playerCards[2][1][1][2] == "crew") {
            playerCards[2][0].push(playerCards[2][1][1]);
            console.log("CREW!!",
                        "items length = ", playerCards[2][2].length,
                        "crew length = ", playerCards[2][0].length,
                        "ship upgrade = ", playerCards[2][3].length,
                        "items left in private = ", playerCards[2][1].length);
        };
        if (playerCards[2][1][1][2] == "shipUpgrade") {
            playerCards[2][3].push(playerCards[2][1][1]);
            console.log("SHIP UPGRADE!!",
                        "items length = ", playerCards[2][2].length,
                        "crew length = ", playerCards[2][0].length,
                        "ship upgrade = ", playerCards[2][3].length,
                        "items left in private = ", playerCards[2][1].length);
        };
         playerCards[2][1] = playerCards[2][1].filter(function(x) {
            return x !== (playerCards[2][1][1]);
         });
    
    }
}


function swap(cardsArray, first, second){
    console.log(cardsArray);
    [cardsArray[first], cardsArray[second]] =
        [cardsArray[second], cardsArray[first]]
    console.log(cardsArray);
}

function swapPriv(cardsArray, first, second){
    console.log(cardsArray[0][first]);
    [cardsArray[0][first], cardsArray[1][second]] =
        [cardsArray[1][second], cardsArray[0][first]]
    console.log(cardsArray[0][first]);
}

function swapPriv2(player, cardNum) {
 
    
    var original = playerCards[player][1][cardNum];
    console.log("start = ", playerCards[player][1][cardNum])
    if (playerCards[player][1][cardNum][2] == "item") {
        
        playerCards[player][1][cardNum] = playerCards[player][2][cardNum]
        playerCards[player][2][cardNum] = original
        console.log("ITEM new card = ",
                    playerCards[player][1][cardNum]);
        
    }
    else if (playerCards[player][1][cardNum][2] == "crew") {
        playerCards[player][1][cardNum] = playerCards[player][0][cardNum]
        playerCards[player][0][cardNum] = original
        console.log("CREW new card = ",
                    playerCards[player][1][cardNum]);
    }
    else if (playerCards[player][1][cardNum][2] == "shipUpgrade") {
        playerCards[player][1][cardNum] = playerCards[player][3][cardNum]
        playerCards[player][3][cardNum] = original
        console.log("SHIP UPGRADE new card = ",
                    playerCards[player][1][cardNum]);
    }
    else if (playerCards[player][1][cardNum][2] == "core") {
        playerCards[player][1][cardNum] = playerCards[player][7][cardNum]
        playerCards[player][7][cardNum] = original
        console.log("CORE new card = ",
                    playerCards[player][1][cardNum]);
    }

    else if (playerCards[player][1][cardNum][2] == "empty_card") {
        console.log("tried to trade empty card");
    }
}

function filterLastEmpty(player, deckSection) {
    if (playerCards[player][deckSection][10][0] == "empty_card") {
        playerCards[player][deckSection].splice(10, 1);
        console.log("remove elm 10");
    }
    else if (playerCards[player][deckSection][9][0] == "empty_card") {
        playerCards[player][deckSection].splice(9, 1);
        console.log("remove elm 9");
    }
    else if (playerCards[player][deckSection][8][0] == "empty_card") {
        playerCards[player][deckSection].splice(8, 1);
        console.log("remove elm 8");
    }
    else if (playerCards[player][deckSection][7][0] == "empty_card") {
        playerCards[player][deckSection].splice(7, 1);
        console.log("remove elm 7");
    }
    else if (playerCards[player][deckSection][6][0] == "empty_card") {
        playerCards[player][deckSection].splice(6, 1);
        console.log("remove elm 6");
    }
    else if (playerCards[player][deckSection][5][0] == "empty_card") {
        playerCards[player][deckSection].splice(5, 1);
        console.log("remove elm 5");
    }
    else if (playerCards[player][deckSection][4][0] == "empty_card") {
        playerCards[player][deckSection].splice(4, 1);
        console.log("remove elm 4");
    }
    else if (playerCards[player][deckSection][3][0] == "empty_card") {
        playerCards[player][deckSection].splice(3, 1);
        console.log("remove elm 3");
    }
    else if (playerCards[player][deckSection][2][0] == "empty_card") {
        playerCards[player][deckSection].splice(2, 1)
        console.log("remove elm 2");;
    }
    else if (playerCards[player][deckSection][1][0] == "empty_card") {
        playerCards[player][deckSection].splice(1, 1);
        console.log("remove elm 1");
    }
    console.log(playerCards[player][deckSection]);
}

function giveReplaceEmpty(player, deckSection, givingPlayer, givingDeck, givingCard) {
    if (playerCards[player][deckSection][1][0] == empty_card) {
        const x = playerCards[player][deckSection][1]
        playerCards[player][deckSection][1] = playerCards[givingPlayer][givingDeck][givingCard]
        playerCards[givingPlayer][givingDeck][givingCard] = x;
        console.log("removed elm 1");
    }
    else if (playerCards[player][deckSection][2][0] == empty_card) {
        const x = playerCards[player][deckSection][2]
        playerCards[player][deckSection][2] = playerCards[givingPlayer][givingDeck][givingCard]
        playerCards[givingPlayer][givingDeck][givingCard] = x;
        console.log("removed elm 2");
    }
    else if (playerCards[player][deckSection][3][0] == empty_card) {
        const x = playerCards[player][deckSection][3]
        playerCards[player][deckSection][3] = playerCards[givingPlayer][givingDeck][givingCard]
        playerCards[givingPlayer][givingDeck][givingCard] = x;
        console.log("removed elm 3");
    }
    else if (playerCards[player][deckSection][4][0] == empty_card) {
        const x = playerCards[player][deckSection][4]
        playerCards[player][deckSection][4] =  playerCards[givingPlayer][givingDeck][givingCard]
        playerCards[givingPlayer][givingDeck][givingCard] = x;
        console.log("removed elm 4");
    }
    else if (playerCards[player][deckSection][5][0] == empty_card) {
        const x = playerCards[player][deckSection][5]
        playerCards[player][deckSection][5] = playerCards[givingPlayer][givingDeck][givingCard]
        playerCards[givingPlayer][givingDeck][givingCard] = x;
        console.log("removed elm 5");
    }
    else if (playerCards[player][deckSection][6][0] == empty_card) {
        const x = playerCards[player][deckSection][6]
        playerCards[player][deckSection][6] = playerCards[givingPlayer][givingDeck][givingCard]
        playerCards[givingPlayer][givingDeck][givingCard] = x;
        console.log("removed elm 6");
    }
    else if (playerCards[player][deckSection][7][0] == empty_card) {
        const x = playerCards[player][deckSection][7]
        playerCards[player][deckSection][7] = playerCards[givingPlayer][givingDeck][givingCard]
        playerCards[givingPlayer][givingDeck][givingCard] = x;
        console.log("removed elm 7");
    }
    else if (playerCards[player][deckSection][8][0] == empty_card) {
        const x = playerCards[player][deckSection][8]
        playerCards[player][deckSection][8] = playerCards[givingPlayer][givingDeck][givingCard]
        playerCards[givingPlayer][givingDeck][givingCard] = x;
        console.log("removed elm 8");
    }
    else if (playerCards[player][deckSection][9][0] == empty_card) {
        const x = playerCards[player][deckSection][9]
        playerCards[player][deckSection][9] = playerCards[givingPlayer][givingDeck][givingCard]
        playerCards[givingPlayer][givingDeck][givingCard] = x;
        console.log("removed elm 9");
    }
    else if (playerCards[player][deckSection][10][0] == empty_card) {
        const x = playerCards[player][deckSection][10]
        playerCards[player][deckSection][10] = playerCards[givingPlayer][givingDeck][givingCard]
        playerCards[givingPlayer][givingDeck][givingCard] = x;
        console.log("removed elm 10");
    }
}


function giveTemplate(group, giving, getting) {
    group[giving][1] = group[giving][0][ group[giving][2] ]
    
    console.log("giving player index = ",group[giving][2],
                "giving player chosen card at start of function = ",
                group[giving][1], "give temp was called");
    
    console.log("before push, giving player chosen = ",
                group[giving][1], "give temp was called");
    
    group[getting][0].push(group[giving][1]);
    
    if (group[giving][0].length === 0 && Array.isArray(group[giving][0])) {
                console.log("giving player inv is empty, you cannot give!");
            };

    var y = group[giving][0]
                .indexOf
    (group[giving][1]);
    
    group[giving][0]
        .splice
    (group[giving][0]
             .indexOf
             (group[giving][1]), 1);
    
    group[getting][2] = group[getting][0].length - 1;
    
    if (y === 0) {
                group[giving][1] =
                    group[giving][1][group[giving][0].length]
            };
    group[giving][1] = group[giving][0][y];
    
    group[getting][0] = group[getting][0].filter(function(x) {
                return x !== undefined;
            });
    
    if (group[giving][2] === 0) {
                group[giving][2] = [giving][0].length
            };
    
    group[giving][2] = group[giving][2] - 1;
    group[giving][1] = group[giving][0][ group[giving][2] ]
    group[giving][2] = Math.max(0, group[giving][2]);

    group[giving][2] = group[giving][2] || 0;
    
    
    console.log("giving player inv = ",
                        group[giving][0],
                        "getting player inv = ",
                        group[getting][0],
                        "giving player chosen = ",
                        group[giving][1],
                        "giving player index = ",
                group[giving][2], "give temp was called");
}



function countDup3(arrIn, arrOutOriginal) {
    
    arrIn = arrIn.filter( function( element ) {
        return element.length <= 50;
    });

    arrOut = [];
    
    var uniqueCount = arrIn.flat(Infinity);
    var uniqueChars = [];
    
    for (i of uniqueCount) {
        if (uniqueChars.indexOf(i) == -1) {
            uniqueChars.push(i);
        } 
    }
    
    for (x of uniqueChars) {
        let timesAppeared = 0;
        for (i of uniqueCount) {
            if (i == x) {timesAppeared++;}
        }
        arrOut.push(`${x} x ${timesAppeared},`);
        arrOut = arrOut.filter( function( element ) {
            return element.length <= 500;
        });
        arrOutOriginal[0] = arrOut;
        
    }
}
    

function prevTemplate(group,player) {
    if (group[player][2] === 0) {
        group[player][2] = group[player][0].length
    };
    group[player][2] = group[player][2] - 1;
    group[player][1] = group[player][0][ group[player][2] ]
    
    var x = group[player][2];
    group[player][1] = group[player][0][x]
}

function nextTemplate(group,player) {
    if (group[player][2] >= group[player][0].length - 1) {
        group[player][2] = 0
    };

    group[player][2] = group[player][2] + 1;
    group[player][1] = group[player][0][ group[player][2] ]
    
    var x = group[player][2];
    group[player][1] = group[player][0][x]
    
}

    
function nextSupplyTemplate(supBox, player) {
    console.log("tried to change ship supply")
      //restart if index is too great
    
    if (shipInv[player][2][0] >= shipInv[0][0].length - 1) {
        shipInv[player][2][0] = 0

        console.log("Supply Index number = ", shipInv[player][2][0])

      //shipInv[1][0][0]
        shipInv[player][0][supBox] = shipInv[0][0][shipInv[player][2][0]]
        console.log("supply box = ", shipInv[player][0][supBox][1])
    }
    else {
        shipInv[player][2][0]++;
        shipInv[player][0][supBox] = shipInv[0][0][
            shipInv[player][2][0]];
        
        countDup3(shipInv[player][0], shipInv[player][1]);
        console.log("supply box = ", shipInv[player][0][supBox][1])
        console.log("supIndex =", shipInv[player][2][0], "supBox =", supBox, "player =", player); 
    }
}

function nextSupplyTemplateBackup(supIndex, supBox, player) {
    console.log("tried to change ship supply")
      //restart if index is too great
    
    if (shipInv[player][2][supIndex] >= shipInv[0][0].length - 1) {
        shipInv[player][2][supIndex] = 0

      //shipInv[1][0][0]
        shipInv[player][0][supBox] = shipInv[0][0][shipInv[player][2][supIndex]]
    };
    
    shipInv[player][2][supIndex] = shipInv[player][2][supIndex] * 1 + 1;
    shipInv[player][0][supBox] = shipInv[0][0][shipInv[player][2][supIndex]];
    
    countDup3(shipInv[player][0], shipInv[player][1]);
    console.log("supIndex =", supIndex, "supBox =", supBox, "player =", player); 
    
}

function nextShipTemplate(supIndex, supBox, player) {
    console.log("tried to change ship supply")
      //shipInv[1][2][0]
    
    if (shipCards[player][2][supIndex] >= shipCards[0][0].length - 1) {
        shipCards[player][2][supIndex] = 0

      //shipCards[1][0][0]
        shipCards[player][0][supBox] = shipCards[0][0][shipCards[player][2][supIndex]]
    };
    
    shipCards[player][2][supIndex] = shipCards[player][2][supIndex] * 1 + 1;
    shipCards[player][0][supBox] = shipCards[0][0][shipCards[player][2][supIndex]];
    
    countDup3(shipCards[player][0], shipCards[player][1]);
    console.log("supIndex =", supIndex, "supBox =", supBox, "player =", player); 
    
}

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return 'data:image/jpeg;base64,' +
        Buffer.from(bitmap).toString('base64');
}

function base64_encodePNG(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return 'data:image/png;base64,' +
        Buffer.from(bitmap).toString('base64');
}

function base64_decode(base64str, file) {
    // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
    var bitmap = Buffer.from(base64str, 'base64');
    // write buffer to file
    fs.writeFileSync(file, bitmap);
    console.log('File created from base64 encoded string');
}

const nsp = Socketio.of('/my-namespace');

Socketio.on("connection", socket => {
    console.log("someone connected");
    socket.emit("position", position)
    socket.emit("position2", position2)
    socket.emit("position3", position3)
    socket.emit("position4", position4)
    socket.emit("position5", position5)
    socket.emit("position6", position6)
    socket.emit("position7", position7)
    socket.emit("wallet1", wallet1)
    socket.emit("wallet2", wallet2)
    socket.emit("wallet3", wallet3)
    socket.emit("wallet4", wallet4)
    socket.emit("warrant1", warrant1)
    socket.emit("warrant2", warrant2)
    socket.emit("warrant3", warrant3)
    socket.emit("warrant4", warrant4)
    socket.emit("goalTokens1", goalTokens1)
    socket.emit("goalTokens2", goalTokens2)
    socket.emit("goalTokens3", goalTokens3)
    socket.emit("goalTokens4", goalTokens4)
    socket.emit("chosenCard", chosenCard)
    socket.emit("images", images)
    socket.emit("crewMood", crewMood)
    socket.emit("playerCards", playerCards)
    socket.emit("travelCards", travelCards)
    socket.emit("shipCards", shipCards)
    socket.emit("shipCards2", shipCards2)
    socket.emit("shipInv", shipInv)
    socket.emit('noOfConnections', Object.keys(Socketio.sockets.connected).length)

    socket.on('disconnect', () => {
        console.log('disconnected')
        Socketio.emit('noOfConnections', Object.keys(Socketio.sockets.connected).length)
    });



    socket.on('chat-message', (msg) => {
        socket.broadcast.emit('chat-message', msg)
    });
    socket.on('playerNumberSet', (player) => {
        socket.broadcast.emit('playerNumberSet', player)
    });
    socket.on('joined', (name) => {
        socket.broadcast.emit('joined', name)
    });
    socket.on('left', (name) => {
        socket.broadcast.emit('left', name)
    });
    
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    });
    socket.on('stoptyping', () => {
        socket.broadcast.emit('stoptyping')
    });

    socket.on("chosenShip", changeShip => {
        switch(changeShip) {
        case "p3nextShip":

            nextShipTemplate(0, 0, 1);
            console.log("vue tried to change ship",shipCards[1][0][0][1]);

            Socketio.emit ("shipCards", shipCards);
            break;

            case "rollDice":

            rollDice();

            Socketio.emit ("shipCards", shipCards);
            break;
    
        }
    });

    socket.on("chosenShip2", changeShip2 => {
        switch(changeShip2) {
            
        case "rollDice":
            
            rollDice();
            
            Socketio.emit ("shipCards2", shipCards2);
            break;
            
        }
    });

                                           
    socket.on("supply", changeSupply => {
        switch(changeSupply) {
        case "1box1":

            nextSupplyTemplate(0, 1);
            
            console.log("supply tried to change from socket");
            console.log("socket supIndex =",shipInv[1][2][0],
                        "socket supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box2":
            
            nextSupplyTemplate(1, 1);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box3":
            
            nextSupplyTemplate(2, 1);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box4":
            
            nextSupplyTemplate(3, 1);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box5":
            
            nextSupplyTemplate(4, 1);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box6":
            
            nextSupplyTemplate(5, 1);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box7":
            
            nextSupplyTemplate(6, 1);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box8":
            
            nextSupplyTemplate(7, 1);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box9":
            
            nextSupplyTemplate(8, 1);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box10":
            
            nextSupplyTemplate(9, 1);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box11":
            
            nextSupplyTemplate(10, 1);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "1box12":
            
            nextSupplyTemplate(11, 1);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;


        case "2box1":

            nextSupplyTemplate(0, 2);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "2box2":
            
            nextSupplyTemplate(1, 2);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "2box3":
            
            nextSupplyTemplate(2, 2);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "2box4":
            
            nextSupplyTemplate(3, 2);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "2box5":
            
            nextSupplyTemplate(4, 2);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "2box6":
            
            nextSupplyTemplate(5, 2);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "2box7":
            
            nextSupplyTemplate(6, 2);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "2box8":
            
            nextSupplyTemplate(7, 2);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "2box9":
            
            nextSupplyTemplate(8, 2);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "2box10":
            
            nextSupplyTemplate(9, 2);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "2box11":
            
            nextSupplyTemplate(10, 2);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "2box12":
            
            nextSupplyTemplate(11, 2);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;

            
        case "3box1":

            nextSupplyTemplate(0, 3);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[3][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "3box2":
            
            nextSupplyTemplate(1, 3);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[3][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "3box3":
            
            nextSupplyTemplate(2, 3);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[3][2][0],
                        "supBox =", shipInv[3][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "3box4":
            
            nextSupplyTemplate(3, 3);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "3box5":
            
            nextSupplyTemplate(4, 3);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "3box6":
            
            nextSupplyTemplate(5, 3);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "3box7":
            
            nextSupplyTemplate(6, 3);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "3box8":
            
            nextSupplyTemplate(7, 3);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "3box9":
            
            nextSupplyTemplate(8, 3);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "3box10":
            
            nextSupplyTemplate(9, 3);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "3box11":
            
            nextSupplyTemplate(10, 3);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "3box12":
            
            nextSupplyTemplate(11, 3);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;

            
        case "4box1":

            nextSupplyTemplate(0, 4);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "4box2":
            
            nextSupplyTemplate(1, 4);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "4box3":
            
            nextSupplyTemplate(2, 4);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "4box4":
            
            nextSupplyTemplate(3, 4);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "4box5":
            
            nextSupplyTemplate(4, 4);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "4box6":
            
            nextSupplyTemplate(5, 4);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "4box7":
            
            nextSupplyTemplate(6, 4);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "4box8":
            
            nextSupplyTemplate(7, 4);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "4box9":
            
            nextSupplyTemplate(8, 4);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "4box10":
            
            nextSupplyTemplate(9, 4);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "4box11":
            
            nextSupplyTemplate(10, 4);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;
        case "4box12":
            
            nextSupplyTemplate(11, 4);
            
            console.log("supply tried to change from socket");
            console.log("socket supply index =",shipInv[1][2][0],
                        "supBox =", shipInv[1][0][0]);
            Socketio.emit ("shipInv", shipInv);
            break;

            
        }
    });

    socket.on("chosenMood", changeMood => {
        switch(changeMood) {
            
        case "p1c1ChangeMood":
            b(0,0);
            Socketio.emit ("crewMood", crewMood);
            break;
            
            case "p1c2ChangeMood":
            b(0,1);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p1c3ChangeMood":
            b(0,2);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p1c4ChangeMood":
            b(0,3);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p1c5ChangeMood":
            b(0,4);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p1c6ChangeMood":
            b(0,5);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p1c7ChangeMood":
            b(0,6);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p1c8ChangeMood":
            b(0,7);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p1c9ChangeMood":
            b(0,8);
            Socketio.emit ("crewMood", crewMood);
            break;

        case "p1c10ChangeMood":
            b(0,9);
            Socketio.emit ("crewMood", crewMood);
            break;


            case "p2c1ChangeMood":
            b(1,0);
            Socketio.emit ("crewMood", crewMood);
            break;
            
            case "p2c2ChangeMood":
            b(1,1);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p2c3ChangeMood":
            b(1,2);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p2c4ChangeMood":
            b(1,3);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p2c5ChangeMood":
            b(1,4);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p2c6ChangeMood":
            b(1,5);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p2c7ChangeMood":
            b(1,6);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p2c8ChangeMood":
            b(1,7);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p2c9ChangeMood":
            b(1,8);
            Socketio.emit ("crewMood", crewMood);
            break;

        case "p2c10ChangeMood":
            b(1,9);
            Socketio.emit ("crewMood", crewMood);
            break;


        case "p3c1ChangeMood":
            b(2,0);
            Socketio.emit ("crewMood", crewMood);
            break;
            
            case "p3c2ChangeMood":
            b(2,1);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p3c3ChangeMood":
            b(2,2);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p3c4ChangeMood":
            b(2,3);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p3c5ChangeMood":
            b(2,4);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p3c6ChangeMood":
            b(2,5);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p3c7ChangeMood":
            b(2,6);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p3c8ChangeMood":
            b(2,7);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p3c9ChangeMood":
            b(2,8);
            Socketio.emit ("crewMood", crewMood);
            break;

        case "p3c10ChangeMood":
            b(2,9);
            Socketio.emit ("crewMood", crewMood);
            break;


            case "p4c1ChangeMood":
            b(3,0);
            Socketio.emit ("crewMood", crewMood);
            break;
            
            case "p4c2ChangeMood":
            b(3,1);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p4c3ChangeMood":
            b(3,2);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p4c4ChangeMood":
            b(3,3);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p4c5ChangeMood":
            b(3,4);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p4c6ChangeMood":
            b(3,5);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p4c7ChangeMood":
            b(3,6);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p4c8ChangeMood":
            b(3,7);
            Socketio.emit ("crewMood", crewMood);
            break;

            case "p4c9ChangeMood":
            b(3,8);
            Socketio.emit ("crewMood", crewMood);
            break;

        case "p4c10ChangeMood":
            b(3,9);
            Socketio.emit ("crewMood", crewMood);
            break;
            
            
        }
    });
    
    socket.on ("giveManual", giveToManual => {
        switch(giveToManual) {

            //draw random cards for moving ect
    
        case "drawAlliance":
            randomGameCards(1)
            Socketio.emit ("playerCards", playerCards);
            break;

            case "shuffleAlliance":
            reshuffleGameCards(1)
            Socketio.emit ("playerCards", playerCards);
            break;

            case "drawBorder":
            randomGameCards(2)
            Socketio.emit ("playerCards", playerCards);
            break;

            case "shuffleBorder":
            reshuffleGameCards(2)
            Socketio.emit ("playerCards", playerCards);
            break;

            case "drawRim":
            randomGameCards(3)
            Socketio.emit ("playerCards", playerCards);
            break;

            case "shuffleRim":
            reshuffleGameCards(3)
            Socketio.emit ("playerCards", playerCards);
            break;

            case "drawBounty":
            randomGameCards(4)
            Socketio.emit ("playerCards", playerCards);
            break;

            case "shuffleBounty":
            reshuffleGameCards(4)
            Socketio.emit ("playerCards", playerCards);
            break;

            case "drawMisbehave":
            randomGameCards(5)
            Socketio.emit ("playerCards", playerCards);
            break;

            case "shuffleMisbehave":
            reshuffleGameCards(5)
            Socketio.emit ("playerCards", playerCards);
            break;

            //end of draw random
            
            //draw shop

            
        
            
            
            // player 1
        case "Player1DrawAmnonDuul":
            drawJob(0, 11)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player1DrawBadger":
            drawJob(0, 12)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player1DrawFantyMingo":
            drawJob(0, 13)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player1DrawHarken":
            drawJob(0, 14)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player1DrawHarrow":
            drawJob(0, 15)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "Player1DrawHiggins":
            drawJob(0, 16)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player1DrawNiska":
            drawJob(0, 18)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player1DrawPatience":
            drawJob(0, 19)
            Socketio.emit ("playerCards", playerCards);
            break;

            // player 2

        case "Player2DrawAmnonDuul":
            drawJob(1, 11)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player2DrawBadger":
            drawJob(1, 12)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player2DrawFantyMingo":
            drawJob(1, 13)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player2DrawHarken":
            drawJob(1, 14)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player2DrawHarrow":
            drawJob(1, 15)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "Player2DrawHiggins":
            drawJob(1, 16)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player2DrawNiska":
            drawJob(1, 18)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player2DrawPatience":
            drawJob(1, 19)
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 3

        case "Player3DrawAmnonDuul":
            drawJob(2, 11)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player3DrawBadger":
            drawJob(2, 12)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player3DrawFantyMingo":
            drawJob(2, 13)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player3DrawHarken":
            drawJob(2, 14)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player3DrawHarrow":
            drawJob(2, 15)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "Player3DrawHiggins":
            drawJob(2, 16)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player3DrawNiska":
            drawJob(2, 18)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player3DrawPatience":
            drawJob(2, 19)
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 4

        case "Player4DrawAmnonDuul":
            drawJob(3, 11)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player4DrawBadger":
            drawJob(3, 12)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player4DrawFantyMingo":
            drawJob(3, 13)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player4DrawHarken":
            drawJob(3, 14)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player4DrawHarrow":
            drawJob(3, 15)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "Player4DrawHiggins":
            drawJob(3, 16)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player4DrawNiska":
            drawJob(3, 18)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "Player4DrawPatience":
            drawJob(3, 19)
            Socketio.emit ("playerCards", playerCards);
            break;

            
            //end of draw shop


        case "startJobP1C1":
            startJob(0, 1)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "startJobP1C2":
            startJob(0, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "startJobP1C3":
            startJob(0, 3)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "startJobP2C1":
            startJob(1, 1)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "startJobP2C2":
            startJob(1, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "startJobP2C3":
            startJob(1, 3)
            Socketio.emit ("playerCards", playerCards);
            break;


        case "startJobP3C1":
            startJob(2, 1)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "startJobP3C2":
            startJob(2, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "startJobP3C3":
            startJob(2, 3)
            Socketio.emit ("playerCards", playerCards);
            break;


        case "startJobP4C1":
            startJob(3, 1)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "startJobP4C2":
            startJob(3, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "startJobP4C3":
            startJob(3, 3)
            Socketio.emit ("playerCards", playerCards);
            break;
            
            
        case "finishedJobRotatePlayer1":
            finishedJobRotate(0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "finishedJobRotatePlayer2":
            finishedJobRotate(1)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "finishedJobRotatePlayer3":
            finishedJobRotate(2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "finishedJobRotatePlayer4":
            finishedJobRotate(3)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "rotateBeaumondeDiscards":
            rotateDiscardsShop(4)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "rotateMeridianDiscards":
            rotateDiscardsShop(5)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "rotateOsirisShipworksDiscards":
            rotateDiscardsShop(6)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "rotatePersephoneDiscards":
            rotateDiscardsShop(7)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "rotateReginaDiscards":
            rotateDiscardsShop(8)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "rotateSilverholdMunitionsDiscards":
            rotateDiscardsShop(9)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "rotateSpaceBazaarDiscards":
            rotateDiscardsShop(10)
            Socketio.emit ("playerCards", playerCards);
            break;

            

            //draw

        case "drawBeaumondeConsidered1Player3":
            drawShopConsidered(4, 2, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawBeaumondeConsidered2Player3":
            drawShopConsidered(4, 2, 1)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawBeaumondeConsidered3Player3":
            drawShopConsidered(4, 2, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawBeaumondeConsidered1Player1":
            drawShopConsidered(4, 0, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawBeaumondeConsidered2Player1":
            drawShopConsidered(4, 0, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawBeaumondeConsidered3Player1":
            drawShopConsidered(4, 0, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawBeaumondeConsidered1Player2":
            drawShopConsidered(4, 1, 0)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawBeaumondeConsidered2Player2":
            drawShopConsidered(4, 1, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawBeaumondeConsidered3Player2":
            drawShopConsidered(4, 1, 2)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawBeaumondeConsidered1Player4":
            drawShopConsidered(4, 3, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawBeaumondeConsidered2Player4":
            drawShopConsidered(4, 3, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawBeaumondeConsidered3Player4":
            drawShopConsidered(4, 3, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "discardBeaumondeShopConsidered1":
            discardShopConsidered1(4)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "discardBeaumondeShopConsidered2":
            discardShopConsidered2(4)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "discardBeaumondeShopConsidered3":
            discardShopConsidered3(4)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "addBeaumondeShopToConsidered":
            addShopToConsidered(4)
            Socketio.emit ("playerCards", playerCards);
            break;

            //meridian

        case "drawMeridianConsidered1Player3":
            drawShopConsidered(5, 2, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawMeridianConsidered2Player3":
            drawShopConsidered(5, 2, 1)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawMeridianConsidered3Player3":
            drawShopConsidered(5, 2, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawMeridianConsidered1Player1":
            drawShopConsidered(5, 0, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawMeridianConsidered2Player1":
            drawShopConsidered(5, 0, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawMeridianConsidered3Player1":
            drawShopConsidered(5, 0, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawMeridianConsidered1Player2":
            drawShopConsidered(5, 1, 0)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawMeridianConsidered2Player2":
            drawShopConsidered(5, 1, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawMeridianConsidered3Player2":
            drawShopConsidered(5, 1, 2)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawMeridianConsidered1Player4":
            drawShopConsidered(5, 3, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawMeridianConsidered2Player4":
            drawShopConsidered(5, 3, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawMeridianConsidered3Player4":
            drawShopConsidered(5, 3, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "discardMeridianShopConsidered1":
            discardShopConsidered1(5)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "discardMeridianShopConsidered2":
            discardShopConsidered2(5)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "discardMeridianShopConsidered3":
            discardShopConsidered3(5)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "addMeridianShopToConsidered":
            addShopToConsidered(5)
            Socketio.emit ("playerCards", playerCards);
            break;

            //osiris shipworks

            case "drawOsirisShipworksConsidered1Player3":
            drawShopConsidered(6, 2, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawOsirisShipworksConsidered2Player3":
            drawShopConsidered(6, 2, 1)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawOsirisShipworksConsidered3Player3":
            drawShopConsidered(6, 2, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawOsirisShipworksConsidered1Player1":
            drawShopConsidered(6, 0, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawOsirisShipworksConsidered2Player1":
            drawShopConsidered(6, 0, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawOsirisShipworksConsidered3Player1":
            drawShopConsidered(6, 0, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawOsirisShipworksConsidered1Player2":
            drawShopConsidered(6, 1, 0)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawOsirisShipworksConsidered2Player2":
            drawShopConsidered(6, 1, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawOsirisShipworksConsidered3Player2":
            drawShopConsidered(6, 1, 2)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawOsirisShipworksConsidered1Player4":
            drawShopConsidered(6, 3, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawOsirisShipworksConsidered2Player4":
            drawShopConsidered(6, 3, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawOsirisShipworksConsidered3Player4":
            drawShopConsidered(6, 3, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "discardOsirisShipworksShopConsidered1":
            discardShopConsidered1(6)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "discardOsirisShipworksShopConsidered2":
            discardShopConsidered2(6)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "discardOsirisShipworksShopConsidered3":
            discardShopConsidered3(6)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "addOsirisShipworksShopToConsidered":
            addShopToConsidered(6)
            Socketio.emit ("playerCards", playerCards);
            break;

            //persephone

        case "drawPersephoneConsidered1Player3":
            drawShopConsidered(7, 2, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawPersephoneConsidered2Player3":
            drawShopConsidered(7, 2, 1)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawPersephoneConsidered3Player3":
            drawShopConsidered(7, 2, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawPersephoneConsidered1Player1":
            drawShopConsidered(7, 0, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawPersephoneConsidered2Player1":
            drawShopConsidered(7, 0, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawPersephoneConsidered3Player1":
            drawShopConsidered(7, 0, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawPersephoneConsidered1Player2":
            drawShopConsidered(7, 1, 0)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawPersephoneConsidered2Player2":
            drawShopConsidered(7, 1, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawPersephoneConsidered3Player2":
            drawShopConsidered(7, 1, 2)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawPersephoneConsidered1Player4":
            drawShopConsidered(7, 3, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawPersephoneConsidered2Player4":
            drawShopConsidered(7, 3, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawPersephoneConsidered3Player4":
            drawShopConsidered(7, 3, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "discardPersephoneShopConsidered1":
            discardShopConsidered1(7)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "discardPersephoneShopConsidered2":
            discardShopConsidered2(7)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "discardPersephoneShopConsidered3":
            discardShopConsidered3(7)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "addPersephoneShopToConsidered":
            addShopToConsidered(7)
            Socketio.emit ("playerCards", playerCards);
            break;

            //regina
            
        case "drawReginaConsidered1Player3":
            drawShopConsidered(8, 2, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawReginaConsidered2Player3":
            drawShopConsidered(8, 2, 1)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawReginaConsidered3Player3":
            drawShopConsidered(8, 2, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawReginaConsidered1Player1":
            drawShopConsidered(8, 0, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawReginaConsidered2Player1":
            drawShopConsidered(8, 0, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawReginaConsidered3Player1":
            drawShopConsidered(8, 0, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawReginaConsidered1Player2":
            drawShopConsidered(8, 1, 0)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawReginaConsidered2Player2":
            drawShopConsidered(8, 1, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawReginaConsidered3Player2":
            drawShopConsidered(8, 1, 2)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawReginaConsidered1Player4":
            drawShopConsidered(8, 3, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawReginaConsidered2Player4":
            drawShopConsidered(8, 3, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawReginaConsidered3Player4":
            drawShopConsidered(8, 3, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "discardReginaShopConsidered1":
            discardShopConsidered1(8)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "discardReginaShopConsidered2":
            discardShopConsidered2(8)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "discardReginaShopConsidered3":
            discardShopConsidered3(8)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "addReginaShopToConsidered":
            addShopToConsidered(8)
            Socketio.emit ("playerCards", playerCards);
            break;

            //silverhold munitions

        case "drawSilverholdMunitionsConsidered1Player3":
            drawShopConsidered(9, 2, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawSilverholdMunitionsConsidered2Player3":
            drawShopConsidered(9, 2, 1)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawSilverholdMunitionsConsidered3Player3":
            drawShopConsidered(9, 2, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawSilverholdMunitionsConsidered1Player1":
            drawShopConsidered(9, 0, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawSilverholdMunitionsConsidered2Player1":
            drawShopConsidered(9, 0, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawSilverholdMunitionsConsidered3Player1":
            drawShopConsidered(9, 0, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawSilverholdMunitionsConsidered1Player2":
            drawShopConsidered(9, 1, 0)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawSilverholdMunitionsConsidered2Player2":
            drawShopConsidered(9, 1, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawSilverholdMunitionsConsidered3Player2":
            drawShopConsidered(9, 1, 2)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawSilverholdMunitionsConsidered1Player4":
            drawShopConsidered(9, 3, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawSilverholdMunitionsConsidered2Player4":
            drawShopConsidered(9, 3, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawSilverholdMunitionsConsidered3Player4":
            drawShopConsidered(9, 3, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "discardSilverholdMunitionsShopConsidered1":
            discardShopConsidered1(9)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "discardSilverholdMunitionsShopConsidered2":
            discardShopConsidered2(9)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "discardSilverholdMunitionsShopConsidered3":
            discardShopConsidered3(9)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "addSilverholdMunitionsShopToConsidered":
            addShopToConsidered(9)
            Socketio.emit ("playerCards", playerCards);
            break;

            //space bazaar

        case "drawSpaceBazaarConsidered1Player3":
            drawShopConsidered(10, 2, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawSpaceBazaarConsidered2Player3":
            drawShopConsidered(10, 2, 1)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawSpaceBazaarConsidered3Player3":
            drawShopConsidered(10, 2, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawSpaceBazaarConsidered1Player1":
            drawShopConsidered(10, 0, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawSpaceBazaarConsidered2Player1":
            drawShopConsidered(10, 0, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawSpaceBazaarConsidered3Player1":
            drawShopConsidered(10, 0, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawSpaceBazaarConsidered1Player2":
            drawShopConsidered(10, 1, 0)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawSpaceBazaarConsidered2Player2":
            drawShopConsidered(10, 1, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawSpaceBazaarConsidered3Player2":
            drawShopConsidered(10, 1, 2)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawSpaceBazaarConsidered1Player4":
            drawShopConsidered(10, 3, 0)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "drawSpaceBazaarConsidered2Player4":
            drawShopConsidered(10, 3, 1)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "drawSpaceBazaarConsidered3Player4":
            drawShopConsidered(10, 3, 2)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "discardSpaceBazaarShopConsidered1":
            discardShopConsidered1(10)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "discardSpaceBazaarShopConsidered2":
            discardShopConsidered2(10)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "discardSpaceBazaarShopConsidered3":
            discardShopConsidered3(10)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "addSpaceBazaarShopToConsidered":
            addShopToConsidered(10)
            Socketio.emit ("playerCards", playerCards);
            break;

            //end of draw
            
        case "addMeridianShopToConsidered":
            addShopToConsidered(5)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "addOsirisShipworksShopToConsidered":
            addShopToConsidered(6)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "addPersephoneShopToConsidered":
            addShopToConsidered(7)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "addReginaShopToConsidered":
            addShopToConsidered(8)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "addSilverholdMunitionsShopToConsidered":
            addShopToConsidered(9)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "addSpaceBazaarShopToConsidered":
            addShopToConsidered(10)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "addBeaumondeShopDiscardToConsidered":
            addShopDiscardToConsidered(4)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "addMeridianShopDiscardToConsidered":
            addShopDiscardToConsidered(5)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "addOsirisShipworksShopDiscardToConsidered":
            addShopDiscardToConsidered(6)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "addPersephoneShopDiscardToConsidered":
            addShopDiscardToConsidered(7)
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "addReginaShopDiscardToConsidered":
            addShopDiscardToConsidered(8)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "addSilverholdMunitionsShopDiscardToConsidered":
            addShopDiscardToConsidered(9)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "addSpaceBazaarShopDiscardToConsidered":
            addShopDiscardToConsidered(10)
            Socketio.emit ("playerCards", playerCards);
            break;

        case "rotateDiscardsBeaumonde":
            rotateDiscardsBeaumonde()
            Socketio.emit ("playerCards", playerCards);
            break;
        case "rotateDiscardsMeridian":
            rotateDiscardsMeridian()
            Socketio.emit ("playerCards", playerCards);
            break;
        case "rotateDiscardsOsirisShipworks":
            rotateDiscardsMeridian()
            Socketio.emit ("playerCards", playerCards);
            break;
        case "rotateDiscardsPersephone":
            rotateDiscardsMeridian()
            Socketio.emit ("playerCards", playerCards);
            break;
        case "rotateDiscardsRegina":
            rotateDiscardsMeridian()
            Socketio.emit ("playerCards", playerCards);
            break;
        case "rotateDiscardsSilverholdMunitions":
            rotateDiscardsMeridian()
            Socketio.emit ("playerCards", playerCards);
            break;
        case "rotateDiscardsSpaceBazaar":
            rotateDiscardsMeridian()
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p3Discard1":
            p3c1giveToDiscard()
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Give1ToP1":

            p3c1giveToX
            //getting
            (playerCards[0][1],
             //doing giving and giving chosen weren't working,
             //so they are put in manually
            );
           
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Priv1GiveMain":
            //p3Priv1SwitchMain1
            p3c1PrivGiveToMain();
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 1 giving
            

        case "p1CrewC1P2":

            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1CrewC2P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
            
        case "p1CrewC3P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p1CrewC4P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p1CrewC5P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                5)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1CrewC6P2":

            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1CrewC7P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1CrewC8P2":

            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1CrewC9P2":

            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1CrewC10P2":

            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC1P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC2P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                2)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC3P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                3)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC4P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC5P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                5)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC6P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                6)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC7P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p1ItemsC8P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC9P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC10P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;

            
            

            //p1 cards to p3
            

        case "p1CrewC1P3":

            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1CrewC2P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
            
        case "p1CrewC3P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p1CrewC4P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p1CrewC5P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                5)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1CrewC6P3":

            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1CrewC7P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1CrewC8P3":

            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1CrewC9P3":

            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1CrewC10P3":

            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC1P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC2P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                2)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC3P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                3)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC4P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC5P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                5)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC6P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                6)

            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1ItemsC7P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1ItemsC8P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC9P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC10P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;
            
            
            //p1 cards to p4


        case "p1CrewC1P4":

            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1CrewC2P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
            
        case "p1CrewC3P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p1CrewC4P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p1CrewC5P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                5)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1CrewC6P4":

            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1CrewC7P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1CrewC8P4":

            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1CrewC9P4":

            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1CrewC10P4":

            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                0,
                //giving deck
                0,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC1P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC2P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                2)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC3P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                3)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC4P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC5P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                5)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC6P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                6)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC7P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC8P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC9P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1ItemsC10P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                0,
                //giving deck
                2,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;


            //player 2 giving



        case "p2CrewC1P1":

            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2CrewC2P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
            
        case "p2CrewC3P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p2CrewC4P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p2CrewC5P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                5)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2CrewC6P1":

            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2CrewC7P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2CrewC8P1":

            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2CrewC9P1":

            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2CrewC10P1":

            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC1P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC2P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                2)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC3P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                3)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC4P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC5P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                5)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC6P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                6)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC7P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p2ItemsC8P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC9P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC10P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;

            
            

            //p2 cards to p3
            

        case "p2CrewC1P3":

            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2CrewC2P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
            
        case "p2CrewC3P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p2CrewC4P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p2CrewC5P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                5)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2CrewC6P3":

            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2CrewC7P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p2CrewC8P3":

            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2CrewC9P3":

            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2CrewC10P3":

            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC1P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC2P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                2)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC3P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                3)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC4P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC5P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                5)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC6P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                6)

            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2ItemsC7P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2ItemsC8P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC9P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC10P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;
            
            
            //p2 cards to p4


        case "p2CrewC1P4":

            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2CrewC2P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
            
        case "p2CrewC3P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p2CrewC4P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p2CrewC5P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                5)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2CrewC6P4":

            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2CrewC7P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2CrewC8P4":

            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2CrewC9P4":

            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2CrewC10P4":

            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                1,
                //giving deck
                0,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC1P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC2P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                2)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC3P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                3)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC4P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC5P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                5)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC6P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                6)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC7P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC8P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC9P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2ItemsC10P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                1,
                //giving deck
                2,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;
            

            
            
            //player 3 giving
            
        case "p3CrewC1P1":

            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

                    case "p3CrewC2P1":

            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                2)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3CrewC3P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p3CrewC4P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p3CrewC5P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                5)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3CrewC6P1":

            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3CrewC7P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3CrewC8P1":

            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3CrewC9P1":

            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3CrewC10P1":

            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC1P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC2P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                2)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC3P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                3)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC4P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC5P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                5)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC6P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                6)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC7P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p3ItemsC8P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC9P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC10P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;

            
            

            //p3 cards to p2
            

        case "p3CrewC1P2":

            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3CrewC2P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
            
        case "p3CrewC3P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p3CrewC4P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p3CrewC5P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                5)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3CrewC6P2":

            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3CrewC7P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3CrewC8P2":

            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3CrewC9P2":

            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3CrewC10P2":

            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC1P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC2P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                2)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC3P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                3)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC4P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC5P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                5)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC6P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                6)

            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3ItemsC7P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3ItemsC8P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC9P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC10P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;
            
            
            //p3 cards to p4


        case "p3CrewC1P4":

            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3CrewC2P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
            
        case "p3CrewC3P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p3CrewC4P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p3CrewC5P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                5)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3CrewC6P4":

            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3CrewC7P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3CrewC8P4":

            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3CrewC9P4":

            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3CrewC10P4":

            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                0,
                //giving player
                2,
                //giving deck
                0,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC1P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC2P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                2)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC3P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                3)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC4P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC5P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                5)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC6P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                6)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC7P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC8P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC9P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3ItemsC10P4":
            
            giveReplaceEmpty(
                //receiving player
                3,
                //receiving deck
                2,
                //giving player
                2,
                //giving deck
                2,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;
            
            //player 4 giving


        case "p4CrewC1P1":

            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4CrewC2P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
            
        case "p4CrewC3P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p4CrewC4P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p4CrewC5P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                5)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4CrewC6P1":

            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4CrewC7P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4CrewC8P1":

            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4CrewC9P1":

            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4CrewC10P1":

            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC1P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC2P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                2)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC3P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                3)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC4P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC5P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                5)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC6P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                6)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC7P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p4ItemsC8P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC9P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC10P1":
            
            giveReplaceEmpty(
                //receiving player
                0,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;

            
            

            //p4 cards to p2
            

        case "p4CrewC1P2":

            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4CrewC2P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
            
        case "p4CrewC3P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p4CrewC4P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p4CrewC5P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                5)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4CrewC6P2":

            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4CrewC7P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4CrewC8P2":

            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4CrewC9P2":

            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4CrewC10P2":

            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC1P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC2P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                2)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC3P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                3)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC4P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC5P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                5)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC6P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                6)

            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4ItemsC7P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4ItemsC8P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC9P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC10P2":
            
            giveReplaceEmpty(
                //receiving player
                1,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;
            
            
            //p4 cards to p3


        case "p4CrewC1P3":

            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4CrewC2P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
            
        case "p4CrewC3P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p4CrewC4P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
        case "p4CrewC5P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                5)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4CrewC6P3":

            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4CrewC7P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4CrewC8P3":

            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4CrewC9P3":

            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4CrewC10P3":

            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                0,
                //giving player
                3,
                //giving deck
                0,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC1P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                1)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC2P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                2)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC3P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                3)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC4P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC5P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                5)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC6P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                6)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC7P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                7)

            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4ItemsC8P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                8)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC9P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                9)

            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4ItemsC10P3":
            
            giveReplaceEmpty(
                //receiving player
                2,
                //receiving deck
                2,
                //giving player
                3,
                //giving deck
                2,
                //giving card
                10)

            Socketio.emit ("playerCards", playerCards);
            break;
            
            
            //end of player gives

            //discards

            //DISCARDS player 1

        case "p1DiscardCrew1":
            
            discard(
                //player
                0,
                //deck
                0,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardCrew2":
            
            discard(
                //player
                0,
                //deck
                0,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardCrew3":
            
            discard(
                //player
                0,
                //deck
                0,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardCrew4":
            
            discard(
                //player
                0,
                //deck
                0,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardCrew6":
            
            discard(
                //player
                0,
                //deck
                0,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardCrew7":
            
            discard(
                //player
                0,
                //deck
                0,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardCrew8":
            
            discard(
                //player
                0,
                //deck
                0,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1DiscardCrew9":
            
            discard(
                //player
                0,
                //deck
                0,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1DiscardCrew10":
            
            discard(
                //player
                0,
                //deck
                0,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 1 private

            case "p1DiscardPrivate1":
            
            discard(
                //player
                0,
                //deck
                1,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardPrivate2":
            
            discard(
                //player
                0,
                //deck
                1,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardPrivate3":
            
            discard(
                //player
                0,
                //deck
                1,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardPrivate4":
            
            discard(
                //player
                0,
                //deck
                1,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardPrivate6":
            
            discard(
                //player
                0,
                //deck
                1,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardPrivate7":
            
            discard(
                //player
                0,
                //deck
                1,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardPrivate8":
            
            discard(
                //player
                0,
                //deck
                1,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1DiscardPrivate9":
            
            discard(
                //player
                0,
                //deck
                1,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1DiscardPrivate10":
            
            discard(
                //player
                0,
                //deck
                1,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 1 items

            case "p1DiscardItems1":
            
            discard(
                //player
                0,
                //deck
                2,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardItems2":
            
            discard(
                //player
                0,
                //deck
                2,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardItems3":
            
            discard(
                //player
                0,
                //deck
                2,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardItems4":
            
            discard(
                //player
                0,
                //deck
                2,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardItems6":
            
            discard(
                //player
                0,
                //deck
                2,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardItems7":
            
            discard(
                //player
                0,
                //deck
                2,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardItems8":
            
            discard(
                //player
                0,
                //deck
                2,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1DiscardItems9":
            
            discard(
                //player
                0,
                //deck
                2,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1DiscardItems10":
            
            discard(
                //player
                0,
                //deck
                2,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 1 ship upgrades

            case "p1DiscardUpgrades1":
            
            discard(
                //player
                0,
                //deck
                7,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardUpgrades2":
            
            discard(
                //player
                0,
                //deck
                3,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardUpgrades3":
            
            discard(
                //player
                0,
                //deck
                3,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardUpgrades4":
            
            discard(
                //player
                0,
                //deck
                3,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardUpgrades6":
            
            discard(
                //player
                0,
                //deck
                3,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardUpgrades7":
            
            discard(
                //player
                0,
                //deck
                3,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardUpgrades8":
            
            discard(
                //player
                0,
                //deck
                3,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1DiscardUpgrades9":
            
            discard(
                //player
                0,
                //deck
                3,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1DiscardUpgrades10":
            
            discard(
                //player
                0,
                //deck
                3,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 1 jobs


        case "p1DiscardJobsStarted1":
            
            discard(
                //player
                0,
                //deck
                6,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1DiscardJobsStarted2":
            
            discard(
                //player
                0,
                //deck
                6,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1DiscardJobsStarted3":
            
            discard(
                //player
                0,
                //deck
                6,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;



        case "p2DiscardJobsStarted1":
            
            discard(
                //player
                1,
                //deck
                6,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2DiscardJobsStarted2":
            
            discard(
                //player
                1,
                //deck
                6,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2DiscardJobsStarted3":
            
            discard(
                //player
                1,
                //deck
                6,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;


        case "p3DiscardJobsStarted1":
            
            discard(
                //player
                2,
                //deck
                6,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3DiscardJobsStarted2":
            
            discard(
                //player
                2,
                //deck
                6,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3DiscardJobsStarted3":
            
            discard(
                //player
                2,
                //deck
                6,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;


        case "p4DiscardJobsStarted1":
            
            discard(
                //player
                2,
                //deck
                6,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4DiscardJobsStarted2":
            
            discard(
                //player
                3,
                //deck
                6,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4DiscardJobsStarted3":
            
            discard(
                //player
                3,
                //deck
                6,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            

        case "p1DiscardJobs1":
            
            discard(
                //player
                0,
                //deck
                4,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardJobs2":
            
            discard(
                //player
                0,
                //deck
                4,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardJobs3":
            
            discard(
                //player
                0,
                //deck
                4,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardJobs4":
            
            discard(
                //player
                0,
                //deck
                4,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardJobs6":
            
            discard(
                //player
                0,
                //deck
                4,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardJobs7":
            
            discard(
                //player
                0,
                //deck
                4,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardJobs8":
            
            discard(
                //player
                0,
                //deck
                4,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1DiscardJobs9":
            
            discard(
                //player
                0,
                //deck
                4,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1DiscardJobs10":
            
            discard(
                //player
                0,
                //deck
                4,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 1 Universe
            
        case "p1DiscardUniverse1":
            
            discard(
                //player
                0,
                //deck
                5,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardUniverse2":
            
            discard(
                //player
                0,
                //deck
                5,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardUniverse3":
            
            discard(
                //player
                0,
                //deck
                5,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardUniverse4":
            
            discard(
                //player
                0,
                //deck
                5,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardUniverse6":
            
            discard(
                //player
                0,
                //deck
                5,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardUniverse7":
            
            discard(
                //player
                0,
                //deck
                5,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1DiscardUniverse8":
            
            discard(
                //player
                0,
                //deck
                5,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1DiscardUniverse9":
            
            discard(
                //player
                0,
                //deck
                5,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1DiscardUniverse10":
            
            discard(
                //player
                0,
                //deck
                5,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break; 

            //DISCARDS player 2

            //player 2 discard crew

        case "p2DiscardCrew1":
            
            discard(
                //player
                1,
                //deck
                0,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardCrew2":
            
            discard(
                //player
                1,
                //deck
                0,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardCrew3":
            
            discard(
                //player
                1,
                //deck
                0,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2DiscardCrew4":
            
            discard(
                //player
                1,
                //deck
                0,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardCrew6":
            
            discard(
                //player
                1,
                //deck
                0,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardCrew7":
            
            discard(
                //player
                1,
                //deck
                0,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardCrew8":
            
            discard(
                //player
                1,
                //deck
                0,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2DiscardCrew9":
            
            discard(
                //player
                1,
                //deck
                0,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2DiscardCrew10":
            
            discard(
                //player
                1,
                //deck
                0,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 2 private

            case "p2DiscardPrivate1":
            
            discard(
                //player
                1,
                //deck
                1,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardPrivate2":
            
            discard(
                //player
                1,
                //deck
                1,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardPrivate3":
            
            discard(
                //player
                1,
                //deck
                1,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardPrivate4":
            
            discard(
                //player
                1,
                //deck
                1,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardPrivate6":
            
            discard(
                //player
                1,
                //deck
                1,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardPrivate7":
            
            discard(
                //player
                1,
                //deck
                1,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardPrivate8":
            
            discard(
                //player
                1,
                //deck
                1,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2DiscardPrivate9":
            
            discard(
                //player
                1,
                //deck
                1,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2DiscardPrivate10":
            
            discard(
                //player
                1,
                //deck
                1,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 2 items

            case "p2DiscardItems1":
            
            discard(
                //player
                1,
                //deck
                2,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardItems2":
            
            discard(
                //player
                1,
                //deck
                2,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardItems3":
            
            discard(
                //player
                1,
                //deck
                2,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardItems4":
            
            discard(
                //player
                1,
                //deck
                2,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardItems6":
            
            discard(
                //player
                1,
                //deck
                2,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardItems7":
            
            discard(
                //player
                1,
                //deck
                2,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardItems8":
            
            discard(
                //player
                1,
                //deck
                2,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2DiscardItems9":
            
            discard(
                //player
                1,
                //deck
                2,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2DiscardItems10":
            
            discard(
                //player
                1,
                //deck
                2,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 2 ship upgrades

            case "p2DiscardUpgrades1":
            
            discard(
                //player
                1,
                //deck
                7,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardUpgrades2":
            
            discard(
                //player
                1,
                //deck
                3,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardUpgrades3":
            
            discard(
                //player
                1,
                //deck
                3,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardUpgrades4":
            
            discard(
                //player
                1,
                //deck
                3,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardUpgrades6":
            
            discard(
                //player
                1,
                //deck
                3,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardUpgrades7":
            
            discard(
                //player
                1,
                //deck
                3,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardUpgrades8":
            
            discard(
                //player
                1,
                //deck
                3,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2DiscardUpgrades9":
            
            discard(
                //player
                1,
                //deck
                3,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2DiscardUpgrades10":
            
            discard(
                //player
                1,
                //deck
                3,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 2 jobs

        case "p2DiscardJobs1":
            
            discard(
                //player
                1,
                //deck
                4,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardJobs2":
            
            discard(
                //player
                1,
                //deck
                4,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardJobs3":
            
            discard(
                //player
                1,
                //deck
                4,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardJobs4":
            
            discard(
                //player
                1,
                //deck
                4,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardJobs6":
            
            discard(
                //player
                1,
                //deck
                4,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardJobs7":
            
            discard(
                //player
                1,
                //deck
                4,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardJobs8":
            
            discard(
                //player
                1,
                //deck
                4,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2DiscardJobs9":
            
            discard(
                //player
                1,
                //deck
                4,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2DiscardJobs10":
            
            discard(
                //player
                1,
                //deck
                4,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 2 Universe
            
        case "p2DiscardUniverse1":
            
            discard(
                //player
                1,
                //deck
                5,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardUniverse2":
            
            discard(
                //player
                1,
                //deck
                5,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardUniverse3":
            
            discard(
                //player
                1,
                //deck
                5,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardUniverse4":
            
            discard(
                //player
                1,
                //deck
                5,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardUniverse6":
            
            discard(
                //player
                1,
                //deck
                5,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardUniverse7":
            
            discard(
                //player
                1,
                //deck
                5,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardUniverse8":
            
            discard(
                //player
                1,
                //deck
                5,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2DiscardUniverse9":
            
            discard(
                //player
                1,
                //deck
                5,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2DiscardUniverse10":
            
            discard(
                //player
                1,
                //deck
                5,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
            //DISCARDS player 3

            case "p3DiscardCrew1":
            
            discard(
                //player
                2,
                //deck
                0,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardCrew2":
            
            discard(
                //player
                2,
                //deck
                0,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardCrew3":
            
            discard(
                //player
                2,
                //deck
                0,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardCrew4":
            
            discard(
                //player
                2,
                //deck
                0,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardCrew6":
            
            discard(
                //player
                2,
                //deck
                0,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardCrew7":
            
            discard(
                //player
                2,
                //deck
                0,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardCrew8":
            
            discard(
                //player
                2,
                //deck
                0,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3DiscardCrew9":
            
            discard(
                //player
                2,
                //deck
                0,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3DiscardCrew10":
            
            discard(
                //player
                2,
                //deck
                0,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 3 private

            case "p3DiscardPrivate1":
            
            discard(
                //player
                2,
                //deck
                1,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardPrivate2":
            
            discard(
                //player
                2,
                //deck
                1,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardPrivate3":
            
            discard(
                //player
                2,
                //deck
                1,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardPrivate4":
            
            discard(
                //player
                2,
                //deck
                1,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardPrivate6":
            
            discard(
                //player
                2,
                //deck
                1,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardPrivate7":
            
            discard(
                //player
                2,
                //deck
                1,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardPrivate8":
            
            discard(
                //player
                2,
                //deck
                1,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3DiscardPrivate9":
            
            discard(
                //player
                2,
                //deck
                1,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3DiscardPrivate10":
            
            discard(
                //player
                2,
                //deck
                1,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 3 items

            case "p3DiscardItems1":
            
            discard(
                //player
                2,
                //deck
                2,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardItems2":
            
            discard(
                //player
                2,
                //deck
                2,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardItems3":
            
            discard(
                //player
                2,
                //deck
                2,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardItems4":
            
            discard(
                //player
                2,
                //deck
                2,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardItems6":
            
            discard(
                //player
                2,
                //deck
                2,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardItems7":
            
            discard(
                //player
                2,
                //deck
                2,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardItems8":
            
            discard(
                //player
                2,
                //deck
                2,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3DiscardItems9":
            
            discard(
                //player
                2,
                //deck
                2,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3DiscardItems10":
            
            discard(
                //player
                2,
                //deck
                2,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 3 ship upgrades

            case "p3DiscardUpgrades1":
            
            discard(
                //player
                2,
                //deck
                7,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardUpgrades2":
            
            discard(
                //player
                2,
                //deck
                3,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardUpgrades3":
            
            discard(
                //player
                2,
                //deck
                3,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardUpgrades4":
            
            discard(
                //player
                2,
                //deck
                3,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardUpgrades6":
            
            discard(
                //player
                2,
                //deck
                3,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardUpgrades7":
            
            discard(
                //player
                2,
                //deck
                3,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardUpgrades8":
            
            discard(
                //player
                2,
                //deck
                3,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3DiscardUpgrades9":
            
            discard(
                //player
                2,
                //deck
                3,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3DiscardUpgrades10":
            
            discard(
                //player
                2,
                //deck
                3,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 3 jobs


            case "p1DiscardJobsStarted1":
            
            discard(
                //player
                0,
                //deck
                6,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1DiscardJobsStarted2":
            
            discard(
                //player
                0,
                //deck
                6,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1DiscardJobsStarted3":
            
            discard(
                //player
                0,
                //deck
                6,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            

            case "p2DiscardJobsStarted1":
            
            discard(
                //player
                1,
                //deck
                6,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2DiscardJobsStarted2":
            
            discard(
                //player
                1,
                //deck
                6,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2DiscardJobsStarted3":
            
            discard(
                //player
                1,
                //deck
                6,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            

            case "p4DiscardJobsStarted1":
            
            discard(
                //player
                3,
                //deck
                6,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4DiscardJobsStarted2":
            
            discard(
                //player
                3,
                //deck
                6,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4DiscardJobsStarted3":
            
            discard(
                //player
                3,
                //deck
                6,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            

        case "p3DiscardJobsStarted1":
            
            discard(
                //player
                2,
                //deck
                6,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3DiscardJobsStarted2":
            
            discard(
                //player
                2,
                //deck
                6,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3DiscardJobsStarted3":
            
            discard(
                //player
                2,
                //deck
                6,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
            
        case "p3DiscardJobs1":
            
            discard(
                //player
                2,
                //deck
                4,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3FinishedJobs1":
            
            finishedJob(
                //player
                2,
                //deck
                6,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1FinishedJobs1":
            
            finishedJob(
                //player
                0,
                //deck
                6,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2FinishedJobs1":
            
            finishedJob(
                //player
                1,
                //deck
                6,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4FinishedJobs1":
            
            finishedJob(
                //player
                3,
                //deck
                6,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3DiscardJobs2":
            
            discard(
                //player
                2,
                //deck
                4,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3DiscardJobs3":
            
            discard(
                //player
                2,
                //deck
                4,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1DiscardJobs2":
            
            discard(
                //player
                0,
                //deck
                4,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2DiscardJobs2":
            
            discard(
                //player
                1,
                //deck
                4,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardJobs2":
            
            discard(
                //player
                3,
                //deck
                4,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3FinishedJobs2":
            
            finishedJob(
                //player
                2,
                //deck
                6,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1FinishedJobs2":
            
            finishedJob(
                //player
                0,
                //deck
                6,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2FinishedJobs2":
            
            finishedJob(
                //player
                1,
                //deck
                6,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3FinishedJobs2":
            
            finishedJob(
                //player
                2,
                //deck
                6,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardJobs3":
            
            discard(
                //player
                3,
                //deck
                4,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3FinishedJobs3":
            
            finishedJob(
                //player
                2,
                //deck
                6,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p1FinishedJobs3":
            
            finishedJob(
                //player
                0,
                //deck
                6,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p2FinishedJobs3":
            
            finishedJob(
                //player
                1,
                //deck
                6,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4FinishedJobs3":
            
            finishedJob(
                //player
                3,
                //deck
                6,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardJobs4":
            
            discard(
                //player
                2,
                //deck
                4,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardJobs6":
            
            discard(
                //player
                2,
                //deck
                4,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardJobs7":
            
            discard(
                //player
                2,
                //deck
                4,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardJobs8":
            
            discard(
                //player
                2,
                //deck
                4,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3DiscardJobs9":
            
            discard(
                //player
                2,
                //deck
                4,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3DiscardJobs10":
            
            discard(
                //player
                2,
                //deck
                4,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 3 Universe
            
        case "p3DiscardUniverse1":
            
            discard(
                //player
                2,
                //deck
                5,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardUniverse2":
            
            discard(
                //player
                2,
                //deck
                5,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardUniverse3":
            
            discard(
                //player
                2,
                //deck
                5,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardUniverse4":
            
            discard(
                //player
                2,
                //deck
                5,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardUniverse6":
            
            discard(
                //player
                2,
                //deck
                5,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardUniverse7":
            
            discard(
                //player
                2,
                //deck
                5,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p3DiscardUniverse8":
            
            discard(
                //player
                2,
                //deck
                5,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3DiscardUniverse9":
            
            discard(
                //player
                2,
                //deck
                5,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3DiscardUniverse10":
            
            discard(
                //player
                2,
                //deck
                5,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //DISCARDS player 4

            //player 4 crew

        case "p4DiscardCrew1":
            
            discard(
                //player
                3,
                //deck
                0,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardCrew2":
            
            discard(
                //player
                3,
                //deck
                0,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardCrew3":
            
            discard(
                //player
                3,
                //deck
                0,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardCrew4":
            
            discard(
                //player
                3,
                //deck
                0,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardCrew6":
            
            discard(
                //player
                3,
                //deck
                0,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardCrew7":
            
            discard(
                //player
                3,
                //deck
                0,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardCrew8":
            
            discard(
                //player
                3,
                //deck
                0,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4DiscardCrew9":
            
            discard(
                //player
                3,
                //deck
                0,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4DiscardCrew10":
            
            discard(
                //player
                3,
                //deck
                0,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 3 private

            case "p4DiscardPrivate1":
            
            discard(
                //player
                3,
                //deck
                1,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardPrivate2":
            
            discard(
                //player
                3,
                //deck
                1,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardPrivate3":
            
            discard(
                //player
                3,
                //deck
                1,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardPrivate4":
            
            discard(
                //player
                3,
                //deck
                1,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardPrivate6":
            
            discard(
                //player
                3,
                //deck
                1,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardPrivate7":
            
            discard(
                //player
                3,
                //deck
                1,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardPrivate8":
            
            discard(
                //player
                3,
                //deck
                1,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4DiscardPrivate9":
            
            discard(
                //player
                3,
                //deck
                1,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4DiscardPrivate10":
            
            discard(
                //player
                3,
                //deck
                1,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 3 items

            case "p4DiscardItems1":
            
            discard(
                //player
                3,
                //deck
                2,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardItems2":
            
            discard(
                //player
                3,
                //deck
                2,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardItems3":
            
            discard(
                //player
                3,
                //deck
                2,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardItems4":
            
            discard(
                //player
                3,
                //deck
                2,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardItems6":
            
            discard(
                //player
                3,
                //deck
                2,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardItems7":
            
            discard(
                //player
                3,
                //deck
                2,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardItems8":
            
            discard(
                //player
                3,
                //deck
                2,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4DiscardItems9":
            
            discard(
                //player
                3,
                //deck
                2,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4DiscardItems10":
            
            discard(
                //player
                3,
                //deck
                2,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 3 ship upgrades

            case "p4DiscardUpgrades1":
            
            discard(
                //player
                3,
                //deck
                7,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardUpgrades2":
            
            discard(
                //player
                3,
                //deck
                3,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardUpgrades3":
            
            discard(
                //player
                3,
                //deck
                3,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardUpgrades4":
            
            discard(
                //player
                3,
                //deck
                3,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardUpgrades6":
            
            discard(
                //player
                3,
                //deck
                3,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardUpgrades7":
            
            discard(
                //player
                3,
                //deck
                3,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardUpgrades8":
            
            discard(
                //player
                3,
                //deck
                3,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4DiscardUpgrades9":
            
            discard(
                //player
                3,
                //deck
                3,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4DiscardUpgrades10":
            
            discard(
                //player
                3,
                //deck
                3,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 3 jobs

        case "p4DiscardJobs1":
            
            discard(
                //player
                3,
                //deck
                4,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardJobs2":
            
            discard(
                //player
                3,
                //deck
                4,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardJobs3":
            
            discard(
                //player
                3,
                //deck
                4,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardJobs4":
            
            discard(
                //player
                3,
                //deck
                4,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardJobs6":
            
            discard(
                //player
                3,
                //deck
                4,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardJobs7":
            
            discard(
                //player
                3,
                //deck
                4,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardJobs8":
            
            discard(
                //player
                3,
                //deck
                4,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4DiscardJobs9":
            
            discard(
                //player
                3,
                //deck
                4,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4DiscardJobs10":
            
            discard(
                //player
                3,
                //deck
                4,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 3 Universe
            
        case "p4DiscardUniverse1":
            
            discard(
                //player
                3,
                //deck
                5,
                //giving card
                1)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardUniverse2":
            
            discard(
                //player
                3,
                //deck
                5,
                //giving card
                2)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardUniverse3":
            
            discard(
                //player
                3,
                //deck
                5,
                //giving card
                3)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardUniverse4":
            
            discard(
                //player
                3,
                //deck
                5,
                //giving card
                4)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardUniverse6":
            
            discard(
                //player
                3,
                //deck
                5,
                //giving card
                6)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardUniverse7":
            
            discard(
                //player
                3,
                //deck
                5,
                //giving card
                7)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            case "p4DiscardUniverse8":
            
            discard(
                //player
                3,
                //deck
                5,
                //giving card
                8)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4DiscardUniverse9":
            
            discard(
                //player
                3,
                //deck
                5,
                //giving card
                9)
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4DiscardUniverse10":
            
            discard(
                //player
                3,
                //deck
                5,
                //giving card
                10)
            
            Socketio.emit ("playerCards", playerCards);
            break;

            
            
            //end of discards


            
        case "p3Priv1SwitchMain":
            
            swapPriv2(2,1);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
            //player 3 moving around crew

        case "p3Priv2SwitchMain":
            
            swapPriv2(2,2);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3Priv3SwitchMain":
            
            swapPriv2(2,3);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3Priv4SwitchMain":
            
            swapPriv2(2,4);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p3Priv5SwitchMain":
            
            swapPriv2(2,5);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Priv6SwitchMain":
            
            swapPriv2(2,6);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Priv7SwitchMain":
            
            swapPriv2(2,7);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Priv8SwitchMain":
            
            swapPriv2(2,8);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Priv9SwitchMain":
            
            swapPriv2(2,9);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Priv10SwitchMain":
            
            swapPriv2(2,10);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Switch1To2":
            
            swap(playerCards[2][0],1,2);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Switch2To3":
            
            swap(playerCards[2][0],2,3);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Switch3To4":
            
            swap(playerCards[2][0],3,4);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Switch4To5":
            
            swap(playerCards[2][0],4,5);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Switch5To6":
            
            swap(playerCards[2][0],5,6);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Switch6To7":
            
            swap(playerCards[2][0],6,7);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Switch7To8":
            
            swap(playerCards[2][0],7,8);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Switch8To9":
            
            swap(playerCards[2][0],8,9);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3Switch9To10":
            
            swap(playerCards[2][0],9,10);
            
            Socketio.emit ("playerCards", playerCards);
            break;


            //player 3 moving around items
            
        case "p3SwitchItems1To2":
            
            swap(playerCards[2][2],1,2);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchItems2To3":
            
            swap(playerCards[2][2],2,3);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchItems3To4":
            
            swap(playerCards[2][2],3,4);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchItems4To5":
            
            swap(playerCards[2][2],4,5);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchItems5To6":
            
            swap(playerCards[2][2],5,6);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchItems6To7":
            
            swap(playerCards[2][2],6,7);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchItems7To8":
            
            swap(playerCards[2][2],7,8);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchItems8To9":
            
            swap(playerCards[2][2],8,9);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchItems9To10":
            
            swap(playerCards[2][2],9,10);
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "nextScenario":
            
            nextScenario();
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 3 private switching around

        case "p3SwitchPriv1To2":
            
            swap(playerCards[2][1],1,2);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchPriv2To3":
            
            swap(playerCards[2][1],2,3);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchPriv3To4":
            
            swap(playerCards[2][1],3,4);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchPriv4To5":
            
            swap(playerCards[2][1],4,5);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchPriv5To6":
            
            swap(playerCards[2][1],5,6);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchPriv6To7":
            
            swap(playerCards[2][1],6,7);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchPriv7To8":
            
            swap(playerCards[2][1],7,8);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchPriv8To9":
            
            swap(playerCards[2][1],8,9);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p3SwitchPriv9To10":
            
            swap(playerCards[2][1],9,10);
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 4 switching

        case "p4Priv1SwitchMain":
            
            swapPriv2(3,1);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
            //player 4 moving around crew

        case "p4Priv2SwitchMain":
            
            swapPriv2(3,2);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4Priv3SwitchMain":
            
            swapPriv2(3,3);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4Priv4SwitchMain":
            
            swapPriv2(3,4);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4Priv5SwitchMain":
            
            swapPriv2(3,5);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4Priv6SwitchMain":
            
            swapPriv2(3,6);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4Priv7SwitchMain":
            
            swapPriv2(3,7);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4Priv8SwitchMain":
            
            swapPriv2(3,8);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4Priv9SwitchMain":
            
            swapPriv2(3,9);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4Priv10SwitchMain":
            
            swapPriv2(3,10);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4Switch1To2":
            
            swap(playerCards[3][0],1,2);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4Switch2To3":
            
            swap(playerCards[3][0],2,3);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4Switch3To4":
            
            swap(playerCards[3][0],3,4);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4Switch4To5":
            
            swap(playerCards[3][0],4,5);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4Switch5To6":
            
            swap(playerCards[3][0],5,6);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4Switch6To7":
            
            swap(playerCards[3][0],6,7);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4Switch7To8":
            
            swap(playerCards[3][0],7,8);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4Switch8To9":
            
            swap(playerCards[3][0],8,9);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4Switch9To10":
            
            swap(playerCards[3][0],9,10);
            
            Socketio.emit ("playerCards", playerCards);
            break;


            //player 4 moving around items
            
        case "p4SwitchItems1To2":
            
            swap(playerCards[3][2],1,2);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4SwitchItems2To3":
            
            swap(playerCards[3][2],2,3);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4SwitchItems3To4":
            
            swap(playerCards[3][2],3,4);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4SwitchItems4To5":
            
            swap(playerCards[3][2],4,5);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4SwitchItems5To6":
            
            swap(playerCards[3][2],5,6);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4SwitchItems6To7":
            
            swap(playerCards[3][2],6,7);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4SwitchItems7To8":
            
            swap(playerCards[3][2],7,8);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4SwitchItems8To9":
            
            swap(playerCards[3][2],8,9);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4SwitchItems9To10":
            
            swap(playerCards[3][2],9,10);
            
            Socketio.emit ("playerCards", playerCards);
            break;


            //player 4 private switching around

            case "p4SwitchPriv1To2":
            
            swap(playerCards[3][1],1,2);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4SwitchPriv2To3":
            
            swap(playerCards[3][1],2,3);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4SwitchPriv3To4":
            
            swap(playerCards[3][1],3,4);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4SwitchPriv4To5":
            
            swap(playerCards[3][1],4,5);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4SwitchPriv5To6":
            
            swap(playerCards[3][1],5,6);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4SwitchPriv6To7":
            
            swap(playerCards[3][1],6,7);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4SwitchPriv7To8":
            
            swap(playerCards[3][1],7,8);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4SwitchPriv8To9":
            
            swap(playerCards[3][1],8,9);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p4SwitchPriv9To10":
            
            swap(playerCards[3][1],9,10);
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p4Switch1To1Priv":
            
            swapPriv(playerCards[3],1,1);
            
            Socketio.emit ("playerCards", playerCards);
            break;

            //player 2 switching


        case "p2Priv1SwitchMain":
            
            swapPriv2(1,1);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
            //player 4 moving around crew

        case "p2Priv2SwitchMain":
            
            swapPriv2(1,2);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2Priv3SwitchMain":
            
            swapPriv2(1,3);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2Priv4SwitchMain":
            
            swapPriv2(1,4);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2Priv5SwitchMain":
            
            swapPriv2(1,5);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2Priv6SwitchMain":
            
            swapPriv2(1,6);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2Priv7SwitchMain":
            
            swapPriv2(1,7);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2Priv8SwitchMain":
            
            swapPriv2(1,8);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2Priv9SwitchMain":
            
            swapPriv2(1,9);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2Priv10SwitchMain":
            
            swapPriv2(1,10);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2Switch1To2":
            
            swap(playerCards[1][0],1,2);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2Switch2To3":
            
            swap(playerCards[1][0],2,3);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2Switch3To4":
            
            swap(playerCards[1][0],3,4);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2Switch4To5":
            
            swap(playerCards[1][0],4,5);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2Switch5To6":
            
            swap(playerCards[1][0],5,6);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2Switch6To7":
            
            swap(playerCards[1][0],6,7);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2Switch7To8":
            
            swap(playerCards[1][0],7,8);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2Switch8To9":
            
            swap(playerCards[1][0],8,9);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2Switch9To10":
            
            swap(playerCards[1][0],9,10);
            
            Socketio.emit ("playerCards", playerCards);
            break;


            //player 2 moving around items
            
        case "p2SwitchItems1To2":
            
            swap(playerCards[1][2],1,2);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2SwitchItems2To3":
            
            swap(playerCards[1][2],2,3);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2SwitchItems3To4":
            
            swap(playerCards[1][2],3,4);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2SwitchItems4To5":
            
            swap(playerCards[1][2],4,5);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2SwitchItems5To6":
            
            swap(playerCards[1][2],5,6);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2SwitchItems6To7":
            
            swap(playerCards[1][2],6,7);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2SwitchItems7To8":
            
            swap(playerCards[1][2],7,8);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2SwitchItems8To9":
            
            swap(playerCards[1][2],8,9);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2SwitchItems9To10":
            
            swap(playerCards[1][2],9,10);
            
            Socketio.emit ("playerCards", playerCards);
            break;


            //player 2 private switching around

        case "p2SwitchPriv1To2":
            
            swap(playerCards[1][1],1,2);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2SwitchPriv2To3":
            
            swap(playerCards[1][1],2,3);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2SwitchPriv3To4":
            
            swap(playerCards[1][1],3,4);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2SwitchPriv4To5":
            
            swap(playerCards[1][1],4,5);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2SwitchPriv5To6":
            
            swap(playerCards[1][1],5,6);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2SwitchPriv6To7":
            
            swap(playerCards[1][1],6,7);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2SwitchPriv7To8":
            
            swap(playerCards[1][1],7,8);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2SwitchPriv8To9":
            
            swap(playerCards[1][1],8,9);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p2SwitchPriv9To10":
            
            swap(playerCards[1][1],9,10);
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p2Switch1To1Priv":
            
            swapPriv(playerCards[1],1,1);
            
            Socketio.emit ("playerCards", playerCards);
            break;

            
            //player 1 switching


        case "p1Priv1SwitchMain":
            
            swapPriv2(0,1);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
            
            //player 1 moving around crew

        case "p1Priv2SwitchMain":
            
            swapPriv2(0,2);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1Priv3SwitchMain":
            
            swapPriv2(0,3);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1Priv4SwitchMain":
            
            swapPriv2(0,4);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1Priv5SwitchMain":
            
            swapPriv2(0,5);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1Priv6SwitchMain":
            
            swapPriv2(0,6);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1Priv7SwitchMain":
            
            swapPriv2(0,7);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1Priv8SwitchMain":
            
            swapPriv2(0,8);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1Priv9SwitchMain":
            
            swapPriv2(0,9);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1Priv10SwitchMain":
            
            swapPriv2(0,10);
            console.log("tried to swap");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1Switch1To2":
            
            swap(playerCards[0][0],1,2);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1Switch2To3":
            
            swap(playerCards[0][0],2,3);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1Switch3To4":
            
            swap(playerCards[0][0],3,4);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1Switch4To5":
            
            swap(playerCards[0][0],4,5);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1Switch5To6":
            
            swap(playerCards[0][0],5,6);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1Switch6To7":
            
            swap(playerCards[0][0],6,7);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1Switch7To8":
            
            swap(playerCards[0][0],7,8);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1Switch8To9":
            
            swap(playerCards[0][0],8,9);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1Switch9To10":
            
            swap(playerCards[0][0],9,10);
            
            Socketio.emit ("playerCards", playerCards);
            break;


            //player 1 moving around items
            
        case "p1SwitchItems1To2":
            
            swap(playerCards[0][2],1,2);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1SwitchItems2To3":
            
            swap(playerCards[0][2],2,3);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1SwitchItems3To4":
            
            swap(playerCards[0][2],3,4);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1SwitchItems4To5":
            
            swap(playerCards[0][2],4,5);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1SwitchItems5To6":
            
            swap(playerCards[0][2],5,6);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1SwitchItems6To7":
            
            swap(playerCards[0][2],6,7);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1SwitchItems7To8":
            
            swap(playerCards[0][2],7,8);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1SwitchItems8To9":
            
            swap(playerCards[0][2],8,9);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1SwitchItems9To10":
            
            swap(playerCards[0][2],9,10);
            
            Socketio.emit ("playerCards", playerCards);
            break;


            //player 1 private switching around

            case "p1SwitchPriv1To2":
            
            swap(playerCards[0][1],1,2);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1SwitchPriv2To3":
            
            swap(playerCards[0][1],2,3);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1SwitchPriv3To4":
            
            swap(playerCards[0][1],3,4);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1SwitchPriv4To5":
            
            swap(playerCards[0][1],4,5);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1SwitchPriv5To6":
            
            swap(playerCards[0][1],5,6);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1SwitchPriv6To7":
            
            swap(playerCards[0][1],6,7);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1SwitchPriv7To8":
            
            swap(playerCards[0][1],7,8);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1SwitchPriv8To9":
            
            swap(playerCards[0][1],8,9);
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "p1SwitchPriv9To10":
            
            swap(playerCards[0][1],9,10);
            
            Socketio.emit ("playerCards", playerCards);
            break;

        case "p1Switch1To1Priv":
            
            swapPriv(playerCards[0],1,1);
            
            Socketio.emit ("playerCards", playerCards);
            break;

            
            
            //player 3 moving between crew and private
            
        case "p3Switch1To1Priv":
            
            swapPriv(playerCards[2],1,1);
            
            Socketio.emit ("playerCards", playerCards);
        }

        
    });
    
    
    socket.on ("give", giveTo => {
        switch(giveTo) {
        case "p3Give1ToP1":

            giveTemplateManualChosen(playerCards, 1, 0, playerCards[2][0][0], 2)
            
            
            Socketio.emit ("playerCards", playerCards);
        case "1to2":

            giveTemplate(playerCards, 0, 1);

            console.log("dropdown tried to do something");
            
            Socketio.emit ("playerCards", playerCards);
            break;
        case "oneprev":
            
            console.log("at least you tried");
            
            prevTemplate(playerCards,0);
            
            console.log("pl indx = ", playerCards[0][2], "p1 viewing previous card", playerCards[0][1]);
            Socketio.emit ("playerCards", playerCards);
            break;
        
        case "onenext":
            
            console.log("at least you tried");
            
            nextTemplate(playerCards,0);
            
            console.log("pl indx = ", playerCards[0][2], "p1 viewing previous card", playerCards[0][1]);
            Socketio.emit ("playerCards", playerCards);
            break;
        }
    });

///end of give
    
    socket.on ("movingPicker", movingMove => {
        switch(movingMove) {
        case "alliance":

            for (var i = 0; i < travelCards[0].length; i++)
                var chosenImage = Array.from(sampleF2(1, travelCards[0].length));
            travelCards[1] =
                travelCards[0][chosenImage];
            var val =
                travelCards[0][chosenImage];
            
            travelCards[0].splice(chosenImage, [1]);

            console.log("cards left = ",
                        travelCards[0].length,
                       );
            Socketio.emit ("travelCards", travelCards);
            break;
        }
    });

  //  socket.on("shipPicker", chooseShip => {
  //      switch(chooseShip) {
  //      case "1choose"

  //      }
  //  });
    
    socket.on("moveMoney1", moneyData1 => {
        switch(moneyData1) {
            
        case "warrant1Add1":
            warrant1 += 1;
            Socketio.emit ("warrant1", warrant1);
            break;

        case "warrant1Subtract1":
            warrant1 -= 1;
            Socketio.emit ("warrant1", warrant1);
            break;

        case "warrant2Add1":
            warrant2 += 1;
            Socketio.emit ("warrant2", warrant2);
            break;

        case "warrant2Subtract1":
            warrant2 -= 1;
            Socketio.emit ("warrant2", warrant2);
            break;

        case "warrant3Add1":
            warrant3 += 1;
            Socketio.emit ("warrant3", warrant3);
            break;

        case "warrant3Subtract1":
            warrant3 -= 1;
            Socketio.emit ("warrant3", warrant3);
            break;

        case "warrant4Add1":
            warrant4 += 1;
            Socketio.emit ("warrant4", warrant4);
            break;

        case "warrant4Subtract1":
            warrant4 -= 1;
            Socketio.emit ("warrant4", warrant4);
            break;

        case "goal1Add1":
            goalTokens1 += 1;
            Socketio.emit ("goalTokens1", goalTokens1);
            break;

        case "goal1Subtract1":
            goalTokens1 -= 1;
            Socketio.emit ("goalTokens1", goalTokens1);
            break;

        case "goal2Add1":
            goalTokens2 += 1;
            Socketio.emit ("goalTokens2", goalTokens2);
            break;

        case "goal2Subtract1":
            goalTokens2 -= 1;
            Socketio.emit ("goalTokens2", goalTokens2);
            break;

        case "goal3Add1":
            goalTokens3 += 1;
            Socketio.emit ("goalTokens3", goalTokens3);
            break;

        case "goal3Subtract1":
            goalTokens3 -= 1;
            Socketio.emit ("goalTokens3", goalTokens3);
            break;

        case "goal4Add1":
            goalTokens4 += 1;
            Socketio.emit ("goalTokens4", goalTokens4);
            break;

        case "goal4Subtract1":
            goalTokens4 -= 1;
            Socketio.emit ("goalTokens4", goalTokens4);
            break;
            
        case "1add100":
            wallet1 += 100;
            Socketio.emit ("wallet1", wallet1);
            break;
        case "1add500":
            wallet1 += 500;
            Socketio.emit ("wallet1", wallet1);
            break;
        case "1add1000":
            wallet1 += 1000;
            Socketio.emit ("wallet1", wallet1);
            break;
        case "1add2000":
            wallet1 += 2000;
            Socketio.emit ("wallet1", wallet1);
            break;
        case "1minus100":
            wallet1 -= 100;
            Socketio.emit ("wallet1", wallet1);
            break;
        case "1minus500":
            wallet1 -= 500;
            Socketio.emit ("wallet1", wallet1);
            break;
        case "1minus1000":
            wallet1 -= 1000;
            Socketio.emit ("wallet1", wallet1);
            break;
        case "1minus2000":
            wallet1 -= 2000;
            Socketio.emit ("wallet1", wallet1);
            break;
        case "2add100":
            wallet2 += 100;
            Socketio.emit ("wallet2", wallet2);
            break;
        case "2add500":
            wallet2 += 500;
            Socketio.emit ("wallet2", wallet2);
            break;
        case "2add1000":
            wallet2 += 1000;
            Socketio.emit ("wallet2", wallet2);
            break;
        case "2add2000":
            wallet2 += 2000;
            Socketio.emit ("wallet2", wallet2);
            break;
        case "2minus100":
            wallet2 -= 100;
            Socketio.emit ("wallet2", wallet2);
            break;
        case "2minus500":
            wallet2 -= 500;
            Socketio.emit ("wallet2", wallet2);
            break;
        case "2minus1000":
            wallet2 -= 1000;
            Socketio.emit ("wallet2", wallet2);
            break;
        case "2minus2000":
            wallet2 -= 2000;
            Socketio.emit ("wallet2", wallet2);
            break;
        case "3add100":
            wallet3 += 100;
            Socketio.emit ("wallet3", wallet3);
            break;
        case "3add500":
            wallet3 += 500;
            Socketio.emit ("wallet3", wallet3);
            break;
        case "3add1000":
            wallet3 += 1000;
            Socketio.emit ("wallet3", wallet3);
            break;
        case "3add2000":
            wallet3 += 2000;
            Socketio.emit ("wallet3", wallet3);
            break;
        case "3minus100":
            wallet3 -= 100;
            Socketio.emit ("wallet3", wallet3);
            break;
        case "3minus500":
            wallet3 -= 500;
            Socketio.emit ("wallet3", wallet3);
            break;
        case "3minus1000":
            wallet3 -= 1000;
            Socketio.emit ("wallet3", wallet3);
            break;
        case "3minus2000":
            wallet3 -= 2000;
            Socketio.emit ("wallet3", wallet3);
            break;
        case "4add100":
            wallet4 += 100;
            Socketio.emit ("wallet4", wallet4);
            break;
        case "4add500":
            wallet4 += 500;
            Socketio.emit ("wallet4", wallet4);
            break;
        case "4add1000":
            wallet4 += 1000;
            Socketio.emit ("wallet4", wallet4);
            break;
        case "4add2000":
            wallet4 += 2000;
            Socketio.emit ("wallet4", wallet4);
            break;
        case "4minus100":
            wallet4 -= 100;
            Socketio.emit ("wallet4", wallet4);
            break;
        case "4minus500":
            wallet4 -= 500;
            Socketio.emit ("wallet4", wallet4);
            break;
        case "4minus1000":
            wallet4 -= 1000;
            Socketio.emit ("wallet4", wallet4);
            break;
        case "4minus2000":
            wallet4 -= 2000;
            Socketio.emit ("wallet4", wallet4);
            break;
        }
    });
    socket.on("move", data => {
        switch(data) {
        case "left":
            position.x -= 20;
            Socketio.emit ("position", position);
            break;
        case "right":
            position.x += 20;
            Socketio.emit ("position", position);
            break;
        case "up":
            position.y -= 20;
            Socketio.emit ("position", position);
            break;
        case "down":
            position.y += 20;
            Socketio.emit ("position", position);
            break;
        case "keepPosition":
            position.y += 20;
            Socketio.emit ("position", position);
            break;
        }
    });
    socket.on("move2", data2 => {
        switch(data2) {
        case "left2":
            position2.x -= 20;
            Socketio.emit ("position2", position2);
            break;
            case "right2":
            position2.x += 20;
            Socketio.emit ("position2", position2);
            break;
            case "up2":
            position2.y -= 20;
            Socketio.emit ("position2", position2);
            break;
            case "down2":
            position2.y += 20;
            Socketio.emit ("position2", position2);
            break;
        case "keepPosition2":
            position2.y += 20;
            Socketio.emit ("position2", position);
            break;
        }
    });
    socket.on("move3", data3 => {
        switch(data3) {
        case "left3":
            position3.x -= 20;
            Socketio.emit ("position3", position3);
            break;
            case "right3":
            position3.x += 20;
            Socketio.emit ("position3", position3);
            break;
            case "up3":
            position3.y -= 20;
            Socketio.emit ("position3", position3);
            break;
            case "down3":
            position3.y += 20;
            Socketio.emit ("position3", position3);
            break;
        case "keepPosition3":
            position3.y += 20;
            Socketio.emit ("position3", position);
            break;
        }
    });
    socket.on("move4", data4 => {
        switch(data4) {
        case "left4":
            position4.x -= 20;
            Socketio.emit ("position4", position4);
            break;
            case "right4":
            position4.x += 20;
            Socketio.emit ("position4", position4);
            break;
            case "up4":
            position4.y -= 20;
            Socketio.emit ("position4", position4);
            break;
            case "down4":
            position4.y += 20;
            Socketio.emit ("position4", position4);
            break;
            case "keepPosition4":
            position4.y += 20;
            Socketio.emit ("position4", position);
            break;
        }
    });
    socket.on("move5", data5 => {
        switch(data5) {
        case "left5":
            position5.x -= 20;
            Socketio.emit ("position5", position5);
            break;
        case "right5":
            position5.x += 20;
            Socketio.emit ("position5", position5);
            break;
            case "up5":
            position5.y -= 20;
            Socketio.emit ("position5", position5);
            break;
            case "down5":
            position5.y += 20;
            Socketio.emit ("position5", position5);
            break;
            case "keepPosition5":
            position.y += 10;
            Socketio.emit ("position5", position);
            break;
        }
    });
    socket.on("move6", data6 => {
        switch(data6) {
        case "left6":
            position6.x -= 20;
            console.log("moved reaver ship");
            Socketio.emit ("position6", position6);
            break;
            case "right6":
            position6.x += 20;
            Socketio.emit ("position6", position6);
            break;
            case "up6":
            position6.y -= 20;
            Socketio.emit ("position6", position6);
            break;
            case "down6":
            position6.y += 20;
            Socketio.emit ("position6", position6);
            break;
            case "keepPosition6":
            position.y += 10;
            Socketio.emit ("position6", position);
            break;
        }
    });
    socket.on("move7", data7 => {
        switch(data7) {
        case "left7":
            position7.x -= 20;
            console.log("moved reaver ship");
            Socketio.emit ("position7", position7);
            break;
            case "right7":
            position7.x += 20;
            Socketio.emit ("position7", position7);
            break;
            case "up7":
            position7.y -= 20;
            Socketio.emit ("position7", position7);
            break;
            case "down7":
            position7.y += 20;
            Socketio.emit ("position7", position7);
            break;
            case "keepPosition7":
            position.y += 1;
            Socketio.emit ("position7", position);
            break;
        }
    });
});

Http.listen(PORT, () => {
    console.log("Listening at port:" + PORT);
    console.log("!! RESTARTED SERVER !!");
    console.log("Random Game Cards");
    console.log("checking index =", shipInv[3][2][0]);
    randomCaptain(0);
    randomCaptain(1);
    randomCaptain(2);
    randomCaptain(3);
    
    //discardShopConsidered2(4);
    //addShopToConsidered(4);
    //addShopDiscardToConsidered(4);
    // rotateDiscardsShop(4);
});


//below this point is functions to help make the random pick faster


// return an integer in [0,i)
function randInt(i) {
  return Math.floor(Math.random() * i);
}

// return m values in the range [0,n)
function sampleS(m, n) {
   let s = new Set();
   while(s.size < m) {
      s.add(randInt(n));
   }
   return s;
}

// Use the "mix" approach, which goes like this:
//
// 1) l2 is the smallest value such that 2^l2 >= n
// 2) for each value x in the sequence 0..m-1 do this:
// 3) hash x, using a function similar to splitmix64,
//    which has no collision
// 4) if the hash is >= n, hash again, until < n
//
// This approach doesn't need a (bit-) set,
// as by design duplicates are avoided.
// The disadvantage is that it's a custom PRNG.
//
// See also:
// https://stackoverflow.com/questions/664014/what-integer-hash-function-are-good-that-accepts-an-integer-hash-key/12996028#12996028
// http://xorshift.di.unimi.it/splitmix64.c
//
// At step 4, we could also skip the value - but
// then the sequence can't be generated in parallel.

function mix(m, n) {
    m = m | 0;
    n = n | 0;
    var l2 = nextLog2(n) | 0;
    var shift = (l2 >> 1) | 0;
    var mask = ((1 << l2) - 1) | 0;
    let s = new Int32Array(m);
	  // var fbs = new FastBitSet();
    for (let j = 0; (j|0) < m; j = (j+1)|0) {
        s[j] = next(j, n, shift, mask);
        // let x = fbs.checkedAdd(s[j]);
        // assert(x == 1, "Bug in add at " + j);
    }
    return s;
}

function next(x, n, shift, mask) {
    x = x | 0;
    n = n | 0;
    while (true) {
        x = hash(x, shift, mask);
        if ((x|0) < n) {
            return x;
        }
    }
}

function nextLog2(x) {
    x = x | 0;
    let n = 1;
    while ((1 << n) < x) {
        n++;
    }
    return n | 0;
}

function hash(x, shift, mask) {
    x = x | 0;
    shift = shift | 0;
    mask = mask | 0;
    x = Math.imul((x >>> shift) ^ x, 0x45d9f3b);
    x = x & mask;
    x = Math.imul((x >>> shift) ^ x, 0x45d9f3b);
    x &= mask;
    x = x ^ (x >>> shift);
    x &= mask;
    return x | 0;
}

// return m values in the range [0,n)
// attributed to Floyd
function sampleF2(m, n) {
    let s = new Set();
    for (let j = n - m; j < n; j++) {
        const t = randInt(j);
        s.add( s.has(t) ? j : t );
    }
    return s;
};
