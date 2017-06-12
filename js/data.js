'use strict';

function load_data(id){
    if(frame_counter > core_storage_data['score']){
        core_storage_data['score'] = frame_counter;
    }
    core_storage_save({
      'bests': true,
    });

    frame_counter = 0;
    frames_per_obstacle = core_storage_data['obstacle-frequency'];
    game_running = true;
    half_corridor_height = core_storage_data['corridor-height'] / 2;
    obstacle_counter = 0;
    obstacles = [];
    played_explosion_sound = false;
    player = {
      'speed': 0,
      'y': 0,
    };
    smoke = [];
}
