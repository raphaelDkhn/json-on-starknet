// SPDX-License-Identifier: MIT

%lang starknet

//===============================================
//=========== GENERATED CAIRO PROGRAM ===========
//===============================================

from starkware.cairo.common.cairo_builtins import HashBuiltin

struct Ele0_1fbb209b77b067ec60f3 {
	num_bpm: felt,
	num_ticks: felt,
}

struct Arr_1fbb209b77b067ec60f3_tempos {
	ele0_1fbb209b77b067ec60f3: Ele0_1fbb209b77b067ec60f3,
}

struct Arr_8124671b81b3a169a85e_timeSignature {
	ele0_8124671b81b3a169a85e: felt,
	ele1_8124671b81b3a169a85e: felt,
}

struct Ele0_3ede852e9aca41a8a95c {
	num_ticks: felt,
	arr_8124671b81b3a169a85e_timeSignature: Arr_8124671b81b3a169a85e_timeSignature,
	num_measures: felt,
}

struct Arr_3ede852e9aca41a8a95c_timeSignatures {
	ele0_3ede852e9aca41a8a95c: Ele0_3ede852e9aca41a8a95c,
}

struct Obj_2091f16b262355dbd34f_header {
	num_ppq: felt,
	arr_1fbb209b77b067ec60f3_tempos: Arr_1fbb209b77b067ec60f3_tempos,
	arr_3ede852e9aca41a8a95c_timeSignatures: Arr_3ede852e9aca41a8a95c_timeSignatures,
}

struct Obj_78995ba294fcdb67a142_instrument {
	shortStr_family: felt,
	num_number: felt,
	shortStr_name: felt,
}

struct Ele0_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele1_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele2_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele3_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele4_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele5_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele6_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele7_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele8_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele9_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele10_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele11_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele12_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele13_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele14_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele15_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele16_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele17_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele18_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele19_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele20_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Ele21_d34e692625e84a126357 {
	num_duration: felt,
	num_durationTicks: felt,
	num_midi: felt,
	shortStr_name: felt,
	num_ticks: felt,
	num_time: felt,
	num_velocity: felt,
}

struct Arr_d34e692625e84a126357_notes {
	ele0_d34e692625e84a126357: Ele0_d34e692625e84a126357,
	ele1_d34e692625e84a126357: Ele1_d34e692625e84a126357,
	ele2_d34e692625e84a126357: Ele2_d34e692625e84a126357,
	ele3_d34e692625e84a126357: Ele3_d34e692625e84a126357,
	ele4_d34e692625e84a126357: Ele4_d34e692625e84a126357,
	ele5_d34e692625e84a126357: Ele5_d34e692625e84a126357,
	ele6_d34e692625e84a126357: Ele6_d34e692625e84a126357,
	ele7_d34e692625e84a126357: Ele7_d34e692625e84a126357,
	ele8_d34e692625e84a126357: Ele8_d34e692625e84a126357,
	ele9_d34e692625e84a126357: Ele9_d34e692625e84a126357,
	ele10_d34e692625e84a126357: Ele10_d34e692625e84a126357,
	ele11_d34e692625e84a126357: Ele11_d34e692625e84a126357,
	ele12_d34e692625e84a126357: Ele12_d34e692625e84a126357,
	ele13_d34e692625e84a126357: Ele13_d34e692625e84a126357,
	ele14_d34e692625e84a126357: Ele14_d34e692625e84a126357,
	ele15_d34e692625e84a126357: Ele15_d34e692625e84a126357,
	ele16_d34e692625e84a126357: Ele16_d34e692625e84a126357,
	ele17_d34e692625e84a126357: Ele17_d34e692625e84a126357,
	ele18_d34e692625e84a126357: Ele18_d34e692625e84a126357,
	ele19_d34e692625e84a126357: Ele19_d34e692625e84a126357,
	ele20_d34e692625e84a126357: Ele20_d34e692625e84a126357,
	ele21_d34e692625e84a126357: Ele21_d34e692625e84a126357,
}

struct Ele0_fe0be8a399720b8a864b {
	num_channel: felt,
	obj_78995ba294fcdb67a142_instrument: Obj_78995ba294fcdb67a142_instrument,
	shortStr_name: felt,
	arr_d34e692625e84a126357_notes: Arr_d34e692625e84a126357_notes,
	num_endOfTrackTicks: felt,
}

struct Arr_fe0be8a399720b8a864b_tracks {
	ele0_fe0be8a399720b8a864b: Ele0_fe0be8a399720b8a864b,
}

struct Root {
	obj_2091f16b262355dbd34f_header: Obj_2091f16b262355dbd34f_header,
	arr_fe0be8a399720b8a864b_tracks: Arr_fe0be8a399720b8a864b_tracks,
}

