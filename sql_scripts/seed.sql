INSERT INTO categories (name) VALUES
('ОБУСТРОЙСТВО ДОМА'),
('ДЕРЕВООБРАБАТЫВАЮЩИЕ СТАНКИ'),
('РУЧНЫЕ ИНСТРУМЕНТЫ'),
('МЕХАНИЧЕСКИЕ ИНСТРУМЕНТЫ'),
('ЛАМПЫ И ОСВЕЩЕНИЕ'),
('АКСЕССУАРЫ К ЭЛЕКТРОПРИБОРАМ'),
('СВЕТОДИОДНОЕ ОСВИЩЕНИЕ'),
('ЛАМПОЧКИ'),
('ПЕРЕНОСНОЕ ОСВЕЩЕНИЕ'),
('ВНУТРЕННЕЕ ОСВЕЩЕНИЕ'),
('НОЧНЫЕ СВЕТИЛЬНИКИ'),
('КОММЕРЧЕСКОЕ ОСВЕЩЕНИЕ'),
('СВЕТОДИОДНЫЕ ЛАМПЫ'),
('ЛАМПЫ И АБАЖУРЫ'),
('НАРУЖНОЕ ОСВЕЩЕНИЕ'),
('ЭЛЕКТРООБОРУДОВАНИЕ'),
('СТРОИТЕЛЬНЫЕ ИНСТРУМЕНТЫ'),
('ЕДА');

