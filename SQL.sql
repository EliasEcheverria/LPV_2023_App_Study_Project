PGDMP         3                {            db_study_app    15.2    15.2 #               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16397    db_study_app    DATABASE        CREATE DATABASE db_study_app WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE db_study_app;
                postgres    false            �            1259    16408    themes    TABLE     �   CREATE TABLE public.themes (
    id integer NOT NULL,
    create_date timestamp without time zone,
    name character varying,
    description character varying,
    keywords character varying,
    owner_user_id integer
);
    DROP TABLE public.themes;
       public         heap    postgres    false            �            1259    16407    themes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.themes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.themes_id_seq;
       public          postgres    false    217                       0    0    themes_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.themes_id_seq OWNED BY public.themes.id;
          public          postgres    false    216            �            1259    16436    themes_properties    TABLE     �   CREATE TABLE public.themes_properties (
    id integer NOT NULL,
    theme_id integer,
    property_name character varying,
    property_value character varying
);
 %   DROP TABLE public.themes_properties;
       public         heap    postgres    false            �            1259    16435    themes_properties_id_seq    SEQUENCE     �   CREATE SEQUENCE public.themes_properties_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.themes_properties_id_seq;
       public          postgres    false    221                        0    0    themes_properties_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.themes_properties_id_seq OWNED BY public.themes_properties.id;
          public          postgres    false    220            �            1259    16422    topics    TABLE     �   CREATE TABLE public.topics (
    id integer NOT NULL,
    create_date timestamp without time zone,
    name character varying,
    topic_id integer,
    "order" integer,
    priority integer,
    color character varying,
    owner_user_id integer
);
    DROP TABLE public.topics;
       public         heap    postgres    false            �            1259    16421    topics_id_seq    SEQUENCE     �   CREATE SEQUENCE public.topics_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.topics_id_seq;
       public          postgres    false    219            !           0    0    topics_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.topics_id_seq OWNED BY public.topics.id;
          public          postgres    false    218            �            1259    16399    users    TABLE       CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying,
    last_name character varying,
    avatar character varying,
    email character varying,
    password character varying,
    deleted boolean,
    token character varying
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16398    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    215            "           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    214            u           2604    16411 	   themes id    DEFAULT     f   ALTER TABLE ONLY public.themes ALTER COLUMN id SET DEFAULT nextval('public.themes_id_seq'::regclass);
 8   ALTER TABLE public.themes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            w           2604    16439    themes_properties id    DEFAULT     |   ALTER TABLE ONLY public.themes_properties ALTER COLUMN id SET DEFAULT nextval('public.themes_properties_id_seq'::regclass);
 C   ALTER TABLE public.themes_properties ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            v           2604    16425 	   topics id    DEFAULT     f   ALTER TABLE ONLY public.topics ALTER COLUMN id SET DEFAULT nextval('public.topics_id_seq'::regclass);
 8   ALTER TABLE public.topics ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            t           2604    16402    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215                      0    16408    themes 
   TABLE DATA           ]   COPY public.themes (id, create_date, name, description, keywords, owner_user_id) FROM stdin;
    public          postgres    false    217   h'                 0    16436    themes_properties 
   TABLE DATA           X   COPY public.themes_properties (id, theme_id, property_name, property_value) FROM stdin;
    public          postgres    false    221   M(                 0    16422    topics 
   TABLE DATA           j   COPY public.topics (id, create_date, name, topic_id, "order", priority, color, owner_user_id) FROM stdin;
    public          postgres    false    219   �(                 0    16399    users 
   TABLE DATA           ]   COPY public.users (id, name, last_name, avatar, email, password, deleted, token) FROM stdin;
    public          postgres    false    215   �(       #           0    0    themes_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.themes_id_seq', 3, true);
          public          postgres    false    216            $           0    0    themes_properties_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.themes_properties_id_seq', 2, true);
          public          postgres    false    220            %           0    0    topics_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.topics_id_seq', 3, true);
          public          postgres    false    218            &           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 4, true);
          public          postgres    false    214            {           2606    16415    themes themes_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.themes
    ADD CONSTRAINT themes_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.themes DROP CONSTRAINT themes_pkey;
       public            postgres    false    217                       2606    16443 (   themes_properties themes_properties_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.themes_properties
    ADD CONSTRAINT themes_properties_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.themes_properties DROP CONSTRAINT themes_properties_pkey;
       public            postgres    false    221            }           2606    16429    topics topics_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.topics
    ADD CONSTRAINT topics_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.topics DROP CONSTRAINT topics_pkey;
       public            postgres    false    219            y           2606    16406    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    215            �           2606    16416     themes themes_owner_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.themes
    ADD CONSTRAINT themes_owner_user_id_fkey FOREIGN KEY (owner_user_id) REFERENCES public.users(id);
 J   ALTER TABLE ONLY public.themes DROP CONSTRAINT themes_owner_user_id_fkey;
       public          postgres    false    217    3193    215            �           2606    16444 1   themes_properties themes_properties_theme_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.themes_properties
    ADD CONSTRAINT themes_properties_theme_id_fkey FOREIGN KEY (theme_id) REFERENCES public.themes(id);
 [   ALTER TABLE ONLY public.themes_properties DROP CONSTRAINT themes_properties_theme_id_fkey;
       public          postgres    false    217    221    3195            �           2606    16430     topics topics_owner_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.topics
    ADD CONSTRAINT topics_owner_user_id_fkey FOREIGN KEY (owner_user_id) REFERENCES public.users(id);
 J   ALTER TABLE ONLY public.topics DROP CONSTRAINT topics_owner_user_id_fkey;
       public          postgres    false    215    3193    219               �   x�}�1n�@E��S���z!r��6Р���qX�^���H\�#�bY�A4ݟ�O?%k�MR���s��|���/�փ�-iWU�p\�?I#�� /�:	�T�#��;�۪�h��ub2��|i��Ү��8�^�|����8�J��F'E��̇�����.��|L{i�E���щ�p?W��fx���\h{K����g	e�PJ�a�i�         3   x�3�4�(�/H-*�t�/-��MM�,ͅ	q!�g��r����ec���� �d         X   x�3�4202�50�50V00�20 "N��Ң������dNCNs JM�4�2�4t�~���
��@U�@E Ԣ����i����� 5�         +  x�m��r�0F��]d 	vuP�P�j�qHZb�D���t:vѻ��;��3ΰLfeE{ڶ�!tH<��C`�Ͳ������1�p\���5�	U����}���MwA�H
2ʱ����Q�r�tLq�(QS+��>���C���k\Q�,F��!��,���.b��R�om��[Ea���D�(T$���wT�r�k�<�+"B+�!��.��D";�[.w?�Y�p����/��q�+��'��M�+�N�dl��Ȫ��z�� D���.__����bԟסt�z��Y�-��i��E��     