@view
func retrieve_object {
	syscall_ptr : felt*,
	pedersen_ptr : HashBuiltin*,
	range_check_ptr
} () -> (object: Root) {

	// build up the struct from bottom up

	let object = Root (
		obj_2091f16b262355dbd34f_header = Obj_2091f16b262355dbd34f_header(
			num_ppq = 384000000000000000000,
			arr_1fbb209b77b067ec60f3_tempos = Arr_1fbb209b77b067ec60f3_tempos(
				ele0_1fbb209b77b067ec60f3 = Ele0_1fbb209b77b067ec60f3(
					num_bpm = 100000000000000000000,
					num_ticks = 0,
				),
			),
			arr_3ede852e9aca41a8a95c_timeSignatures = Arr_3ede852e9aca41a8a95c_timeSignatures(
				ele0_3ede852e9aca41a8a95c = Ele0_3ede852e9aca41a8a95c(
					num_ticks = 0,
					arr_8124671b81b3a169a85e_timeSignature = Arr_8124671b81b3a169a85e_timeSignature(
						ele0_8124671b81b3a169a85e = 1,
						ele1_8124671b81b3a169a85e = 4,
					),
					num_measures = 0,
				),
			),
		),
		arr_fe0be8a399720b8a864b_tracks = Arr_fe0be8a399720b8a864b_tracks(
			ele0_fe0be8a399720b8a864b = Ele0_fe0be8a399720b8a864b(
				num_channel = 0,
				obj_78995ba294fcdb67a142_instrument = Obj_78995ba294fcdb67a142_instrument(
					shortStr_family = 482804330095,
					num_number = 0,
					shortStr_name = 555989587974807984136285410270252526879228653167,
				),
				shortStr_name = 1408074282423058940198900732096111,
				arr_d34e692625e84a126357_notes = Arr_d34e692625e84a126357_notes(
					ele0_d34e692625e84a126357 = Ele0_d34e692625e84a126357(
						num_duration = 150000000000000000,
						num_durationTicks = 96000000000000000000,
						num_midi = 60000000000000000000,
						shortStr_name = 17204,
						num_ticks = 0,
						num_time = 0,
						num_velocity = 393700787401574848,
					),
					ele1_d34e692625e84a126357 = Ele1_d34e692625e84a126357(
						num_duration = 150000000000000000,
						num_durationTicks = 96000000000000000000,
						num_midi = 61000000000000000000,
						shortStr_name = 4399924,
						num_ticks = 96000000000000000000,
						num_time = 150000000000000000,
						num_velocity = 393700787401574848,
					),
					ele2_d34e692625e84a126357 = Ele2_d34e692625e84a126357(
						num_duration = 149999999999999968,
						num_durationTicks = 96000000000000000000,
						num_midi = 62000000000000000000,
						shortStr_name = 17460,
						num_ticks = 192000000000000000000,
						num_time = 300000000000000000,
						num_velocity = 393700787401574848,
					),
					ele3_d34e692625e84a126357 = Ele3_d34e692625e84a126357(
						num_duration = 150000000000000032,
						num_durationTicks = 96000000000000000000,
						num_midi = 63000000000000000000,
						shortStr_name = 4465460,
						num_ticks = 288000000000000000000,
						num_time = 449999999999999936,
						num_velocity = 393700787401574848,
					),
					ele4_d34e692625e84a126357 = Ele4_d34e692625e84a126357(
						num_duration = 150000000000000032,
						num_durationTicks = 96000000000000000000,
						num_midi = 64000000000000000000,
						shortStr_name = 17716,
						num_ticks = 384000000000000000000,
						num_time = 600000000000000000,
						num_velocity = 393700787401574848,
					),
					ele5_d34e692625e84a126357 = Ele5_d34e692625e84a126357(
						num_duration = 149999999999999904,
						num_durationTicks = 96000000000000000000,
						num_midi = 65000000000000000000,
						shortStr_name = 17972,
						num_ticks = 480000000000000000000,
						num_time = 750000000000000000,
						num_velocity = 393700787401574848,
					),
					ele6_d34e692625e84a126357 = Ele6_d34e692625e84a126357(
						num_duration = 150000000000000128,
						num_durationTicks = 96000000000000000000,
						num_midi = 66000000000000000000,
						shortStr_name = 4596532,
						num_ticks = 576000000000000000000,
						num_time = 899999999999999872,
						num_velocity = 393700787401574848,
					),
					ele7_d34e692625e84a126357 = Ele7_d34e692625e84a126357(
						num_duration = 149999999999999904,
						num_durationTicks = 96000000000000000000,
						num_midi = 67000000000000000000,
						shortStr_name = 18228,
						num_ticks = 672000000000000000000,
						num_time = 1050000000000000000,
						num_velocity = 393700787401574848,
					),
					ele8_d34e692625e84a126357 = Ele8_d34e692625e84a126357(
						num_duration = 149999999999999904,
						num_durationTicks = 96000000000000000000,
						num_midi = 68000000000000000000,
						shortStr_name = 4662068,
						num_ticks = 768000000000000000000,
						num_time = 1200000000000000000,
						num_velocity = 393700787401574848,
					),
					ele9_d34e692625e84a126357 = Ele9_d34e692625e84a126357(
						num_duration = 150000000000000128,
						num_durationTicks = 96000000000000000000,
						num_midi = 69000000000000000000,
						shortStr_name = 16692,
						num_ticks = 864000000000000000000,
						num_time = 1349999999999999744,
						num_velocity = 393700787401574848,
					),
					ele10_d34e692625e84a126357 = Ele10_d34e692625e84a126357(
						num_duration = 149999999999999904,
						num_durationTicks = 96000000000000000000,
						num_midi = 70000000000000000000,
						shortStr_name = 4268852,
						num_ticks = 960000000000000000000,
						num_time = 1500000000000000000,
						num_velocity = 393700787401574848,
					),
					ele11_d34e692625e84a126357 = Ele11_d34e692625e84a126357(
						num_duration = 149999999999999904,
						num_durationTicks = 96000000000000000000,
						num_midi = 70000000000000000000,
						shortStr_name = 4268852,
						num_ticks = 1056000000000000000000,
						num_time = 1650000000000000000,
						num_velocity = 393700787401574848,
					),
					ele12_d34e692625e84a126357 = Ele12_d34e692625e84a126357(
						num_duration = 150000000000000128,
						num_durationTicks = 96000000000000000000,
						num_midi = 69000000000000000000,
						shortStr_name = 16692,
						num_ticks = 1152000000000000000000,
						num_time = 1799999999999999744,
						num_velocity = 393700787401574848,
					),
					ele13_d34e692625e84a126357 = Ele13_d34e692625e84a126357(
						num_duration = 150000000000000128,
						num_durationTicks = 96000000000000000000,
						num_midi = 68000000000000000000,
						shortStr_name = 4662068,
						num_ticks = 1248000000000000000000,
						num_time = 1950000000000000000,
						num_velocity = 393700787401574848,
					),
					ele14_d34e692625e84a126357 = Ele14_d34e692625e84a126357(
						num_duration = 149999999999999904,
						num_durationTicks = 96000000000000000000,
						num_midi = 67000000000000000000,
						shortStr_name = 18228,
						num_ticks = 1344000000000000000000,
						num_time = 2100000000000000000,
						num_velocity = 393700787401574848,
					),
					ele15_d34e692625e84a126357 = Ele15_d34e692625e84a126357(
						num_duration = 149999999999999904,
						num_durationTicks = 96000000000000000000,
						num_midi = 66000000000000000000,
						shortStr_name = 4596532,
						num_ticks = 1440000000000000000000,
						num_time = 2250000000000000000,
						num_velocity = 393700787401574848,
					),
					ele16_d34e692625e84a126357 = Ele16_d34e692625e84a126357(
						num_duration = 149999999999999904,
						num_durationTicks = 96000000000000000000,
						num_midi = 65000000000000000000,
						shortStr_name = 17972,
						num_ticks = 1536000000000000000000,
						num_time = 2400000000000000000,
						num_velocity = 393700787401574848,
					),
					ele17_d34e692625e84a126357 = Ele17_d34e692625e84a126357(
						num_duration = 149999999999999904,
						num_durationTicks = 96000000000000000000,
						num_midi = 64000000000000000000,
						shortStr_name = 17716,
						num_ticks = 1632000000000000000000,
						num_time = 2550000000000000000,
						num_velocity = 393700787401574848,
					),
					ele18_d34e692625e84a126357 = Ele18_d34e692625e84a126357(
						num_duration = 150000000000000352,
						num_durationTicks = 96000000000000000000,
						num_midi = 63000000000000000000,
						shortStr_name = 4465460,
						num_ticks = 1728000000000000000000,
						num_time = 2699999999999999488,
						num_velocity = 393700787401574848,
					),
					ele19_d34e692625e84a126357 = Ele19_d34e692625e84a126357(
						num_duration = 149999999999999904,
						num_durationTicks = 96000000000000000000,
						num_midi = 62000000000000000000,
						shortStr_name = 17460,
						num_ticks = 1824000000000000000000,
						num_time = 2850000000000000000,
						num_velocity = 393700787401574848,
					),
					ele20_d34e692625e84a126357 = Ele20_d34e692625e84a126357(
						num_duration = 149999999999999904,
						num_durationTicks = 96000000000000000000,
						num_midi = 61000000000000000000,
						shortStr_name = 4399924,
						num_ticks = 1920000000000000000000,
						num_time = 3000000000000000000,
						num_velocity = 393700787401574848,
					),
					ele21_d34e692625e84a126357 = Ele21_d34e692625e84a126357(
						num_duration = 149999999999999904,
						num_durationTicks = 96000000000000000000,
						num_midi = 60000000000000000000,
						shortStr_name = 17204,
						num_ticks = 2016000000000000000000,
						num_time = 3150000000000000000,
						num_velocity = 393700787401574848,
					),
				),
				num_endOfTrackTicks = 2112000000000000000000,
			),
		),
	);

	return(object,);
}
