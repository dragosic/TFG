-- Evita commits parciales
SET autocommit = 0;

-- ===== TUTOR =====
LOCK TABLES `tutor` WRITE;

-- Añadir PK a id (si no está)
ALTER TABLE tutor
ADD PRIMARY KEY (`id`);

-- Unicidad en datos_personales
ALTER TABLE tutor
ADD CONSTRAINT unique_datos_personales UNIQUE (`datos_personales_Id`);

-- FK a profesor
ALTER TABLE tutor
ADD CONSTRAINT fk_tutor_profesor
FOREIGN KEY (id) REFERENCES profesor(id)
ON DELETE CASCADE ON UPDATE CASCADE;

-- FK a datos_personales_interno
ALTER TABLE tutor
ADD CONSTRAINT fk_tutor_datos_personales
FOREIGN KEY (`datos_personales_Id`) REFERENCES datos_personales_interno(`id`)
ON DELETE CASCADE ON UPDATE CASCADE;

UNLOCK TABLES;


-- ===== ASIGNATURA =====
LOCK TABLES `asignatura` WRITE;

-- PK compuesta para evitar duplicados
ALTER TABLE asignatura
ADD PRIMARY KEY (`id_oferta`, `nombre`);

-- FK a oferta_servicio
ALTER TABLE asignatura
ADD CONSTRAINT fk_asignatura_oferta
FOREIGN KEY (`id_oferta`) REFERENCES oferta_servicio(`id`)
ON DELETE CASCADE ON UPDATE CASCADE;

UNLOCK TABLES;


-- ===== COLABORADOR =====
LOCK TABLES `colaborador` WRITE;

-- Añadir PK a id (si no está)
ALTER TABLE colaborador
ADD PRIMARY KEY (`id`);

-- FK a datos_personales_externo 
ALTER TABLE colaborador
ADD CONSTRAINT fk_colaborador_datos_personales
FOREIGN KEY (`datos_personales_Id`) REFERENCES datos_personales_externo(`id`)
ON DELETE CASCADE ON UPDATE CASCADE;

UNLOCK TABLES;

COMMIT;
