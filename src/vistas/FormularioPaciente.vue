<template>
    <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
          scrollable
        >
          <v-card tile>
            <v-toolbar card dark color="primary">
              <v-btn icon dark @click="dialog = false">
                <v-icon>close</v-icon>
              </v-btn>
              <v-toolbar-title>Agregar Paciente</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark flat @click="dialog = false">Guardar</v-btn>
              </v-toolbar-items>             
            </v-toolbar>
            <v-card-text>
              
              <v-list three-line subheader>
                <v-subheader>Ley general de protección de datos personales</v-subheader>
                <v-list-tile avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>Como serán tratados sus datos?</v-list-tile-title>
                    <v-list-tile-sub-title>
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>                
              </v-list>         
              <v-container style="margin-top:-2.7em;"> No cederemos sus datos personales a terceros, salvo que estemos obligados por una ley o que Usted lo consienta previamente. Estos datos seran unicamente 
                        utilizados para fines estadisticos, solo su aplicador podrá acceder a ellos.</v-container>    
              <v-divider></v-divider>

              <v-list three-line subheader>
                <v-subheader>Datos Generales del Paciente</v-subheader>
            </v-list>
            <v-form v-model="valid">
                <v-container>
                    <v-layout>
                        <v-flex
                        xs12
                        md4
                        >
                            <v-text-field
                            v-model="nombre"
                            :rules="reglasNombre"
                            :counter="30"
                            label="Nombre(s)"
                            required
                            ></v-text-field>
                        </v-flex>
  
                        <v-flex
                            xs12
                            md4
                        >
                            <v-text-field
                            v-model="apellido"
                            :rules="reglasNombre"
                            :counter="30"
                            label="Apellido(s)"
                            required
                            ></v-text-field>
                        </v-flex>
  
                        <v-flex
                            xs12
                            md4
                        >
                            <v-text-field
                            v-model="email"
                            :rules="reglasEmail"
                            label="E-mail"
                            
                            ></v-text-field>
                        </v-flex>                                             
                    </v-layout>

                    <v-autocomplete
                    v-model="model"                    
                    :items="estados"                    
                    :label="`Estado de residencia`"
                    persistent-hint
                    prepend-icon="mdi-city"
                    >
                    </v-autocomplete>

                    <v-autocomplete
                    v-model="model"                    
                    :items="estados"                    
                    :label="`Estado de nacimiento`"
                    persistent-hint
                    prepend-icon="mdi-city"
                    >
                    </v-autocomplete>                   

                    <v-radio-group  row>
                        <v-radio label="Masculino" value="radio-1"></v-radio>
                        <v-radio label="Femenino" value="radio-2"></v-radio>
                    </v-radio-group>

                    <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                        >
                        <v-text-field
                            slot="activator"
                            v-model="date"
                            label="Fecha de nacimiento"
                            prepend-icon="event"
                            readonly
                        ></v-text-field>
                        <v-date-picker
                            ref="picker"
                            v-model="date"
                            :max="new Date().toISOString().substr(0, 10)"
                            min="1950-01-01"
                            @change="save"
                        ></v-date-picker>
                    </v-menu>
                     <v-flex xs12>
                    <v-subheader class="pl-0">Años de escolaridad</v-subheader>
                    <v-slider
                        max=30
                        v-model="slider"
                        always-dirty
                        hint="Si no sabe el numero exacto, ponga un aproximado"
                        persistent-hint
                        thumb-label="always"
                    ></v-slider>

                    <v-autocomplete
                    v-model="model"                    
                    :items="grados"                    
                    :label="`Ultimo grado de estudios`"
                    persistent-hint
                    prepend-icon="mdi-city"
                    >
                    </v-autocomplete>
                    </v-flex>                    
                </v-container>
                <v-divider></v-divider>
                <v-subheader>Datos Generales Los Familiares</v-subheader>
            </v-form>              
            </v-card-text>
            <div style="flex: 1 1 auto;"></div>
          </v-card>
        </v-dialog>
</template>

<script>
export default {
    data: () => ({
        valid: false,
        nombre: '',
        apellido: '',
        reglasNombre: [
            v => !!v || 'Dato requerido',
            v => v.length <= 30 || 'Debe de ser menor a 30 caracteres'
        ],
        email: '',
        reglasEmail: [            
            v => /.+@.+/.test(v) || 'E-mail no valido'
        ],
        date: null,
        menu: false,
        slider: 0,
        estados:[
            'Aguascalientes', 
            'Baja California', 
            'Baja California Sur', 
            'Campeche', 
            'Chihuahua',
            'Chiapas', 
            'Coahuila',
            'Colima', 
            'Durango', 
            'Guanajuato',
            'Guerrero', 
            'Hidalgo', 
            'Jalisco', 
            'México', 
            'Michoacán', 
            'Morelos', 
            'Nayarit', 
            'Nuevo León', 
            'Oaxaca', 
            'Puebla', 
            'Querétaro', 
            'Quintana Roo', 
            'San Luis Potosí', 
            'Sinaloa', 
            'Sonora', 
            'Tabasco', 
            'Tamaulipas', 
            'Tlaxcala', 
            'Veracruz', 
            'Yucatán', 
            'Zacatecas', 
        ],
        grados:[
            'Primaria',
            'Secundaria',
            'Técnico',
            'Bachillerato',
            'Licenciatura',
            'Ingeniería',
            'Especialidad',
            'Maestría',
            'Doctorado',
            'Posdoctorado'                
        ]
        }),
        props:{
            dialog: Boolean
        }
}
</script>

<style>

</style>