--
-- INSERT INTO district (name, id_country) VALUES ('Киев', '1'),
--                                                ('Винницкая', '1'),
--                                                ('Волынская', '1'),
--                                                ('Днепропетровская', '1'),
--                                                ('Донецкая', '1'),
--                                                ('Житомирская', '1'),
--                                                ('Закарпатская', '1'),
--                                                ('Запорожская', '1'),
--                                                ('Ивано-Франковская', '1'),
--                                                ('Киевская', '1'),
--                                                ('Кировоградская', '1'),
--                                                ('Луганская', '1'),
--                                                ('Львовская', '1'),
--                                                ('Николаевская', '1'),
--                                                ('Одесская', '1'),
--                                                ('Полтавская', '1'),
--                                                ('Ровенская', '1'),
--                                                ('Сумская', '1'),
--                                                ('Тернопольская', '1'),
--                                                ('Харьковская', '1'),
--                                                ('Херсонская', '1'),
--                                                ('Хмельницкая', '1'),
--                                                ('Черкасская', '1'),
--                                                ('Черниговская', '1'),
--                                                ('Черновицкая', '1');
--
--
-- INSERT INTO city (name, id_district, id_country) VALUES ('Одесса', '1', '1'),
--                                                         ('', '', '');
--
-- INSERT INTO brand (name, description) VALUES ('Торчин', 'Фабрика осуществляет производство холодных соусов под торговой маркой «Торчин», создана в 1994 году. С 2003 присоединена к группе Nestle'),
--                                              ('Оболонь', 'Один из крупнейших производителей пива, слабоалкогольных и безалкогольных напитков в Украине.');
--
--
-- INSERT INTO category_category (parent_id, children_id) VALUES ('1000', '999'),
--                                                               ('999', '1001'),
--                                                               ('999', '1029'),
--                                                               ('999', '1043'),
--                                                               ('999', '1073'),
--                                                               ('999', '1085'),
--                                                               ('999', '1097'),
--                                                               ('1001', '1002'),
--                                                               ('1001', '1003'),
--                                                               ('1001', '1004'),
--                                                               ('1001', '1005'),
--                                                               ('1001', '1006'),
--                                                               ('1001', '1007'),
--                                                               ('1001', '1008'),
--                                                               ('1001', '1009'),
--                                                               ('1001', '1010'),
--                                                               ('1001', '1011'),
--                                                               ('1001', '1012'),
--                                                               ('1001', '1013'),
--                                                               ('1001', '1014'),
--                                                               ('1001', '1015'),
--                                                               ('1001', '1016'),
--                                                               ('1001', '1017'),
--                                                               ('1001', '1018'),
--                                                               ('1029', '1030'),
--                                                               ('1029', '1031'),
--                                                               ('1029', '1032'),
--                                                               ('1029', '1033'),
--                                                               ('1043', '1044'),
--                                                               ('1043', '1045'),
--                                                               ('1043', '1046'),
--                                                               ('1043', '1047'),
--                                                               ('1043', '1048'),
--                                                               ('1043', '1049'),
--                                                               ('1043', '1050'),
--                                                               ('1043', '1051'),
--                                                               ('1043', '1052'),
--                                                               ('1043', '1053'),
--                                                               ('1043', '1054'),
--                                                               ('1043', '1055'),
--                                                               ('1043', '1056'),
--                                                               ('1043', '1057'),
--                                                               ('1043', '1058'),
--                                                               ('1043', '1059'),
--                                                               ('1043', '1060'),
--                                                               ('1043', '1061'),
--                                                               ('1043', '1062'),
--                                                               ('1043', '1063'),
--                                                               ('1043', '1064'),
--                                                               ('1043', '1065'),
--                                                               ('1043', '1066'),
--                                                               ('1043', '1067'),
--                                                               ('1043', '1068'),
--                                                               ('1073', '1074'),
--                                                               ('1073', '1075'),
--                                                               ('1073', '1076'),
--                                                               ('1073', '1077'),
--                                                               ('1073', '1078'),
--                                                               ('1073', '1079'),
--                                                               ('1073', '1080'),
--                                                               ('1073', '1081'),
--                                                               ('1073', '1082'),
--                                                               ('1085', '1086'),
--                                                               ('1085', '1087'),
--                                                               ('1085', '1088'),
--                                                               ('1085', '1089'),
--                                                               ('1085', '1090'),
--                                                               ('1085', '1091'),
--                                                               ('1085', '1092'),
--                                                               ('1085', '1093'),
--                                                               ('1097', '1098'),
--                                                               ('1097', '1099'),
--                                                               ('1097', '1100'),
--                                                               ('1097', '1101'),
--                                                               ('1097', '1102'),
--                                                               ('1097', '1103'),
--                                                               ('1097', '1104'),
--                                                               ('1097', '1105'),
--                                                               ('1097', '1106'),
--                                                               ('1117', '1118'),
--                                                               ('1118', '1119'),
--                                                               ('1118', '1120'),
--                                                               ('1118', '1121'),
--                                                               ('1118', '1122'),
--                                                               ('1118', '1123'),
--                                                               ('1118', '1124'),
--                                                               ('1118', '1125'),
--                                                               ('1118', '1126'),
--                                                               ('1117', '1130'),
--                                                               ('1130', '1132'),
--                                                               ('1117', '1136'),
--                                                               ('1136', '1138'),
--                                                               ('1136', '1139'),
--                                                               ('1136', '1140'),
--                                                               ('1136', '1141'),
--                                                               ('1117', '1146'),
--                                                               ('1146', '1148'),
--                                                               ('1146', '1149'),
--                                                               ('1146', '1150'),
--                                                               ('1146', '1151'),
--                                                               ('1146', '1152'),
--                                                               ('1146', '1153'),
--                                                               ('1117', '1158'),
--                                                               ('1158', '1160'),
--                                                               ('1164', '1165'),
--                                                               ('1165', '1166'),
--                                                               ('1165', '1167'),
--                                                               ('1165', '1168'),
--                                                               ('1165', '1169'),
--                                                               ('1165', '1170'),
--                                                               ('1165', '1171'),
--                                                               ('1165', '1172'),
--                                                               ('1165', '1173'),
--                                                               ('1165', '1174'),
--                                                               ('1165', '1175'),
--                                                               ('1165', '1176'),
--                                                               ('1165', '1177'),
--                                                               ('1165', '1178'),
--                                                               ('1165', '1179'),
--                                                               ('1165', '1180'),
--                                                               ('1165', '1181'),
--                                                               ('1165', '1182'),
--                                                               ('1165', '1183'),
--                                                               ('1165', '1184'),
--                                                               ('1000', '1117'),
--                                                               ('1000', '1164'),
--                                                               ('1000', '1186'),
--                                                               ('1000', '1261'),
--                                                               ('1000', '1324'),
--                                                               ('1000', '1342'),
--                                                               ('1000', '1349'),
--                                                               ('1000', '1362'),
--                                                               ('1000', '1369'),
--                                                               ('1186', '1194'),
--                                                               ('1186', '1205'),
--                                                               ('1186', '1214'),
--                                                               ('1186', '1223'),
--                                                               ('1186', '1233'),
--                                                               ('1186', '1244'),
--                                                               ('1186', '1250'),
--                                                               ('1186', '1244'),
--                                                               ('1186', '1244'),
--                                                               ('1186', '1244'),
--                                                               ('1188', '1189'),
--                                                               ('1188', '1190'),
--                                                               ('1188', '1191'),
--                                                               ('1194', '1195'),
--                                                               ('1194', '1196'),
--                                                               ('1194', '1197'),
--                                                               ('1194', '1198'),
--                                                               ('1194', '1199'),
--                                                               ('1194', '1200'),
--                                                               ('1194', '1201'),
--                                                               ('1205', '1206'),
--                                                               ('1205', '1207'),
--                                                               ('1205', '1208'),
--                                                               ('1205', '1209'),
--                                                               ('1205', '1210'),
--                                                               ('1214', '1215'),
--                                                               ('1214', '1216'),
--                                                               ('1214', '1217'),
--                                                               ('1214', '1218'),
--                                                               ('1214', '1219'),
--                                                               ('1214', '1220'),
--                                                               ('1223', '1224'),
--                                                               ('1223', '1225'),
--                                                               ('1223', '1226'),
--                                                               ('1223', '1227'),
--                                                               ('1223', '1228'),
--                                                               ('1223', '1229'),
--                                                               ('1233', '1234'),
--                                                               ('1233', '1235'),
--                                                               ('1233', '1236'),
--                                                               ('1233', '1237'),
--                                                               ('1233', '1238'),
--                                                               ('1233', '1239'),
--                                                               ('1233', '1240'),
--                                                               ('1233', '1241'),
--                                                               ('1244', '1245'),
--                                                               ('1244', '1246'),
--                                                               ('1244', '1247'),
--                                                               ('1244', '1248'),
--                                                               ('1250', '1251'),
--                                                               ('1250', '1252'),
--                                                               ('1250', '1253'),
--                                                               ('1250', '1254'),
--                                                               ('1250', '1255'),
--                                                               ('1250', '1256'),
--                                                               ('1250', '1257'),
--                                                               ('1261', '1265'),
--                                                               ('1261', '1276'),
--                                                               ('1261', '1279'),
--                                                               ('1261', '1285'),
--                                                               ('1261', '1296'),
--                                                               ('1261', '1304'),
--                                                               ('1261', '1319'),
--                                                               ('1265', '1266'),
--                                                               ('1265', '1267'),
--                                                               ('1265', '1268'),
--                                                               ('1265', '1269'),
--                                                               ('1265', '1270'),
--                                                               ('1265', '1271'),
--                                                               ('1265', '1272'),
--                                                               ('1265', '1273'),
--                                                               ('1279', '1280'),
--                                                               ('1279', '1281'),
--                                                               ('1285', '1286'),
--                                                               ('1285', '1287'),
--                                                               ('1285', '1288'),
--                                                               ('1285', '1289'),
--                                                               ('1285', '1290'),
--                                                               ('1285', '1291'),
--                                                               ('1285', '1292'),
--                                                               ('1285', '1286'),
--                                                               ('1296', '1297'),
--                                                               ('1296', '1298'),
--                                                               ('1296', '1299'),
--                                                               ('1296', '1300'),
--                                                               ('1304', '1305'),
--                                                               ('1304', '1306'),
--                                                               ('1304', '1307'),
--                                                               ('1304', '1308'),
--                                                               ('1304', '1309'),
--                                                               ('1304', '1310'),
--                                                               ('1304', '1311'),
--                                                               ('1304', '1312'),
--                                                               ('1304', '1313'),
--                                                               ('1304', '1314'),
--                                                               ('1304', '1315'),
--                                                               ('1318', '1319'),
--                                                               ('1318', '1320'),
--                                                               ('1324', '1325'),
--                                                               ('1324', '1326'),
--                                                               ('1324', '1327'),
--                                                               ('1324', '1328'),
--                                                               ('1324', '1329'),
--                                                               ('1324', '1330'),
--                                                               ('1324', '1331'),
--                                                               ('1324', '1332'),
--                                                               ('1324', '1333'),
--                                                               ('1324', '1334'),
--                                                               ('1324', '1335'),
--                                                               ('1324', '1336'),
--                                                               ('1324', '1337'),
--                                                               ('1324', '1338'),
--                                                               ('1342', '1343'),
--                                                               ('1342', '1344'),
--                                                               ('1342', '1345'),
--                                                               ('1349', '1350'),
--                                                               ('1349', '1351'),
--                                                               ('1349', '1352'),
--                                                               ('1349', '1353'),
--                                                               ('1349', '1354'),
--                                                               ('1349', '1355'),
--                                                               ('1349', '1356'),
--                                                               ('1349', '1357'),
--                                                               ('1349', '1358'),
--                                                               ('1362', '1365'),
--                                                               ('2', '4'),
--                                                               ('2', '14'),
--                                                               ('2', '29'),
--                                                               ('2', '56'),
--                                                               ('2', '62'),
--                                                               ('2', '64'),
--                                                               ('2', '82'),
--                                                               ('2', '95'),
--                                                               ('2', '104'),
--                                                               ('2', '110'),
--                                                               ('2', '113'),
--                                                               ('2', '123'),
--                                                               ('2', '125'),
--                                                               ('2', '132'),
--                                                               ('2', '142'),
--                                                               ('2', '147'),
--                                                               ('2', '158'),
--                                                               ('2', '162'),
--                                                               ('2', '185'),
--                                                               ('4', '5'),
--                                                               ('4', '6'),
--                                                               ('4', '7'),
--                                                               ('4', '8'),
--                                                               ('4', '9'),
--                                                               ('4', '10'),
--                                                               ('4', '11'),
--                                                               ('4', '12'),
--                                                               ('14', '15'),
--                                                               ('14', '16'),
--                                                               ('14', '17'),
--                                                               ('14', '18'),
--                                                               ('14', '18'),
--                                                               ('14', '19'),
--                                                               ('14', '20'),
--                                                               ('14', '21'),
--                                                               ('14', '22'),
--                                                               ('14', '23'),
--                                                               ('14', '24'),
--                                                               ('14', '25'),
--                                                               ('14', '26'),
--                                                               ('14', '27'),
--                                                               ('29', '30'),
--                                                               ('29', '31'),
--                                                               ('29', '32'),
--                                                               ('29', '33'),
--                                                               ('29', '34'),
--                                                               ('29', '35'),
--                                                               ('29', '36'),
--                                                               ('29', '37'),
--                                                               ('29', '38'),
--                                                               ('29', '39'),
--                                                               ('29', '40'),
--                                                               ('29', '41'),
--                                                               ('29', '42'),
--                                                               ('29', '43'),
--                                                               ('29', '44'),
--                                                               ('29', '45'),
--                                                               ('29', '46'),
--                                                               ('29', '47'),
--                                                               ('29', '48'),
--                                                               ('29', '49'),
--                                                               ('29', '50'),
--                                                               ('29', '51'),
--                                                               ('29', '52'),
--                                                               ('29', '53'),
--                                                               ('29', '54'),
--                                                               ('56', '57'),
--                                                               ('56', '58'),
--                                                               ('56', '59'),
--                                                               ('56', '60'),
--                                                               ('64', '65'),
--                                                               ('64', '66'),
--                                                               ('64', '67'),
--                                                               ('64', '68'),
--                                                               ('64', '69'),
--                                                               ('64', '70'),
--                                                               ('64', '71'),
--                                                               ('64', '72'),
--                                                               ('64', '73'),
--                                                               ('64', '74'),
--                                                               ('64', '75'),
--                                                               ('64', '76'),
--                                                               ('64', '77'),
--                                                               ('64', '78'),
--                                                               ('64', '79'),
--                                                               ('82', '83'),
--                                                               ('82', '84'),
--                                                               ('82', '85'),
--                                                               ('82', '86'),
--                                                               ('82', '87'),
--                                                               ('82', '88'),
--                                                               ('82', '89'),
--                                                               ('82', '90'),
--                                                               ('82', '91'),
--                                                               ('82', '92'),
--                                                               ('95', '96'),
--                                                               ('95', '97'),
--                                                               ('95', '98'),
--                                                               ('95', '99'),
--                                                               ('95', '100'),
--                                                               ('95', '101'),
--                                                               ('95', '102'),
--                                                               ('104', '105'),
--                                                               ('104', '106'),
--                                                               ('104', '107'),
--                                                               ('104', '108'),
--                                                               ('113', '114'),
--                                                               ('113', '115'),
--                                                               ('113', '116'),
--                                                               ('113', '117'),
--                                                               ('113', '118'),
--                                                               ('113', '119'),
--                                                               ('113', '120'),
--                                                               ('113', '121'),
--                                                               ('125', '126'),
--                                                               ('125', '127'),
--                                                               ('125', '128'),
--                                                               ('125', '129'),
--                                                               ('125', '130'),
--                                                               ('132', '133'),
--                                                               ('132', '134'),
--                                                               ('132', '135'),
--                                                               ('132', '136'),
--                                                               ('132', '137'),
--                                                               ('132', '138'),
--                                                               ('132', '139'),
--                                                               ('132', '140'),
--                                                               ('142', '143'),
--                                                               ('142', '144'),
--                                                               ('142', '145'),
--                                                               ('147', '148'),
--                                                               ('147', '149'),
--                                                               ('147', '150'),
--                                                               ('147', '151'),
--                                                               ('147', '152'),
--                                                               ('147', '153'),
--                                                               ('147', '154'),
--                                                               ('147', '155'),
--                                                               ('147', '156'),
--                                                               ('162', '163'),
--                                                               ('162', '164'),
--                                                               ('162', '165'),
--                                                               ('162', '166'),
--                                                               ('162', '167'),
--                                                               ('162', '168'),
--                                                               ('162', '169'),
--                                                               ('162', '170'),
--                                                               ('162', '171'),
--                                                               ('162', '172'),
--                                                               ('162', '173'),
--                                                               ('162', '174'),
--                                                               ('162', '175'),
--                                                               ('162', '176'),
--                                                               ('162', '177'),
--                                                               ('162', '178'),
--                                                               ('162', '179'),
--                                                               ('162', '180'),
--                                                               ('162', '181'),
--                                                               ('162', '182'),
--                                                               ('162', '183'),
--                                                               ('185', '186'),
--                                                               ('185', '187'),
--                                                               ('185', '188'),
--                                                               ('185', '189'),
--                                                               ('185', '190'),
--                                                               ('185', '191'),
--
--



















-- INSERT INTO default_products (name, id_brand, description, image) VALUES ('Hike premium beer, 05 л., стеклянная банка', '2', 'Содержание алкоголя - 4,8% ', ''),
--                                                                          (),
--
-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
-- INSERT INTO user (name, surname, second_name, company, email, telephone, skype) VALUES (),
--
-- INSERT INTO products (name, id_brand, description, id_delivery) VALUES (),
--
-- INSERT INTO product_category (product_id, category_id) VALUES (),
--
-- INSERT INTO delivery_list (name, id_user) VALUES (),
--
-- INSERT INTO delivery (id_country, id_city, id_delivery_list) VALUES (),
--
-- INSERT INTO address (id_country, id_city, street, build, index, geo_location) VALUES (),
